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
      <main>
      <Outlet/>
      </main>
     
      <Footer/>
    </div>
  )
}

export default RootLayout
