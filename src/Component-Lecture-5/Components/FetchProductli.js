import React, { useEffect, useState } from "react";

import FetcProductItem from "./FetcProductItem";
import "./ProductsAllPage.css";

const FetchProductli = () => {
  let [products, setProducts] = useState([]);
  let [proCategory, setproCategory] = useState([]);

  let fetchProducrt = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  let fetchProducrtCategory = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setproCategory(json));
  };
  let categoFillter = async (categoValue) => {
    await fetch(`https://fakestoreapi.com/products/category/${categoValue}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchProducrt();
    fetchProducrtCategory();
  }, []);

  let allProduct = products.map((product) => (
    <FetcProductItem key={product.id} product={product} />
  ));
  let allCateg = proCategory.map((categ) => (
    <button
      key={categ}
      className="btn btn-danger me-2  fw-bold fs-4"
      onClick={() => {
        categoFillter(categ);
      }}
    >
      {categ}
    </button>
  ));
  console.log(allCateg);
  return (
    <div className="FetchProductli">
      <h1 className="text-center my-5">Daynamic Product</h1>
      <div className="container">
        <h1 className="text-center  mb-5">
          <button
            className="btn btn-danger me-2  fw-bold fs-4"
            onClick={() => {
              fetchProducrt();
            }}
          >
            ALL
          </button>
          {allCateg}
        </h1>
        <div className="row">{allProduct}</div>
      </div>
    </div>
  );
};

export default FetchProductli;
