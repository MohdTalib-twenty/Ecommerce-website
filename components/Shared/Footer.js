import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 py-5">
        <div className="row container mx-auto p-5">
          <div className="footer-one col-lg-3 col-md-6 col-12  ">
            <h2>
              <i class="zmdi zmdi-shopping-cart"></i>EFAM'S.com
            </h2>
            <p>
              Material Design Iconic Font is a full suite of official material
              design icons (created and maintained by Google), with additional
              community-designed icons and brands icons for easy scalable vector
              graphics on websites or desktop.
            </p>
          </div>
          <div className="footer-one col-lg-3 col-md-6 col-12">
            <h5 className="pb-2">Featured</h5>
            <ul className="text-uppercase list-unstyled">
              <li>
                <a href="#">men</a>
              </li>
              <li>
                <a href="#">women</a>
              </li>
              <li>
                <a href="#">boys</a>
              </li>
              <li>
                <a href="#">girls</a>
              </li>
              <li>
                <a href="#">new arrival</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">clothes</a>
              </li>
            </ul>
          </div>
          <div className="footer-one col-lg-3 col-md-6 col-12">
            <h5 className="pb-2">Contatct Us</h5>
            <div>
              <h6 className="text-uppercase">Addresss</h6>
              <p>123 STREET NAME, CITY, INDIA</p>
            </div>
            <div>
              <h6 className="text-uppercase">Phone</h6>
              <p>+91 1234567890</p>
            </div>
            <div>
              <h6 className="text-uppercase">Email</h6>
              <p>MAIL@EXAMPLE.COM</p>
            </div>
          </div>
          <div className="footer-one col-lg-3 col-md-6 col-12">
            <h5 className="pb-2">iNSTAGRAM</h5>
            <div className="row">
              <img
                className="img-fluid w-25 h-100 m-2"
                src="https://images.unsplash.com/photo-1622697839966-bb238ae2d2bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80"
              />
              <img
                className="img-fluid w-25 h-100 m-2"
                src="https://images.unsplash.com/photo-1622697839966-bb238ae2d2bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80"
              />
              <img
                className="img-fluid w-25 h-100 m-2"
                src="https://images.unsplash.com/photo-1622697839966-bb238ae2d2bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80"
              />
              <img
                className="img-fluid w-25 h-100 m-2"
                src="https://images.unsplash.com/photo-1622697839966-bb238ae2d2bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80"
              />
              <img
                className="img-fluid w-25 h-100 m-2"
                src="https://images.unsplash.com/photo-1622697839966-bb238ae2d2bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80"
              />
            </div>
          </div>
        </div>
        <div className="copyright mt-5">
          <div className="row container mx-auto">
            <div className="col-lg-3 col-md-6 col-12">
              <img
                src="https://banner2.cleanpng.com/20180324/fre/kisspng-credit-card-payment-card-debit-card-mastercard-5ab6febe1797c5.4944106115219422060966.jpg"
                className="img-fluid w-75 h-100"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-nowrap">
              <p>efam's.com eCommerce @ 2021. All Right Reserved</p>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
