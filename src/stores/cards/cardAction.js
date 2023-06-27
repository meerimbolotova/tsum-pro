import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_CARDS } from '../../helpers/consts';

export const getCards = createAsyncThunk('@cards/getCards', async () => {
  let { data } = await axios(API_CARDS);
  return data;
});
