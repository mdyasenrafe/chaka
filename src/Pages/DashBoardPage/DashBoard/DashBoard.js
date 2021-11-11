import React from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
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
              <li>
                <Link
                  to={`${url}/my-orders`}
                  className="coustom-nav-link px-2 my-2"
                >
                  My orders
                </Link>
              </li>
              <li>
                <Link className="coustom-nav-link px-2 my-2" to={`${url}/pay`}>
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
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/add-review`}>
              <AddReview></AddReview>
            </Route>
          </Switch>
        </Col>
      </Row>
    </section>
  );
};

export default DashBoard;
