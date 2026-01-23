import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "dell-xps-13",
      name: "Dell XPS 13 White",
      description: "Lorem ipsum dolor sit amet...",
      price: 1799.99,
      qty: 1,
      rating: 4.5,
      image: "/assets/dell-xps.jpg",
    },
    {
      id: "iphone-11-navy",
      name: "iPhone 11 Navy Blue",
      description: "Lorem ipsum dolor sit amet...",
      price: 729.99,
      qty: 3,
      rating: 4.5,
      image: "/assets/iphone-navy.jpg",
    },
    {
      id: "iphone-11-white",
      name: "iPhone 11 Milky White",
      description: "Lorem ipsum dolor sit amet...",
      price: 619.99,
      qty: 1,
      rating: 4.5,
      image: "/assets/iphone-white.jpg",
    },
  ],
  totalPrice: 5849.93,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.qty += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        state.totalPrice -= item.price * item.qty;
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
  },
});

export const { increaseQty, decreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
