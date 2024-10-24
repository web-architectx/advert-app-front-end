import React from 'react'

const Hero = () => {
  return (
    <div className='h-[40vh] bg-teal-600 w-full flex items-center'>
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          className='bg-white text-teal-600 w-[30rem] rounded-full h-[3rem] mx-auto pl-4 focus:outline-none focus:ring-2 focus:ring-teal-300 transition'
        />
      </div>
  )
}

export default Hero