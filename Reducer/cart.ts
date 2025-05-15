import {createSlice} from "@reduxjs/toolkit"

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

interface State {
  products: Product[]
}

const initialState: State = {
  products: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id)
      if (index !== -1) state.products[index].quantity += 1
      else state.products.push(action.payload)
    },
    increaseQuantityProduct: (state, action) => {
      const id = action.payload
      state.products.map((product) => {
        if (product.id === id) product.quantity += 1
      })
    },
    decreaseQuantityProduct: (state, action) => {
      const id = action.payload
      const index = state.products.findIndex((product) => product.id === id)

      if (index !== -1) {
        if (state.products[index].quantity > 1) state.products[index].quantity -= 1
        else state.products.splice(index, 1)
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
    updateProduct: (state, action) => {
      const {id, updatedProduct} = action.payload
      const index = state.products.findIndex((product) => product.id === id)
      if (index !== -1) {
        state.products[index] = {...state.products[index], ...updatedProduct}
      }
    },
  },
})

export const {addProduct, removeProduct, updateProduct, decreaseQuantityProduct, increaseQuantityProduct} = cartSlice.actions

export default cartSlice.reducer
