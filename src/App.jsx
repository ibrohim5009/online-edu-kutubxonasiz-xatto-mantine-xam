import React from "react";
import Action from "./components/AllProject/Action";
import Home from "./components/home/Home";
import Info from "./components/Information/Info";
import AboutStudent from "./components/AboutStudent/AboutStudent";

const App = () => {
  return (
    <div className="container mx-auto">
      <Home />
      <Action/>
      <Info/>
      <AboutStudent/>
    </div>
  );
};

export default App;
