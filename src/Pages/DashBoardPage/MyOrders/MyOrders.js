import React from "react";
import UseOrders from "../../../Hooks/UseOrders";

const MyOrders = () => {
  const { myOrders } = UseOrders();
  return (
    <section>
      <div className="text-center mb-3">
        <h1 className="fw-bold">
          <span>My orders</span>
          <span className="text-red"> {myOrders.length}</span>
        </h1>
      </div>
    </section>
  );
};

export default MyOrders;
