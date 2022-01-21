import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

//component
import MovieNavbar from "../components/Navbar/movieNavbar.component"
// /context 

import { MovieCOntext } from "../context/movie.context";


const MovieLayout = (props)=>{

    const { id } = useParams();
    
    return (
        <>
       <MovieNavbar/>
       
       {props.children};
       </>
    );
};

export default MovieLayout;