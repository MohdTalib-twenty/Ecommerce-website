import { history } from "react-router-dom";
import React, { useState, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { listProductDetails } from "../actions/productActions";
//import products from "../product";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Rating from "../Shared/Rating";

const ProductDetails = ({ history, match }) => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/allshoes/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${count}`);
  };
  const increaseValue = () => {
    if (count < product.countInStock) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  };
  const decreaseValue = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5">Product Details</h2>
        <div className="row ">
          <div className="col-lg-4 col-md-5 col-6 mt-5 pt-lg-5">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-1 col-1"></div>
          <div className="col-lg-6 col-md-6 col-5 mt-5 pt-5 ">
            <div className="row display-flex flex-column ml-5 pl-5">
              <div className="col-lg-12 col-md-12 col-12 ">
                <h2>{product.name}</h2>
              </div>
              <div className="col-lg-12 col-md-12 col-12 pt-2">
                <h3 className="text-danger">${product.price}</h3>
              </div>
              <div className="col-lg-12 col-md-12 col-12 pt-2">
                <p className="">${product.description}</p>
              </div>
              <hr className="text-dark " />
              <div
                className="col-lg-12 col-md-12 col-12 pt-2"
                style={{ borderLeft: "2px solid red" }}
              >
                <h5>Free Shipping</h5>
                <p>to India via China Registered Air Mail</p>
                <p>Estimated Delivery: 27-40 days</p>
              </div>
              <div className="col-lg-12 col-md-12 col-12 pt-2">
                <Rating
                  value={product.rating}
                  text={`${product.numReview} Reviews`}
                />
              </div>
              <div className="col-lg-12 col-md-12 col-12 pt-2">
                <p>
                  Status :{" "}
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <div className="col-lg-12 col-md-12 col-12 pt-2">
                <div className="row display-flex flex-row">
                  <div className="col-lg-2">
                    <a
                      className="btn text-center backgroundColor-grey"
                      style={{
                        width: "0.0001px",
                        height: "0.1px",
                        marginRight: "10px",
                        borderRadius: "20px",
                        marginTop: "-20px",
                      }}
                      onClick={decreaseValue}
                    >
                      <i
                        class="fas fa-minus"
                        style={{ paddingBottom: "50px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="col-lg-1" style={{ paddingLeft: "-50px" }}>
                    <input
                      type="number"
                      value={count}
                      style={{ width: "60px", marginLeft: "-50px" }}
                    />
                  </div>
                  <div className="col-lg-2">
                    <a
                      className="btn"
                      style={{
                        width: "0.0001px",
                        height: "0.1px",

                        borderRadius: "5px",
                        marginLeft: "-40px",
                        marginTop: "-20px",
                      }}
                      onClick={increaseValue}
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                  <div
                    className="col-lg-4 "
                    style={{ paddingLeft: "-20px", paddingTop: "-20px" }}
                  >
                    <button onClick={addToCartHandler}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
