
import { configureStore } from "@reduxjs/toolkit";
import BankReducer from "./Slices/Bank-Slice";
import ProductReduces from "./Slices/Product-Slice";
export let store = configureStore({
  reducer: {
    bank: BankReducer,
    product: ProductReduces,
  },
});

