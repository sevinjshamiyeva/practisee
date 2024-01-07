import React from 'react'
import { useFormik } from 'formik';
import { Axios } from 'axios';
import { Button, message, Space } from 'antd';
import {useNavigate} from "react-router-dom"

function Register() {
  const navigate=useNavigate()
    const { handleSubmit, handleChange } = useFormik({
		initialValues: {
			username:"",
            email:"",
            password:""
		},
		onSubmit: async (values) => {
			console.log(values);
      try {
 const res= await fetch("http://localhost:3000/api/users/",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });console.log(res)
  if(res.status===200){
  message.success("qeydiyyat ugurla tamamlandi")
  navigate("/login")
  }
      } catch (error) {
        console.log(error)
      }
		},
	});
  return (
    <>
    <form action="" onSubmit={handleSubmit} style={{width:"200px"}}>
        <input type="text" name='username' placeholder='username' onChange={handleChange}/>
        <br />
        <input type="text" name='email' placeholder='email'  onChange={handleChange} /> <br />
        <input type="text" name='password' placeholder='password' onChange={handleChange}/> <br />
        <button type='submit'>qeydiyyatdan kec</button>

    </form>
    
    </>
  )
}

export default Register