import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiAdvertisementFill, RiProductHuntFill } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";
import { FiLogOut, FiSettings, FiSearch } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [loading, setLoading] = useState(false); // State for loading
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoading(true); // Set loading to true when starting logout

        // Clear the authentication token
        localStorage.removeItem("token");

        // Show a success toast message
        toast.success("You have successfully logged out", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // Redirect to the login page after 3 seconds
        setTimeout(() => {
            setLoading(false); // Reset loading state
            navigate("/login");
        }, 3000);
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            // Perform search action here (e.g., navigate or fetch search results)
            console.log("Searching for:", searchQuery);
            // Clear search input after search (optional)
            setSearchQuery("");
        }
    };

    return (
        <div className="flex flex-col h-screen w-[18vw] bg-teal-600 text-white shadow-xl p-6">
            {/* Header */}
            <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wider">
                Dashboard
            </h2>

            {/* Search Bar */}
            <div className="relative mb-8">
                <input
                    type="text"
                    className="w-full p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-lime-600 rounded-lg hover:bg-lime-700"
                    onClick={handleSearch}
                >
                    <FiSearch size={20} />
                </button>
            </div>

            {/* Navigation */}
            <div className="flex-grow">
                <ul className="space-y-6">
                    <li>
                        <Link
                            to="overview"
                            className="flex items-center p-3 text-white rounded-lg transition-colors no-underline duration-300 hover:bg-lime-700"
                        >
                            <GrOverview size={28} className="mr-4" />
                            <span className="text-lg font-medium  selection:">Overview</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/dashboard/products"
                            className="flex items-center no-underline p-3 text-white rounded-lg transition-colors duration-300 hover:bg-teal-100 hover:text-teal-800"
                        >
                            <RiProductHuntFill size={28} className="mr-4" />
                            <span className="text-lg font-medium">Products</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="categories"
                            className="flex items-center p-3 no-underline text-white rounded-lg transition-colors duration-300 hover:bg-teal-700"
                        >
                            <BiCategory size={28} className="mr-4" />
                            <span className="text-lg font-medium">Categories</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="settings"
                            className="flex items-center no-underline p-3 text-white rounded-lg transition-colors duration-300 hover:bg-lime-600"
                        >
                            <FiSettings size={28} className="mr-4" />
                            <span className="text-lg font-medium">Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Logout Button */}
            <div className="mt-auto">
                <button
                    className={`flex items-center w-full p-3 bg-red-600 text-white rounded-lg transition duration-300 hover:bg-red-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleLogout}
                    disabled={loading} // Disable button while loading
                >
                    <FiLogOut size={25} className="mr-3" />
                    {loading ? "Logging out..." : "Logout"}
                </button>
            </div>

            {/* Footer */}
            <div className="mt-10 text-center">
                <p className="text-sm">© 2024 Web Architectx</p>
            </div>

            {/* Toast Container for showing toast messages */}
            <ToastContainer />
        </div>
    );
};

export default Sidebar;
