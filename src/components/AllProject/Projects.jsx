import React, { useEffect, useState } from "react";

//import data
import { projectsData, projectsNav } from "../../data";


import Project from "./Project";

function Projects() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const hendleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto container">
        <ul className="flex flex-col md:flex-row justify-evenly items-center ">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  hendleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="grid lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8 ">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
      <div className="text-center mt-10">
        <button className="bg-[#9C4DF4] text-white rounded-xl  p-3 pl-10 pr-10 hover:bg-[#fff] duration-300 hover:text-black border-solid border-2 border-[#9C4DF4] ">
          See More
        </button>
      </div>
    </div>
  );
}

export default Projects;