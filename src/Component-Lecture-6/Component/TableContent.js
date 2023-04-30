import React from "react";
import { Link } from "react-router-dom";

import "./CrudsStyle.css";
import TablecontData from "./TablecontData";
const TableContent = () => {
  return (
    <div className="TableContent">
      <h1 className="my-5 text-center">Products Table</h1>
      <h2 className="mb-5 ">
        Add New Product From Here :{" "}
        <Link to="/addProductPage" type="button" className="btn btn-info fw-bold">
          Add
        </Link>
      </h2>
      <table className="table table-striped">
        <thead>
          <tr className="">
            <th className="col-1">ID</th>
            <th className="col-2">Title</th>
            <th className="col-2">Category</th>
            <th className="col-2">Description</th>
            <th className="col-1">Price</th>          
            <th className="col-4 text-center">Operation</th>
          </tr>
        </thead>
        <tbody>
          <TablecontData/>
          {/* <tr>
            <th scope="row">1</th>
            <td>titlte</td>
            <td>cate</td>
            <td>price</td>
            <td>descr</td>
            <td>
              <button type="button" class="btn btn-primary fw-bold me-2">
                View
              </button>
              <button type="button" class="btn btn-success fw-bold me-2">
                Updat
              </button>
              <button type="button" class="btn btn-dark fw-bold">
                Delete
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
