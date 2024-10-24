import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import loadingGif from '../../../assets/images/loading.gif';
import PostAdvertModal from '../components/PostAdvertModal';
import Picture from '../../../assets/images/picture.jpg';
import { FaList } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ITEMS_PER_PAGE_GRID = 3; // Number of adverts per page for grid view
const ITEMS_PER_PAGE_LIST = 2; // Number of adverts per page for list view

const Products = () => {
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const getAdverts = async () => {
    try {
      const response = await axios.get(`https://library-app-mk1q.onrender.com/library`);
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

  // Determine the correct items per page based on the view mode
  const ITEMS_PER_PAGE = viewMode === 'grid' ? ITEMS_PER_PAGE_GRID : ITEMS_PER_PAGE_LIST;
  const totalPages = Math.ceil(adverts.length / ITEMS_PER_PAGE);

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

  const displayedAdverts = adverts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className="h-2/5 mx-auto my-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <img src={loadingGif} alt="Loading..." />
            <p className="text-lg">Please wait...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col  min-h-screen">
      <Outlet />

      {/* Top section with Post Advert Modal */}
      <div className="flex justify-end mt-4 px-6">
        <PostAdvertModal />
      </div>

      <h2 className="text-2xl font-bold mb-4 px-6 mx-auto">Adverts</h2>

      {/* View Toggle Buttons */}
      <div className="mb-4 flex justify-center space-x-4 px-6">
        <button
          onClick={() => setViewMode('grid')}
          className={`flex items-center px-4 py-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          <CiGrid41 className="mr-2" />
          <span>Grid View</span>
        </button>

        <button
          onClick={() => setViewMode('list')}
          className={`flex items-center px-4 py-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          <FaList className="mr-2" />
          <span>List View</span>
        </button>
      </div>

      {/* Display Adverts Based on View Mode */}
      <div className="flex-1 overflow-auto p-4 min-h-full">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-3  gap-6">
            {displayedAdverts.length > 0 ? (
              displayedAdverts.map((advert) => (
                <div key={advert.id} className="bg-white h-[350px] w-full mx-auto my-auto rounded-lg shadow-md overflow-hidden">
                  {/* Image Section */}
                  <a href="#" className="block">
                    <img
                      src={advert.imageUrl || Picture}
                      alt={advert.title}
                      className="w-full h-[200px] object-cover" // Adjusted height for grid images
                    />
                  </a>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{advert.title || "Great product name goes here"}</h3>
                    <p className="text-gray-600">Price: ${advert.price || "N/A"}</p>
                    <div className="mt-4 flex flex-row gap-2 space-x-2">
                      <FaEye size={20} className='text-blue-500' />
                      <FaPen size={20} className='text-green-500' />
                      <MdDelete size={25} className='text-red-500' />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No adverts available.</p>
            )}
          </div>
        ) : (
          <div className="w-4/5 mx-auto my-auto">
            {displayedAdverts.length > 0 ? (
              displayedAdverts.map((advert) => (
                <article key={advert.id} className="card card-product-list bg-white rounded-lg shadow-md mb-4">
                  <div className="row no-gutters">
                    <aside className="col-md-3">
                      <a href="#" className="img-wrap">
                        <img src={advert.imageUrl || Picture} alt={advert.title} />
                      </a>
                    </aside>
                    <div className="col-md-6">
                      <div className="info-main">
                        <a href="#" className="h5 title">{advert.title || "Great product name goes here"}</a>
                        <div className="rating-wrap mb-3">
                          <ul className="rating-stars">
                            <li className="stars-active w-80">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="label-rating">7/10</div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>
                    <aside className="col-sm-3">
                      <div className="info-aside">
                        <div className="price-wrap">
                          <span className="price h5">GHC{advert.price || "100"}</span> {/* Hard-coded price */}
                          <del className="price-old">GHC 250</del> {/* Hard-coded old price */}
                        </div>
                        <p className="text-success">Free Delivery</p>
                        <br />
                        <p className=''>
                          <a href="#" className="btn btn-block"><FaEye size={40} className='text-blue-700' /></a>
                          <a href="#" className="btn btn-light btn-block">
                            <i className="fa fa-heart"></i>
                            <span className="text"><FaPen size={35} className='text-green-500' /></span>
                          </a>
                          <a href="#" className="btn btn-light btn-block">
                            <i className="fa fa-heart"></i>
                            <span className="text"><MdDelete size={40} className='text-red-500' /></span>
                          </a>
                        </p>
                      </div>
                    </aside>
                  </div>
                </article>
              ))
            ) : (
              <p>No adverts available.</p>
            )}
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center w-full px-6 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white bg-blue-500 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white bg-blue-500 rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
