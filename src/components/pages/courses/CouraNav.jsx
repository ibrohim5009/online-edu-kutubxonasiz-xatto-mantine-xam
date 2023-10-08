import React from "react";
import headerImage from "../../../assets/Imge.png";

function CouraNav() {
  return (
    <div>
      <div className="relative">
        <img src={headerImage} alt="" className="pl-[80px] mt-5 w-[95%] object-cover" />
        <p className="absolute top-[100px] z-10 left-[250px] text-[#0A033C] text-5xl font-semibold leading-[50px]">
          Eduvi has the <br /> qualified mentor
        </p>
      </div>
    </div>
  );
}

export default CouraNav;
