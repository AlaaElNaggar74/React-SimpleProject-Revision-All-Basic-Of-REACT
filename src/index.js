import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter } from "react-router-dom";
// import { RecoilRoot } from "recoil";

import { Provider } from "react-redux";
import { store } from "./Component-Lecture-11/Component/ReduxToolKite/StoreReduxToolKite";
// import { store } from "./Component-Lecture-11/Component/Redux/StoreRedux";// to play react-redux

// to play redux-tool-kite
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RecoilRoot> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </RecoilRoot> */}
    </BrowserRouter>
  </React.StrictMode>
);
