import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        browserName: "chromium",
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "pixel-7",
      use: { ...devices["Pixel 7"], browserName: "chromium" },
    },
    {
      name: "iphone-13",
      use: { ...devices["iPhone 13"], browserName: "chromium" },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 90_000,
  },
});
