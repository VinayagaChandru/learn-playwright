import { test, expect } from "@playwright/test";
import { urls, endPoints, loginPayload } from "../utils/constants";

test("When try to access unauthorized content", async ({ page }) => {
  //login and reach orders page
  await page.goto(urls.login);
  await page.locator("#userEmail").fill(loginPayload.userEmail);
  await page.locator("#userPassword").fill(loginPayload.userPassword);
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();

  await page.locator("button[routerlink*='myorders']").click();

  // Communicate to Playwright to intercept the network request
  await page.route(endPoints.getSingleOrderDetails, (route) =>
    route.continue({
      url: endPoints.getInvalidOrderDetails,
    })
  );
  await page.locator("button:has-text('View')").first().click();
  // await page.pause();
  await expect(page.locator("p").last()).toHaveText(
    "You are not authorize to view this order"
  );
});
