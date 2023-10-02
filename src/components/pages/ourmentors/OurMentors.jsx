import React from "react";
import headerImage from "../../../assets/Imge.png"
import OurMentorsACtion from "./OurMentorsAction";

function OurMentors() {
  return <div className="container mx-auto w-[95%]">
    <div>
      <div className="relative">
        <img src={headerImage} alt="" />
        <p className="absolute top-[100px] z-10 left-[250px] text-[#0A033C] text-5xl font-semibold leading-[50px]">Eduvi has the <br /> qualified mentor</p>
      </div>
    </div>
    <OurMentorsACtion />
  </div>
}

export default OurMentors;
