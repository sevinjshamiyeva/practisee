import Register from "../pages/users/register";
import Basket from "../pages/users/basket";
import Detail from "../pages/users/detail";
import Home from "../pages/users/home";
import Login from "../pages/users/login";
import UserRoot from "../pages/users/userRoot";
import Wishlist from "../pages/users/wishlist";

export const rout=[
    {
        path: "/",
        element: <UserRoot/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "/basket",
            element: <Basket/>
          },{
            path: "/wishlist",
            element: <Wishlist/>
          },{
            path: "/detail/:id",
            element:<Detail/>
          },
          {
            path: "/login",
            element:<Login/>
          },
          {
            path: "/register",
            element:<Register/>
          },
        ],
      },
]