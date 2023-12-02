import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUS = Object.freeze({
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
  totalQuantity: 0,
  totalPrice: 0,
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
    increaseQuantity: (state, action) => {
      const index = state.cart.findIndex((curElem) => {
        return curElem.id === action.payload.id;
      });
      if (index >= 0) {
        if (state.cart[index].quantity < 4) {
          state.cart[index].quantity += 1;
        } else {
          alert(`cannot add more than 4 items of  ${action.payload.title} `);
        }
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.cart.findIndex((curElem) => {
        return curElem.id === action.payload;
      });
      if (index >= 0) {
        if (state.cart[index].quantity > 0) {
          state.cart[index].quantity -= 1;
        } else {
          alert("cannot ");
        }
      }
    },
    removeFromCart: (state, action) => {
      const temp = state.cart.filter((elem) => {
        return elem.id !== action.payload;
      });
      state.cart = temp;
    },
    getTotal: (state, action) => {
      const { tq, tp } = state.cart.reduce(
        (accum, elem) => {
          const { price, quantity } = elem;
          let product = price * quantity;
          accum.tq = accum.tq + quantity;
          accum.tp = accum.tp + product;
          return accum;
        },
        { tq: 0, tp: 0 }
      );
      state.totalQuantity = tq;
      state.totalPrice = tp;
    },
    clearCart: (state, action) => {
      state.cart = [];
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
export const {
  setCategory,
  addToCart,
  setSearch,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  getTotal,
  clearCart,
} = productSlice.actions;
