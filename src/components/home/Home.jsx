import React from "react";
import AboutStudent from "../AboutStudent/AboutStudent";
import Info from "../Information/Info";
import Banner from "../banner/Banner";
import OurMentiorsId from "../pages/ourmentors/OurMentiorsId";
import Action from "././../AllProject/Action";
import HeroHeader from "./hero-header/HeroHeader";

function Home() {
  return (
    <div className="bg-[#F7F5FA]">
      <HeroHeader />
      <Banner />
      <Action />
      <Info />
      <AboutStudent />
      <OurMentiorsId/>
    </div>
  );
}

export default Home;
