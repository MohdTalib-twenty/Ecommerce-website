import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Rating from "../Shared/Rating";

const WatchProduct = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/alltshirt");
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
      <section id="featured" class="my-5 pb-5">
        <div class="container text-center mt-5  py-5">
          <h3>Our Collection of Tshirts</h3>
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
                  <Link to={`/allt/${product._id}`}>
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

export default WatchProduct;
