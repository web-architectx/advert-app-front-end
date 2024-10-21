import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";
import { PiBellRinging } from "react-icons/pi";
import ProfileImage from '../assets/images/profile.jpg'




const Navbar = () => {
  return (
    <div className=' h-[15vh]  w-[84.9vw] bg-white border-shadow flex flex-row justify-between left-0 right-0 fixed justify-self-end'>
    {/* <div className=' h-[15vh] md:h-[12 vh] w-[100vw] bg-teal-200 flex flex-row'> */}
     <div className='flex flex-row p-4 gap-2'>
     <FiAlignJustify size={40} />
     <input type="text" className='h-12 w-[250px] rounded-[10px] border-2'/>
     </div>

     <div className='flex flex-row  gap-2 p-4 ' >
     <IoMdSettings size={30} />
     <PiBellRinging size={30} />
     <RiUserFill size={30} />
<img src={ProfileImage} alt="img" className='rounded-[20px] mt-[-12px] ' />
     </div> 
    </div>
  )
}

export default Navbar
