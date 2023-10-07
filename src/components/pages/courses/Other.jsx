import React from "react";
import "./Other.css";
import { MakbookliBrat } from "./MakbookliBrat";
import { useState } from "react";

function Other() {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="container mx-auto pl-10">
        <div className="">
          <h1 className="#0A033C text-[25px] font-medium">
            Other Courses For High School
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="">
            <div className="bg-[#FFFFFF] flex w-[805px] h-[50px] text-center mt-3 justify-between overflow-hidden rounded-[10px]">
              <input
                type="text"
                placeholder="Serach Class, Course"
                className="text-[#5D5A6F99] outline-none pl-5"
              />
              <button className="text-[#fff] bg-[#9C4DF4] border-none justify-end flex w-[130px] h-[40px] rounded-[10px] pr-8 pt-2 my-[5px] mr-2">
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
          <div className=" flex h-[50px] text-center mt-3 mr-[100px] rounded-[10px]">
            <button className="button_item w-[405px]">
              <div className="onclick" onClick={toggleDropdown}>
                <span className=" text-[#5d5a6f99]">Sort by:</span> Latest
              </div>
              <ul className={`dropdown_menu ${open ? "open" : ""}`}>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="">
          <div className="grid grid-cols-2  justify-between gap-8">
            {MakbookliBrat.map((item) => (
              <div
                className="w-[600px] h-[140px] justify-center bg-white ml-14 mt-5 rounded-xl flex"
                key={item.id}
              >
                <div className="w-[50%] h-[100%] flex items-center ml-4 justify-between">
                  <img src={item.image} alt="" />
                </div>
                <div className="w-[70%] h-[100%]">
                  <div className="mt-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="93"
                      height="16"
                      viewBox="0 0 93 16"
                      fill="none"
                    >
                      <path
                        d="M16.6399 6.04621C16.5352 5.70813 16.2478 5.46802 15.9078 5.43605L11.2898 4.99849L9.46371 0.538446C9.32906 0.211582 9.02241 0 8.68171 0C8.341 0 8.03435 0.211582 7.8997 0.53921L6.07361 4.99849L1.45485 5.43605C1.11549 5.46878 0.828859 5.70813 0.72351 6.04621C0.618161 6.38428 0.715453 6.75509 0.972173 6.98884L4.46286 10.1833L3.43353 14.9147C3.35822 15.2626 3.48761 15.6222 3.76423 15.8308C3.91292 15.9429 4.08687 16 4.26229 16C4.41354 16 4.56357 15.9575 4.69821 15.8734L8.68171 13.389L12.6637 15.8734C12.9551 16.0563 13.3224 16.0396 13.5984 15.8308C13.8752 15.6215 14.0045 15.2618 13.9291 14.9147L12.8998 10.1833L16.3905 6.98947C16.6472 6.75509 16.7453 6.38492 16.6399 6.04621Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M35.6399 6.04621C35.5352 5.70813 35.2478 5.46802 34.9078 5.43605L30.2898 4.99849L28.4637 0.538446C28.3291 0.211582 28.0224 0 27.6817 0C27.341 0 27.0344 0.211582 26.8997 0.53921L25.0736 4.99849L20.4549 5.43605C20.1155 5.46878 19.8289 5.70813 19.7235 6.04621C19.6182 6.38428 19.7155 6.75509 19.9722 6.98884L23.4629 10.1833L22.4335 14.9147C22.3582 15.2626 22.4876 15.6222 22.7642 15.8308C22.9129 15.9429 23.0869 16 23.2623 16C23.4135 16 23.5636 15.9575 23.6982 15.8734L27.6817 13.389L31.6637 15.8734C31.9551 16.0563 32.3224 16.0396 32.5984 15.8308C32.8752 15.6215 33.0045 15.2618 32.9291 14.9147L31.8998 10.1833L35.3905 6.98947C35.6472 6.75509 35.7453 6.38492 35.6399 6.04621Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M54.6399 6.04621C54.5352 5.70813 54.2478 5.46802 53.9078 5.43605L49.2898 4.99849L47.4637 0.538446C47.3291 0.211582 47.0224 0 46.6817 0C46.341 0 46.0344 0.211582 45.8997 0.53921L44.0736 4.99849L39.4549 5.43605C39.1155 5.46878 38.8289 5.70813 38.7235 6.04621C38.6182 6.38428 38.7155 6.75509 38.9722 6.98884L42.4629 10.1833L41.4335 14.9147C41.3582 15.2626 41.4876 15.6222 41.7642 15.8308C41.9129 15.9429 42.0869 16 42.2623 16C42.4135 16 42.5636 15.9575 42.6982 15.8734L46.6817 13.389L50.6637 15.8734C50.9551 16.0563 51.3224 16.0396 51.5984 15.8308C51.8752 15.6215 52.0045 15.2618 51.9291 14.9147L50.8998 10.1833L54.3905 6.98947C54.6472 6.75509 54.7453 6.38492 54.6399 6.04621Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M73.6399 6.04621C73.5352 5.70813 73.2478 5.46802 72.9078 5.43605L68.2898 4.99849L66.4637 0.538446C66.3291 0.211582 66.0224 0 65.6817 0C65.341 0 65.0344 0.211582 64.8997 0.53921L63.0736 4.99849L58.4549 5.43605C58.1155 5.46878 57.8289 5.70813 57.7235 6.04621C57.6182 6.38428 57.7155 6.75509 57.9722 6.98884L61.4629 10.1833L60.4335 14.9147C60.3582 15.2626 60.4876 15.6222 60.7642 15.8308C60.9129 15.9429 61.0869 16 61.2623 16C61.4135 16 61.5636 15.9575 61.6982 15.8734L65.6817 13.389L69.6637 15.8734C69.9551 16.0563 70.3224 16.0396 70.5984 15.8308C70.8752 15.6215 71.0045 15.2618 70.9291 14.9147L69.8998 10.1833L73.3905 6.98947C73.6472 6.75509 73.7453 6.38492 73.6399 6.04621Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M92.6399 6.04621C92.5352 5.70813 92.2478 5.46802 91.9078 5.43605L87.2898 4.99849L85.4637 0.538446C85.3291 0.211582 85.0224 0 84.6817 0C84.341 0 84.0344 0.211582 83.8997 0.53921L82.0736 4.99849L77.4549 5.43605C77.1155 5.46878 76.8289 5.70813 76.7235 6.04621C76.6182 6.38428 76.7155 6.75509 76.9722 6.98884L80.4629 10.1833L79.4335 14.9147C79.3582 15.2626 79.4876 15.6222 79.7642 15.8308C79.9129 15.9429 80.0869 16 80.2623 16C80.4135 16 80.5636 15.9575 80.6982 15.8734L84.6817 13.389L88.6637 15.8734C88.9551 16.0563 89.3224 16.0396 89.5984 15.8308C89.8752 15.6215 90.0045 15.2618 89.9291 14.9147L88.8998 10.1833L92.3905 6.98947C92.6472 6.75509 92.7453 6.38492 92.6399 6.04621Z"
                        fill="#FFC107"
                      />
                    </svg>
                  </div>
                  <h1 className="text-lg leading-[20px] font-semibold text-[#0A033C] mt-3">
                    {item.narx}
                  </h1>
                  <p className="text-lg leading-[20px] font-semibold text-[#FF6652] mt-2">
                    {item.name}
                  </p>
                </div>
                <div className="mt-14 mr-9">{item.shopCart}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;
