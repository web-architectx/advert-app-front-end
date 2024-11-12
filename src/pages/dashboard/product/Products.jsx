import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loadingGif from '../../../assets/images/loading.gif';
import PostAdvertModal from '../components/PostAdvertModal';
import { FaList, FaEye, FaPlus } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { apiGetAdverts, apiDeleteAdvert } from '../../../services/advert';
import EditAdvertModal from '../../dashboard/components/EditModal';
import Swal from 'sweetalert2';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CreatePost from '../../../pages/dashboard/product/modal/CreatePost';
import Car from '../../../assets/images/car.jpg'

const ITEMS_PER_PAGE_GRID = 3;
const ITEMS_PER_PAGE_LIST = 2;

const Products = () => {
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getAdverts = async () => {
    try {
      const response = await apiGetAdverts();
      setAdverts(response.data);
    } catch (error) {
      console.error("Error fetching adverts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdverts();
  }, []);

  const handleDelete = async (advertId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await apiDeleteAdvert(advertId);
        setAdverts(adverts.filter(advert => advert.id !== advertId));
        Swal.fire('Deleted!', 'Your advert has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting advert:', error.response ? error.response.data : error.message);
        Swal.fire('Error!', 'There was a problem deleting your advert.', 'error');
      }
    }
  };

  const ITEMS_PER_PAGE = viewMode === 'grid' ? ITEMS_PER_PAGE_GRID : ITEMS_PER_PAGE_LIST;
  const totalPages = Math.ceil(adverts.length / ITEMS_PER_PAGE);
  const displayedAdverts = adverts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <img src={loadingGif} alt="Loading..." className="w-16 h-16 mx-auto" />
          <p className="text-lg mt-2">Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Post Advert Button */}
      <button
        onClick={onOpenModal}
        className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white font-medium rounded-md shadow-sm hover:bg-teal-400 focus:outline-none absolute top-4 right-4 transition duration-300"
      >
        <FaPlus size={20} />
        Post Advert
      </button>

      {/* Modal for creating posts */}
      <Modal open={open} onClose={onCloseModal} center>
        <CreatePost />
      </Modal>

      <h2 className="text-3xl font-bold my-6 text-center">Adverts</h2>

      {/* View Mode Toggle */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setViewMode('grid')}
          className={`flex items-center px-4 py-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} transition duration-200`}
        >
          <CiGrid41 className="mr-2" size={20} />
          <span>Grid View</span>
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`flex items-center px-4 py-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} transition duration-200`}
        >
          <FaList className="mr-2" size={20} />
          <span>List View</span>
        </button>
      </div>

      {/* Advert List/Grid View */}
      <div className="flex-1 overflow-auto px-4">
        {viewMode === 'grid' ? (
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-[160px]">
          {/* <div className=" ml-[70px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
            {displayedAdverts.length > 0 ? (
              displayedAdverts.map((advert) => (
                <div key={advert.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Link to={`/products/${advert.id}`} className="block">
                    <img
                      src={`https://savefiles.org/${advert.image}?shareable_link=435`}
                      
                      alt={advert.title}
                      className="w-[480px] h-[170px] object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{advert.title}</h3>
                    {/* <p className="text-gray-600">Price: ${advert.price}</p> */}
                    <p className="text-gray-600 line-clamp-2">${advert.description}</p>

                    <div className="mt-4  flex flex-row gap-2">
                    {/* <div className="mt-4 flex justify-between items-center"> */}
                      {/* <FaEye size={20} className="text-blue-500 cursor-pointer" /> */}
                      <EditAdvertModal productId={advert.id} />
                      <MdDelete
                        size={25}
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDelete(advert.id)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No adverts available.</p>
            )}
          </div>
        ) : (
          <div className="space-y-4 ml-[160px]">
  {displayedAdverts.length > 0 ? (
    displayedAdverts.map((advert) => (
      <div key={advert.id} className="bg-white rounded-lg shadow-md p-4">
        <div className="flex">
          <Link to={`/products/${advert.id}`} className="w-1/4">
            <img
        
              src={`https://savefiles.org/${advert.image}?shareable_link=435`}
              alt={advert.title}
              className="w-full h-auto object-cover"
            />
          </Link>
          <div className="w-3/4 pl-4">
            <h3 className="text-xl font-bold">{advert.title}</h3>
            <p className="text-gray-600">Price: ${advert.price}</p>
            <div className="mt-4 flex justify-between items-center">
              {/* <FaEye size={20} className="text-blue-500 cursor-pointer" /> */}
              <EditAdvertModal productId={advert.id} />
              <MdDelete
                size={25}
                className="text-red-500 cursor-pointer"
                onClick={() => handleDelete(advert.id)}
              />
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">No adverts available.</p>
  )}
</div>


        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-100 rounded">{currentPage}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
