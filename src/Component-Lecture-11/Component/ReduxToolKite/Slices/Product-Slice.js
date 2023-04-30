import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "ProductSlice/fetchByIdStatus",
  async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return data;
  }
);

export let ProductSlice = createSlice({
  initialState: [],
  name: "ProductSlice",
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return (state = action.payload);
      // state.push(action.payload);
    });
  },
});

export const { addProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
