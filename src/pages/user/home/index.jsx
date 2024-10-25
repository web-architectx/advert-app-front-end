import React from 'react';
import cars from '../../../assets/images/car.jpg'; // Make sure the paths are correct
import Hero from '../../../layouts/user/Components/Hero';

const Home = () => {
  return (
    <>
    <Hero/>
    <div className='flex flex-col justify-center items-center px-4'>
      {/* Enhanced Heading for Latest Items */}
      <h2 className='text-4xl font-bold mt-12 text-gray-800 border-b-2 border-gray-300 pb-2'>
        Latest Items
      </h2>

      {/* Beautified Category Section with marquee animation */}
      <div className='flex overflow-hidden whitespace-nowrap mt-12 py-4 w-full justify-center'>
        <div className='flex flex-row gap-8 animate-marquee'>
          {[
            { img: cars, title: 'Vehicle', ads: '77 ads' },
            { img: cars, title: 'Fashion' },
            { img: cars, title: 'Phones & Tablets' },
            { img: cars, title: 'Furniture' },
            { img: cars, title: 'Agriculture & Food' },
            { img: cars, title: 'Sports Equipment' },
            { img: cars, title: 'Babies & Kids' },
            { img: cars, title: 'Pets' },
          ].map((category, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform border border-gray-200'
            >
              <img
                src={category.img}
                alt={category.title}
                className='w-[150px] h-[150px] rounded-[10px] object-cover shadow-md'
              />
              <h1 className='text-lg font-semibold mt-4 text-gray-700'>
                {category.title}
              </h1>
              {category.ads && (
                <h4 className='text-sm text-gray-500'>{category.ads}</h4>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Heading for Categories */}
      <h1 className='text-3xl font-bold mt-16 text-gray-800'>Categories</h1>

      {/* Main Image Section */}
      <div className='flex flex-row pb-10 gap-8 mt-8'>
        {/* Large Main Image */}
        <div className='flex-none relative'>
          <img
            src={cars}
            alt="Home Appliances"
            className='w-[420px] h-[630px] rounded-lg object-cover shadow-xl transition-transform transform hover:scale-105'
          />
          {/* Category Label */}
          <div className='absolute bottom-4 left-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-'>
          {/* <div className='absolute bottom-4 left-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-lg'> */}
            Home Appliances
          </div>
        </div>

        {/* Grid Section with smaller images */}
        <div className='grid grid-cols-2 gap-8'>
          {[
            { img: cars, title: 'Babies and Kids' },
            { img: cars, title: 'Luxury Car' },
            { img: cars, title: 'Beauty Products' },
            { img: cars, title: 'Beautiful Homes' },
          ].map((category, index) => (
            <div key={index} className='relative'>
              <img
                src={category.img}
                alt={category.title}
                className='w-[320px] h-[300px] rounded-lg object-cover shadow-lg transition-transform transform hover:scale-105'
              />
              {/* Category Label */}
              <div className='absolute bottom-4 left-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-lg'>
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
