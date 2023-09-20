import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./components/pages/courses/Courses";
import Navabar from "./components/home/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./components/pages/shop/Shop";
import CoursesDetails from "./components/pages/CoursesDetails/CoursesDetails";
import Pricing from "./components/pages/pricing/Pricing";
import Become from "./components/pages/become/Become";
import OurMentors from "./components/pages/ourmentors/OurMentors";

const App = () => {
  return (
    <div className="container mx-auto bg-[#F7F5FA]">
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-details" element={<CoursesDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/become" element={<Become />} />
          <Route path="/our-mentors" element={<OurMentors />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
