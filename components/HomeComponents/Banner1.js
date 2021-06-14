import React from "react";
import { Link } from "react-router-dom";

const Banner1 = () => {
  return (
    <>
      <section id="home">
        <div class="container ">
          <h5>NEW ARRIVALS</h5>
          <h1>
            <span>Best Price</span> This Year
          </h1>
          <p>
            Shoomatic offers your very comfortable time
            <br /> on walking and excercise
          </p>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Banner1;
