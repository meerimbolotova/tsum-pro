import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')),
};

export const cartSlice = createSlice({
  name: '@cart',
  initialState,
  reducers: {
    getCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { getCart } = cartSlice.actions;
