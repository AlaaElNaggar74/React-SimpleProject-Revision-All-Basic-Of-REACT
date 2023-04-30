import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FetchProductDetails = () => {
  let param = useParams();
  console.log(param);
  let [pro, setPro] = useState({});

  let fetchSinglePro = () => {
    fetch(`https://fakestoreapi.com/products/${param.pid}`)
      .then((res) => res.json())
      .then((data) => setPro(data));
  };
  useEffect(() => {
    fetchSinglePro();
  }, []);

  return (
    <div className="FetchProductDetails my-5">
      <div className="container">
        <div className="row">
          <div className="imaga col-md-6 mb-3">
            <img src={pro.image} alt=".." style={{ width: "100%" }} />
          </div>
          <div className="deta col-md-6 mb-3 ps-5 d-flex align-items-center">
            {/* <h1>{param.pid}</h1>
            <h1>lllllllllll</h1> */}
            <div className="ddd">
              <h2>
                <span className="text-danger">Title :</span> <br />
                {pro.title}
              </h2>
              <h2>
                <span className="text-danger">Category :</span>
                {pro.category}
              </h2>
              <h3>
                <span className="text-danger">Description :</span> <br />
                {pro.description}
              </h3>
              <h1>
                <span className="text-danger">Price :</span> {pro.price}$
              </h1>
              <button className="w-50 d-block m-auto btn btn-danger fs-1 mt-5 fw-bold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchProductDetails;
