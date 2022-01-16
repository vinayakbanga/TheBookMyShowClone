import React from "react";

const crewcircle =(props)=>{
    return(
        <>
        <div className="my-5 flex flex-col items-center" >
            <div className="w-32 h-32">
                <img src={props.image} alt="crew man" 
                className="w-full h-full rounded-full"/>
            </div>
            <h1 className="text-lg  text-gray-800">{props.castName}</h1>
            <h5 className="text-sm  text-gray-400">{props.role}</h5>
        </div>
    

        </>
    )

}
export default crewcircle;