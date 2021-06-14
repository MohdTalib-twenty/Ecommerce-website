import React from "react";
import { Link } from "react-router-dom";

const HighlightSection = () => {
  return (
    <>
      {/* <section id="new" class="">
        <div className="row display-flex flex-row main">
          <div className=" one col-lg-4 col-md-12 col-12">
            <div className="detail">
              <h2>Extreme Rare Sneakers</h2>
              <Link to="/shop">
                <button className=" buy-btn">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className=" two col-lg-4 col-md-12 col-12">
            <div className="detail">
              <h2>Awesome Outfit Tshirts</h2>
              <Link to="/shop">
                <button className="buy-btn">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className=" three col-lg-4 col-md-12 col-12">
            <div className="detail">
              <h2>Collection of Watches</h2>
              <Link to="/shop">
                <button className="buy-btn">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section id="new">
        <div className="row d-flex flex-row">
          <div className="one col-lg-4 col-md-12 col-12">
            <div className="detail">
              <h2>Extreme Rare Sneakers</h2>
              <Link to="/shop">
                <button className=" buy-btn">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="two col-lg-4 col-md-12 col-12">
            <div className="detail">
              <h2>Awesome Outfit Tshirts</h2>
              <Link to="/shop">
                <button className="buy-btn">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="three col-lg-4 col-md-12 col-12">
            <div className="detail">
              <h2>Collection of Watches</h2>
              <Link to="/shop">
                <button className="buy-btn">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighlightSection;
