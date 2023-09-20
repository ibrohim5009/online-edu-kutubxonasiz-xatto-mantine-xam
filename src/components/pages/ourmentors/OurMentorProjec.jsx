/* eslint-disable react/prop-types */
import React from "react";


function OurMentorsProject({ item }) {
    return (
        <div key={item.id} className="flex flex-col items-center text-center shadow-indigo-500/40  pt-5">
            <div className="mb-8">
                <img className="rounded-2xl" src={item.image} alt="" />
            </div>
            <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
            <div className="flex items-center justify-around">
                <h4 className="w-[260px] items-center text-[#5D5A6F] text-base font-normal leading-8 mb-3">{item.lastName}</h4>
              
            </div>
        </div>
    );
}

export default OurMentorsProject;