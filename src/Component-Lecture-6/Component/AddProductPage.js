import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AsidePart from "./AsidePart";

const AddProductPage = () => {
  let [title, setTitle] = useState("");
  let [category, setCategory] = useState("");
  let [price, setprice] = useState("");
  let [description, setDescription] = useState("");

let navgate=useNavigate();

  let fetchAddNewProdu = () => {
    fetch(`http://localhost:9000/PRODUCTS`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
        category,
      }),
    })
      .then((res) => res.json())
      .then((data) => navgate("/ProTable"));
  };


  return (
    <div className="AddProductPage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 rowasidestyle">
            <AsidePart />
          </div>
          <div className="col-9 ">
            <div className="box">
              <form
                className="formadd row my-4 ms-4"
                onSubmit={(e) => {fetchAddNewProdu();
                  // console.log({"id":id,"title":title,"price":price,"description":description,"category":category});
                  

                  e.preventDefault();
                }}
              >
              
                <div className="mb-3  col-md-6">
                  <h3 htmlFor="title" className="form-label">
                    Title :
                  </h3>
                  <input
                    type="text"
                    className="form-control fs-4 py-3"
                    id="title"
                    placeholder="Enter Product Title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3  col-md-6">
                  <h3 htmlFor="cate" className="form-label">
                    Category :
                  </h3>
                  <input
                    type="text"
                    className="form-control fs-4 py-3"
                    id="cate"
                    placeholder="Enter Product Category"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3  col-md-6">
                  <h3 htmlFor="price" className="form-label">
                    Price :
                  </h3>
                  <input
                    type="text"
                    className="form-control fs-4 py-3"
                    id="price"
                    placeholder="Enter Product Price"
                    onChange={(e) => {
                      setprice(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <h3 htmlFor="desc" className="form-label">
                    Description :
                  </h3>
                  <textarea
                    type="text"
                    className="form-control textareafixSize fs-4 py-3"
                    id="desc"
                    placeholder="Enter Product Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary mt-5 fw-bold fs-3 col-md-3 m-auto"
                >
                  ADD Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
