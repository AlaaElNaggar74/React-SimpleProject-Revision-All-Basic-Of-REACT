import {createStore,combineReducers,applyMiddleware} from "redux"
import { BankReducer } from "./Reducers/Bank-Reducer";
import { ProductReducer } from "./Reducers/Product-Reducer";
import thunk from "redux-thunk";

let appReducer=combineReducers({
  bank:BankReducer,
  product:ProductReducer,
});
export  let store = createStore(appReducer,applyMiddleware(thunk));

// export  let store = createStore({
//   bank:BankReducer,
//   // product:ProductReducer,
// });













// let allreducer = Redux.combineReducers({
//   bank: bankreducer,
//   product: producteducer,
// });

// let store=ReactDOm.createStore(BankReducer);