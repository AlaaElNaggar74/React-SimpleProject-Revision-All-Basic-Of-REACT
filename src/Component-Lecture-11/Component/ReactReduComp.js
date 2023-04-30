import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deposite, withdraw } from "./Redux/Actions/Bank-Action";
import { deposite, withdraw } from "../Component/ReduxToolKite/Slices/Bank-Slice";
// import { addProduct, fetchProduct } from "./Redux/Actions/Product-Action";
import { addProduct, fetchProduct } from "../Component/ReduxToolKite/Slices/Product-Slice";

const ReactReduComp = () => {
  let BankeState = useSelector((state) => state.bank);
  let ProductState = useSelector((state) => state.product);
  let [addProductbut, setAddprbut] = useState(ProductState);

  let dispatch = useDispatch();
  let [amount, setAmount] = useState();

  useEffect(() => {}, []);

  return (
    <div className="ReactReduComp">
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-2 lectur8Aside">
            <div className="cente">
              <h1>Lecture 11</h1>
            </div>
          </div> */}
          <div className="col-12 ProductsTablestyle">
            <div className="container">
              <div className="row">
                <h1 className="my-5 text-center bg-danger py-3 ">
                  Alaa El Naggar 72 Redux Bank System
                </h1>

                <div className="mb-3 d-flex align-items-center mb-5">
                  <h3
                    htmlFor="exampleFormControlInput1"
                    id="labbbb"
                    className="form-label col-4"
                  >
                    Your Total Bank Balance :{" "}
                  </h3>
                  <div className=" mb-3 col-6">
                    <h1 className=" form-control text-center fs-3 fw-bold">
                      {BankeState}
                    </h1>
                  </div>
                </div>
                <div className="mb-3 col-6 m-auto mb-4">
                  <input
                    type="number"
                    className="form-control text-center fs-3"
                    // id="input"
                    placeholder="Enter Your Amount Before Click The Buttons"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 col-12 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-success  w-25 me-2 fw-bold "
                    id="widthdraw"
                    onClick={() => {
                      dispatch(withdraw(+amount));
                    }}
                  >
                    WithDraw
                  </button>
                  <button
                    type="button"
                    className="btn btn-success w-25 fw-bold"
                    onClick={() => {
                      dispatch(deposite(+amount));
                    }}
                    // id="deposit"
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center  my-5">
              <h1 className="text-center">ProductState</h1>
              {addProductbut.map(
                (pro) =>
                  pro.id && (
                    <h1 className="me-3 text-center pb-4"> {pro.title}</h1>
                  )
              )}
              <div className="d-flex text-center  flex-wrap">
                {ProductState.map((pro) =>
                  pro.id ? (
                    " "
                  ) : (
                    <h6
                      className="me-3 text-center border border-3 p-3 "
                      style={{ width: "23%" }}
                    >
                      {" "}
                      {pro.title}
                    </h6>
                  )
                )}
              </div>
              <div className="bbtn">
                <button
                  type="button"
                  className="btn btn-success w-25 fw-bold"
                  onClick={() => {
                    dispatch(addProduct({ title: "New-Product" }));
                  }}
                  // id="deposit"
                >
                  Add Product
                </button>
              </div>
            </div>

            <div className="text-center  my-5">
              <div className="text-center">
                {ProductState.map((pro) =>
                  pro.price ? (
                    <h3 className="me-3 text-center border border-3 p-3">
                      PNmaee : {pro.title.slice(0, 10)}
                    </h3>
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="bbtn">
                <button
                  type="button"
                  className="btn btn-success w-25 fw-bold"
                  onClick={() => {
                    dispatch(fetchProduct());
                  }}
                  // id="deposit"
                >
                  Fetch Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactReduComp;
