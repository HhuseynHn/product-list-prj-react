/** @format */

import React from "react";
import ProductList from "../../components/product/product-list";
import "./style.css";

const HomePage = () => {
  return (
    <>
      <main className="main-container">
        <ProductList />
      </main>
    </>
  );
};

export default HomePage;
