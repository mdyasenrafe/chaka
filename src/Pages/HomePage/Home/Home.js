import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <About></About>
      <Products></Products>
      <Reviews></Reviews>
    </section>
  );
};

export default Home;
