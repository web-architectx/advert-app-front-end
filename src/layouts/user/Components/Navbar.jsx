import React from 'react';
import Hero from './Hero';
import SIgnInModal from '../../../pages/dashboard/auth/component/SIgnInModal';
import SignInModal from '../../../pages/dashboard/auth/component/SIgnInModal';
import SignUpModal from '../../../pages/dashboard/auth/component/SignUpModal';
import { Modal } from 'react-responsive-modal';
import Login from '../../../pages/dashboard/auth/modals/Login';
import Register from '../../../pages/dashboard/auth/modals/Register';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true); 

 // Function to toggle between Login and Sign Up
 const toggleModal = () => {
  setIsLogin(!isLogin);
};
  return (
    <>
      <div className='flex flex-row justify-between items-center bg-teal-600 h-[70px] px-4'>
      <Link to="/" className='no-underline'> 
        <h1 className='font-bold text-3xl text-white'>Tomame</h1>
      </Link>
    

        <div className='flex items-center gap-4'>
          <button 
            className="button flex flex-row gap-2 bg-white text-teal-600 rounded-full px-4 py-2 transition duration-200 hover:bg-teal-600 hover:text-teal-700 font-bold"
            onClick={() => setOpen(true)}
          >
            Sell
          </button>
          

        </div>
        
      </div>
      <Modal open={open} onClose={() => setOpen(false)} classNames="rounded">
        {isLogin ? (
          <Login toggleModal={toggleModal}/>
        ) : (
          <Register toggleModal={toggleModal}/>
        )}
      </Modal>

      {/* <Hero/> */}
    </>
  );
};

export default Navbar;  