// import './App.css';
// import WelcomeFunction from "./Component-Lecture-2/WelcomeFunction";
// import WelcomeClass from "./Component-Lecture-2/WelcomeClass";

// import ProductFunction from "./Component-Lecture-2/ProductFunction";
// import LoginPage from "./Component-Lecture-3/LoginPage";
// import ProductList from "./Component-Lecture-3/ProductList";
// import ListAndMap from "./Component-Lecture-3/ListAndMap";

// import CounterClass from "./Component-Lecture-4/CounterClass";
// import CounterFunction from "./Component-Lecture-4/CounterFunction";

// import FetchProductList from "./Component-Lecture-4/FetchProductList";
import Navbar from "./Component-Lecture-5/Components/Navbar";
import LandPage from "./Component-Lecture-5/Components/LandPage";
import SticProductLi from "./Component-Lecture-5/Components/SticProductLi";
import FetchProductli from "./Component-Lecture-5/Components/FetchProductli";
import FetchProductDetails from "./Component-Lecture-5/Components/FetchProductDetails";

import { Routes, Route } from "react-router-dom";
import Home from "./Component-Lecture-5/Components/Home";
import CrudHomePage from "./Component-Lecture-6/Component/CrudHomePage";
import ProductsTable from "./Component-Lecture-6/Component/ProductsTable";
import ProductsBoxPage from "./Component-Lecture-6/Component/ProductsBoxPage";
import AddProductPage from "./Component-Lecture-6/Component/AddProductPage";
import ViewPage from "./Component-Lecture-6/Component/ViewPage";
import UpdateProductpage from "./Component-Lecture-6/Component/UpdateProductpage";
import Lecture8 from "./Component-Lecture-8/Component/Lecture8";
import ReactReduComp from "./Component-Lecture-11/Component/ReactReduComp";
// import ReduxToolKiteComp from "./Component-Lecture-11/Component/ReduxToolKiteComp";

import ReduxToolKiteComp from"./Component-Lecture-11/Component/ReduxToolKiteComp";
function App() {
  return (
    <div className="App">
      {/* <h1>HHHHHHHHHHHHHHHHHHHHHHHHH</h1> */}
      {/* <h2>-------------------- Function Component ---------------------------------</h2> */}
      {/* <WelcomeFunction/> */}
      {/* <h2>----------------------------------------------------</h2> */}
      {/* <WelcomeFunction name="Alaa" age="30" jop="Front end" company="Xceed" color="Green"/> */}
      {/* <h2>-------------------- Class Component ---------------------------------</h2> */}
      {/* <WelcomeClass /> */}
      {/* <h2>-----------------------------------------------------</h2> */}
      {/* <WelcomeClass name="Alaa" age="30" jop="Front end" company="Xceed" color="Green"/> */}
      {/* <h2>-----------------------------------------------------</h2> */}
      {/* <h2>-------------------- Product Function Component ---------------------------------</h2> */}
      {/* <ProductFunction name="Product Screen" number="1" description="good"/> */}
      {/* <ProductFunction name="Product Screen" number="2" description="ver "/> */}
      {/* <ProductFunction name="Product Screen" number="3" description="bad"/> */}
      {/* <h2>-----------------------------------------------------</h2> */}

      {/* <h2>-----------------------------------------------------</h2> */}
      {/* <h2>-------------------- Product Class Component ---------------------------------</h2> */}
      {/* <WelcomeClass /> */}
      {/* <h2>-----------------------------------------------------</h2> */}
      {/* <WelcomeClass name="Alaa" age="30" jop="Front end" company="Xceed" color="Green"/> */}
      {/* <h2>-----------------------------------------------------</h2> */}

      {/* <LoginPage/> */}
      {/* <ProductList/> */}
      {/* <ListAndMap/> */}
      {/* <CounterClass/> */}
      {/* <CounterFunction/> */}
      {/* <FetchProductList/> */}

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <LandPage />
              <SticProductLi />
              <FetchProductli /> */}

              <Home />
            </>
          }
        />
        <Route
          path="/ecommerc"
          element={
            <>
              <LandPage />
              <SticProductLi />
              <FetchProductli />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/staticp"
          element={
            <>
              <SticProductLi />
            </>
          }
        />
        <Route
          path="/daynamic"
          element={
            <>
              <FetchProductli />
            </>
          }
        />
        <Route
          path="/Productdetails/:pid"
          element={
            <>
              {" "}
              <FetchProductDetails />{" "}
            </>
          }
        />
        <Route
          path="/CrudHome"
          element={
            <>
              {" "}
              <CrudHomePage />{" "}
            </>
          }
        />
        <Route
          path="/ProBox"
          element={
            <>
              {" "}
              <ProductsBoxPage />{" "}
            </>
          }
        />
        <Route
          path="/ProTable"
          element={
            <>
              {" "}
              <ProductsTable />{" "}
            </>
          }
        />
        <Route
          path="/addProductPage"
          element={
            <>
              {" "}
              <AddProductPage />{" "}
            </>
          }
        />
        <Route
          path="Viewpagedetails/:pid"
          element={
            <>
              {" "}
              <ViewPage />{" "}
            </>
          }
        />
        <Route
          path="UpdateProduct/:pid"
          element={
            <>
              {" "}
              <UpdateProductpage />{" "}
            </>
          }
        />
        <Route
          path="lecture8"
          element={
            <>
              {" "}
              <Lecture8 />{" "}
            </>
          }
        />
        <Route
          path="lecture11-React-Redux"
          element={
            <>
              {" "}
              <ReactReduComp />{" "}
            </>
          }
        />
        <Route
          path="lecture11-Redux-ToolKite"
          element={
            <>
              {" "}
              <ReduxToolKiteComp />{" "}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
