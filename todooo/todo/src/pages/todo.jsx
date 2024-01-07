import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo,delTodo } from '../redux/slice/todoSlice'
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    const todo = useSelector((state) => state.todos.todo)
  const dispatch = useDispatch()

    const [val,setVal]=useState("")

  return (
    <>
    <input type="text" value={val} onChange={(e)=>{
    e.preventDefault()
    setVal(e.target.value)
    console.log(e.target.value)
    }} />
    <button onClick={()=>{
        setVal("")
        dispatch(addTodo(val))
    }}>add</button>
    <ul>
        {todo && todo.map((elem,id)=>{
            return ( <li key={id}>{elem.title} <button onClick={()=>{
                dispatch(delTodo(elem.id))
                console.log(id)
                console.log(elem.id)
            }}>delete</button></li>)
        })}
    </ul>
    </>
   
  )
}

export default Todo