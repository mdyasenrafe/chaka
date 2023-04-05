import axios from "axios";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import swal from "sweetalert";
import UseAuth from "../../../../Hooks/UseAuth";

const MakeAdmin = () => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    data["role"] = "admin";
    axios
      .put(`https://chaka-server.onrender.com/users/admin`, data)
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          swal("Your Aceount is Admin Now", {
            icon: "success",
          });
          history.push("/home");
        }
      });
  };
  return (
    <div>
      <h1>This is Make Admin</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="mx-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your email"
          className="my-3"
        >
          <Form.Control
            {...register("email", { required: true })}
            type="email"
            placeholder="email"
            className="mb-3"
          />
        </FloatingLabel>
        {errors.email && (
          <span className="text-danger my-3">This field is required</span>
        )}
        <input
          type="submit"
          className="btn btn-outline-danger my-4 w-100 d-block"
        />
      </Form>
    </div>
  );
};

export default MakeAdmin;
