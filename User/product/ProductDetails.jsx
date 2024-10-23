import React from 'react';
import cars from '../../src/assets/images/car.jpg';
import fashion1 from '../../src/assets/images/fashion1.jpg';
// Import other images...
import RootLayout from '../../src/layouts/RootLayout';

const advertData = [
  { img: cars, title: 'Vehicle', ads: '77 ads' },
  { img: fashion1, title: 'Fashion' },
  // Add other advert data...
];

const ProductDetails = () => {
  const mainAdvert = advertData[0];
  const similarAds = advertData.slice(1);

  return (
    // <RootLayout>
    <div className='container mx-auto p-6'>
      {/* Advert Card */}
      <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
        <h1 className='text-3xl font-bold mb-2'>{mainAdvert.title}</h1>
        <img src={mainAdvert.img} alt={mainAdvert.title} className='w-full h-[400px] object-cover rounded-lg mb-4' />
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold text-teal-600'>$200</h2>
          <button className='bg-teal-600 text-white rounded-full px-4 py-2 hover:bg-teal-700 transition'>
            Contact Seller
          </button>
        </div>
        <h3 className='font-bold text-lg mb-2'>Description</h3>
        <p className='text-gray-700 mb-4'>
          This is an amazing {mainAdvert.title}. Perfect for various needs. In excellent condition.
        </p>
        <button className='flex items-center text-teal-600 border border-teal-600 rounded-full px-4 py-2 hover:bg-teal-600 hover:text-white transition'>
          Save to Favorites
        </button>
      </div>

      {/* Similar Ads Section */}
      <div className='mt-8'>
        <h3 className='font-bold text-lg mb-4'>Similar Ads</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {similarAds.map((ad, index) => (
            <div key={index} className='bg-white border rounded-lg shadow-md p-4'>
              <img src={ad.img} alt={ad.title} className='w-full h-[200px] object-cover rounded-lg mb-2' />
              <h4 className='font-semibold'>{ad.title}</h4>
              {ad.ads && <p className='text-teal-600'>{ad.ads}</p>}
              <button className='mt-2 bg-teal-600 text-white rounded-full px-4 py-1 hover:bg-teal-700 transition'>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </RootLayout>
  );
};

export default ProductDetails;