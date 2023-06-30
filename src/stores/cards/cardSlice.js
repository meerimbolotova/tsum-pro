import { createSlice } from "@reduxjs/toolkit";
import { getCards } from "./cardAction";

const initialState = {
  cards: [],
};
export const cardSlice = createSlice({
  name: "@cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      console.log(cards);
    });
  },
});

export const cardReducer = cardSlice.reducer;
