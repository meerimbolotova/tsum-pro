import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { crudReducer } from './stores/crud/crudSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cinema: crudReducer,
  },
});
