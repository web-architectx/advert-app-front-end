import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { apiGetAdverts } from '../../../services/advert';
// import DashboardLayout from './layouts/DashboardLayout';

const Adverts = () => {
const [adverts, setAdverts] =useState([]);

const getAdverts = async() =>{
  // const
  try {
    const advert = await apiGetAdverts();
    console.log(setAdverts(advert))
    setAdverts(advert)
  } catch (error) {
    console.log("error",error);
  }
}

useEffect(()=>{getAdverts},[])

  return (
    // <DashboardLayout>
      <div>
        <Outlet />
        {/* <span>Adverts</span> */}
        adverts
        <div>
        {adverts.length > 0 ? (
          adverts.map((advert) => (
            <div key={advert.id} className="advert-card">
              <h3>{advert.title}</h3>
              <p>{advert.description}</p>
              {/* You can display other advert properties here */}
            </div>
          ))
        ) : (
          <p>No adverts available.</p>
        )}
        </div>

      </div>
    // </DashboardLayout>
  );
};

export default Adverts;