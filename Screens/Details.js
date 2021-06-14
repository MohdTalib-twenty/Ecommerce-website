import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import CheckoutStep from "../components/Shared/CheckoutStep";
import { useDispatch, useSelector } from "react-redux";
import { saveShipppingAddress } from "../actions/CARTaction";

const Details = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [country, setCountry] = useState("");

  const PostData = (e) => {
    e.preventDefault();
    dispatch(saveShipppingAddress({ address, city, postalcode, country }));
    history.push("/payment");
  };
  return (
    <>
      <CheckoutStep step1 step2 />
      <div className="container">
        <h2 className="text-center mt-5">Shipping Details</h2>
        <h2 className="text-center py-3">
          <i className="fas fa-home " style={{ fontSize: "2rem" }}></i>
        </h2>
        <div className="card">
          <div className="row ">
            <div className="col-7">
              <div className="d-flex flex-row">
                <i
                  className="fas fa-h-square my-3 mx-2"
                  style={{ fontSize: "2rem" }}
                ></i>
                <input
                  type="text"
                  placeholder="Address"
                  className="my-3 mx-2 w-50 "
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
              <div className="d-flex flex-row">
                <i
                  className="fas fa-city my-3 mx-2"
                  style={{ fontSize: "2rem" }}
                ></i>
                <input
                  type="text"
                  placeholder="City"
                  className="my-3 mx-2  w-50"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>
              <div className="d-flex flex-row">
                <i
                  className="fab fa-centercode mx-2 my-3"
                  style={{ fontSize: "2rem" }}
                ></i>
                <input
                  type="number"
                  placeholder="Postal Code"
                  className="my-3 mx-2 w-50"
                  value={postalcode}
                  onChange={(e) => setPostalcode(e.target.value)}
                ></input>
              </div>
              <div className="d-flex flex-row">
                <i
                  className="fas fa-flag mx-2 my-3"
                  style={{ fontSize: "2rem" }}
                ></i>
                <input
                  type="text"
                  placeholder="Country"
                  className="my-3 mx-2 w-50"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="col-5 my-auto mx-auto">
              <i
                class="fas fa-map-marked-alt "
                style={{ fontSize: "5rem" }}
              ></i>
            </div>
          </div>
          <div className="pt-3 text-center my-2">
            <button onClick={PostData}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
