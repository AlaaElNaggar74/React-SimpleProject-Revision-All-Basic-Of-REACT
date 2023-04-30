import React from "react";

import "./ProductsAllPage.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand">NG-Projects</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link to="/#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  E-Commerce
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-">
                    <Link className="nav-link" to="/ecommerc">
                      Full-Project
                    </Link>
                  </li>
                  <li className="nav-">
                    <Link className="nav-link" to="/staticp">
                      StaticProduct
                    </Link>
                  </li>
                  <li className="nav-">
                    <Link className="nav-link" to="/daynamic">
                      Product(With Api)
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CRUDS
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-">
                    <Link className="nav-link" to="/CrudHome">
                      Full-Project
                    </Link>
                  </li>
                  <li className="nav-">
                    <Link className="nav-link" to="/staticp">
                      ProductTable
                    </Link>
                  </li>
                  <li className="nav-">
                    <Link className="nav-link" to="/daynamic">
                      SingleProduct
                    </Link>
                  </li>
                  <li className="nav-">
                    <Link className="nav-link" to="/daynamic">
                      CartBox
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lecture-8
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-">
                    <Link className="nav-link" to="/lecture8">
                      ContextApi
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lecture-11(Redux-React)
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-">
                    <Link className="nav-link" to="/lecture11-React-Redux">
                      React-Redux
                    </Link>
                  </li>
                  <li className="nav-">
                    <Link className="nav-link" to="/lecture11-Redux-ToolKite">
                    Redux-ToolKite
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
