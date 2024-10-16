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
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/overview';
import Settings from './pages/dashboard/settings';
import Password from './pages/dashboard/settings/password/Password';

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
    // {
    //   path: "/dashboard/overview",
    //   element: <About />
    // },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          // path:"overview",
          element: <Overview />
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
