import React, { useContext,useEffect } from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import axios from "axios";

//component
import MovieNavbar from "../components/Navbar/movieNavbar.component"
// /context 

import { MovieCOntext } from "../context/movie.context";
import Links from "../components/Linking/linking.component";
import { Link } from "react-router-dom";

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
       <Links/>
       <header class="text-white body-font bg-gray-900">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
         
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <Link to={`/`}> <a class="mr-5 hover:text-gray-400 text-xl">Home</a>  </Link>
          
          <Link to={`/plays`}> <a class="mr-5 hover:text-gray-400 text-xl">Plays</a> </Link>
          
          </nav>
         
        </div>
      </header>
       
       {props.children};
       </>
    );
};

export default MovieLayout;