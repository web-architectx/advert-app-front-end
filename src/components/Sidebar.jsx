import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiAdvertisementFill } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { RiProductHuntFill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";


const Sidebar = () => {
    const [loading, setLoading] = useState(false); // State for loading
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

    return (
        <div className="flex flex-col h-screen w-[18.4vw] bg-teal-600 text-white shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
            <div className="flex-grow ">
                <ul className="space-y-6">
                    <li>
                        <Link to="overview" className="flex items-center text-white no-underline p-2 transition duration-300 rounded-lg hover:bg-gray-700">
                            <GrOverview size={30} className="mr-3" />
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/products" className="flex items-center p-2 text-white transition duration-300 no-underline rounded-lg hover:bg-gray-700">
                            <RiProductHuntFill 
                            size={30} className="mr-3"/>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="adverts" className="flex items-center p-2 text-white transition duration-300 no-underline rounded-lg hover:bg-gray-700">
                        <BiCategory 

                            size={30} className="mr-3"/>
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
            
            {/* Logout Button */}
            <div className="mt-auto">
                <button
                    className={`flex items-center w-full p-3 mt-4 bg-red-600 text-white rounded-lg transition duration-300 hover:bg-red-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleLogout}
                    disabled={loading} // Disable button while loading
                >
                    <FiLogOut size={25} className="mr-3 " />
                    {loading ? "Logging out..." : "Logout"}
                </button>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-sm">© 2024 Web Architectx</p>
            </div>

            {/* Toast Container for showing toast messages */}
            <ToastContainer />
        </div>
    );
};

export default Sidebar;