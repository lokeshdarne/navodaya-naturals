import { expect, test } from "@playwright/test";

test.describe("navbar scroll behavior", () => {
  test("is visible at the top of the page", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#navbar")).toHaveAttribute("data-hidden", "false");
  });

  test("hides on scroll down and reveals on scroll up (all viewports)", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#navbar")).toHaveAttribute("data-hidden", "false");

    await page.mouse.wheel(0, 800);
    await expect(page.locator("#navbar")).toHaveAttribute("data-hidden", "true");

    await page.mouse.wheel(0, -600);
    await expect(page.locator("#navbar")).toHaveAttribute("data-hidden", "false");
  });

  test("stays visible when scrolling within the first 140px", async ({ page }) => {
    await page.goto("/");
    await page.mouse.wheel(0, 100);
    await expect(page.locator("#navbar")).toHaveAttribute("data-hidden", "false");
  });

  test("nav links navigate to page sections", async ({ page }, testInfo) => {
    await page.goto("/");
    if (testInfo.project.name === "desktop") {
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Collection" }).click();
    } else {
      await page.getByLabel("Open menu").click();
      await page.locator("[data-slot=sheet-content]").getByRole("link", { name: "Collection" }).click();
    }
    await expect(page).toHaveURL(/#collection$/);
    // smooth-scroll is animated; wait until the section reaches the top region
    await expect
      .poll(async () => (await page.locator("#collection").boundingBox())?.y ?? Infinity)
      .toBeLessThan(200);
  });
});
