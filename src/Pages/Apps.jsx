import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';

const Apps = () => {
    const {products } = useApps()
    const [search, setSearch] = useState('')
    const searchData = search.trim().toLocaleLowerCase()
    const searchedApps = searchData
    ? products.filter(app =>
        app.title.toLocaleLowerCase().includes(searchData)
      )
    : products
    return (
        <div className='w-10/12 mx-auto'>
                <div  className='text-center py-20 px-6'>
        <h1 className='font-bold text-3xl mb-2'>Our All Applications</h1>
        <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
    </div>
    <div className='flex justify-between py-10 items-center'>
        <h1 className='text-2xl font-bold'>
        
          
            {searchedApps.length === 0 
             ? 
             <p>No App Found</p> 
            : 
            <p>({searchedApps.length}) Apps Found</p>
}
        
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
    </div>
     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10'>
          {searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
    </div>



            
    </div>
    );
};

export default Apps;