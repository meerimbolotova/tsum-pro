import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCinema: [],
  oneCinema: null,
};

export const crudSlice = createSlice({
  name: '@crud',
  initialState,
  reducers: {},
});

export const crudReducer = crudSlice.reducer;
