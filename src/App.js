
import {Route} from "react-router-dom";
//axios\
import axios from "axios";

//hoc

import DefaultHOC  from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings

axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;


function App() {
  return (
    //exact componrnt is used to render that particular page only 
     <>
      <DefaultHOC  path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={Movie}/>
      <DefaultHOC  path="/plays" exact component={Plays}/>


      
     </>
    
  );
}

export default App;
