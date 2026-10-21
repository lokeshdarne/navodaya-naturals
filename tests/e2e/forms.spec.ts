import { expect, test, type Page } from "@playwright/test";

async function captureWhatsAppClicks(page: Page): Promise<string[]> {
  const urls: string[] = [];
  await page.context().route(
    (url) => url.hostname === "wa.me" || url.hostname.endsWith("whatsapp.com"),
    async (route) => {
      urls.push(route.request().url());
      await route.fulfill({ status: 204, body: "" });
    },
  );
  return urls;
}

test.describe("notify form", () => {
  test("shows an error toast for an invalid email", async ({ page }) => {
    await page.goto("/");
    await page.locator("#notify").scrollIntoViewIfNeeded();
    await page.fill("#notify-email", "not-an-email");
    await page.getByRole("button", { name: "Notify Me", exact: true }).click();
    await expect(page.locator("[data-sonner-toast]").first()).toBeVisible();
  });

  test("accepts a valid email and updates the status without leaving the page", async ({
    page,
  }) => {
    const waUrls = await captureWhatsAppClicks(page);
    await page.goto("/");
    await page.locator("#notify").scrollIntoViewIfNeeded();
    await page.fill("#notify-email", "launch-list@example.com");
    await page.getByRole("button", { name: "Notify Me", exact: true }).click();

    await expect(page.locator("#notify-status")).toContainText(
      "We'll reach out on WhatsApp to confirm",
    );
    await expect(page).toHaveURL(/localhost:3000/);
    await expect.poll(() => waUrls.length).toBeGreaterThan(0);
    expect(waUrls[0]).toContain("wa.me/918265098123");
    expect(decodeURIComponent(waUrls[0])).toContain("launch-list@example.com");
  });
});

test.describe("contact form", () => {
  test("validates required fields on empty submit", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Send via WhatsApp" }).click();
    await expect(page.locator("#contact [role=alert]")).toHaveCount(2);
    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter a message.")).toBeVisible();
  });

  test("opens WhatsApp with the composed message", async ({ page }) => {
    const waUrls = await captureWhatsAppClicks(page);
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.fill("#contact-name", "Asha Farmer");
    await page.fill("#contact-phone", "+91 98765 43210");
    await page.fill("#contact-message", "Interested in a wholesale order.");
    await page.getByRole("button", { name: "Send via WhatsApp" }).click();

    await expect(page.locator("#contact [aria-live=polite]").first()).toContainText(
      "Opening WhatsApp",
    );
    await expect.poll(() => waUrls.length).toBeGreaterThan(0);
    const decoded = decodeURIComponent(waUrls[0]);
    expect(decoded).toContain("wa.me/918265098123");
    expect(decoded).toContain("Asha Farmer");
    expect(decoded).toContain("Interested in a wholesale order.");
    await expect(page).toHaveURL(/localhost:3000/);
  });

  test("rejects a malformed phone number", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.fill("#contact-name", "Test");
    await page.fill("#contact-phone", "12");
    await page.fill("#contact-message", "Hello");
    await page.getByRole("button", { name: "Send via WhatsApp" }).click();
    await expect(page.getByText("Please enter a valid phone number.")).toBeVisible();
  });
});
