import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
export const getAllproducts = createAsyncThunk(
   "getAllproducts",
    async () => {
      const response = await axios("http://localhost:3000/api/product")
      console.log(response.data)
      return response.data
    }
  )
  

const initialState = {
  error:"",
  loading:false,
 product:[],
 isLogin:false
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // reducers: {
  //   increment: (state) => {
  //     state.value += 1
  //   },
    
  // },
  // istek atilan an
  extraReducers: (builder) => {
    builder.addCase(getAllproducts.pending, (state, action) => {
      state.loading=true
        state.product=action.payload
      })
      //datalar getirdikden sonra
    builder.addCase(getAllproducts.fulfilled, (state, action) => {
      state.loading=false
      console.log(action.payload)
      state.product=action.payload
    })

    //error gelerse
    builder.addCase(getAllproducts.rejected, (state, action) => {
        state.error=action.payload
      })
  },
})


export const { } = productSlice.actions

export default productSlice.reducer