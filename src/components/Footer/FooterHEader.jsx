import React from 'react'
import Ellipse1 from "../../assets/Ellipse 165.png"
import Ellipse2 from "../../assets/Ellipse 166.png"
import Ellipse3 from "../../assets/Ellipse 167.png"
import Ellipse4 from "../../assets/Ellipse 168.png"
import Ellipse5 from "../../assets/Ellipse 169.png"
import Ellipse6 from "../../assets/Ellipse 170.png"

function FooterHEader() {
  return (
    <div className='w-[95%] container mx-auto mt-[5pc]'>
      <div className='w-[95%] h-[420px] bg-[#0A033C] items-center rounded-3xl md:flex justify-between'>
        <div className='p-[50px]'>
          <img className='object-cover' src={Ellipse1} alt="" />
          <img className='object-cover pl-[120px] pt-[50px]' src={Ellipse2} alt="" />
          <img className='object-cover pt-[100px] ' src={Ellipse3} alt="" />
        </div>
        <div className='text-center'>
          <h1 className='text-white text-center text-[45px] font-bold leading-[55px]'>
            Subscribe For Get Update <br /> Every New Courses
          </h1>
          <span className='text-[#FFFFFFB2]'>20k+ students daily learn with Eduvi. Subscribe for new courses.</span>
          <div>
            <form className="m-4 flex">
              <input className="rounded-l-lg p-4 w-[400px] border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
              <button className="rounded-r-lg bg-[#9C4DF4]  text-white font-bold p-4 w-[150px]  border-t border-b border-r">Subscribe</button>
            </form>
          </div>
        </div>
        <div>
          <div className='p-[50px]'>
            <img className='object-cover' src={Ellipse4} alt="" />
            <img className='object-cover pl-[120px] pt-[50px]' src={Ellipse5} alt="" />
            <img className='object-cover pt-[100px] ' src={Ellipse6} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterHEader