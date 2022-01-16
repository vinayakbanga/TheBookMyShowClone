import React from "react";

import Poster from "../poster/poster.component";

import settings from "../../config/PosterCrousel.config";

import Slider from "react-slick";

const PosterSlider=(props)=>{

   const sliderConfig = props.config ? props.config : settings;
//    this line will check wheater config is given as a prop or not if it is given then it will use that else the noramal settings

    return(
        <>
        <div className="flex flex-col items-start py-4">

<h3 className={
    `text-2xl font-bold ${
        props.isdark ? "text-white":"text-gray-800"
    }`
}>{props.title}</h3>
<p className={
    `text-sm  ${
        props.isdark ? "text-white":"text-gray-800"
    }`
}>
  {props.subtitle}
</p>
</div>
<Slider {...sliderConfig}>
{props.images.map((image)=>(
    <Poster {...image} isdark={props.isdark}/>
))}

</Slider>

        </>
    )
}
export default PosterSlider;