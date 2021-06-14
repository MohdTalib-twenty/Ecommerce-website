import React, { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { getOrderDetails } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import CheckoutStep from "../components/Shared/CheckoutStep";
import Message from "../components/Shared/Message";
import { Link, useHistory } from "react-router-dom";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  if (!loading) {
    const addDecimal = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimal(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }
  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);
  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h2>Order{order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Shipping</h2>
            <p>
              <strong>UserName : {order.user.name}</strong>
              <br />
              <strong>Email : {order.user.email}</strong>
            </p>
            <p>
              <strong>Address :</strong>
              {order.shippingAddress.address} &nbsp;
              {order.shippingAddress.city} &nbsp;
              {order.shippingAddress.postalcode} &nbsp;
              {order.shippingAddress.country} &nbsp;
            </p>
            {order.isDelevired ? (
              <Message variant="success">Deliverd</Message>
            ) : (
              <Message variant="danger">Not Deliverd</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>{order.paymentMethod}</strong>
              {console.log(order)}
            </p>
            {order.isPaid ? (
              <Message variant="success">Paid On</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <h6>CArt is Empty</h6>
            ) : (
              <ListGroup varient="flush">
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid />
                      </Col>
                      <Col>
                        <Link to="">{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} X ${item.price} = ${item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
