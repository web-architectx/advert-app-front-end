import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-[60vh] bg-teal-700 flex flex-col md:flex-row justify-around items-start p-8 gap-8'>
      {/* About Section */}
      <div className='flex flex-col gap-2'>
        <p className='font-bold text-white text-lg'>About</p>
        <p className='text-white'>Privacy Policy</p>
      </div>

      {/* Support Section */}
      <div className='flex flex-col gap-2'>
        <p className='font-bold text-white text-lg'>Support</p>
        <p className='text-white'>support@webarch.com</p>
      </div>

      {/* Resources Section */}
      <div className='flex flex-col gap-2'>
        <p className='font-bold text-white text-lg'>Our Resources</p>
        <div className='flex flex-row gap-4 text-white'>
          <a href="#" className='hover:text-blue-400 transition-colors'>
            <FaFacebookSquare size={24} />
          </a>
          <a href="#" className='hover:text-blue-400 transition-colors'>
            <FaTwitter size={24} />
          </a>
          <a href="#" className='hover:text-blue-400 transition-colors'>
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;