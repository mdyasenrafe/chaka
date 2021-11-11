import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, brand, image, description, price, cc, weight, _id } =
    props.data;
  return (
    <Col>
      <Card className="h-100 border-0 shadow-lg p-3 mx-3 mx-sm-3 mx-md-0">
        <Card.Img height="250" variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            Name : <span className="text-red fw-bold">{name}</span>
          </Card.Title>
          <Card.Text>
            Brand :<span className="text-red fw-bold"> {brand} </span>
          </Card.Text>
          <Card.Text>
            Engine :<span className="text-red fw-bold"> {cc}cc </span>
          </Card.Text>
          <Card.Text>
            Weight :<span className="text-red fw-bold"> {weight}kg </span>
          </Card.Text>
          <Card.Text>
            Price :<span className="text-red fw-bold"> {price} </span>
          </Card.Text>

          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center border-0">
          <Link to={`/purchase/${_id}`}>
            <button className="btn bg-red">Purchase</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
