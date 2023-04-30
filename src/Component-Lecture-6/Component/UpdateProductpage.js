import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AsidePart from "./AsidePart";

const UpdateProductpage = () => {
  let navigate = useNavigate();
  let para = useParams();
  let [product, setProduct] = useState({});
  let [id, setid] = useState("");
  let [title, setTitle] = useState("");
  let [category, setCategory] = useState("");
  let [description, setDescription] = useState("");
  let [price, setprice] = useState("");

  let fetchProduct = () => {
    fetch(`http://localhost:9000/PRODUCTS/${para.pid}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setTitle(data.title);
        setCategory(data.category);
        setDescription(data.description);
        setprice(data.price);
      });

    // console.log({id,title,price,description,category,});
  };
  console.log(product);
  let fetchUdateProduct = () => {
    fetch(`http://localhost:9000/PRODUCTS/${para.pid}`, {
      // method: "PUT",
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        price,
        description,
        category,
      }),
    })
      .then((res) => res.json())
      .then((data) => navigate("/ProTable"));
  };

  useEffect(() => {
    fetchProduct();
    setid(product.title);
  }, []);
  return (
    <div className="UpdateProductpage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 rowasidestyle">
            <AsidePart />
          </div>
          <div className="col-9 ">
            <div className="box">
              <form
                className="formadd row my-4 ms-4"
                onSubmit={(e) => {
                  fetchUdateProduct();
                  // console.log({"id":id,"title":title,"price":price,"description":description,"category":category});
                  // console.log({id,title,price,description,category,});

                  e.preventDefault();
                }}
              >
                <div className="mb-3  col-md-12">
                  <h3 htmlFor="id" className="form-label">
                    ID :
                  </h3>
                  <input
                    type="text"
                    defaultValue={product.id}
                    className="form-control fs-4 py-3"
                    id="id"
                    placeholder="Enter Product Title"
                    onChange={(e) => {
                      setid(e.target.value);
                    }}
                    disabled
                    
                  />
                </div>
                <div className="mb-3  col-md-12">
                  <h3 htmlFor="title" className="form-label">
                    Title :
                  </h3>
                  <input
                    type="text"
                    defaultValue={product.title}
                    className="form-control fs-4 py-3"
                    id="title"
                    placeholder="Enter Product Title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    
                  />
                </div>
                <div className="mb-3  col-md-12">
                  <h3 htmlFor="cate" className="form-label">
                    Category :
                  </h3>
                  <input
                    type="text"
                    defaultValue={product.category}
                    className="form-control fs-4 py-3"
                    id="cate"
                    placeholder="Enter Product Category"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    
                  />
                </div>
                <div className="mb-3  col-md-12">
                  <h3 htmlFor="price" className="form-label">
                    Price :
                  </h3>
                  <input
                    type="text"
                    defaultValue={product.price}
                    className="form-control fs-4 py-3"
                    id="price"
                    placeholder="Enter Product Price"
                    onChange={(e) => {
                      setprice(e.target.value);
                    }}
                    
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <h3 htmlFor="desc" className="form-label">
                    Description :
                  </h3>
                  <textarea
                    type="text"
                    defaultValue={product.description}
                    className="form-control textareafixSize fs-4 py-3"
                    id="desc"
                    placeholder="Enter Product Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary mt-5 fw-bold fs-3 col-md-3 m-auto"
                >
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductpage;
