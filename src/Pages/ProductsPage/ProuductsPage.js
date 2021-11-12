import React from "react";
import { Container, Row } from "react-bootstrap";
import UseProducts from "../../Hooks/UseProducts";
import Product from "../HomePage/Product/Product";
import LoadingSpiner from "../SharedPage/LoadingSpiner/LoadingSpiner";

const ProuductsPage = () => {
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
          {products.map((data) => (
            <Product key={data._id} data={data}></Product>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProuductsPage;
