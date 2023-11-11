import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import carwashReducer from "./slices/carwashSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    carwash: carwashReducer,
  },
});

export default store;
