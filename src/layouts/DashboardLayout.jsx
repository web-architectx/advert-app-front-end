import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DashboardLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <div className='flex flex-row bg-white  '> */}
      <div className='flex flex-row bg-gray-200  '>
        <Sidebar />
        <div>
        {/* <div className='mt-[15vh]'> */}
          {/* <div className='w-[80vw]' >content goes here</div> */}
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default DashboardLayout
