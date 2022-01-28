import React from "react";
import { Link } from "react-router-dom";
//component
import Navbar from "../components/Navbar/navbar.component"
import HeroCarousel from "../components/HeroCorousel/HeroCarousal.component";
import Links from "../components/Linking/linking.component";
const DefaultLayout = (props)=>{
    return (
        <>
       <Navbar/>
       <Links/>
       
       <HeroCarousel/>

       {props.children};
       </>
    );
};

export default DefaultLayout;