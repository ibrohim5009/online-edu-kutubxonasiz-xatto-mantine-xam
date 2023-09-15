import React from "react";
import Navabar from "./navbar/Navabar";
import HeroHeader from "./hero-header/HeroHeader";
import Banner from "../banner/Banner";

function Home() {
  return (
    <div>
      <Navabar />
      <HeroHeader />
      <Banner/>
    </div>
  );
}

export default Home;
