import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/featuredActions";
import { addWatchToCart, removeWatchFromCart } from "../actions/watchAction";
import { addShoesToCart, removeShoesFromCart } from "../actions/shoesAction";
import { addAllShoesToCart, removeAllShoesFromCart } from "../actions/sAction";
import {
  addAllProductToCart,
  removeAllProductFromCart,
} from "../actions/allProductAction";
import {
  addTshirtToCart,
  removeTshirtFromCart,
} from "../actions/tshirtActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addAllShoesToCart(productId, qty));
      dispatch(addToCart(productId, qty));
      dispatch(addTshirtToCart(productId, qty));
      dispatch(addWatchToCart(productId, qty));
      dispatch(addShoesToCart(productId, qty));
      dispatch(addAllProductToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    dispatch(removeTshirtFromCart(id));
    dispatch(removeWatchFromCart(id));
    dispatch(removeShoesFromCart(id));
    dispatch(removeAllProductFromCart(id));
    dispatch(removeAllShoesFromCart(id));
  };
  const checkout = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      <>
        <Container>
          <div className="row mt-5">
            <h3
              className="text-center pt-5 pb-5  "
              style={{ fontFamily: "cursive", fontWeight: "lighter" }}
            >
              Shopping Cart
            </h3>
            <div className="col-8">
              {cartItems.length === 0 ? (
                <h6>
                  Your Cart is Empty !<Link to="/">Go Back</Link>
                </h6>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroupItem>
                      <div className="row">
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <div className="col-md-3">
                          <h4 style={{ fontFamily: "sans-serif" }}>
                            {item.name}
                          </h4>
                        </div>
                        <div className="col-md-2">${item.price}</div>
                        <div className="col-md-2">Qty &nbsp; {item.qty}</div>
                        <div className="col-md-2">
                          <Button
                            className="btn-block"
                            type="button"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <i
                              className="fa fa-trash text-danger"
                              aria-hidden="true"
                            ></i>
                          </Button>
                        </div>
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </div>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <h2>
                      Subtotal (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      items
                    </h2>
                  </ListGroupItem>{" "}
                  <ListGroupItem>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </ListGroupItem>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cartItems.length === 0}
                    onClick={checkout}
                  >
                    Proceed to Checkout
                  </Button>
                </ListGroup>
              </Card>
            </Col>
          </div>
        </Container>
      </>
    </>
  );
};

export default CartScreen;
