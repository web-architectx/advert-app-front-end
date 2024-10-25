import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetAdvertById } from '../../../services/advert';
import loadingGif from '../../../assets/images/Dual Ring@1x-1.0s-200px-200px.gif';
import { toast } from 'react-toastify';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ProductDetails = ({ token }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await apiGetAdvertById(productId, token);
        setProduct(response);
        toast.success("Product loaded successfully");
      } catch (err) {
        setError('Failed to fetch product details.');
        toast.warning("Failed to fetch product details");
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId, token]);

  if (loading) return <img src={loadingGif} alt="Loading..." className="mx-auto mt-12" />;
  if (error) return <div className="text-center text-red-500 mt-4">{error}</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-12 px-4 py-8">
      {/* Left Column */}
      <div className="flex-1">
        <img
          src={`https://savefiles.org/${product.image}?shareable_link=435`}
          alt={product.title}
          className="w-full h-[500px] rounded-lg object-cover shadow-lg"
        />
        <div className="flex gap-4 mt-4">
          {product.additionalImages && product.additionalImages.map((img, index) => (
            <img
              key={index}
              src={`https://savefiles.org/${img}?shareable_link=435`}
              alt="Thumbnail"
              className="w-24 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.title}</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Details</h2>
        <p className="text-lg text-gray-700 mb-4">GHC {product.price}</p>
        <p className="text-gray-600 mb-4 text-justify">{product.description}</p>
        
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-2">Details</h2>
        <ul className="list-disc list-inside text-gray-600 mb-8">
          <li><strong>Category:</strong> {product.category}</li>
          <li><strong>Rating:</strong> {product.rating} / 5</li>
          <li><strong>Location:</strong> {product.location}</li>
        </ul> */}

        {/* Vendor Contact Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-700 mb-6">Contact Vendor</h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href={`mailto:${product.vendorEmail}`}
              className="bg-blue-600 flex items-center gap-3 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105 no-underline"
            >
              <MdOutlineMail size={25} />
              Email
            </a>
            <a
              href={`tel:${product.vendorPhone}`}
              className="bg-green-600 flex items-center gap-3 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition-transform transform hover:scale-105 no-underline"
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
