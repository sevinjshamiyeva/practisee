import Home from "../pages/admin/Home";
import Users from "../pages/admin/Users";
import AddUser from "../pages/admin/addUser";
import AdminRout from "../pages/admin/adminRoutes";
import Navbar from "../pages/admin/dashboard";
import Dashboard from "../pages/admin/dashboard";
import Login from "../pages/admin/login";

export  const routes=[
    {
        path: "/",
        element: <AdminRout/>,
        children: [
          {
            path: "/login",
            element:<Login/>,
          },
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/addUser",
            element: <AddUser/>,
          },
          {
            path: "/users",
            element: <Users/>,
          },
      
        ],
        
}]