import React from 'react';
import Hero from './Hero';
import SIgnInModal from '../../../pages/dashboard/auth/component/SIgnInModal';
import SignInModal from '../../../pages/dashboard/auth/component/SIgnInModal';
import SignUpModal from '../../../pages/dashboard/auth/component/SignUpModal';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center bg-teal-600 h-[70px] px-4'>
        <h1 className='font-bold text-3xl text-white'>Tomame</h1>
        
        <div className='flex items-center gap-4'>
          <button className='border-2 border-white text-white rounded-full px-4 py-2 hover:bg-white hover:text-teal-600 transition'>
            Sell
          </button>
          <button className=' flex flex-row gap-2 bg-white text-teal-600 rounded-full px-4 py-2 hover:bg-teal-200 transition'>
            Sign In
          </button>
          <div className="flex flex-row gap-2 bg-white text-teal-600 rounded-full px-4 py-2 hover:bg-teal-200 transition">
    <SignInModal />
</div>

          
        </div>
      </div>

      {/* <Hero/> */}
    </>
  );
};

export default Navbar;