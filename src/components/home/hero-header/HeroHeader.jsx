import React from "react";

function HeroHeader() {
  return (
    <div className="container mx-auto p-12">
      <div className="">
        <div className="">
          <div className="rounded-[10px] bg-[#FFF] w-[200px] h-12 text-center pt-2">
            <h1 className="text-[#FF6652]">Never Stop Learning</h1>
          </div>
          <h1 className="text-[#0A033C] text-[55px] w-[500px]">
            Grow up your skills by online courses with Eduvi
          </h1>
          <p className="text-[#5D5A6F] w-[470px] pt-3">
            Eduvi is a Global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush the
            barriers togetting a degree.
          </p>
          <div className="bg-[#FFFFFF] flex w-[460px] h-[50px]">
            <select name="" id="" className="text-[#5D5A6F99]">
              <option value="">Kindergarten</option>
            </select>
            <input type="text" placeholder="Class/Course" className="text-[#5D5A6F99] outline-none" />
              <button className="text-[#fff] bg-[#9C4DF4] border-none flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
                  fill="white"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default HeroHeader;
