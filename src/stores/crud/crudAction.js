import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_CRUD, API_GENRES } from "../../helpers/consts";

export function getAuth() {
  let token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
}

export const getCinemas = createAsyncThunk("@cards/getCards", async () => {
  try {
    const config = getAuth();
    let { data } = await axios.get(`${API_CRUD}movies/`, config);
    return data.results;
  } catch (error) {
    console.log(error.response.data);
  }
});

export const getGenres = createAsyncThunk("@genres/getGenres", async () => {
  try {
    let config = getAuth();
    let results = await axios(API_GENRES, config);
    return results.data.results;
  } catch (error) {
    console.log(error.response.data);
  }
});

export const addCinema = createAsyncThunk(
  "@cards/addCinema",
  async ({ formData, navigate }, { dispatch }) => {
    try {
      let config = getAuth();
      await axios.post(`${API_CRUD}movies/`, formData, config);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const deleter = createAsyncThunk(
  "@cinema/deleter",
  async ({ id, navigate }, { dispatch }) => {
    try {
      let config = getAuth();
      await axios.delete(`${API_CRUD}movies/${id}/`, config);
      dispatch(getCinemas());
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getOneCinema = createAsyncThunk(
  "@cinema/oneCinema",
  async (id) => {
    try {
      let config = getAuth();
      let { data } = await axios.get(`${API_CRUD}movies/${id}/`, config);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const editer = createAsyncThunk(
  "@cinema/editer",
  async ({ id, formData, navigate }, { dispatch }) => {
    try {
      let config = getAuth();
      await axios.patch(`${API_CRUD}movies/${id}/`, formData, config);
      dispatch(getCinemas());
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
