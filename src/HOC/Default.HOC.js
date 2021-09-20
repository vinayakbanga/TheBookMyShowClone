//it transforms the component into another component
//used to add addition fuctionalities to the exisiting componets
//the cycle works like from app.js we are calling default hoc
//then in default.hoc we are calling the default layout
//then in default layout we have our children i.e componrnt the children component in component folder
//then the component is acceessed that is passed in app.js
 import React from "react";
 import { Route } from "react-router-dom";

//layout

import DefaultLayout from "../layout/default.layout";

const DefaultHOC = ({component: Component , ...rest})=>{
   //componrnts
   //props -> path exact property
   return(
      <>
      <Route 
      {...rest}

      component ={(props) =>(
         <DefaultLayout>
         <Component {...props}/>

         </DefaultLayout>
      )}
      />
      </>
   )
}


export default DefaultHOC;