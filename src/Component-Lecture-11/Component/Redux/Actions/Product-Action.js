// import { useDispatch } from "react-redux";

// let dispatch=useDispatch();

export let addProductValue = "ADDPRODUCT";
export let getProductValue = "GETPRODUCT";

export let addProduct = (amount) => {
  let objaddProduct = {
    type: addProductValue,
    payload: amount,
  };
  return objaddProduct;
};
export let getProduct = (amount) => {
  let objaddProduct = {
    type: getProductValue,
    payload: amount,
  };
  return objaddProduct;
};
export let fetchProduct = () => {
  return async (dispatch) => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(getProduct(data)));
  };
};
