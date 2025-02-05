import { test, expect, request } from "@playwright/test";
import { ApiUtils } from "../utils/api-login";
import {
  urls,
  endPoints,
  loginPayload,
  orderPayLoad,
  fakePayLoadOrders,
} from "../utils/constants";

let response;
test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayLoad);
});

test("When order is placed successfully for the customer", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);
  await page.goto(urls.login);

  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse(endPoints.getAllOrdersForCustomer);
  await page.locator("table").textContent();
  expect(
    page.getByRole("rowheader", { name: `${response.orderId}` })
  ).toBeTruthy();
});

test("When no orders exists for the customer", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);
  await page.goto(urls.login);

  // Communicate to Playwright to intercept the network request
  await page.route(endPoints.getAllOrdersForCustomer, async (route) => {
    const response = await page.request.fetch(route.request());
    let body = JSON.stringify(fakePayLoadOrders);
    route.fulfill({
      response,
      body,
    });
  });

  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse(endPoints.getAllOrdersForCustomer);

  console.log(await page.locator(".mt-4").textContent());
});
