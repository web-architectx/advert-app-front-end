import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import EditModal from '../../../pages/dashboard/components/EditModal';
import { apiGetAdvertById } from '../../../services/advert';

const SingleProduct = ({ advertId, token, handleDelete }) => {
  const [advert, setAdvert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const data = await apiGetAdvertById(advertId, token);
        setAdvert(data);
      } catch (err) {
        setError('Failed to load advert');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAdvert();
  }, [advertId, token]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!advert) {
    return <p className="text-center">Advert not found</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
      <a href="#" className="block">
        <img
          src={`https://savefiles.org/${advert.image}?shareable_link=436`}
          alt={advert.title}
          className="w-full h-64 object-cover"
        />
      </a>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {advert.title || 'Great product name goes here'}
        </h3>
        <p className="text-gray-600 mt-2">Price: ${advert.price || 'N/A'}</p>
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-200">
            <FaEye size={20} />
          </a>
          <EditModal productId={advert.id} />
          <MdDelete
            size={25}
            className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
            onClick={() => handleDelete(advert.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
