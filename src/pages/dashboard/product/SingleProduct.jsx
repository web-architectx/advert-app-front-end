import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import EditModal from '../../../pages/dashboard/components/EditModal';  

const SingleCard = ({ advert, handleDelete }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
      <a href="#" className="block">
        <img
          src={`https://savefiles.org/${advert.media}?shareable_link=436`}
          alt={advert.title}
          className="w-full h-64 object-cover" // Ensures image is consistently sized
        />
      </a>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {advert.title || "Great product name goes here"}
        </h3>

        <p className="text-gray-600 mt-2">
          Price: ${advert.price || "N/A"}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* View Icon */}
          <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-200">
            <FaEye size={20} />
          </a>

          {/* Edit Button */}
          <EditModal productId={advert.id} />

          {/* Delete Icon */}
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

export default SingleCard;
