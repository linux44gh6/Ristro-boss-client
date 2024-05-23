
import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";

import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "../MainLayout/DashBoard";
import MyCart from "../Pages/MyCart";
import PrivetRoute from "./PrivetRoute";
import AllUser from "../Components/Admin/AllUser";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/ourMenu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/ourShop/:category',
          element:<OurShop></OurShop>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
      {
        path:'/dashboard/myCart',
        element:<MyCart></MyCart>
      },
      {
        path:'/dashboard/allUser',
        element:<AllUser></AllUser>
      }
      ]
    }
  ]);
export default router  