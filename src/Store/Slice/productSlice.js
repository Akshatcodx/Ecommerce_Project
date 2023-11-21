import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUS = Object.freeze({
  IDLE: "IDLE",
  ERROR: "ERROR",
  LOADING: "LOADING",
});
const initialState = {
  products: [],
  status: STATUS.LOADING,
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUS.LOADING;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.products = action.payload;
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    console.log("try running ");
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    const data = await response.data.products;
    return data;
  } catch (error) {
    console.log(error);
  }
});
export default productSlice.reducer;
