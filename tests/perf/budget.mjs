// Asset-size performance budgets. Run against a production server:
//   npm run build && npm run start &   (in another terminal)
//   npm run perf

const BASE = process.env.PERF_URL ?? "http://localhost:3000";

const budgets = [];

function check(name, actual, max, unit = "KB") {
  const limitKB = unit === "KB" ? max : max / 1024;
  const kb = actual / 1024;
  const ok = kb <= limitKB;
  budgets.push({ name, kb, limitKB, ok });
  return ok;
}

async function fetchSize(path, headers = {}) {
  const res = await fetch(`${BASE}${path}`, { headers, redirect: "follow" });
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return { size: buf.length, type: res.headers.get("content-type") ?? "" };
}

function extractScriptSrcs(html) {
  const srcs = [];
  const re = /<script[^>]+src="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) srcs.push(m[1]);
  return [...new Set(srcs)];
}

async function main() {
  // HTML shell
  const htmlRes = await fetchSize("/");
  check("HTML document", htmlRes.size, 120);

  if (htmlRes.type.includes("text/html")) {
    // no external font hosts — must be self-hosted
    const htmlText = await (await fetch(`${BASE}/`)).text();
    if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(htmlText)) {
      budgets.push({ name: "self-hosted fonts", ok: false, note: "external font host found" });
    } else {
      budgets.push({ name: "self-hosted fonts", ok: true, note: "no external font host" });
    }
  }

  // Optimized hero image via next/image (AVIF preferred)
  const hero = await fetchSize(
    "/_next/image?url=%2Fimages%2Fhero-banner.jpg&w=1920&q=75",
    { Accept: "image/avif,image/webp,*/*" },
  );
  check("hero image (next/image, w=1920 q=75)", hero.size, 250);

  // Product card image (smaller width)
  const product = await fetchSize(
    "/_next/image?url=%2Fimages%2Fproducts%2Fchia.png&w=640&q=70",
    { Accept: "image/avif,image/webp,*/*" },
  );
  check("product image (next/image, w=640 q=70)", product.size, 100);

  // Noise texture (must stay tiny)
  const noise = await fetchSize("/noise.png");
  check("noise grain texture", noise.size, 20);

  // Sum of first-party JS on the homepage
  const html = await (await fetch(`${BASE}/`)).text();
  const srcs = extractScriptSrcs(html);
  let jsTotal = 0;
  for (const src of srcs) {
    const { size } = await fetchSize(src);
    jsTotal += size;
  }
  check(`homepage JS (${srcs.length} scripts)`, jsTotal, 350);

  // Report
  console.log(`\nPerformance budgets vs ${BASE}\n`);
  let failed = false;
  for (const b of budgets) {
    if (b.note) {
      console.log(`${b.ok ? "PASS" : "FAIL"}  ${b.name}  ${b.note}`);
      if (!b.ok) failed = true;
      continue;
    }
    console.log(
      `${b.ok ? "PASS" : "FAIL"}  ${b.name}  ${b.kb.toFixed(1)} KB (budget ${b.limitKB} KB)`,
    );
    if (!b.ok) failed = true;
  }
  console.log(failed ? "\n❌ Budgets exceeded.\n" : "\n✅ All budgets met.\n");
  process.exit(failed ? 1 : 0);
}

main().catch((err) => {
  console.error(`\nCould not reach ${BASE}. Start the prod server first:\n  npm run build && npm run start\n\n`, err);
  process.exit(1);
});
