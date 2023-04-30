import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";
const TablecontData = () => {
  let [Products, setProducts] = useState([]);

  let fetchData = async () => {
    let res = await fetch("http://localhost:9000/products");
    let data = await res.json();
    setProducts(data);
  };
  let fetchDeleteFun = async (product) => {
    Swal.fire({
      title: `Are you sure to delete ${product.title.slice(0, 25)}`,
      icon: "error",
      showCancelButton: true,
    }).then((resulte) => {
      if (resulte.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => fetchData());
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {Products.map((product) => (
        <tr key={product.id}>
          <th scope="row">{product.id <= 9 ? "0" + product.id : product.id}</th>
          <td>{product.title ? product.title.slice(0,25):"No Product"}</td>
          <td>{product.category}</td>
          <td>{product.description ? product.description.slice(0,35):"No Product"}...</td>
          <td>{product.price}</td>
          <td className="text-center">
            <Link
              to={`/Viewpagedetails/${product.id}`}
              type="button"
              className="btn btn-primary fw-bold me-2"
            >
              View
            </Link>
            <Link to={`/UpdateProduct/${product.id}`} type="button" className="btn btn-success fw-bold me-2">
              Edite
            </Link>
            <button
              type="button"
              className="btn btn-dark fw-bold"
              onClick={() => {
                // setProductsdelet();
                fetchDeleteFun(product);
                console.log("kkkkkkkkkkk",product);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TablecontData;
