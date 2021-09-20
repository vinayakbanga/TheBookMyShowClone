import React from "react";

const crewcircle =(props)=>{
    return(
        <>
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-80">
            <img src={props.src} alt={props.title} className="w-24 h-24 rounded-full"/>

            </div>
            <h3
            className={
                `text-lg font-bold text-center  ${
                    props.isdark ? "text-white" : "text-gray-700"

                }`
            }>{props.title}</h3>
            <p className={
                `text-sm font-bold text-center ${
                    props.isdark ? "text-white" : "text-gray-700"

                }`
            }>{props.subtitle}</p>
        </div>


        </>
    )

}
export default crewcircle;