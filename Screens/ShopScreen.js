import React, { useState, useEffect } from "react";
import axios from "axios";
import AllProduct from "../components/ShopComponnets.js/allProduct";
import { useHistory } from "react-router";

const ShopScreen = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const searchProduct = () => {
    history.push(`/all${search}`);
    console.log("clicked");
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3  col-md-6 col-12 ">
            <form className="d-flex pt-5">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={searchProduct}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <AllProduct />
    </>
  );
};

export default ShopScreen;
