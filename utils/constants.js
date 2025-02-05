export const urls = {
  login: "https://rahulshettyacademy.com/client",
};

export const endPoints = {
  login: "https://rahulshettyacademy.com/api/ecom/auth/login",
  getAllOrdersForCustomer:
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
  createOrder: "https://rahulshettyacademy.com/api/ecom/order/create-order",
  getSingleOrderDetails:
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
  getInvalidOrderDetails:
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6",
};

export const loginPayload = {
  userEmail: "mvchandru.nl@gmail.com",
  userPassword: "Test@2025",
};

export const orderPayLoad = {
  orders: [{ country: "India", productOrderedId: "676a631fe2b5443b1f004a20" }],
};

export const fakePayLoadOrders = { data: [], message: "No Orders" };
