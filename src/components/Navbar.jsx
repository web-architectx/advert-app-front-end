// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";
import { PiBellRinging } from "react-icons/pi";
import ProfileImage from '../assets/images/pp.jpeg';
import Profile from '../pages/dashboard/auth/component/Profile';

const Navbar = () => {
 
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Toggle the profile visibility
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Close profile if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest('.profile-container')) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <div className='h-[15vh] w-[80.7vw] bg-white border-shadow flex flex-row justify-between left-0 right-0 justify-self-end fixed'>
        {/* <div className=' h-[15vh]  w-[84.9vw] bg-white border-shadow flex flex-row justify-between left-0 right-0 fixed justify-self-end'> */}

      {/* Left section with menu icon and search */}
      <div className='flex flex-row p-6 gap-2'>
        <FiAlignJustify size={40} />
        <input type="text" className='h-12 w-[250px] rounded-[10px] border-2' />
      </div>

      {/* Right section with settings, notifications, user icon, and profile image */}
      <div className='flex flex-row gap-4 p-6 relative'>
        <div className='flex flex-row mt-4 gap-4'>
          <IoMdSettings size={30} />
          <PiBellRinging size={30} />
          <RiUserFill size={30} />
        </div>
        
        {/* Profile image that toggles the small profile */}
        <img 
          src={ProfileImage} 
          alt="Profile" 
          className='rounded-full h-[60px] w-[60px] cursor-pointer profile-container' 
          onClick={toggleProfile} 
        />

        {/* Dropdown Profile */}
        {isProfileOpen && (
          <div className="absolute right-0 top-[80px] w-[300px] z-50 profile-container">
            <Profile /> {/* Render the Profile component when clicked */}
          </div>
        )}
      </div>
    </div>
  );
};
 

export default Navbar;
