import React from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AddReview from "../AddReview/AddReview";
import AddProducts from "../Admin/AddProducts/AddProducts";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import ManageAllOrders from "../Admin/ManageAllOrders/ManageAllOrders";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";

const DashBoard = () => {
  const { admin } = UseAuth();
  let { path, url } = useRouteMatch();
  return (
    <section>
      <Row>
        <Col xs={12} md={3}>
          <div className="bg-dark h-100 text-light py-5">
            <ul className="list-unstyled">
              {admin ? (
                <>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`${url}/make-admin`}
                    >
                      Make Admin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`${url}/all-orders`}
                    >
                      Mangae All Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`${url}/add-product`}
                    >
                      Add Prouduct
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`${url}/manage-product`}
                    >
                      Manage Prouduct
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to={`${url}/my-orders`}
                      className="coustom-nav-link px-2 my-2"
                    >
                      My orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`${url}/pay`}
                    >
                      Pay
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`${url}/add-review`}
                    >
                      Add Review
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Col>
        <Col xs={12} md={9} className="py-5">
          <Switch>
            <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>
            <Route path={`${path}/my-orders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/add-review`}>
              <AddReview></AddReview>
            </Route>
            <AdminRoute path={`${path}/make-admin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/add-product`}>
              <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/all-orders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manage-product`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </Col>
      </Row>
    </section>
  );
};

export default DashBoard;
