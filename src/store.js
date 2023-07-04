import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./stores/cards/cardSlice";
import { authReducer } from "./auth/authSlice";
import { crudReducer } from "./stores/crud/crudSlice";
import { cartReducer } from "./stores/cart/cartSlice";
import { commentsReducer } from "./stores/comments/commentSlice";

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    auth: authReducer,
    cinema: crudReducer,
    cart: cartReducer,
    comments: commentsReducer,
  },
});
