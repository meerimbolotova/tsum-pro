import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_CRUD } from '../../helpers/consts';

function getAuth() {
  let token = JSON.parse(localStorage.getItem('token'));
  const Authorization = `Bearer ${token.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
}

export const getCards = createAsyncThunk('@cards/getCards', async () => {
  try {
    const config = getAuth();
    let data = await axios.get(API_CRUD, config);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addCinema = createAsyncThunk(
  '@cards/addCinema',
  async ({ formData, navigate }, { dispatch }) => {
    try {
      let config = getAuth();
      await axios.post(API_CRUD, formData, config);
      dispatch(getCards());
    } catch (error) {
      console.log(error);
    }
  },
);
