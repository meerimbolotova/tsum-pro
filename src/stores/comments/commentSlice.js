import { createSlice } from "@reduxjs/toolkit";
import { getComments, getUser, postComments } from "./commentActions";

const initialState = {
  comments: [],
  userInfo: [],
};

export const commentSlice = createSlice({
  name: "@comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      });
  },
});
export const commentsReducer = commentSlice.reducer;
