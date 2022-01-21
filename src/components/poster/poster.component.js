import React from "react";
import { Link } from "react-router-dom";

const poster =(props)=>{
    return(
        <>
        <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-80">
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}` }
            alt={props.original_title} className="w-full h-full rounded-xl"/>

            </div>
            <h3
            className={
                `text-lg font-bold ${
                    props.isdark ? "text-white" : "text-gray-700"

                }`
            }>{props.title}</h3>
            <p className={
                `text-sm font-bold ${
                    props.isdark ? "text-white" : "text-gray-700"

                }`
            }>{props.subtitle}</p>
        </div>
        </Link>


        </>
    )

}
export default poster;