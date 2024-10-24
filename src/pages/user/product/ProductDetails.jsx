import React from 'react';
import cars from '../../../assets/images/car.jpg'; // Adjust paths as necessary
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ProductDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-12 px-4 py-8'>
      {/* Product Image Section */}
      <div className='flex-1'>
        <img
          src={cars}
          alt='Luxury Car'
          className='w-full h-[500px] rounded-lg object-cover shadow-lg'
        />
        {/* Image Thumbnails */}
        <div className='flex gap-4 mt-4'>
          {[cars, cars, cars].map((img, index) => (
            <img
              key={index}
              src={img}
              alt='Thumbnail'
              className='w-24 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform'
            />
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className='flex-1'>
        {/* Product Title */}
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>Luxury Car Model X</h1>

        {/* Price */}
        <p className='text-3xl font-semibold text-gray-700 mt-4 mb-4'>$60,000</p>

        {/* Product Ratings */}
        <div className='flex items-center mb-4'>
          {[...Array(5)].map((star, i) => (
            <svg
              key={i}
              className={`w-6 h-6 ${
                i < 4 ? 'text-yellow-500' : 'text-gray-300'
              }`}
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.62 4.985a1 1 0 00.95.69h5.205c.969 0 1.371 1.24.588 1.81l-4.205 3.048a1 1 0 00-.364 1.118l1.62 4.985c.3.921-.755 1.688-1.54 1.118l-4.205-3.048a1 1 0 00-1.176 0l-4.205 3.048c-.784.57-1.84-.197-1.54-1.118l1.62-4.985a1 1 0 00-.364-1.118L2.19 10.413c-.783-.57-.38-1.81.588-1.81h5.205a1 1 0 00.95-.69l1.62-4.986z' />
            </svg>
          ))}
          <span className='ml-2 text-gray-500'>(4.0 Rating)</span>
        </div>

        {/* Description */}
        <p className='text-lg text-gray-600 mt-4 leading-relaxed'>
          This luxury car is equipped with all the latest features, including advanced driving
          technology, a premium interior, and top-notch safety systems. Whether you're cruising
          through the city or taking a long road trip, this car guarantees comfort, style, and
          performance.
        </p>

        {/* Specifications */}
        <div className='mt-8'>
          <h3 className='text-xl font-bold text-gray-700 mb-4'>Specifications</h3>
          <ul className='text-gray-600 text-md space-y-2'>
            <li>- Engine: V8 5.0L</li>
            <li>- Transmission: Automatic</li>
            <li>- Mileage: 10,000 miles</li>
            <li>- Color: Metallic Gray</li>
            <li>- Interior: Leather, Black</li>
            <li>- Fuel Type: Gasoline</li>
          </ul>
        </div>

        {/* Vendor Contact Section */}
        <div className='mt-12'>
          <h3 className='text-xl font-bold text-gray-700 mb-6'>Contact Vendor</h3>

          <div className='flex flex-col sm:flex-row gap-6'>
            {/* Email Button */}
            <a
              href='mailto:johndoe@example.com'
              className='bg-blue-600 flex items-center gap-3 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105 no-underline'
            >
              <MdOutlineMail size={25} />
              Email
            </a>

            {/* WhatsApp Button */}
            <a
  href='tel:+1234567890'
  className='bg-green-600 flex items-center gap-3 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition-transform transform hover:scale-105 no-underline'
>
  <FaWhatsapp size={25} />
  WhatsApp
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
