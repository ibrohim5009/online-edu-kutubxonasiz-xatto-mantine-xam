/* eslint-disable react/prop-types */
import React from "react";

function Project({ item }) {
  return (
    <div key={item.id} className="flex flex-col items-center text-center shadow-indigo-500/40 border-2 h-72 w-[290px] rounded-2xl bg-[#fff] pt-5">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt="" />
      </div>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <h4 className="w-[260px] items-center text-[#5D5A6F] text-base font-normal leading-8 mb-3">{item.des}</h4>
      <button className="text-[#9C4DF4] p-1 pr-5 pl-5 rounded-[5px] text-center border-2 border-solid border-[#9C4DF4]">{item.buttonInformation}</button>
    </div>
  );
}

export default Project;