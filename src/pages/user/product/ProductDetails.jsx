import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetAdvertById } from '../../../services/advert'; // Import the API call
import cars from '../../../assets/images/car.jpg'; // Placeholder image
import loadingGif from '../../../assets/images/Dual Ring@1x-1.0s-200px-200px.gif'; // Import your loading GIF
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details when the component mounts
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await apiGetAdvertById(productId); // Fetch the product by ID
        setProduct(response.data); // Assuming the data is in response.data
        toast.success
      } catch (err) {
        setError('Failed to fetch product details.');
        toast.warning("failed to fetch")
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) return <img src={loadingGif} alt="Loading..." className="mx-auto mt-12" />;
  if (error) return <div>{error}</div>;

  return (
    <div className='flex flex-col lg:flex-row gap-12 px-4 py-8'>
      <div className='flex-1'>
        <img
          src={product.media || cars} // Use product media or a placeholder image
          alt={product.title}
          className='w-full h-[500px] rounded-lg object-cover shadow-lg'
        />
        {/* Image Thumbnails */}
        <div className='flex gap-4 mt-4'>
          {product.additionalImages && product.additionalImages.map((img, index) => (
            <img
              key={index}
              src={img || cars}
              alt='Thumbnail'
              className='w-24 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform'
            />
          ))}
        </div>
      </div>

      <div className='flex-1'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>{product.title}</h1>
        <p className='text-lg text-gray-700 mb-4'>GHC {product.price}</p>
        <p className='text-gray-600 mb-4'>{product.description}</p>
        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>Details</h2>
        <ul className='list-disc list-inside text-gray-600'>
          <li><strong>Category:</strong> {product.category}</li>
          <li><strong>Rating:</strong> {product.rating} / 5</li>
          <li><strong>Location:</strong> {product.location}</li>
          {/* Add more product details as needed */}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
