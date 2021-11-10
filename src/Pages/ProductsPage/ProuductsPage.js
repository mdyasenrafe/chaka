import React from "react";
import { Container, Row } from "react-bootstrap";
import UseProducts from "../../Hooks/UseProducts";
import Product from "../HomePage/Product/Product";

const ProuductsPage = () => {
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
          {products.map((data) => (
            <Product data={data}></Product>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProuductsPage;
