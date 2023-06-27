import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};
export const cardSlice = createSlice({
  name: '@cards',
  initialState,
  reducers: {},
});

export const cardReducer = cardSlice.reducer;
