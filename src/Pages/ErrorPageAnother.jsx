import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ErrorImg from "../assets/App-Error.png"

const ErrorPageAnother = () => {
    
    return (
          <>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <img src={ErrorImg} alt="404 Error" className="w-80 md:w-96 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Oops, page not found!
      </h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>
      
    </div>
     
    </>
    );
};

export default ErrorPageAnother;