import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation} from 'react-router';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
   const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, [location]);

   
  
    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
      <Navbar />

     <div className=' flex-1'>
          {loading && <Loader />}
        <Outlet></Outlet>
      </div>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default MainLayout;