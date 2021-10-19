
import React, {useState,useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/EntertainmentCarousel/Entertainment.carousel";
import  Premier  from "../components/premier/premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config"
const HomePage =()=> {

  const [popularMovies,setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
   useEffect(() => {
       const requestPopularMovies = async ()=>{
           const getPopularMovies =await axios.get("/movie/popular");
           setPopularMovies(getPopularMovies.data.results)
       };
       requestPopularMovies();


    },[] );
    console.log({popularMovies});
    useEffect(() => {
        const requestTopRatedMovies = async () => {
          const getTopRatedMovies = await axios.get("/movie/top_rated");
          setPremierMovies(getTopRatedMovies.data.results);
        };
    
        requestTopRatedMovies();
      }, []);
    
      useEffect(() => {
        const requestUpcomingMovies = async () => {
          const getUpcomingMovies = await axios.get("/movie/upcoming");
          setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
    
        requestUpcomingMovies();
      }, []);
    
      useEffect(() => {
        const requestLatestMovies = async () => {
          const getLatestMovies = await axios.get("/movie/latest");
          setLatestMovies(getLatestMovies.data.results);
        };
        requestLatestMovies();
      }, []);
    


    return(
        <>
         <div className="flex flex-col gap-10">
         <div className="container mx-auto px-4 py-3">
         <h1 className="text-2xl font-bold text-gray-800">
             The Best of Entertainment
         </h1>
        <EntertainmentCardSlider/>
        </div>
        <div className="bg-navCol-200 py-16 ">
            <div className="container mx-auto px-10  ">
            <div className="flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
                    />


            </div>
            <PosterSlider images={popularMovies}
            title="Premiers"
            subtitle="Brand new release every friday" isdark={true} />
            </div>
        </div>
      </div>
      <div className ="container mx-auto  px-4 py-2">
          <PosterSlider images={onlineStreamEvents}
          title="Online Streaming Events"
          isdark={false}
          />
      </div>
      <div className ="container mx-auto  px-4 py-2">
          <PosterSlider images={premierMovies}
          title="Outdoor Events"
          isdark={false}
          />
      </div>
        </>
        
        
    );
    
}

export default HomePage;
