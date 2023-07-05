import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_AUTH, API_COMMENT } from "../../helpers/consts";
import { getAuth } from "../crud/crudAction";

export const getComments = createAsyncThunk(
  "@comments/getComments",
  async () => {
    try {
      let { data } = await axios.get(API_COMMENT);
      //   console.log(data.results);
      return data.results;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const postComments = createAsyncThunk(
  "@comments/postComments",
  async (obj) => {
    try {
      await axios.post(API_COMMENT, obj);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk("user", async () => {
  try {
    const config = getAuth();
    let { data } = await axios.get(`${API_AUTH}users/`, config);
    return data.results;
  } catch (error) {
    console.log(error.response.data);
  }
});
