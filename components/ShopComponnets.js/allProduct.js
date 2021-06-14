import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Shared/Rating";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/allproducts");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <section id="featured" class="my-5 pb-5">
        <div class="container text-center mt-5  py-5">
          <h3>Our Collection of Products</h3>
          <hr />
          <p>
            Here you can check out new products with fair price on this platform
          </p>
        </div>
        <div class="row mx-auto container-fluid">
          {products.map((product) => {
            return (
              <>
                <div class="product text-center col-lg-3 col-md-4 col-12">
                  <img src={product.image} class="img-fluid mb-3" />
                  <Rating />
                  <h5 class="p-name">{product.name}</h5>
                  <h4 class="p-price">${product.price}</h4>
                  <Link to={`/allproduct/${product._id}`}>
                    <button class="buy-btn">Buy Now</button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </section>
      )
    </>
  );
};

export default AllProduct;
