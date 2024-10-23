import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center bg-teal-600 h-[70px] px-4'>
        <h1 className='font-bold text-3xl text-white'>Tomame</h1>
        
        <div className='flex items-center gap-4'>
          <button className='border-2 border-white text-white rounded-full px-4 py-2 hover:bg-white hover:text-teal-600 transition'>
            Sell
          </button>
          <button className='bg-white text-teal-600 rounded-full px-4 py-2 hover:bg-teal-200 transition'>
            Sign In
          </button>
        </div>
      </div>

      <div className='h-[40vh] bg-teal-600 w-full flex items-center'>
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          className='bg-white text-teal-600 w-[30rem] rounded-full h-[3rem] mx-auto pl-4 focus:outline-none focus:ring-2 focus:ring-teal-300 transition'
        />
      </div>
    </>
  );
};

export default Navbar;