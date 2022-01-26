import React, { useState,useEffect } from "react";
// import Poster from '../components/poster/poster.component';
import PlaysPoster from "../components/poster/PlaysPoster.component";

import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

import axios from "axios";
import Slider from "react-slick";
// import { useEffect, useState } from "react";

const Plays = () => {

  const [popularShows,setPopularShows] = useState([]);
  useEffect(() => {
    const requestPopularShows = async ()=>{
        const getPopularShows =await axios.get("/tv/popular");
        setPopularShows(getPopularShows.data.results)
    };
    requestPopularShows();


 },[] );
 const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};


return (
<>
<div className="container mx-auto px-4 my-5">
   <div className="w-full flex flex-col-reverse lg:flex lg:flex-row-reverse">
      
        <div className="lg:w-8/12">
         <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
        <div className="flex flex-wrap">
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Slider {...settings}>
            {popularShows.map((showdata)=>(
              
              <PlaysPoster
              image={`https://image.tmdb.org/t/p/original${showdata.poster_path}`}
              title={showdata.original_name}
              subtitle="Tamil ₹300"
              />

            ))}
            </Slider>
            
            
         </div>
         {/* <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <PlaysPoster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <PlaysPoster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <PlaysPoster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <PlaysPoster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <PlaysPoster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <PlaysPoster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <PlaysPoster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div> */}
      </div>
      
        </div>
        <div className='lg:w-1/4 m-9 bg-white text-xl gap-4'>

        


            <h2 className='text-2xl font-bold mb-4'>Filters</h2>
            <div className='mb-4 '>
              <PlaysFilter
                title='Date'
                tags={['Today', 'Tomorrow', 'This weekend']}
              />
            </div>
            <div className='mb-4'>
              <PlaysFilter title='Language' tags={['Tamil', 'Kannada']} />
            </div>
            <div className='mb-4'>
              <PlaysFilter title='Categories' tags={['Theatre']} />
            </div>
            <div className='mb-4'>
              <PlaysFilter
                title='Genres'
                tags={[
                  'Drama',
                  'Adaption',
                  'Historical',
                  'Online Streaming Plays',
                ]}
              />
            </div>
            <div className='mb-4'>
              <PlaysFilter
                title='More Filters'
                tags={['Online Streaming', 'Kids Allowed', 'Outdoor Events']}
              />
            </div>
            <div className='mb-4'>
              <PlaysFilter
                title='Prices'
                tags={['Free', '0 - 500', '501 - 2000', 'Above 2000']}
              />
            </div>
            <div className="border-2 border-red-400 p-1">
                          <button className="text-center w-full h-full  text-red-400">Browse By Venues</button>
                      </div>
          </div>

   </div>
</div>
</>
)
};
export default Plays;