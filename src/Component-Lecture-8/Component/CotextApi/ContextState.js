import React, { createContext, useState } from "react";

export let productco = createContext();

const ContextState = (props) => {
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
    <div className="ContextState">
      <h1 className="text-center">ContextState</h1>
      <productco.Provider value={state}>{props.children}</productco.Provider>
    </div>
  );
};

export default ContextState;
