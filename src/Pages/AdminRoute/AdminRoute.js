import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import UseAuth from "../../Hooks/UseAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = UseAuth();

  const [alert, setAlert] = useState(true);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Spinner animation="grow" />;
  }
  if (!admin) {
    return (
      <div>
        <h1>You Are Not Admin Pls Go Back To Your Home</h1>
        <Link to="/home">
          <button className="btn bg-red">home</button>
        </Link>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
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
