import React from 'react';
import star from "../assets/icon-ratings.png"
import download from "../assets/icon-downloads.png"

const AppCard = ({app}) => {
   const { title, image, ratingAvg, downloads } = app
   //console.log(app)
    return (
        <div className="card bg-base-100 shadow-sm ">
  <figure>
    <img className='p-2 rounded-3xl'
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mb-3">
      {title}
    
    </h2>
   
    <div className="card-actions justify-between">
      <div className="badge h-10 bg-[#F1F5E8]">
        <img src={download} alt=""  className='h-5'/>
        <span className='text-[#00D390] font-bold'>{downloads}</span></div>
      <div className="badge bg-[#FFF0E1] h-10">
        <img src={star} alt="" className='h-5' />
        <span className='text-[#FF8811] font-bold'>{ratingAvg}</span></div>
    </div>
  </div>
</div>
    );
};

export default AppCard;