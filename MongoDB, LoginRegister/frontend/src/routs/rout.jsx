import Login from "../pages/login";
import Register from "../pages/register";
import UserRout from "../pages/userRout";

export const routers=[
    {
        path: "/",
        element: <UserRout/>,
    
        children: [
          {
            path: "/",
            element: <Login/>,
            
          },
          {
            path: "register",
            element: <Register/>,
            
          },
        ],
      },
]