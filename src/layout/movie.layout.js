import React, { useContext,useEffect } from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import axios from "axios";

//component
import MovieNavbar from "../components/Navbar/movieNavbar.component"
// /context 

import { MovieCOntext } from "../context/movie.context";


const MovieLayout = (props)=>{

    const { id } = useParams();
   const { movie,setMovie }= useContext(MovieCOntext);


 useEffect(() => {
   const requestMovie = async()=>{
       const getMoviedata =await axios.get(`/movie/${id}`);
       setMovie(getMoviedata.data);

   };
 
   requestMovie();
 }, [id]);
 

    
    return (
        <>
       <MovieNavbar/>
       
       {props.children};
       </>
    );
};

export default MovieLayout;