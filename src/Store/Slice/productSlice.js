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
  category: "all",
  search: "",
  cart: [],
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex((elem) => {
        return elem.id === action.payload.id;
      });
      if (index >= 0) {
        if (state.cart[index].quantity >= 5) {
          alert(`cannot add more than 10 items of ${action.payload.title} `);
        } else {
          state.cart[index].quantity = state.cart[index].quantity + 1;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.search = "";
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
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
export const { setCategory, addToCart, setSearch } = productSlice.actions;
