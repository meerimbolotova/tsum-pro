import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { crudReducer } from './stores/crud/crudSlice';
import { cartReducer } from './stores/cart/cartSlice';
import { commentsReducer } from './stores/comments/commentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cinema: crudReducer,
    cart: cartReducer,
    comments: commentsReducer,
  },
});
