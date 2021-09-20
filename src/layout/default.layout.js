import React from "react";

//component
import Navbar from "../components/Navbar/navbar.component"
import HeroCarousel from "../components/HeroCorousel/HeroCarousal.component";
const DefaultLayout = (props)=>{
    return (
        <>
       <Navbar/>
       <HeroCarousel/>
       {props.children};
       </>
    );
};

export default DefaultLayout;