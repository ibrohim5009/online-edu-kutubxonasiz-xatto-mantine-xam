import React from "react";
import Action from "./components/AllProject/Action";
import Home from "./components/home/Home";
import Info from "./components/Information/Info";
import AboutStudent from "./components/AboutStudent/AboutStudent";
import Footer from "./components/Footer/Footer";
import FooterHEader from "./components/Footer/FooterHEader";

const App = () => {
  return (
    <div className="container mx-auto">
      <Home />
      <Action/>
      <Info/>
      <AboutStudent/>
      <FooterHEader/>
      <Footer/>
    </div>
  );
};

export default App;
