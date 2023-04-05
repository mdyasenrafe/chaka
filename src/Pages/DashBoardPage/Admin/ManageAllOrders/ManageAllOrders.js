import axios from "axios";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import swal from "sweetalert";
import UseAuth from "../../../../Hooks/UseAuth";
import UseOrders from "../../../../Hooks/UseOrders";
import LoadingSpiner from "../../../SharedPage/LoadingSpiner/LoadingSpiner";

const ManageAllOrders = () => {
  const { user } = UseAuth();
  const { orders, setOrders, color, loading } = UseOrders();
  const handleDelete = (id) => {
    swal({
      title: `Are you sure want to Delete ${user?.displayName} order`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://chaka-server.onrender.com/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const deleteProduct = orders.filter(
                (product) => product._id !== id
              );
              setOrders(deleteProduct);
              swal(`Order has been Delete now`, {
                icon: "success",
              });
            }
          });
      }
    });
  };
  const handleApporve = (data) => {
    data["status"] = "apporve";
    swal({
      title: "Are you sure want to Apporve this Product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .put(`https://chaka-server.onrender.com/orders/${data._id}`, data)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              swal({
                text: `${data?.userName} order has been Approved`,
                icon: "success",
              }).then((willDelete) => {
                if (willDelete) {
                  window.location.reload();
                }
              });
            }
          });
      }
    });
  };

  return (
    <div className="text-center fw-bold">
      <h1>
        Manage <span className="text-red">All orders</span>{" "}
      </h1>
      <LoadingSpiner color={color} loading={loading} />
      <Row xs={1} md={2} className="g-4">
        {orders.map((data) => (
          <Col key={data?._id}>
            <Card className="h-100 border-0 shadow-lg p-3 mx-4 mt-3">
              <Card.Img variant="top" src={data?.image} />
              <Card.Body>
                <Card.Title>
                  User Name : <span className="text-red">{data?.userName}</span>
                </Card.Title>
                <Card.Text>
                  Product Name :
                  <span className="text-red"> {data?.productName}</span>
                </Card.Text>
                <Card.Text>
                  Email :<span className="text-red"> {data.email}</span>
                </Card.Text>
                <Card.Text>
                  Status :<span className="text-red"> {data?.status}</span>
                </Card.Text>
                <Card.Text>
                  Phone Number :
                  <span className="text-red"> {data?.number}</span>
                </Card.Text>
                <Card.Text>
                  Product Name :
                  <span className="text-red"> {data?.productName}</span>
                </Card.Text>
                <Card.Text>
                  Price :<span className="text-red"> {data?.productPrice}</span>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="border-0 bg-light text-center">
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn bg-red mx-3"
                >
                  Delete
                </button>
                {data.status === "apporve" ? (
                  <button className="btn bg-red mx-3" disabled>
                    Apporve
                  </button>
                ) : (
                  <button
                    onClick={() => handleApporve(data)}
                    className="btn bg-red mx-3"
                  >
                    Apporve
                  </button>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageAllOrders;
