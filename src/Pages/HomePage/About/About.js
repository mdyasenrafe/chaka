import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section className="my-5">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span className="text-red">About</span>
          <span> Us</span>
        </h1>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img
              className="w-100"
              src="https://i.ibb.co/3mXbwH1/About-us-page-pana.png"
              alt=""
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="mt-4 px-4 px-sm-4 mt-sm-4 mt-md-0 px-md-0"
          >
            Online Shopping BD has never been easier. chaka.com.bd is best
            online shopping store in Bangladesh that features 10+ thousands
            bikes at affordable prices. As bangaldesh's online shopping
            landscape is expanding every year, online shopping in dhaka,
            chittagong, khulna, sylhet and other big cities are also gaining
            momentum. chaka is among best websites for online shopping in
            bangladesh that promises fast, reliable and convenient delivery of
            bikes to your doorstep. Chaka being the trusted online shop in
            Bangladesh aims to provide a trouble-free shopping experience for
            the people of Bangladesh but is also providing ample opportunity for
            international online shopping from Bangladesh. Chaka aims to make
            online shopping accessible to all parts of the country. Everyone is
            encouraged to shop with confidence at Chaka.com.bd as our strict
            buyer’s protection policies ensure no risks while shopping online.
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
