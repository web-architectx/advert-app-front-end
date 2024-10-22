import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiAdvertisementFill } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-[15vw] bg-gray-800 text-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
      <div className="flex-grow">
        <ul className="space-y-6">
          <li>
            <Link to="/" className="flex items-center p-2 transition duration-300 rounded-lg hover:bg-gray-700">
              <GrOverview size={30} className="mr-3" />
              Overview
            </Link>
          </li>
          <li>
            <Link to="adverts" className="flex items-center p-2 transition duration-300 rounded-lg hover:bg-gray-700">
              <RiAdvertisementFill size={30} className="mr-3" />
              Adverts
            </Link>
          </li>
        </ul>
        <Link to="settings" className="flex items-center p-2 mt-8 transition duration-300 rounded-lg hover:bg-gray-700">
          <SiSimpleanalytics size={27} className="mr-3" />
          <span>Analytics</span>
          <MdNavigateNext size={20} className="ml-auto" />
        </Link>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">© 2024 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;