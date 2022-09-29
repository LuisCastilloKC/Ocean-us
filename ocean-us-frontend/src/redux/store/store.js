import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./features/eventSlice"
import AuthReducer from "./features/authSlice"

export const store = configureStore({
  reducer: {
    event: eventReducer,
    auth: AuthReducer
  },
});
