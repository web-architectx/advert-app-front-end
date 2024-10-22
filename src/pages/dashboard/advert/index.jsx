import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';  
import loadingGif from '../../../assets/images/Dual Ring@1x-1.0s-200px-200px.gif'; 

const Adverts = () => {
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  const getAdverts = async () => {
    try {
      const response = await axios.get(`https://library-app-mk1q.onrender.com/library`);
      console.log(response.data); // Log the response data
      setAdverts(response.data); // Set the adverts state with the fetched data
    } catch (error) {
      console.log("Error fetching adverts:", error);
    } finally {
      setLoading(false); // Set loading to false after the request completes
    }
  };

  useEffect(() => {
    getAdverts(); // Call the function to fetch adverts
  }, []);

  if (loading) {
    return (
      <div className="h-screen mx-auto my-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white">
            <img 
              src={loadingGif} 
              alt="Loading..." 
              className="w-24 h-24 mb-2" 
            />
            <p className="text-lg">Please wait...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Outlet />
      <h2 className="text-2xl font-bold mb-4">Adverts</h2>
      <div className="overflow-x-auto">
        {adverts.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Description</th>
                {/* Add more columns here if needed */}
              </tr>
            </thead>
            <tbody>
              {adverts.map((advert) => (
                <tr key={advert.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{advert.title}</td>
                  <td className="px-4 py-2 border">{advert.description}</td>
                  {/* Add more advert properties here if needed */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No adverts available.</p>
        )}
      </div>
    </div>
  );
};

export default Adverts;
