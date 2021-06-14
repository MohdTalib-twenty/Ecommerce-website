import {
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESSS,
} from "../constants/cartConstants";

export const saveShipppingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESSS });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
