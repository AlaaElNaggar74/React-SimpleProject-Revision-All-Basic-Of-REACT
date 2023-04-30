import { createSlice } from "@reduxjs/toolkit";

export let BankSlice = createSlice({
  initialState: 1000,
  name: "BankSlice",
  reducers: {
    withdraw: (state,action) => {
      return state=state - action.payload;
    },
    deposite: (state,action) => {
      return state=state + action.payload;

    },
  },
});

export const { withdraw, deposite } = BankSlice.actions;

export default BankSlice.reducer;

