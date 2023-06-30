import { createSlice } from '@reduxjs/toolkit';
import { addCinema, getCards } from './crudAction';

const initialState = {
  allCinema: [],
  oneCinema: null,
};

export const crudSlice = createSlice({
  name: '@crud',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCards.fulfilled, (state, action) => {
        state.allCinema = action.payload;
      })
      .addCase(addCinema.fulfilled, (state, action) => {
        state.allCinema.push(action.payload);
      });
  },
});

export const crudReducer = crudSlice.reducer;
