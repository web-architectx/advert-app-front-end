import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiGetAdverts } from '../../../services/advert'; // Import the API call
import cars from '../../../assets/images/car.jpg'; // Placeholder image
import Hero from '../../../layouts/user/Components/Hero';

const Home = () => {
  const [hotDeals, setHotDeals] = useState([]);
  const [specialCategories, setSpecialCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiGetAdverts(); // Fetch all products
        setHotDeals(response.data.slice(-5)); // Last 5 products for hot deals
        setSpecialCategories(response.data.slice(0, 8)); // First 8 products for categories
      } catch (err) {
        setError('Failed to fetch products.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Hero />
      <div className='flex flex-col justify-center items-center px-4'>
        <h2 className='text-4xl font-bold mt-12 text-gray-800 border-b-2 border-gray-300 pb-2'>
          Categories
        </h2>

        <div className='flex overflow-hidden whitespace-nowrap mt-12 py-4 w-full justify-center'>
          <div className='flex flex-row gap-8 animate-marquee'>
            {specialCategories.map((category, index) => {
              const imageUrl = category.media ? `https://savefiles.org/${category.media}?shareable_link=435` : cars; // Fallback to placeholder

              console.log('Image URL:', imageUrl); // Debugging log

              return (
                <div
                  key={index}
                  className='flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform border border-gray-200'
                >
                  <img
                    src={imageUrl}
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
              );
            })}
          </div>
        </div>

        <h1 className='text-3xl font-bold mt-16 text-gray-800'>Hot Deals</h1>

        <div className='flex flex-row pb-10 gap-8 mt-8'>
          <div className='flex-none relative'>
            <Link to="/products">
              <img
                src={cars}
                alt="Home Appliances"
                className='w-[420px] h-[630px] rounded-lg object-cover shadow-xl transition-transform transform hover:scale-105'
              />
              <div className='absolute bottom-4 left-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-lg'>
                Home Appliances
              </div>
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            {hotDeals.slice(0, 4).map((deal, index) => (
              <Link to={`/products/${deal.id}`} key={index} className='relative'>
                <img
                  src={deal.media || cars}
                  alt={deal.title}
                  className='w-[320px] h-[300px] rounded-lg object-cover shadow-lg transition-transform transform hover:scale-105'
                />
                <div className='absolute bottom-4 left-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-lg'>
                  {deal.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
