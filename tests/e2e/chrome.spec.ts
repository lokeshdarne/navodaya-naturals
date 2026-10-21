import { expect, test } from "@playwright/test";

const widthPct = (page: import("@playwright/test").Page) =>
  page.getByTestId("scroll-progress").evaluate((el) => parseFloat((el as HTMLElement).style.width || "0"));

test.describe("scroll progress bar", () => {
  test("width grows with scroll position", async ({ page }) => {
    await page.goto("/");
    await expect.poll(() => widthPct(page)).toBe(0);
    await page.mouse.wheel(0, 2000);
    await expect.poll(() => widthPct(page)).toBeGreaterThan(10);
  });
});

test.describe("back to top", () => {
  test("appears after scrolling and returns to the top on click", async ({ page }) => {
    await page.goto("/");
    const btn = page.getByRole("button", { name: "Back to top" });
    await expect(btn).toHaveCSS("opacity", "0");

    await page.mouse.wheel(0, 900);
    await expect(btn).toHaveCSS("opacity", "1");

    await btn.click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
  });
});

test.describe("sticky mobile CTA", () => {
  test("fades in past the hero on small viewports only", async ({ page }, testInfo) => {
    await page.goto("/");
    const cta = page.getByTestId("sticky-cta");
    await expect(cta).toHaveCSS("opacity", "0");

    await page.mouse.wheel(0, 2000);
    if (testInfo.project.name === "desktop") {
      await expect(cta).toHaveCSS("opacity", "0");
    } else {
      await expect(cta).toHaveCSS("opacity", "1");
      await expect(cta.getByRole("link", { name: /Notify Me at Launch/i })).toBeVisible();
    }
  });
});
