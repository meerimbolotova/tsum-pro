import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "@comments",
  initialState,
  reducers: {},
});
export const commentsReducer = commentSlice.reducer;
