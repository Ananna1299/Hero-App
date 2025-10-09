import React from 'react';

const Loader = () => {
    return (
        <div className='mt-11'>
            <div className="flex flex-col justify-center items-center">
      <div className="w-12 h-12">
        <span className="loading loading-spinner text-info"></span>
      </div>
      <h2 className="text-2xl font-bold  text-blue-500">
        LOADING
      </h2>
    </div>
        </div>
    );
};

export default Loader;