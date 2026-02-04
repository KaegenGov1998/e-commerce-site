import { createSlice } from "@reduxjs/toolkit";
import DellXPS13 from "../assets/DellXPS13.svg";
import Iphone11NavyBlue from "../assets/Iphone11NavyBlue.svg";
import Iphone11MilkyWhite from "../assets/Iphone11MilkyWhite.svg";

const initialState = {
  items: [
    {
      id: "dell-xps-13",
      name: "Dell XPS 13",
      color: "White",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      rating: 4.5,
      price: 1799.99,
      quantity: 1,
      image: DellXPS13,
    },
    {
      id: "iphone-11-navy",
      name: "iPhone 11",
      color: "Navy Blue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      rating: 4.5,
      price: 729.99,
      quantity: 3,
      image: Iphone11NavyBlue,
    },
    {
      id: "iphone-11-white",
      name: "iPhone 11",
      color: "Milky White",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      rating: 4.5,
      price: 619.99,
      quantity: 1,
      image: Iphone11MilkyWhite,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
