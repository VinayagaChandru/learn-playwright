import { endPoints } from "./constants";

export class ApiUtils {
  constructor(apiContext, loginPayLoad) {
    this.apiContext = apiContext;
    this.loginPayLoad = loginPayLoad;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post(endPoints.login, {
      data: this.loginPayLoad,
    });

    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    // console.log(token);
    return token;
  }

  async createOrder(orderPayLoad) {
    let response = {};
    response.token = await this.getToken();
    const orderResponse = await this.apiContext.post(endPoints.createOrder, {
      data: orderPayLoad,
      headers: {
        Authorization: response.token,
        "Content-Type": "application/json",
      },
    });

    const orderResponseJson = await orderResponse.json();
    // console.log(orderResponseJson);
    const orderId = orderResponseJson.orders[0];
    response.orderId = orderId;
    return response;
  }
}
