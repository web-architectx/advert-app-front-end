import React from 'react'
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiAdvertisementFill } from "react-icons/ri";



{/* get rid of the overview */ }
const Sidebar = () => {
  return (
    <>
      {/* <div className='flex flex-col'> */}
      <div className='flex flex-row '>
        <div className='flex flex-row'>

          <div className="div bg-white  border-shadow h-[100vh] w-[15vw] ">
            <Link to="settings" className='flex flex-row mt-[100px] gap-4 items-center ml-4'>
              <SiSimpleanalytics size={27} />
              <span className='text-[18px]'>Analytics</span>
              <MdNavigateNext size={30} />
            </Link>
            {/* <hr /> */}
            <div className='flex flex-row mt-[20px] gap-4 ml-4' >
              < RiAdvertisementFill 
              size={27} />
              <span className='text-[20px]'>Adverts</span>
              <MdNavigateNext size={30} className='' />
            </div>
            <div className='flex flex-row mt-[20px] gap-4' >
              <SiSimpleanalytics size={27} />
              <span className='text-[20px]'>Dashboard</span>
              <MdNavigateNext size={30} className='' />
            </div>
            <div>
            <select>
        <option value="By the way" className='w-[120px] bg-teal-300'>BTW</option>
        <option value="Talk to you later">TTYL</option>
        <option value="To be honest">TBH</option>
        <option value=" I don’t know">IDK</option>
    </select>
            </div>
          </div>
          <div className='vertical-line h-[100vh] border-l-[0.5px] border-dotted bg-emerald-900'>
          </div>
        </div>

      </div>
      {/* hhh */}
      {/* </div> */}
    </>
  )
}

export default Sidebar
