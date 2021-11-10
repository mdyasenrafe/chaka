import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseProducts from "../../../Hooks/UseProducts";
import Product from "../Product/Product";

const Products = () => {
  const { products } = UseProducts();
  return (
    <section className="py-5">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Our</span> <span className="text-red">Services</span>
        </h1>
      </div>
      <Container>
        <Row xs={1} md={2} xxl={3} className="g-4">
          {products.slice(0, 6).map((data) => (
            <Product data={data}></Product>
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
