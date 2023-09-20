import React from "react";
import PersonOka from "../../assets/Image.png"

function Info() {
  return (
    <div className="info container mx-auto mt-20 w-[95%] rounded-3xl md:flex justify-between">
      <div>
        <div className="mt-20 p-20">
          <div>
            <button className="bg-[#EDE9F2] p-3 pl-10 pr-10 rounded-lg text-[#9C4DF4] hover:bg-[#fff] duration-300 hover:text-black border-solid border-2 border-[#9C4DF4] ">
              College Level
            </button>
          </div>
          <div>
            <p className="text-[45px] font-bold text-[#0A033C] leading-normal">
              Don’t waste time in <br /> COVID-19 pandemic. <br /> Develop your
              skills.
            </p>
            <span className="text-[#5D5A6F] text-[16px] font-normal leading-8">
              High-definition video is video of higher resolution and quality{" "}
              <br /> than standard-definition. While there is no standardized{" "} meaning for high-definition, generally any video.
            </span>
            <div>
              {" "}
              <button className="w-[185px] h-[60px] bg-[#9C4DF4] rounded-xl text-white mt-5 hover:bg-[#fff] duration-300 hover:text-black border-solid border-2 border-[#9C4DF4] " >Registation Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={PersonOka} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Info;  
