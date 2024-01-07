import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/basket">basket</Link></li>
        <li><Link to="/wishlist">wishlist</Link></li>
    </ul>
    </>
  )
}

export default Navbar