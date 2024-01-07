import { createSlice } from '@reduxjs/toolkit'



const loadInitialState = () => {
  const storedState = localStorage.getItem('cart');
  return storedState ? JSON.parse(storedState) : { basket: [],total: 0 };
};
const initialState = loadInitialState();
const calculateTotal = (basket) => {
  return basket.reduce((total, item) => total + item.quantity * item.price, 0);
};
// const initialState = {
  
//  basket:[],
//  total:0
// }
// const updateLocalStorage = (basketData) => {
//   localStorage.setItem('basketData', JSON.stringify(basketData));
// };
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state,action) => {
      const storedState = localStorage.getItem('cart');
      if (!storedState) {
        localStorage.setItem('cart', JSON.stringify({ basket: state.basket,total: state.total }));
      }

      state.total = calculateTotal(state.basket);
      const findCart=state.basket.find((elem)=>elem._id===action.payload._id);
      if(findCart){
        findCart.quantity=findCart.quantity+1
      }else{
        state.basket.push(action.payload)
      }
      state.total+=action.payload.price
    },
    deleteBasket:(state,action)=>{
      state.basket=state.basket.filter((elem)=>elem._id !==action.payload._id)
      console.log(state.basket)
      state.total-=action.payload.price*action.payload.quantity
    },
    increment:(state,action)=>{
      const findCart=state.basket.find((elem)=>elem._id===action.payload._id);
      findCart.quantity +=1
      state.total+=action.payload.price
      
    },
    decrement:(state,action)=>{
      const findCart=state.basket.find((elem)=>elem._id===action.payload._id);
      
      if(findCart.quantity===1){
        state.basket=state.basket.filter((elem)=>elem._id !=action.payload._id)
      }else{
        findCart.quantity-=1
      }
      state.total-=action.payload.price
       
    }
  },
})


export const { addBasket,deleteBasket,increment,decrement } = basketSlice.actions

export default basketSlice.reducer