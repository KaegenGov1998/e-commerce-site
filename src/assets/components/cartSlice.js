// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

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
      image: "/assets/dell-xps.jpg",
    },
    {
      id: "iphone-11-navy",
      name: "iPhone 11",
      color: "Navy Blue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      rating: 4.5,
      price: 729.99,
      quantity: 3,
      image: "/assets/iphone-navy.jpg",
    },
    {
      id: "iphone-11-white",
      name: "iPhone 11",
      color: "Milky White",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      rating: 4.5,
      price: 619.99,
      quantity: 1,
      image: "/assets/iphone-white.jpg",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
