import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialState: any = {
  payment: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPayment: (state, action) => {
      state.payment = action.payload;
    },
    removePayment: (state) => {
      state.payment = "";
    },
  },
});

export const { addPayment, removePayment } = paymentSlice.actions;

export default paymentSlice.reducer;
