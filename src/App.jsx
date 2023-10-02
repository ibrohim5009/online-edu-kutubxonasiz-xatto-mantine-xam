import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/home/Home"));
const Courses = lazy(() => import("./components/pages/courses/Courses"));
const CoursesDetails = lazy(() => import("./components/pages/CoursesDetails/CoursesDetails"));
const Shop = lazy(() => import("./components/pages/shop/Shop"));
const Pricing = lazy(() => import("./components/pages/pricing/Pricing"));
const Become = lazy(() => import("./components/pages/become/Become"));
const OurMentors = lazy(() => import("./components/pages/ourmentors/OurMentors"));
const OurMentiorsId = lazy(() => import("./components/pages/ourmentors/OurMentiorsId"));
const Navbar = lazy(() => import("./components/home/navbar/Navbar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Loading = lazy(() => import("./components/Loading/Loading"));

const App = () => {
  return (
    <div className="container mx-auto bg-[#F7F5FA]">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses-details" element={<CoursesDetails />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/become" element={<Become />} />
            <Route path="/our-mentors/" element={<OurMentors />} />
            <Route path="/mentor/:id" element={<OurMentiorsId />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
