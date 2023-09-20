import React from "react";
import AboutStudent from "../AboutStudent/AboutStudent";
import Info from "../Information/Info";
import Banner from "../banner/Banner";
import Action from "././../AllProject/Action";
import HeroHeader from "./hero-header/HeroHeader";

function Home() {
  return (
  <>
      <HeroHeader />
      <Banner />
      <Action />
      <Info />
      <AboutStudent />
  </>
 
  );
}

export default Home;
