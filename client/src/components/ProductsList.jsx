import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getRequest } from "./../services/fun";
import { api } from "./../services/api";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  // get products list
  const retrieveProducts = async () => {
    const { success, data } = await getRequest(`${api}/product`);
    success && setProducts(data);
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <div className="pl_list-container">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
