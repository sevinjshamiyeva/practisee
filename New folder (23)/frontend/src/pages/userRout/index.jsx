import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../layout/navbar";

function UserRout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default UserRout;
