import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
//import CartScreen from "./Screens/cartScreen";
import HomeScreen from "./Screens/HomeScreen";
import fProductDetails from "./Screens/fProductDetails";
import tProductDetails from "./Screens/tProductDetails";
import sProductDetails from "./Screens/sProductDetails";
import wProductDetails from "./Screens/wProductDetails";
import allProductDetails from "./Screens/allProductDetails";
import ShopScreen from "./Screens/ShopScreen";
import WatchProduct from "./components/SearchComponnets/watchProduct";
import TshirtProduct from "./components/SearchComponnets/tshirtProduct";
import ShoesProduct from "./components/SearchComponnets/shoesProduct";
import WatchProductDetails from "./components/SearchComponnets/WatchProductDetails";
import TshirtProductDetails from "./components/SearchComponnets/TshirtProductDetails";
import ShoesProductDetails from "./components/SearchComponnets/ShoesProductDetails";
import Cart from "./Screens/CartScreen";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Detail from "./Screens/Details";
import Profile from "./Screens/Profile";
import Payment from "./Screens/payment";
import PlaceOrder from "./Screens/PlaceOrder";
import OrderScreen from "./Screens/OrderScreen";
import ContactUs from "./Screens/ContactUs";
import AboutUs from "./Screens/AbouUs";
import MyOrder from "./Screens/MyOrder";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/fproduct/:id" component={fProductDetails} />
          <Route path="/wproduct/:id" component={wProductDetails} />
          <Route path="/sproduct/:id" component={sProductDetails} />
          <Route path="/tproduct/:id" component={tProductDetails} />
          <Route path="/allproduct/:id" component={allProductDetails} />
          <Route path="/shop" component={ShopScreen} />
          <Route path="/allwatch" component={WatchProduct} />
          <Route path="/alltshirt" component={TshirtProduct} />
          <Route path="/allshoes" component={ShoesProduct} />
          <Route path="/allw/:id" component={WatchProductDetails} />
          <Route path="/allt/:id" component={TshirtProductDetails} />
          <Route path="/alls/:id" component={ShoesProductDetails} />
          <Route path="/cart/:id" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/shipping" component={Detail} />
          <Route path="/profile" component={Profile} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={AboutUs} />
          <Route path="/myorders" component={MyOrder} />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
