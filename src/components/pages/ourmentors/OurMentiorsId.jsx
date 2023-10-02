import React from 'react';
import idBG from "../../../assets/idBg.png";
import { useParams } from 'react-router-dom';
import { Mentors } from "./../../../data";

function OurMentiorsId() {
  const { id } = useParams();
  const mentor = Mentors.find(item => item.id === parseInt(id));

  if (!mentor) {
    return <div className="container mx-auto text-center mt-10">Mentor not found</div>;
  }

  return (
    <div className='container mx-auto w-[95%] flex items-center'>
      <img className='w-40 h-40 ml-10 z-20' src={mentor.image} alt="" />
      <div className="ml-20">
        <h1 className="text-3xl font-bold">{mentor.name} <br /> {mentor.lastName}</h1>
        <p className="text-lg mt-2">{mentor.category}</p>
      </div>
    </div>

  );
}

export default OurMentiorsId;
