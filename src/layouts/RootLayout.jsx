import React from 'react'
// import Navbar from '../components/Navbar'
import Navbar from '../../src/pages/component/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
