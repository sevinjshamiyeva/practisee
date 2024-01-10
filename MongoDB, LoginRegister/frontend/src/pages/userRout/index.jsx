import React from 'react'
import { Outlet  } from "react-router-dom";
import Navbar from '../../layout/navbar';

function UserRout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
    
  )
}

export default UserRout