import { depositeValue, withdrawValue } from "../Actions/Bank-Action";

export let BankReducer = (state = 1000, action) => {
  switch (action.type) {
    case withdrawValue:
      return state - action.payload;
    case depositeValue:
      return state + action.payload;
    default:
      return state;
  }
};