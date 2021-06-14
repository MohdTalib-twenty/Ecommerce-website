import React from "react";

const AbouUs = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <img
            src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1166&q=80"
            className="img-fluid"
          ></img>
          <p className="mt-5" style={{ fontSize: "2rem" }}>
            EFAM's.com is a ecommerce and accessory company, and their About Us
            page goes above and beyond. Not only do they have the standard
            company history, but they also include the history of the EFAM's.com
            soldiers they're named after, a detailed dissection of their logo
            and in-depth information about their manufacturing. Of course, not
            every store calls for such a robust About Us, but since this
            company's inspiration is steeped in Himalayan history, this is an
            instance where it works very well.
          </p>
        </div>
      </div>
    </>
  );
};

export default AbouUs;
