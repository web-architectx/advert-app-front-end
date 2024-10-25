import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiGetAdverts } from '../../../services/advert'; // Import the API call
import cars from '../../../assets/images/car.jpg'; // Placeholder image if needed
import loadingGif from '../../../assets/images/Dual Ring@1x-1.0s-200px-200px.gif'; // Import your loading GIF

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiGetAdverts(); // Fetch products from the API
        setProducts(response.data); // Assuming the data is in response.data
      } catch (err) {
        setError('Failed to fetch products.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term and selected category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <img src={loadingGif} alt="Loading..." className="mx-auto mt-12" />;
  if (error) return <div>{error}</div>;

  return (
    <div className='flex flex-col py-4 px-4'>
      <h2 className='text-4xl font-bold mt-12 text-gray-800 border-b-2 border-gray-300 pb-2'>
        Vehicles
      </h2>

      {/* Filters and Search */}
      <div className='flex justify-between items-center mt-8'>
        <div className='flex gap-4'>
          {/* Filter by Category */}
          <select
            className='border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:ring'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Cars</option>
            <option>SUVs</option>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='bg-gray-800 text-white py-2 px-4 rounded-r-lg'>
            Search
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='relative bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform border border-gray-200'>
            <img
              src={product.media || cars} // Use product media or a placeholder image
              alt={product.title}
              className='w-full h-[250px] rounded-lg object-cover shadow-md'
            />
            <div className='mt-4'>
              <h1 className='text-lg font-semibold text-gray-700'>{product.title}</h1>
              <p className='text-sm text-gray-500 mt-2'>GHC {product.price}</p>
              <div className='flex items-center mt-2'>
                {[...Array(5)].map((star, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.62 4.985a1 1 0 00.95.69h5.205c.969 0 1.371 1.24.588 1.81l-4.205 3.048a1 1 0 00-.364 1.118l1.62 4.985c.3.921-.755 1.688-1.54 1.118l-4.205-3.048a1 1 0 00-1.176 0l-4.205 3.048c-.784.57-1.84-.197-1.54-1.118l1.62-4.985a1 1 0 00-.364-1.118L2.19 10.413c-.783-.57-.38-1.81.588-1.81h5.205a1 1 0 00.95-.69l1.62-4.986z' />
                  </svg>
                ))}
              </div>
            </div>
            <Link to={`/products/${product.id}`}>
              <button className='absolute bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-lg'>
                View 
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination (if needed) */}
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

export default AllProducts;
