import React from 'react';
import RootLayout from '../../src/layouts/RootLayout';
import cars from '../../src/assets/images/car.jpg';
import fashion1 from '../../src/assets/images/fashion1.jpg';
import phones from '../../src/assets/images/phones.jpg';
import furniture from '../../src/assets/images/furniture.jpg';
import agric from '../../src/assets/images/food.jpg';
// Uncomment and ensure these paths are correct
import photo from '../../src/assets/images/homeappliance.jpg'; 
import sports from '../../src/assets/images/sports (2).jpg'; 
import babies from '../../src/assets/images/babies.jpg'; 
import animals from '../../src/assets/images/cats.jpg'; 
 

const Home = () => {
  return (
    <>
     
      {/* Category Section */}
      <div className='h-[30vh] bg-gray-200 flex flex-row gap-4 justify-center mt-8 p-4'>
        {[
          { img: cars, title: 'Vehicle', ads: '77 ads' },
          { img: fashion1, title: 'Fashion' },
          { img: phones, title: 'Phones & Tablets' },
          { img: furniture, title: 'Furniture' },
          { img: agric, title: 'Agriculture & Food' },
          { img: sports, title: 'Sports Equipment' },
          { img: babies, title: 'Babies and Kids' },
          { img: animals, title: 'Pets' },
        ].map((category, index) => (
          <div key={index} className='flex flex-col justify-center items-center'>
            <img
              src={category.img}
              alt={category.title}
              className='w-[50px] h-[50px] rounded-full object-cover'
            />
            <h1 className='text-lg font-semibold'>{category.title}</h1>
            {category.ads && <h4 className='text-sm text-gray-500'>{category.ads}</h4>}
          </div>
        ))}
      </div>

      {/* Main Image Section */}
      <div className='flex flex-row pb-10 gap-4'>
        <div className='flex-none'>
          <img src={photo} alt="Home Appliances" className='w-[200px] h-[565px] m-[10px] rounded-[10px] mt-[45px]' />
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-2 gap-4 mt-10'>
          <img src={babies} alt="Sneakers" className='w-[320px] h-[300px] rounded-[10px]' />
          <img src={babies} alt="Luxury Car" className='w-[320px] h-[300px] rounded-[10px]' />
          <img src={babies} alt="Beauty Products" className='w-[320px] h-[230px] rounded-[10px]' />
          <img src={babies} alt="Beautiful Homes" className='w-[320px] h-[230px] rounded-[10px]' />
        </div>
      </div>
    
    </>
  );
};

export default Home;