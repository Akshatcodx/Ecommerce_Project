import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";

const store = configureStore({
  reducer: {
    productSlice,
  },
});
export default store;
