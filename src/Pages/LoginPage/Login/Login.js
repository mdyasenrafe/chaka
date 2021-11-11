import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import swal from "sweetalert";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser, error, setError, setIsLoading, signInEmail } = UseAuth();
  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.state?.from || "/home";
  // handle google sign in
  const onSubmit = (data) => {
    signInEmail(data.email, data.password)
      .then((result) => {
        history.push(redirectUrl);
        setUser(result?.user);
        setError("");
        setIsLoading(false);
        swal("Good job!", "Your Aceount is Succesfully Log in now", "success");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <section className="py-4 px-4 px-md-0">
      <Container>
        <div className="text-center pb-4">
          <h1 className="fw-bold">
            <span className="text-red">Sign </span>
            <span>In</span>
          </h1>
        </div>
        <Row className="align-items-center flex-row-reverse">
          <Col sm={12} md={6} className="text-center">
            <img
              className="w-100 pb-5"
              src="https://i.ibb.co/8PYZwCr/signin.png"
              alt=""
            />
          </Col>
          <Col sm={12} md={6}>
            <div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter Your Email"
                  className="mb-3"
                >
                  <Form.Control
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="mb-3"
                  />
                </FloatingLabel>
                {errors.email && (
                  <span className="text-danger my-3">
                    This field is required
                  </span>
                )}
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Enter Your Password"
                  className="Enter Your Password mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </FloatingLabel>
                {errors.password && (
                  <span className="text-danger my-3">
                    This field is required
                  </span>
                )}
                <input
                  type="submit"
                  className="btn btn-outline-danger my-4 w-100 d-block"
                />
              </Form>
              {error && <p className="my-3 text-danger">{error}</p>}
              <p>
                Don't Have any Aceount?{" "}
                <Link to="/resigter">Resigter Here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
