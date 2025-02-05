import { test, expect } from "@playwright/test";

// Using the browser fixture & page fixture

test("has title using browser fixture", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("has title using page fixture @smoke", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fast and reliable end-to-end testing/);
});
