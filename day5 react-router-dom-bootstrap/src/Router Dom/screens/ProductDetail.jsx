import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../components/data";

const ProductDetail = () => {
  const { id } = useParams();

  const findedProduct = productsData.find((x) => x.id.toString() === id);
  // console.log(typeof id);
  // console.log(typeof findedProduct.id);

  return (
    <div>
      product details - {id}
      <h1>{findedProduct.title}</h1>
      <h1>{findedProduct.price}</h1>
    </div>
  );
};

export default ProductDetail;
