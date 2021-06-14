import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../../actions/userAction";

const Header = () => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  const myorderHandler = () => {
    history.push("/myorders");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
        <div className="container">
          <a className="navbar-brand" href="/" style={{ fontWeight: "bold" }}>
            <i class="zmdi zmdi-shopping-cart" /> &nbsp; EFAM'S.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav " style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <Link to="/">
                  <a
                    className="nav-link "
                    style={{ listStyle: "none", textDecoration: "none" }}
                  >
                    <i class="zmdi zmdi-home"></i>Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop">
                  <a className="nav-link">
                    <i class="zmdi zmdi-shopping-basket"></i>Shop
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">
                  <a className="nav-link">
                    <i class="zmdi zmdi-navigation"></i>Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link">
                    <i class="zmdi zmdi-face"></i>About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <a className="nav-link">
                    <i class="zmdi zmdi-account-box-mail"></i>Contact
                  </a>
                </Link>
              </li>

              <Link to="/cart/:id" className="text-black">
                <i
                  className="fas fa-shopping-cart  "
                  style={{ color: "black", padding: "0 20px" }}
                ></i>{" "}
                <span
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "black",
                    textTransform: "uppercase",
                  }}
                >
                  Cart
                </span>
                &nbsp;
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>

                  <NavDropdown.Item onClick={myorderHandler}>
                    My Orders
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <i
                    class="zmdi zmdi-accounts"
                    style={{ color: "black", padding: "0 20px" }}
                  ></i>{" "}
                  <span
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                      color: "black",
                      textTransform: "uppercase",
                    }}
                  >
                    SignIn
                  </span>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
