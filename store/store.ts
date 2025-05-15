import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/Reducer/cart";
import paymentReducer from "@/Reducer/payment";
import authReducer from "@/Reducer/auth";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
    auth: authReducer,
  },
});

export default store;
