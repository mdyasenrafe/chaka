import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import UseAuth from "../../../../Hooks/UseAuth";

const AddProducts = () => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    axios
      .post("https://chaka-server.onrender.com/products", data)
      .then((res) => {
        if (res?.data?.acknowledged) {
          swal("Your Product has been Added", {
            icon: "success",
          });
          history.push("/products");
        }
      });
  };
  return (
    <section>
      <div className="fw-bold text-center mb-3">
        <h1>
          Please Add An <span className="text-red">Product</span>
        </h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="mx-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your  Product Name"
          className="mb-3"
        >
          <Form.Control
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
            className="mb-3"
          />
        </FloatingLabel>
        {errors.name && (
          <span className="text-danger my-3">This field is required</span>
        )}
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Product Brand"
          className="mb-3"
        >
          <Form.Control
            {...register("brand", { required: true })}
            type="text"
            placeholder="brand"
            className="mb-3"
          />
        </FloatingLabel>
        {errors.brand && (
          <span className="text-danger my-3">This field is required</span>
        )}
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Product Image "
          className="mb-3"
        >
          <Form.Control
            {...register("image", { required: true })}
            type="text"
            placeholder="Enter Your Image"
            className="mb-3"
          />

          {errors.image && (
            <span className="text-danger my-3">This field is required</span>
          )}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Product price"
          className="mb-3"
        >
          <Form.Control
            {...register("price", { required: true })}
            type="text"
            placeholder="price"
            className="mb-3"
          />
          {errors.price && (
            <span className="text-danger my-3">This field is required</span>
          )}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Product Cc"
          className="mb-3"
        >
          <Form.Control
            {...register("cc", { required: true })}
            type="number"
            placeholder="cc"
            className="mb-3"
          />
          {errors.cc && (
            <span className="text-danger my-3">This field is required</span>
          )}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Product Weight"
          className="mb-3"
        >
          <Form.Control
            {...register("weight", { required: true })}
            type="number"
            placeholder="weight"
            className="mb-3"
          />
          {errors.weight && (
            <span className="text-danger my-3">This field is required</span>
          )}
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingTextarea2"
          label="Enter Your Description"
        >
          <Form.Control
            {...register("description", { required: true })}
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            className="mb-3"
          />
          {errors.description && (
            <span className="text-danger my-3">This field is required</span>
          )}
        </FloatingLabel>
        <input
          type="submit"
          className="btn btn-outline-danger my-4 w-100 d-block"
        />
      </Form>
    </section>
  );
};

export default AddProducts;
