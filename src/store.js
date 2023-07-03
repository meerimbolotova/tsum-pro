import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { crudReducer } from './stores/crud/crudSlice';
import { cardReducer } from './stores/cards/cardSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    auth: authReducer,
    cinema: crudReducer,
  },
});
