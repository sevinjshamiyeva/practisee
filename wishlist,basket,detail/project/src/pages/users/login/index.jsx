import React from 'react'
import { useFormik } from 'formik';
import { Button, message, Space } from 'antd';
import {useNavigate} from "react-router-dom"


function Login() {
    const navigate=useNavigate()
    const { handleSubmit, handleChange } = useFormik({
		initialValues: {
            email:"",
            password:""
		},
		onSubmit: async(values) => {
			console.log(values);
            try {
                const res= await fetch("http://localhost:3000/api/users/login",{
                   method: "POST",
                   headers: {
                     "Content-Type": "application/json",
                   },
                   body: JSON.stringify(values),
                 });console.log(res)
                 if(res.status===401){
                 message.success("login islemi ugurla tamamlandi")
                 navigate("/")
                 }
                     } catch (error) {
                       console.log(error)
                     }
		},
	});
  return (
    <>
    <form action="" onSubmit={handleSubmit} style={{width:"200px"}}>
        <input type="text" name='email' placeholder='email'  onChange={handleChange} /> <br />
        <input type="text" name='password' placeholder='password' onChange={handleChange}/> <br />
        <button type='submit'>qeydiyyatdan kec</button>

    </form>
    
    </>
  )
}

export default Login