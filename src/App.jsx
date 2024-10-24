import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/user/home';
import About from './pages/about';
import DashboardLayout from '../src/layouts/DashboardLayout';
// import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/overview';
import Settings from './pages/dashboard/settings';
import Adverts from './pages/dashboard/advert';
import Login from './pages/dashboard/auth/Login';
import Register from './pages/dashboard/auth/Register';
import Advertst from './pages/dashboard/advert/Advertst';

import ProductDetails from '../src/pages/user/product/ProductDetails';

import AdvertEdit from './pages/dashboard/advert/AdvertEdit';
import RootLayout from './layouts/RootLayout';
import Category from './pages/user/category';
import ProductDetail from './pages/user/product/ProductDetails';
import SignUpModal from './pages/dashboard/auth/component/SignUpModal';
import SignInModal from './pages/dashboard/auth/component/SIgnInModal';

// import Adverts from '../pages/dashboard/ads'
// import Password from './pages/dashboard/settings/password/Password';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        {
          index: true,
          // path: "home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "categories",
          element: <Category />
        },
        {
          path: "details",
          element: <ProductDetails />
        },
        // {
        //   path: "/single/product",
        //   element: <ProductDetails />
        // },
        {
          path: "login",
          element: <SignInModal />,

        },
        {
          path: "add-advert",
          element: <Advertst />,

        },
        {
          path: "register",
          element: <SignUpModal />,

        },
      ]
      
    },
    // {
    //   // index: true,
    //   path: "home",
    //   element: <Home />
    // },
    // {
    //   path: "/",
    //   element: <Home />
    // },

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
          path: "overview",
          element: <Overview />
        },
        {
          // index:true,
          path: "adverts",
          // element: <Adverts/>,
          element: <Adverts />


        },
        {
          // index:true,
          path: "adverts/edit",
          // element: <Adverts/>,
          element: <AdvertEdit />


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
