import React from "react";
import Featured from "../components/HomeComponents/featured";
import Tshirt from "../components/HomeComponents/tshirt";
import Shoes from "../components/HomeComponents/shoes";
import Watch from "../components/HomeComponents/watch";
import Banner1 from "../components/HomeComponents/Banner1";
import Brand from "../components/HomeComponents/Brand";
import Highlight from "../components/HomeComponents/Highlight";
import Banner2 from "../components/HomeComponents/Banner2";

const HomeScreen = () => {
  return (
    <>
      <Banner1 />
      <Brand />
      <Highlight />
      <Featured />
      <Banner2 />
      <Tshirt />
      <Shoes />
      <Watch />
    </>
  );
};

export default HomeScreen;
