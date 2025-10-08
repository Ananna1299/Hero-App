
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import star from "../assets/icon-ratings.png"
import download from "../assets/icon-downloads.png"
import iconreview from "../assets/icon-review.png"
import { loadlist, updateList } from '../Utils/LocalStorage';
import { useState } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AppDetails = () => {
    const { id } = useParams()
    //console.log(id)
    const { products, loading } = useApps()

     

 
  
  
  
  const app = products.find(a => a.id === Number(id))
  //console.log(app)

  const [installedApps, setInstalledApps] = useState(() => loadlist());

  if (loading) return <p>Loading.......</p>

  const {image,companyName,description,reviews,ratingAvg,downloads,ratings,title,size} = app || {}
  //console.log(image,companyName,description,reviews,ratingAvg,downloads,ratings)
  //console.log(installedApps)
   const isInstalled = installedApps.some(item => Number(item.id) === Number(app.id));
   

  

  const handleInstallItems=(app)=>{
    //console.log(app)
    updateList(app)
      setInstalledApps(prev => [...prev, app]);
    
  
  }
  






    return (


         <div className='w-10/12 mx-auto   py-10 '>
            <div className='flex  gap-10 flex-col md:flex-row mb-4'> 
                
            
                <div className='flex items-center w-full  md:w-3/12'>
                    <img className='rounded-md ' src={image} alt="" />
                </div>
                
               
                <div className='flex-grow'>
                    <h1 className='text-xl font-bold text-gray-800 mb-1'>{title}</h1>
                    <p className='text-sm text-gray-500 mb-4'>
                        Developed by: <span className='text-purple-600 font-semibold'>{companyName}</span>
                    </p>
                    
                    
                    <hr className='border-gray-500 mb-4' /> 
                    
                    
                    <div className='flex justify-between items-start mb-6'>
                        
                  
                        <div className='text-center flex-1'>
                            <div className='flex flex-col items-center justify-center gap-1 mb-1'>
                                <img src={download} alt="" />
                                <p className='text-sm text-gray-500'>Downloads</p>
                            </div>
                            <p className='text-2xl font-bold text-gray-900'>{downloads}</p>
                        </div>
                        
                      
                        <div className='text-center flex-1'>
                            <div className='flex  flex-col items-center justify-center gap-1 mb-1'>
                                <img src={star} alt="" />
                                <p className='text-sm text-gray-500'>Average Ratings</p>
                            </div>
                            <p className='text-2xl font-bold text-gray-900'>{ratingAvg}</p>
                        </div>

                        <div className='text-center flex-1'>
                            <div className='flex  flex-col items-center justify-center gap-1 mb-1'>
                                <img src={iconreview} alt="" />
                                <p className='text-sm text-gray-500'>Total reviews</p>
                            </div>
                            <p className='text-2xl font-bold text-gray-900'>{reviews}</p>
                        </div>
                    </div>
                    
                 
                    <button 
                     onClick={() => handleInstallItems(app)}
                    disabled={ isInstalled}
                      
                     
                    className=' p-3 bg-[#00D390] hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 mt-4'>
                      {isInstalled ? "Installed" : `Install Now (${size} MB)`}
                     
                    </button>
                    
                </div>
            </div>
             <hr className='border-gray-500 mb-20' /> 
             <h1 className='font-bold text-xl'>Ratings</h1>

             <div className="w-full h-[400px] mb-20">
             <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical" 
          data={ratings}
          margin={{
            top: 20,
            right: 30,
            left: 60,
            
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="count" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
             </div>
             <div>
                <h1 className='text-xl font-bold'>
                    Description: 
                </h1>
                <p className='text-[#627382]'>{description}</p>

             </div>
        </div>
    );
};

export default AppDetails;