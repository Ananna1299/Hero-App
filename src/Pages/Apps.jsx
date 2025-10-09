import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import Loader from '../Components/Loader';


const Apps = () => {
    const {products } = useApps()
    const [search, setSearch] = useState('')
    const [isSearching, setIsSearching] = useState(false);
    const searchData = search.trim().toLocaleLowerCase()


    useEffect(() => {
    if (search.length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [search]);


    
  




    const searchedApps = searchData
    ?
     products.filter(app =>
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
        <p>({searchedApps.length}) Apps Found</p>
        
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
          {isSearching?(<Loader></Loader>):
          searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
    </div>



            
    </div>
    );
};

export default Apps;