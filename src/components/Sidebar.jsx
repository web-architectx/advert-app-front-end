import React from 'react'
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";


{/* get rid of the overview */ }
const Sidebar = () => {
  return (
    <>
    {/* <div className='flex flex-col'> */}
      <div className='flex flex-row'>
        <div className='flex flex-row'>

          <div className="div bg-teal-100 h-[100vh] w-[15vw]">
            <div className='flex flex-row' >
              <RiDashboardHorizontalFill size={27} />
              <span className='text-[20px]'>Dashboard</span>
              <MdNavigateNext size={30} className='' />
            </div>
          </div>
          <div className='vertical-line h-[100vh] border-l-[0.5px] border-dotted bg-emerald-900'>

          </div>
        </div>
        <div className="side-navbar h-[8vh] w-[99vw] bg-teal-900">
          dsad
        </div>
      </div>
      hhh
      {/* </div> */}
    </>
  )
}

export default Sidebar
