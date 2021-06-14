import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/CARTaction";
import CheckoutStep from "../components/Shared/CheckoutStep";

const Payment = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    // history.push("/shipping");
  }
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const submitHandler = (e) => {
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <CheckoutStep step1 step2 step3 />
      <h1 className="text-center mt-5">Payment Method</h1>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 my-5 px-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                PayPAl or Credit
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="strip"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Strip
              </label>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="text-center">
            <button onClick={submitHandler}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
