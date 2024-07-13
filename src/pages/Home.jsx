import React from "react";
import TopStrip from '../component/TopStrip'
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Banner from "../component/Banner"
import GridSection from "../component/GridSection";
import Features from "../component/Feartures";
import FitGuide from "../component/FitGuid";
import EmailSubscription from "../component/EmailSubscription";

function Home (){
    return (
        <div>
            <TopStrip/>
            <Navbar/>
            <Hero/> 
            <GridSection/>
            <Banner/>
            <FitGuide/>
            <Features/>
            <EmailSubscription/>
        </div>
    )
}
export default Home