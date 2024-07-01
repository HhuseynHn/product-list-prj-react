/** @format */

import React from "react";
import ProductItem from "./product-item";
import "./style.css";
import productData from "../../constant/product-data";

const ProductList = () => {
  return (
    <>
      <section>
        <ul className="product-list">
          {productData.map((product) => (
            <li key={product.id}>
              <ProductItem
                imgSrc={product.imgSrc}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProductList;
