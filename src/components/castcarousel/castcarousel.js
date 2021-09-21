import React from "react";
import settings from "../../config/PosterCrousel.config";
import Slider from "react-slick";
import Poster from "../poster/poster.component";


const CastSlider=(props)=>{
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
<Slider {...settings}>
{props.images.map((image)=>(
    <Poster {...image} isdark={props.isdark}/>
))}

</Slider>

        </>
    )
}