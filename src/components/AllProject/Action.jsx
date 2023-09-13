import React from "react";
//import components
import Projects from "./Projects";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section 
      bg-primary min-h-[1400px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-semibold text-4xl text-[#0A033C] leading-10 section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Qualified lessons for students
          </h2>
        <div>
        <p className="text-[#5D5A6F] w-[800px] leading-8 ">
            A lesson or class is a structured period of time where learning is
            intended to occur. It involves one or more students being taught by
            a teacher or instructor.
          </p>
        </div>
        </div>
        <Projects />
      </div>
    </section>
  );
}

export default Portfolio;
