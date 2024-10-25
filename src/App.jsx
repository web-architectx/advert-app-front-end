import { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/user/home';
import About from './pages/about';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/overview';
import Settings from './pages/dashboard/settings';
import Login from './pages/dashboard/auth/Login';

import ProductDetails from '../src/pages/user/product/ProductDetails';
import RootLayout from './layouts/RootLayout';
import Category from './pages/user/category';
import SignUpModal from './pages/dashboard/auth/component/SignUpModal';
import AuthGuard from '../src/layouts/user/Components/AuthGuard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './pages/dashboard/product/Products';
import SingleProduct from './pages/dashboard/product/SingleProduct';
import 'react-responsive-modal/styles.css';
import Categories from './pages/user/category';
import AllProducts from './pages/user/product';
import Register from './pages/dashboard/auth/Register';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "products", //all products
          element: <AllProducts />
        },
        // {
        //   path: "categories", //all categories
        //   element: <Categories />
        // },
        // {
        //   path: "/products",
        //   element: <ProductDetails />
        // },
        {
          path: "/products/:productId", //to view a single product
          element: <ProductDetails />
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "add/product",
          element: <Products />,
        },
        // {
        //   path: "register",
        //   element: <SignUpModal />,
        // },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          path: "overview",
          element: (
            <AuthGuard>
              <Overview />
            </AuthGuard>
          )
        },
        {
          path: "products",
          element: (
            <AuthGuard>
              <Products />
            </AuthGuard>
          )
        },
        {
          path: "products/:id",
          element: (
            <AuthGuard>
              <SingleProduct />
            </AuthGuard>
          )
        },
        // {
        //   path: "products/edit",
        //   element: (
        //     <AuthGuard>
        //       <ProductEdit />
        //     </AuthGuard>
        //   )
        // },
        {
          path: "settings",
          element: (
            <AuthGuard>
              <Settings />
            </AuthGuard>
          )
        }
      ]
    }
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;