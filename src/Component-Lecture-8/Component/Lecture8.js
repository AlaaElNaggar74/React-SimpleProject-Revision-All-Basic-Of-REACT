import React, { createContext, useState } from "react";
import CardCo from "./CardCo";
// import AsidePart from "../../Component-Lecture-6/Component/AsidePart";

import "./lectur8.css";
import Productlec8List from "./Productlec8List";
import Productslecture8 from "./Productslecture8";
// import { Link } from "react-router-dom";

import ContextState from "./CotextApi/ContextState";
export let ProductContext = createContext();





const Lecture8 = () => {
  let [state, setState] = useState([
    {
      id: 1,
      title: "Product-1",
      mname: "Toshiba",
      lname: "XL",
      familName: "naggar",
      coun: 2,
    },
    {
      id: 2,
      title: "Product-2",
      mname: "Samsung",
      lname: "MD",
      familName: "naggar",
      coun: 8,
    },
    {
      id: 3,
      title: "Product-3",
      mname: "LAMBERG",
      lname: "SM",
      familName: "naggar",
      coun: 5,
    },
  ]);
  return (
    <div className="Lecture8">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 lectur8Aside">
            <div className="cente">
              <h1>Lecture 8a</h1>
            </div>
          </div>
          <div className="col-10 ProductsTablestyle">
            {/* <ProductContext.Provider value={state}>
              <Productslecture8 />
              <Productlec8List />
            </ProductContext.Provider>*/}
            <CardCo>
              <CardCo.Title />
              <CardCo.Body />
              <CardCo.Footer />
            </CardCo>

            <ContextState>

              <Productslecture8 />
              <Productlec8List />
            </ContextState>

            {/* <CardCo />
            <CardCo.Title />
            <CardCo.Body />
            <CardCo.Footer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lecture8;
