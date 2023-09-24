import React from "react";
import Image10 from "../../../img/Image10.png";
import Video from "../../../img/Video.png";
import headerImage from "../../../assets/Imge.png";
function Become() {
  return (
    <div>
      <div className="mx-auto container">
        <div className="relative">
          <img src={headerImage} alt="" className="pl-12 mt-5" />
          <p className="absolute top-[100px] z-10 left-[250px] text-[#0A033C] text-5xl font-semibold leading-[50px]">
            Eduvi has the <br /> qualified mentor
          </p>
        </div>
        <div className=""></div>
        <div className="flex ml-12 mt-9">
          <div className="">
            <img src={Image10} alt="" />
          </div>
          <div className="ml-12 mt-20">
            <h1 className="text-[#0A033C] text-[30px]">Apply As Instructor</h1>
            <p className="w-[500px] mt-2 text-[#5D5A6F] text-[17px]">
              Teaching is a vital and admirable career. As such, it comes with
              quite a bit of responsibility, both in practice and in preparation
              with many skills required to be a teacher. The following steps
              provide a general breakdown of the requirements for teachers:
            </p>
            <div className="mt-2 flex gap-7">
              <h2 className="text-[#FF6652]">Intstructor Requirements</h2>
              <h2 className="text-[#5D5A6F]">Instructor Rules</h2>
            </div>
            <hr className="text-[#5D5A6F] mt-2 w-[310px]" />
            <div className="pt-2">
              <h1 className="flex items-center gap-1 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <circle cx="5" cy="5" r="5" fill="#FF6652" />
                </svg>
                An undergraduate degree
              </h1>
              <h1 className="flex items-center gap-1 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <circle cx="5" cy="5" r="5" fill="#FF6652" />
                </svg>
                An undergraduate degree
              </h1>
              <h1 className="flex items-center gap-1 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <circle cx="5" cy="5" r="5" fill="#FF6652" />
                </svg>
                An undergraduate degree
              </h1>
              <h1 className="flex items-center gap-1 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <circle cx="5" cy="5" r="5" fill="#FF6652" />
                </svg>
                An undergraduate degree
              </h1>
              <h1 className="flex items-center gap-1 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <circle cx="5" cy="5" r="5" fill="#FF6652" />
                </svg>
                An undergraduate degree
              </h1>

              <button className="border-none text-[#fff] bg-[#9C4DF4] w-[140px] h-[50px] rounded-[10px] text-center mt-8 ml-2 ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-[#0A033C] text-[45px] pt-12 pr-12">
            How to apply to join as instructor
          </h1>
          <img src={Video} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Become;
