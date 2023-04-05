import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import "./Purchase.css";
import UseProducts from "../../Hooks/UseProducts";
import UseAuth from "../../Hooks/UseAuth";

const Purchase = () => {
  //
  const { user } = UseAuth();
  const { id } = useParams();
  //
  const history = useHistory();
  const { products } = UseProducts();
  //   find products
  const findProducts = products.find((product) => product._id === id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["status"] = "pending";
    data["image"] = findProducts?.image;
    axios.post("https://chaka-server.onrender.com/orders", data).then((res) => {
      if (res.data.acknowledged) {
        swal("Good job!", "Your Orders is Succesfully Order now", "success");
        history.push("/dashboard/my-orders");
      }
    });
  };

  return (
    <section className="py-5 px-4 px-sm-4 px-md-0">
      <Row>
        <Col xs={12} md={6} className="text-center">
          <div>
            <img src={findProducts?.image} alt="" />
            <div>
              <h1>{findProducts?.name}</h1>
              <h3 className="text-red fw-bold">{findProducts?.price}</h3>
              <p>{findProducts?.description}</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="mt-4 mt-md-0 mt-sm-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Your Name"
              className="mb-3"
            >
              <Form.Control
                defaultValue={user?.displayName}
                {...register("userName", { required: true })}
                type="text"
                placeholder="name@example.com"
                readOnly
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Your Email"
              className="mb-3"
            >
              <Form.Control
                defaultValue={user?.email}
                {...register("email", { required: true })}
                type="email"
                placeholder="name@example.com"
                readOnly
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Your Address"
              className="mb-3"
            >
              <Form.Control
                {...register("address", { required: true })}
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            {errors.address && (
              <span className="fw-bold text-red d-block my-3">
                This field is required
              </span>
            )}
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Your Phone Number"
              className="mb-3"
            >
              <Form.Control
                {...register("number", { required: true })}
                type="number"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            {errors.number && (
              <span className="fw-bold text-red d-block my-3">
                This field is required
              </span>
            )}
            {findProducts?.name && (
              <FloatingLabel
                controlId="floatingInput"
                label="Product Name"
                className="mb-3"
              >
                <Form.Control
                  defaultValue={findProducts?.name}
                  {...register("productName", { required: true })}
                  type="text"
                  placeholder="name@example.com"
                  readOnly
                />
              </FloatingLabel>
            )}
            {findProducts?.price && (
              <FloatingLabel
                controlId="floatingInput"
                label="Product Price"
                className="mb-3"
              >
                <Form.Control
                  defaultValue={findProducts?.price || ""}
                  {...register("productPrice", { required: true })}
                  type="text"
                  placeholder="price"
                  readOnly
                />
              </FloatingLabel>
            )}

            <input type="submit" className="btn bg-red my-3 w-100" />
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Purchase;
