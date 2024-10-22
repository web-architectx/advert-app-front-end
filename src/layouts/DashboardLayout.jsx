import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-row bg-gray-100  '>
      <Sidebar/>
      <div className='mt-[20vh]'>
      <div >content goes hhere</div>
      <Outlet/>
      </div>
      
      </div>
    </div>
  )
}

export default DashboardLayout
