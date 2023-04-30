import { useState } from "react";
import ProductData from "./ProductData";
import ProductItem from "./ProductItem";

const ProductList = () => {
  let co = 0;
  let len = 0;
  let setarr = [];
  let [selectcategory, setselctcate] = useState("all");
  // let data = ProductData.map((Product) =>(selectcategory==="all")? :(Product.category===selectcategory)?<ProductItem key={Product.id} product={Product} />:"");
  let data = ProductData.map((Product) => {
    if (selectcategory === "all") {
      len += 1;
      return <ProductItem key={Product.id} product={Product} />;
    } else if (Product.category === selectcategory) {
      len += 1;
      return <ProductItem key={Product.id} product={Product} />;
    }
  });
  let categoryDtatfiltter = ProductData.map((Product) => Product.category);
  let spicCategoryset = new Set(categoryDtatfiltter);
  spicCategoryset.forEach((categ) => setarr.push(categ));
  let categoryDtatofset = setarr.map((category) => (
    <button
      className="btn btn-danger me-2"
      key={co++}
      onClick={() => {
        setselctcate(category);
      }}
    >
      {category}
    </button>
  ));

  // console.log(categoryDtat);
  console.log(categoryDtatfiltter);
  console.log(spicCategoryset);
  console.log(categoryDtatofset);
  console.log(data);
  // console.log(categoryDtatofset);
  // console.log(categoryDtat);
  return (
    <div className="ProductList">
      <h1>ProductList</h1>
      <div className="container ">
        <div className="row">
          <div className="col-12 text-center">
            <button
              className="btn btn-danger me-2"
              key={co++}
              onClick={() => {
                setselctcate("all");
              }}
            >
              All
            </button>
            {categoryDtatofset}
            <h1 className=" my-5">Number Of Product: {len}</h1>
            {/* {categoryDtat} */}
          </div>
          {data}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
