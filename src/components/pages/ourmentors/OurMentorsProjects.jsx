import React, { useEffect, useState } from "react";

// Import data

import { Mentors, MentosProjectsNav } from "./../../../data";
import OurMentorsProject from "./OurMentorProjec";

function OurMentorsProjects() {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // Default background color

    useEffect(() => {
        if (item.name === "all") {
            setProjects(Mentors);
        } else {
            const newProjects = Mentors.filter((project) => {
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
            default:
                setBackgroundColor("#FFFFFF");
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div className="bg-[#F7F5FA]">
            <nav className="mb-12 mx-auto container">
                <ul className="flex flex-col md:flex-row justify-evenly items-center ">
                    {MentosProjectsNav.map((navItem, index) => {
                        return (
                            <li
                                onClick={(e) => {
                                    handleClick(e, index);
                                }}
                                className={`${active === index ? "active" : ""
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
                    return <OurMentorsProject item={project} key={project.id} />;
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

export default OurMentorsProjects;
