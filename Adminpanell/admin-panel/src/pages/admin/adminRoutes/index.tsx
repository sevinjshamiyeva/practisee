import React from 'react'
import Navbar from '../dashboard'
import { Outlet } from 'react-router-dom'
import Sider from 'antd/es/layout/Sider';



type Props = {}

function AdminRout({}: Props) {
  return (
    <>
    <Sider/>
   <Outlet />
    </>
  )
}

export default AdminRout