import {createSlice} from "@reduxjs/toolkit"

interface IUser {
  id: number
  name: string
  price: number
  quantity: number
}

const initialState: any = {
  token: "",
  user: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = ""
    },
    addToken: (state, action) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = ""
    },
  },
})

export const {addToken, removeToken, addUser, removeUser} = authSlice.actions

export default authSlice.reducer
