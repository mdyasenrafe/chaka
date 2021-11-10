import React, { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return {
    products,
  };
};

export default UseProducts;
