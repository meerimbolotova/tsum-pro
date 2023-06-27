import { configureStore } from '@reduxjs/toolkit';
import { cardReducer } from './stores/cards/cardSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});
