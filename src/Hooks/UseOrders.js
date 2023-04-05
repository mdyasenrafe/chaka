import React, { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

const UseOrders = () => {
  const { user } = UseAuth();
  const [orders, setOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    fetch("https://chaka-server.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => {
        const filterMyOrders = data.filter(
          (product) => product?.email === user?.email
        );
        setMyOrders(filterMyOrders);
        setOrders(data);
        setLoading(false);
      });
  }, []);
  return {
    orders,
    setOrders,
    myOrders,
    setMyOrders,
    loading,
    color,
  };
};

export default UseOrders;
