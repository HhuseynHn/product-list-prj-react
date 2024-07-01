/** @format */
import React from "react";
import Button from "../button/button";
const ProductItem = (props) => {
  return (
    <>
      <div className="product-item">
        <div className="img-container">
          <img src={props.imgSrc} alt={props.name} />
        </div>
        <h2>Name: {props.name}</h2>
        <h3>Price: {props.price}</h3>
        <p>Description: {props.description}</p>
        <Button />
      </div>
    </>
  );
};

export default ProductItem;
