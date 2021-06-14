import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Shared/Message";
import { listMyOrders } from "../actions/orderAction";
import { ORDER_CREATE_REQUEST } from "../constants/orderConstants";
import { Table } from "react-bootstrap";

const MyOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, orders, error: errorOrders } = orderListMy;
  console.log(orders);
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(listMyOrders());
      } else {
      }
    }
  }, [history, userInfo, user, dispatch]);
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center mt-5">My ORDER LIST</h2>
          <div className="col-9">
            {loadingOrders ? (
              <h4>Loading...</h4>
            ) : errorOrders ? (
              <Message variant="danger">{errorOrders}</Message>
            ) : (
              <Table striped bordered hover responsive className="table-sm">
                <thead>
                  <tr>
                    <td className="text-uppercase">ID</td>
                    <td className="text-uppercase">Date</td>
                    <td className="text-uppercase">Total</td>
                    <td className="text-uppercase">Paid</td>
                    <td className="text-uppercase">Deliverd</td>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    return (
                      <>
                        <tr key={order._id}>
                          <td>{order._id}</td>
                          <td>{order.createdAt.substring(0, 10)}</td>
                          <td>{order.totalPrice}</td>
                          <td>{order.isPaid}</td>
                          <td>{order.isDelevired}</td>
                          <td>
                            <Link to={`/order/${order._id}`}>
                              <button>Details</button>
                            </Link>
                          </td>
                        </tr>
                        ;
                      </>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
