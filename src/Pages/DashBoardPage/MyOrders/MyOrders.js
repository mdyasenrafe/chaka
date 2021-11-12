import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import swal from "sweetalert";
import UseOrders from "../../../Hooks/UseOrders";
import LoadingSpiner from "../../SharedPage/LoadingSpiner/LoadingSpiner";

const MyOrders = () => {
  const { myOrders, loading, color, setMyOrders } = UseOrders();
  const handleCancel = (id) => {
    swal({
      title: "Are you sure want to cancel your order",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://cryptic-plains-45363.herokuapp.com/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const deleteProduct = myOrders.filter((data) => data._id !== id);
              setMyOrders(deleteProduct);
              swal("Your Order has been Cancel now", {
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      <LoadingSpiner color={color} loading={loading}></LoadingSpiner>
      {myOrders.length > 0 ? (
        <section>
          <div className="text-center mb-4">
            <h1 className="fw-bold">
              <span>My orders</span>
              <span className="text-red"> {myOrders.length}</span>
            </h1>
          </div>
          <Row xs={1} md={2} className="g-4">
            {myOrders.map((data) => (
              <Col key={data?._id}>
                <Card className="h-100 border-0 shadow-lg p-3 mx-4">
                  <Card.Img variant="top" src={data?.image} />
                  <Card.Body>
                    <Card.Title>
                      User Name :{" "}
                      <span className="text-red">{data?.userName}</span>
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
                      Price :
                      <span className="text-red"> {data?.productPrice}</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="border-0 bg-light text-center">
                    <button
                      onClick={() => handleCancel(data._id)}
                      className="btn bg-red"
                    >
                      Cancel
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      ) : (
        <div className="text-center">
          <h1>Nothing To Add</h1>
        </div>
      )}
    </>
  );
};

export default MyOrders;
