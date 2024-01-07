import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todo:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        let obj={
            id:uuidv4(),
            title:action.payload
        }
     state.todo.push(obj)
    },
    delTodo:(state,action)=>{
        state.todo=state.todo.filter(elem=>elem.id !=action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo,delTodo } = todoSlice.actions

export default todoSlice.reducer