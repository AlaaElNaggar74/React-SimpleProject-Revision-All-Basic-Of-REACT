import React from "react";
import imag1 from "../Pic/Home1.jpg";
import imag2 from "../Pic/Home3.jpg";


import {Link} from "react-router-dom"
import "./ProductsAllPage.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center text-danger my-5">Project Of Our Site</h1>
        <div className="row">
          <div className="fulpag col-md-6 d-flex align-items-end">
            <Link to="/ecommerc" >
              <div className="fpic">
                <img src={imag1} alt="" />
                <h1 className="headcent">ECommerce</h1>
              </div>
            </Link>
          </div>
          <div className="fulpag col-md-6 d-flex align-items-end">
            <Link to="/CrudHome" >
              <div className="fpic">
                <img src={imag2} alt="" />
                <h1 className="headcent">CRUDS </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
