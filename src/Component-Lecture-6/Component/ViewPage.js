import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AsidePart from "./AsidePart";
import "./CrudsStyle.css";

const ViewPage = (props) => {
  let param = useParams();
  let [soecificeProduct, setProduct] = useState({});

  let fetchSpicificProduct = async () => {
    let res = await fetch(`http://localhost:9000/products/${param.pid}`);
    let data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchSpicificProduct();
  }, []);

  return (
    <div className="ViewPage ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 rowasidestyle">
            <AsidePart />
          </div>
          <div className="col-10 mt-5">
            <div className="box">
              {soecificeProduct.id ? (
                <div className="row">
                  <div className="col-md-4 d-flex align-items-center justify-content-center h-75vh">
                    <div className="centesingleprodu">
                      <img
                        src={soecificeProduct.image}
                        alt="g"
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="cen ">
                      <h3 className="text-danger">
                        Title:{" "}
                        <span className="text-dark fs-4">
                          {soecificeProduct.title}
                        </span>
                      </h3>
                      <h3 className="text-danger">
                        Category:{" "}
                        <span className="text-dark fs-4">
                          {soecificeProduct.category}
                        </span>
                      </h3>
                      <h3 className="text-danger">
                        Description: <br />
                        <span className="text-dark fs-4">
                          {soecificeProduct.description}
                        </span>
                      </h3>
                      <h3 className="text-danger">
                        Price:{" "}
                        <span className="text-dark fs-4">
                          {soecificeProduct.price}
                        </span>
                        $
                      </h3>
                      <button className="btn btn-danger mt-3"> Buy Now</button>
                    </div>
                  </div>
                </div>
              ) : (
                <h1>Page loading...</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
