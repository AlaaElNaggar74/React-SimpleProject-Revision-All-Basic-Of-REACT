import { addProductValue, getProductValue } from "../Actions/Product-Action";

export let ProductReducer = (
  state = [{ id: 1, title: "First Product -Before Click ADD" }],
  action
) => {
  switch (action.type) {
    case addProductValue:
      return [...state, action.payload];
    case getProductValue:
      return [...state,...action.payload];
    default:
      return state;
  }
};
