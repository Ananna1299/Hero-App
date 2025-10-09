import React, { useState } from 'react';
import { loadlist, removeFromInstall } from '../Utils/LocalStorage';
import star from "../assets/icon-ratings.png"
import download from "../assets/icon-downloads.png"
import { toast } from 'react-toastify';


const Installation = () => {
    const [installApp, setinstallApp] = useState(() => loadlist())
   // console.log(installApp)
    const [sortApp,setSortApp]=useState('none')
   
    const sortedApps = (() => {
    if (sortApp === 'Low-High') {
      return  [...installApp].sort((a, b) => a.downloads - b.downloads)
      
    } else if (sortApp === 'High-Low') {
      return [...installApp].sort((a, b) => b.downloads - a.downloads)
    } else {
      return installApp
    }
  })()

  const handleRemove = id => {
    // remove from localstorage
    removeFromInstall(id)
    toast.info('UnInstall App!', {
          position: 'top-center',
        })
    setinstallApp(prev => prev.filter(p => p.id !== id))
  }


    return (
        <div  className='w-10/12 mx-auto   py-10 '>
                    <div  className='text-center py-20 px-6'>
        <h1 className='font-bold text-3xl mb-2'>Your Installed Apps</h1>
        <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
    </div>
    <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
            {sortedApps.length} Apps Found.
        
        </h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortApp}
            onChange={e => setSortApp(e.target.value)}
            
          >
            <option value='none'>Sort by downloads</option>
            <option value='Low-High'>Low-High</option>
            <option value='High-Low'>High-Low</option>
          </select>
        </label>
      </div>
        <div className='space-y-3'>
        {sortedApps.map(a => (
          <div key={a.id} className='card card-side bg-base-100 shadow '>
            <figure>
              <img
                className='w-40 h-28 object-cover p-3 rounded-2xl'
                src={a.image}
                
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{a.title}</h3>
              <div>
                     <div className="badge ">
                        <img src={download} alt=""  className='h-5'/>
                        <span className='text-[#00D390] font-bold'>{a.downloads}</span></div>
                      <div className="badge ">
                        <img src={star} alt="" className='h-5' />
                        <span className='text-[#FF8811] font-bold'>{a.ratingAvg}</span></div>

                    <div className="badge ">
                        
                        <span className='text-gray-400 font-bold'>{a.size} MB</span></div>


              </div>
            </div>
            <div className='pr-4 flex items-center gap-3'>
            
              <button
              onClick={()=>handleRemove(a.id)}
                
                className='btn  bg-[#00D390]'
              >
                <span className='text-white'>Uninstall</span>
              </button>
            </div>
          </div>
        ))}
      </div>
            
        </div>
    );
};

export default Installation;