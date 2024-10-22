import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import DashboardLayout from '../src/layouts/DashboardLayout';
// import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/overview';
import Settings from './pages/dashboard/settings';
import Adverts from './pages/dashboard/advert';
import Login from './pages/dashboard/auth/Login';
import Register from './pages/dashboard/auth/Register';
import Advertst from './pages/dashboard/advert/Advertst';
// import Adverts from '../pages/dashboard/ads'
// import Password from './pages/dashboard/settings/password/Password';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "login",
      element: <Login />,
         
    },
    {
      path: "add-advert",
      element: <Advertst />,
         
    },
    {
      path: "register",
      element: <Register />,
         
    },
    // {
    //   path: "/dashboard/overview",
    //   element: <About />
    // },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
       
      children: [
        {
          index: true,
          path:"overview",
          element: <Overview />
        },
        {
          // index:true,
          path: "adverts",
          // element: <Adverts/>,
          element: <Adverts/>
             
        
        },
        {
          path: "settings",
          element: <Settings />,
             
        }
       
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App
