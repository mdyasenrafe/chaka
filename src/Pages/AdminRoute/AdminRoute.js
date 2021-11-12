import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = UseAuth();
  if (isLoading) {
    return <Spinner animation="grow" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
