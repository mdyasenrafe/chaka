import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-area" style={{ height: "700px" }}>
      <div className="banner-text-area text-light p-4 p-sm-4 p-md-0">
        <h1 className="fw-bold banner-header">
          Find the <span className="text-red">Best Bike</span> For
          <span> You</span>
        </h1>
        <p className="mt-3">
          Shop from the comfrot of your own home. Now available through select
          dealers. Browse our range of Gore-Tex motorcycle Many Company.
        </p>
        <Link to="/products">
          <button className="btn bg-red">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
