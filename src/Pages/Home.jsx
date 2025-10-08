import React from 'react';
import playstore from "../assets/fi_16076057.png"
import appstore from "../assets/Group.png"
import hero from "../assets/hero.png"
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import { Link } from 'react-router';

const Home = () => {
    const {products } = useApps()

  const featuredApps = products.slice(0, 8)

    return (
        <div className='bg-gray-200'>
            <div className=''>
                <section className='text-center py-20 px-6'>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      We Build 
      <br /><span className="text-transparent mr-3
       bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
        Productive
      </span>
      Apps
    </h1>
    <p className="text-gray-600 max-w-xl mx-auto mb-8">
      At HERO.IO, we craft innovative apps designed to make everyday life simpler,
      smarter, and more exciting. Our goal is to turn your ideas into digital
      experiences that truly make an impact.
    </p>

    <div className="flex justify-center gap-4 mb-6">
        <a href="https://play.google.com/store/apps/" target="_blank">

            <button className="flex items-center gap-2 border px-5 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
        <img src={playstore} alt="Google Play" className="h-6"/>
        <span className='font-bold'>Google Play</span>
      </button>

        </a>

     <a href="https://play.google.com/store/apps?hl=en" target="_blank">
     <button className="flex items-center gap-2 border px-5 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
        <img src={appstore} alt="App Store" className="h-6"/>
        <span className='font-bold'>App Store</span>
      </button>
     </a>
  
      
    </div>
         </section>
         <section className='flex justify-center'>
            <img className='w-8/12 mx-auto'  src={hero} alt="" />
         </section>
           <section className=" w-full  bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 ">
    <h2 className="text-2xl md:text-3xl  text-center mb-10 font-bold">
      Trusted By Millions, Built For You
    </h2>
    <div className="flex flex-col md:flex-row justify-center gap-16 text-center">
      <div>
        <p className='mb-2.5'>Total Downloads</p>
        <h3 className="text-4xl font-bold mb-2.5">29.6M</h3>
        
        <span className="text-sm opacity-75">21% More Than Last Month</span>
      </div>
      <div className='space-y-2.5'>
        <p>Total Reviews</p>
        <h3 className="text-4xl font-bold">906K</h3>
        
        <span className="text-sm opacity-75">46% More Than Last Month</span>
      </div>
      <div className='space-y-2.5'>
        <p>Active Apps</p>
        <h3 className="text-4xl font-bold">132+</h3>
        
        <span className="text-sm opacity-75">31 More Will Launch</span>
      </div>
    </div>
  </section>

    </div>
    <div  className='text-center py-20 px-6'>
        <h1 className='font-bold text-3xl mb-2'>Trending Apps</h1>
        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
    </div>

            <div className=' w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10'>
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className='flex justify-center py-10'>
            <Link className='btn bg-linear-to-r from-purple-500 to-indigo-500 py-3 text-white' to='/app'>
          See All Apps
        </Link>
        </div>

            
        </div>
    );
};

export default Home;