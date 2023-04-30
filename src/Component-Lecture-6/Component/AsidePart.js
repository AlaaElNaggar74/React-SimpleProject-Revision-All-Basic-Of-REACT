import React from "react";

import "./CrudsStyle.css";

import { Link } from "react-router-dom";

const AsidePart = () => {
  return (
    <div className="AsidePart ">
      <div className="cente">
        <h5 className="mb-4">
          <Link to="/ProTable">Products Table</Link>
        </h5>
        <h5>
          <Link to="/ProBox">Products Gallary</Link>
        </h5>
      </div>
    </div>
  );
};

export default AsidePart;
