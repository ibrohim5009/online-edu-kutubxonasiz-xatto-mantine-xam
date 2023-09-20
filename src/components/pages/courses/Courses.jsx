import React, { useEffect, useState } from "react";

// Import data
import { projectsData, projectsNav } from "./CoursesData";

import Coursess from "./Coursess";
import OurMentorsProject from "../ourmentors/OurMentorProjec";
import Other from "./Other";

function Courses() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // Default background color

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }

    switch (item.name) {
      case "all":
        setBackgroundColor("#FFFFFF");
        break;
      case "category1":
        setBackgroundColor("#FF0000");
        break;
      case "category2":
        setBackgroundColor("#00FF00");
        break;
      case "category3":
        setBackgroundColor("#00FF00");
        break;
      default:
        setBackgroundColor("#FFFFFF");
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="bg-[#F7F5FA]">
        <nav className="mb-12 mx-auto container">
          <ul className="flex flex-col md:flex-row justify-evenly items-center ">
            {projectsNav.map((navItem, index) => {
              return (
                <li
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${
                    active === index ? "active" : ""
                  } cursor-pointer capitalize m-4`}
                  key={index}
                >
                  <span>{navItem.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>
        <section className="grid lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8 ">
          {projects.map((project) => {
            return <Coursess item={project} key={project.id} />;
          })}
        </section>
      </div>
      <Other/>
    </>
  );
}

export default Courses;
