import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
       
    </ul>
    </>
  )
}

export default Navbar