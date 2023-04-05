import React, { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  const [manageProducts, setManageProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    fetch("https://chaka-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setManageProducts(data);
        setLoading(false);
      });
  }, []);
  return {
    products,
    loading,
    color,
    manageProducts,
    setManageProducts,
  };
};

export default UseProducts;
