import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-row justify-between	 bg-lime-600 h-[70px] '>
      {/* <div className='flex flex-row gap-[20px] bg-lime-600 h-[70px] justify-end'> */}
      <h1 className='mt-[30px] font-bold text-3xl pl-[1rem]	'>Tomame</h1>
      <button className='border-2 border rounded-full px-4 py-2 h-[3rem] w-[5rem] m-4'>Sell</button>
      {/* <div>
        <button className='border-2 border rounded-full px-4 py-2 '>Sell</button>
      </div> */}
    </div>


  <div className='h-[40vh] bg-lime-600 w-[80rem] '>
    <button className=' flex justify-center  bg-white w-[30rem] rounded-[30px] mx-auto h-[3rem] my-auto  pt-[1rem] pr-[10rem]	pb[3rem]'>what are you looking for?</button>
  </div>
    </>

  

  )

}

export default Navbar
