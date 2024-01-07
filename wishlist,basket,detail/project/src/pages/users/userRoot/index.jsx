import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../../../layout/navbar'
function UserRoot() {
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}

export default UserRoot