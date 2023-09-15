import React from "react";
import VIdeo from ".././../img/Videocall.png";
import icon from ".././../img/icon.png";
function Banner() {
  return (
    <div>
      <div className="">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-semibold text-4xl text-[#0A033C] leading-10 section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            High quality video, audio & live classes
          </h2>
          <div>
            <p className="text-[#5D5A6F] w-[800px] leading-8 ">
              A lesson or class is a structured period of time where learning is
              intended to occur. It involves one or more students being taught
              by a teacher or instructor.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <img src={VIdeo} alt="" />
      </div>
      <div className="flex justify-around">
        <div className="bg-[#FFFFFF] flex  justify-between w-[330px] mt-[-150px] h-[80px] rounded-[10px] text-center">
          <img src={icon} alt="" />
          <h1 className="text-[20px] text-[#0A033C] mt-5 pr-20">Audio Classes</h1>
        </div>
        <div className="bg-[#FFFFFF] flex  justify-between w-[330px] mt-[-150px] h-[80px] rounded-[10px] text-center">
          <img src={icon} alt="" />
          <h1 className="text-[20px] text-[#0A033C] mt-5 pr-20">Audio Classes</h1>
        </div>
        <div className="bg-[#FFFFFF] flex  justify-between w-[330px] mt-[-150px] h-[80px] rounded-[10px] text-center">
          <img src={icon} alt="" />
          <h1 className="text-[20px] text-[#0A033C] mt-5 pr-20">Audio Classes</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
