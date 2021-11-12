import React from "react";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseProducts from "../../../Hooks/UseProducts";
import Product from "../Product/Product";
import LoadingSpiner from "../../SharedPage/LoadingSpiner/LoadingSpiner";

const Products = () => {
  const { products, loading, color } = UseProducts();
  return (
    <section className="py-5">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Our</span> <span className="text-red">Products</span>
        </h1>
      </div>
      <LoadingSpiner color={color} loading={loading}></LoadingSpiner>
      <Container>
        <Row xs={1} md={2} xxl={3} className="g-4">
          {products.slice(0, 6).map((data) => (
            <Product key={data._id} data={data}></Product>
          ))}
        </Row>
      </Container>
      <div className="text-center mt-5">
        <Link to="/products">
          <button className="btn bg-red">See More</button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
