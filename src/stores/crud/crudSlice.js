import { createSlice } from '@reduxjs/toolkit';
import { getCinemas, getGenres, getOneCinema, oneCinema } from './crudAction';

const initialState = {
  allCinema: [],
  oneCinema: {},
  genres: [],
};

export const crudSlice = createSlice({
  name: '@crud',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCinemas.fulfilled, (state, action) => {
        state.allCinema = action.payload;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(getOneCinema.fulfilled, (state, action) => {
        state.oneCinema = action.payload;
      });
  },
});

export const crudReducer = crudSlice.reducer;
