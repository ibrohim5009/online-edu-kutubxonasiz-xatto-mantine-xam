import React from "react";
import Home from "./components/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./components/pages/courses/Courses";
import Navabar from "./components/home/navbar/Navbar";

const App = () => {
  return (
    <div className="container mx-auto bg-[#F7F5FA]">
        <BrowserRouter>
        <Navabar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses-details" element={<Courses/>}/>
          
        </Routes>
        
        </BrowserRouter>
    </div>
  );
};

export default App;
