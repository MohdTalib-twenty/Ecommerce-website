import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <Nav className="justify-content-center mb-4">
        <Nav.Item>
          {step1 ? (
            <Link to="/login">
              <a className="px-5 py-5">SignIn</a>
            </Link>
          ) : (
            <a className="px-5 py-5" disabled>
              SignIn
            </a>
          )}
        </Nav.Item>
        <Nav.Item>
          {step2 ? (
            <Link to="/shipping">
              <a className="px-5 py-5">Shipping</a>
            </Link>
          ) : (
            <a className="px-5 py-5" disabled>
              Shipping
            </a>
          )}
        </Nav.Item>
        <Nav.Item>
          {step3 ? (
            <Link to="/payment">
              <a className="px-5 py-5">Payment</a>
            </Link>
          ) : (
            <a className="px-5 py-5" disabled>
              Payment
            </a>
          )}
        </Nav.Item>
        <Nav.Item>
          {step4 ? (
            <Link to="/placeorder">
              <a className="px-5 py-5">Place Order</a>
            </Link>
          ) : (
            <a className="px-5 py-5" disabled>
              Place Order
            </a>
          )}
        </Nav.Item>
      </Nav>
    </>
  );
};

export default CheckoutStep;
