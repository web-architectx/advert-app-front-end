import React from 'react';
import cars from '../../../assets/images/car.jpg'; // Adjust paths as necessary

const Categories = () => {
  return (
    <div className='flex flex-col py-4 px-4'>
      {/* Heading */}
      <h2 className='text-4xl font-bold mt-12 text-gray-800 border-b-2 border-gray-300 pb-2'>
        Vehicles
      </h2>

      {/* Filters and Sort */}
      <div className='flex justify-between items-center mt-8'>
        <div className='flex gap-4'>
          {/* Filter by Price */}
          <select className='border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:ring'>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Best Sellers</option>
          </select>

          {/* Filter by Category */}
          <select className='border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:ring'>
            <option>All Categories</option>
            <option>Cars</option>
            <option>Bikes</option>
            <option>Trucks</option>
            <option>Luxury Vehicles</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='Search Products...'
            className='border border-gray-300 py-2 px-4 rounded-l-lg focus:ring outline-none'
          />
          <button className='bg-gray-800 text-white py-2 px-4 rounded-r-lg'>
            Search
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12'>
        {[
          { img: cars, title: 'Luxury Car 1', price: '$50,000', rating: 4.5 },
          { img: cars, title: 'Luxury Car 2', price: '$60,000', rating: 4.8 },
          { img: cars, title: 'SUV Model X', price: '$40,000', rating: 4.2 },
          { img: cars, title: 'Convertible Z', price: '$70,000', rating: 4.7 },
          { img: cars, title: 'Truck Pro', price: '$80,000', rating: 4.6 },
          { img: cars, title: 'Compact Car', price: '$20,000', rating: 4.1 },
        ].map((product, index) => (
          <div
            key={index}
            className='relative bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform border border-gray-200'
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className='w-full h-[250px] rounded-lg object-cover shadow-md'
            />

            {/* Product Details */}
            <div className='mt-4'>
              <h1 className='text-lg font-semibold text-gray-700'>
                {product.title}
              </h1>
              <p className='text-sm text-gray-500 mt-2'>{product.price}</p>

              {/* Rating */}
              <div className='flex items-center mt-2'>
                {[...Array(5)].map((star, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.62 4.985a1 1 0 00.95.69h5.205c.969 0 1.371 1.24.588 1.81l-4.205 3.048a1 1 0 00-.364 1.118l1.62 4.985c.3.921-.755 1.688-1.54 1.118l-4.205-3.048a1 1 0 00-1.176 0l-4.205 3.048c-.784.57-1.84-.197-1.54-1.118l1.62-4.985a1 1 0 00-.364-1.118L2.19 10.413c-.783-.57-.38-1.81.588-1.81h5.205a1 1 0 00.95-.69l1.62-4.986z' />
                  </svg>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className='absolute bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-lg'>
              View Advert
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center mt-12'>
        <button className='bg-gray-800 text-white py-2 px-4 rounded-lg mx-2'>
          Previous
        </button>
        <button className='bg-gray-800 text-white py-2 px-4 rounded-lg mx-2'>
          1
        </button>
        <button className='bg-gray-800 text-white py-2 px-4 rounded-lg mx-2'>
          2
        </button>
        <button className='bg-gray-800 text-white py-2 px-4 rounded-lg mx-2'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Categories;
