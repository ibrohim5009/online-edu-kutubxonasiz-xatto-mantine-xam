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
      <div className='w-[95%] h-[420px] bg-[#0A033C] rounded-3xl md:flex justify-between'>
        <div>
          <img src={Ellipse1} alt="" />
        </div>
        <div>middle</div>
        <div>right</div>
      </div>
    </div>
  )
}

export default FooterHEader