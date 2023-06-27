import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./stores/cards/cardSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    auth: authReducer,
  },
});
