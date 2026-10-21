import { expect, test } from "@playwright/test";

test.describe("mobile menu", () => {
  test.beforeEach(async ({}, testInfo) => {
    test.skip(testInfo.project.name === "desktop", "mobile-only interaction");
  });

  test("opens via the burger button and closes via the close button", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Open menu").click();
    const sheet = page.locator("[data-slot=sheet-content]");
    await expect(sheet).toBeVisible();
    await expect(sheet.getByRole("link", { name: "Our Story" })).toBeVisible();

    // the sheet's own close button (not the navbar trigger, which sits behind the drawer)
    await sheet.getByRole("button", { name: "Close", exact: true }).click();
    await expect(sheet).toBeHidden();
  });

  test("choosing a link closes the menu", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Open menu").click();
    const sheet = page.locator("[data-slot=sheet-content]");
    await sheet.getByRole("link", { name: "Contact" }).click();
    await expect(sheet).toBeHidden();
    await expect(page).toHaveURL(/#contact$/);
  });
});
