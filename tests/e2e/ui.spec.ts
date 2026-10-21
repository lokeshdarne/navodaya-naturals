import { test } from "@playwright/test";
import { mkdirSync } from "node:fs";

const OUT = "test-results/screenshots";

test.beforeAll(() => {
  mkdirSync(OUT, { recursive: true });
});

const VIEWS: Array<{ name: string; scroll: number }> = [
  { name: "fold", scroll: 0 },
  { name: "trust", scroll: 700 },
  { name: "collection", scroll: 1400 },
  { name: "philosophy", scroll: 2200 },
  { name: "story", scroll: 3000 },
  { name: "contact", scroll: 4000 },
  { name: "footer", scroll: 99999 },
];

for (const view of VIEWS) {
  test(`screenshot: ${view.name}`, async ({ page }, testInfo) => {
    await page.goto("/");
    await page.evaluate((y) => window.scrollTo(0, y), view.scroll);
    await page.waitForTimeout(700); // settle reveals/parallax
    await page.screenshot({
      path: `${OUT}/${testInfo.project.name}-${view.name}.png`,
      fullPage: false,
    });
  });
}

test("screenshot: full page", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `${OUT}/${testInfo.project.name}-full.png`,
    fullPage: true,
  });
});
