import React, { useContext, useEffect, useState } from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";
import Slider from "react-slick"
// import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import CrewCircle from "../components/castcarousel/crewcircle";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config"

//context
import { MovieCOntext } from "../context/movie.context";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";







const  Movie = () => {
  const {id} = useParams();
 const { movie }= useContext(MovieCOntext)
 const [cast ,setCast] = useState([]);
 const [similarMovies ,setSimilarMovies] = useState([]);
 const [recommended ,setRecommended] = useState([]);

 useEffect(()=>{
   const requestCast =async()=>{
     const getCast =await axios.get(`/movie/${id}/credits`);
     setCast(getCast.data.cast)
   };
   requestCast();
 },[id])

 
 useEffect(() => {
  const requestSimilarMovies = async () => {
    const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
    setSimilarMovies(getSimilarMovies.data.results);
  };

  requestSimilarMovies();
}, [id]);

useEffect(() => {
  const requestRecommendedMovies = async () => {
    const getRecommendedMovies = await axios.get(
      `/movie/${id}/recommendations`
    );
    setRecommended(getRecommendedMovies.data.results);
  };

  requestRecommendedMovies();
}, [id]);




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
const settingsCast = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

    return (
     
    <>
   
    <MovieHero/>
        <div className="my-12 container px-4 lg:w-2/3 lg:ml-20">
            <div className="flex flex-col items-start gap-3">
               <h2 className="text-gray-800 font-extrabold text-2xl">About the movie</h2>
               <p className="text-black "> {movie.overview}</p>
            </div>
            <div className="my-8 " >
                <hr />
            </div>

            <div className="flex flex-col items-start gap-3 ">
                <h1 className="font-extrabold text-2xl mb-3">Applicable Offers</h1>
                <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex items-start gap-2 bg-yellow-100 border-2  border-dashed border-yellow-400 lg:w-1/2 p-3"> 
                    <div className="w-8 h-8">
                    <BiCameraMovie className="w-full h-full"/>
                    </div>

                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-l">Filmy Pass </h3>
                    <p className="text-gray-800 text-sm">Get Rs.75* off on 3 movies you buy/rent on stream. Buy Filmy Pass @Rs.99</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-yellow-100 border-2  border-dashed border-yellow-400 lg:w-1/2 p-3"> 
                    <div className="w-8 h-8">
                    <BiCameraMovie className="w-full h-full"/>
                    </div>

                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-l">Filmy Pass </h3>
                    <p className="text-gray-800 text-sm">Get Rs.75* off on 3 movies you buy/rent on stream. Buy Filmy Pass @Rs.99</p>
                  </div>
                </div>
                </div>

            </div>
            <div className="my-8 " >
                <hr />
            </div>
            <div>
            <h2 className="text-gray-800 font-bold text-2xl ">Cast and crew</h2>

       {/* <div className="flex flex-wrap gap-4 "> */}
         <Slider {...settingsCast}>
         {cast.map((castdata)=>(

       <CrewCircle image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
           
           castName={castdata.original_name}
           role={castdata.character}
           />
           ))}
           </Slider>
         

        

       {/* </div> */}
       <div className="my-8">
       
          <PosterSlider 
          config={settings}
          images={similarMovies}

          title="You Might also like"
          isdark={false}
          />
          <PosterSlider 
          config={settings}
          images={recommended}

          title="Recommended Movies"
          isdark={false}
          />
      

       </div>
       </div>

       {/* <button onClick={launchRazorPay} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
  Book Tickets
</button> */}

    
       
    
    </div>
    </>
    );
    };

export default Movie;