
import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Menu from "../Components/Homes/Menu";
import OurMenu from "../Pages/OurMenu";

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
        }
      ]
    },
  ]);
export default router  