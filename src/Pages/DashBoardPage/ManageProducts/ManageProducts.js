import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import swal from "sweetalert";
import UseProducts from "../../../Hooks/UseProducts";

const ManageProducts = () => {
  const { manageProducts, setManageProducts } = UseProducts();
  const handleDelete = (id) => {
    swal({
      title: "Are you sure want to delete your order",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://chaka-server.onrender.com/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const deleteProduct = manageProducts.filter(
                (data) => data._id !== id
              );
              setManageProducts(deleteProduct);
              swal("Your Order has been delete now", {
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <section>
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span className="text-red">Manage Product</span>
        </h1>
      </div>
      <Container>
        <Row xs={1} md={2} xxl={3} className="g-4">
          {manageProducts.map((data) => (
            <Col>
              <Card className="h-100 border-0 shadow-lg p-3 mx-3 mx-sm-3 mx-md-0">
                <Card.Img height="250" variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>
                    Name : <span className="text-red fw-bold">{data.name}</span>
                  </Card.Title>
                  <Card.Text>
                    Brand :
                    <span className="text-red fw-bold"> {data.brand} </span>
                  </Card.Text>
                  <Card.Text>
                    Engine :
                    <span className="text-red fw-bold"> {data.cc}cc </span>
                  </Card.Text>
                  <Card.Text>
                    Weight :
                    <span className="text-red fw-bold"> {data.weight}kg </span>
                  </Card.Text>
                  <Card.Text>
                    Price :
                    <span className="text-red fw-bold"> {data.price} </span>
                  </Card.Text>

                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center border-0">
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="bg-red btn"
                  >
                    Delete
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ManageProducts;
