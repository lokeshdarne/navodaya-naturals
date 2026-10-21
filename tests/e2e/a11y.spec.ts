import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const IMPACTS = ["critical", "serious"] as const;

// Reduced-motion renders Reveal components in their final visible state,
// avoiding transient mid-animation opacity that can trip contrast checks.
test.use({ reducedMotion: "reduce" });

test.beforeEach(async ({ page }) => {
  await page.waitForLoadState("networkidle");
});

for (const hash of ["#collection", "#philosophy", "#story", "#contact"]) {
  test(`has no ${IMPACTS.join("/")} axe violations at ${hash}`, async ({ page }) => {
    await page.goto(`/${hash}`);
    const results = await new AxeBuilder({ page }).analyze();
    const violations = results.violations.filter((v) =>
      IMPACTS.includes(v.impact as (typeof IMPACTS)[number]),
    );
    expect(
      violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length })),
    ).toEqual([]);
  });
}

test("no serious/critical axe violations with mobile menu open", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "mobile-only state");
  await page.goto("/");
  await page.getByLabel("Open menu").click();
  await expect(page.locator("[data-slot=sheet-content]")).toBeVisible();
  const results = await new AxeBuilder({ page })
    .include("[data-slot=sheet-content]")
    .analyze();
  const violations = results.violations.filter((v) =>
    IMPACTS.includes(v.impact as (typeof IMPACTS)[number]),
  );
  expect(
    violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length })),
  ).toEqual([]);
});
