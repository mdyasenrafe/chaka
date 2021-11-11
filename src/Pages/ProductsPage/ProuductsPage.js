import React from "react";
import { Container, Row } from "react-bootstrap";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import UseProducts from "../../Hooks/UseProducts";
import Product from "../HomePage/Product/Product";

const ProuductsPage = () => {
  const { products, loading, color } = UseProducts();
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <section className="py-5">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Our</span> <span className="text-red">Products</span>
        </h1>
      </div>
      <div>
        <ClipLoader color={color} loading={loading} css={override} size={100} />
      </div>

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
