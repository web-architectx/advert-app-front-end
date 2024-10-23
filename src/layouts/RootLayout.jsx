import React from 'react'
// import Navbar from '../components/Navbar'
import Navbar from '../../src/pages/component/Navbar'
import Footer from '../components/Footer'

const RootLayout = ({children}) => {
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default RootLayout
