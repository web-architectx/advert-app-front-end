// src/components/Profile.js
import React from 'react';
import Image from '../../../../assets/images/pp.jpeg'
import { FaLock } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
    return (
        <div className="w-[320px] bg-white rounded-xl shadow-xl p-6 mt-[30px] ">
            {/* Profile Heading */}
            <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">Profile</h1>

            {/* Profile Image and Info */}
            <div className="flex items-center justify-center mb-6">
                <img
                    src={Image}
                    alt="Profile"
                    className="h-20 w-20 rounded-full border-4 border-teal-500 shadow-md"
                />
                <div className="ml-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">Sergey Serge</h3>
                    <p className="text-sm text-gray-500">ss@ussr.com</p>
                </div>
            </div>

            {/* Settings Heading */}
            <h2 className="text-lg font-semibold text-gray-600 mb-4 border-b pb-2">Settings</h2>

            {/* Change Password Section */}
            <div className="flex items-center mb-6 text-gray-700 hover:text-teal-600 cursor-pointer transition duration-300 ease-in-out">
                <FaLock size={20} className="mr-2" />
                <span className="text-base font-medium">Change Password</span>
            </div>

            {/* Logout Button */}
            <button className="flex items-center justify-center w-full bg-teal-600 text-white py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 ease-in-out hover:shadow-lg">
                <FiLogOut size={20} className="mr-2" />
                <span className="text-lg font-semibold">Logout</span>
            </button>
        </div>
    );
};

export default Profile;
