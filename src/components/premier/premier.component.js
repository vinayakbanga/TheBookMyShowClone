import React from "react";
import Slider from "react-slick";

//component
import Poster from "../poster/poster.component";

//config


import settings from "../../config/PosterCrousel.config"
// images
import PremierImages from "../../config/TempPosters.config";


const Premier = ()=>{


      

    return (
        <>
        <div className="flex flex-col items-start py-4">

        <h3 className="text-white text-xl text-bold">Premiers</h3>
        <p className="text-white text-sm text-bold ">
          Brand new release every Friday
        </p>
        </div>
        <Slider {...settings}>
        {PremierImages.map((image)=>(
            <Poster {...image} isdark/>
        ))}

        </Slider>
        

        </>
    )

}
export default Premier;