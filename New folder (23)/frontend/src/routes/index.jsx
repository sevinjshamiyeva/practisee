import AddProducts from "../pages/addProducts";
import Basket from "../pages/basket";
import Home from "../pages/home";
import UserRout from "../pages/userRout";

export const routers = [
  {
    path: "/",
    element: <UserRout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/addProducts",
        element: <AddProducts />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
