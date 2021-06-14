import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import image from "../images/user-139.png";

const Login = ({ location }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const PostData = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="form ">
        <div className="Container  ">
          <h3
            className="text-center pt-5 text-white"
            style={{ fontFamily: "sans-serif", fontWeight: "light" }}
          >
            User Log In
          </h3>

          <h2 className="text-center text-white">
            {" "}
            <i class="fas fa-user-circle" style={{ fontSize: "4rem" }}></i>
          </h2>

          <div
            class="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{
              width: "60rem",
              height: "30rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="row">
              <div className="col-md-1 col-lg-1"></div>
              <div className="col-md-4 col-lg-4  pt-5">
                <h3 style={{ fontFamily: "revert" }}> Sign in</h3>

                <div className="row mt-4 display-flex flex-row">
                  <div>
                    <i class="zmdi zmdi-account" style={{ fontSize: "2rem" }} />
                    <div className="pl-1">
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "450px" }}
                      />
                    </div>
                  </div>
                  <div className="pt-3">
                    <i class="zmdi zmdi-lock" style={{ fontSize: "2rem" }} />
                    <div className="pl-1">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "450px" }}
                      />
                    </div>
                  </div>
                  <div className="pt-3">
                    <button onClick={PostData}>Log In</button>
                  </div>
                  <div className="pt-3">
                    <h5>
                      Don't have an account ?{" "}
                      <Link to="/register">"Register Now"</Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2"></div>
              <div className="col-lg-4 col-md-4 pt-5 ">
                <img
                  src={image}
                  alt="images"
                  className="img-fluid"
                  style={{ width: "300px" }}
                  className="ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
