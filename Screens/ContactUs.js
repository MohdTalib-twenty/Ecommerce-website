import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="contact">
        <div className="container ">
          <div className="row " style={{ width: "100vh", height: "80vh" }}>
            <div className="col-5 mx-auto my-auto">
              <div
                className="card shadow mt-5"
                style={{ width: "50vh", height: "60vh" }}
              >
                <h2 className="text-center mt-5">Hello</h2>
                <h4 className="text-center mx-4">
                  Sign in to EFAM"S.com or{" "}
                  <Link to="/register">
                    <span>create an account</span>
                  </Link>{" "}
                </h4>
                <hr className="text-center "></hr>
                <div className="text-center">
                  <form className="mx-5 ">
                    <label className="pop">Email or username</label>
                    <input
                      type="text"
                      className="mx-2"
                      style={{
                        borderWidth: "0px",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "2px solid black",
                        outline: "none",
                        width: "300px",
                      }}
                    ></input>
                  </form>
                  <button
                    className="w-50 text-center mt-3 mx-5 bt "
                    style={{ backgroundColor: "blue" }}
                  >
                    Continue
                  </button>
                  <div className="text-center">
                    <h5 className="main mx-auto mt-4"></h5>
                    <strong className="text-center color-dark">OR</strong>
                  </div>
                  <button
                    className="w-50 text-center mt-3 mx-5 bt2"
                    style={{ fontSize: "4rem" }}
                  >
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                      style={{ width: "40px" }}
                      className="px-2 mr-3"
                    />{" "}
                    Continue with Facebook
                  </button>
                  <button
                    className="w-50 text-center mt-3 mx-5 bt3"
                    style={{ fontSize: "4rem" }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                      style={{ width: "40px" }}
                      className="px-2 mr-3"
                    />{" "}
                    Continue with Google
                  </button>
                  <button
                    className="w-50 text-center mt-3 mx-5 bt3"
                    style={{ fontSize: "4rem" }}
                  >
                    <img
                      src="data:image/png;base64,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"
                      style={{ width: "40px" }}
                      className="px-2 mr-3"
                    />{" "}
                    Continue with Apple
                  </button>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 mt-5">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Stay signed in
                        </label>
                      </div>
                    </div>
                    <div className="col-4 "></div>
                  </div>
                  <div className="text-center mt-2">
                    <h5>Using a public or shared device ?</h5>
                    <h5>uncheck to protect your device</h5>
                    <Link className="text-center">Learn more</Link>
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

export default ContactUs;
