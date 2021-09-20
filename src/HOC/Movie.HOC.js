//it transforms the component into another component
//used to add addition fuctionalities to the exisiting componets
//the cycle works like from app.js we are calling Movie hoc
//then in Movie.hoc we are calling the Movie layout
//then in Movie layout we have our children i.e componrnt the children component in component folder
//then the component is acceessed that is passed in app.js
import React from "react";
import { Route } from "react-router-dom";

//layout

import MovieLayout from "../layout/movie.layout";

const MovieHOC = ({component: Component , ...rest})=>{
  //componrnts
  //props -> path exact property
  return(
     <>
     <Route 
     {...rest}

     component ={(props) =>(
        <MovieLayout>
        <Component {...props}/>

        </MovieLayout>
     )}
     />
     </>
  )
}


export default MovieHOC;