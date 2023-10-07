import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import Navabar from "./components/home/navbar/Navbar";
import CoursesDetails from "./components/pages/CoursesDetails/CoursesDetails";
import Become from "./components/pages/become/Become";
import Courses from "./components/pages/courses/Courses";
import OurMentiorsId from "./components/pages/ourmentors/OurMentiorsId";
import OurMentors from "./components/pages/ourmentors/OurMentors";
import Pricing from "./components/pages/pricing/Pricing";
import Shop from "./components/pages/shop/Shop";
import PopularBooks from './components/pages/shop/PopularBooks';
import Cart from "./components/pages/Cart/Cart";



const App = () => {
  return (
    <div className="container mx-auto bg-[#F7F5FA]">
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-details" element={<CoursesDetails />} />

          <Route path="/popularbooks" element={<PopularBooks />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/become" element={<Become />} />
          <Route path="/our-mentors/" element={<OurMentors />} />
          <Route path="/mentor/:id" element={<OurMentiorsId />
          <Route path="/cart" element={<Cart />} /
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;