import React from 'react'
import Image2 from "../../assets/aqlli-oka.png"

function AboutStudent() {
    return (
        <div className='container mx-auto w-[95%] md:flex justify-around items-center mt-10'>
            <div>
                <div>
                    <img src={Image2} alt="" />
                </div>
            </div>
        
            <div>
                <div>
                    <p className="text-[45px] font-bold text-[#0A033C] leading-normal">
                        Want to share your  <br />
                        knowledge? Join us <br />
                        a Mentor
                    </p>
                    <span className="text-[#5D5A6F] text-[16px] font-normal leading-8">
                        High-definition video is video of higher resolution and quality{" "}
                        <br /> than standard-definition. While there is no standardized{" "}
                        <br /> meaning for high-definition, generally any video.
                    </span>
                    <div>
                        {" "}
                        <button className="w-[185px] h-[60px] bg-[#9C4DF4] rounded-xl text-white mt-5 hover:bg-[#fff] duration-300 hover:text-black border-solid border-2 border-[#9C4DF4] " >Registation Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStudent