import React from 'react'
// import Navbar from '../components/Navbar'
import Navbar from './user/Components/Navbar'
import Footer from './user/Components/Footer'
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
