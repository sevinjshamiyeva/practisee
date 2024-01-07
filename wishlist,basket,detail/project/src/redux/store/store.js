import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "../slice/basketSlice"
import productReducer from '../slice/productSlice'

export const store = configureStore({
  reducer: {
    baskets:basketReducer,
    products:productReducer

  },
})