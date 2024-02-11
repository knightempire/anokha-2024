import React, { useState } from 'react';
import Image from 'next/image';

const Themes = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const data = [
    {
      img: "https://i.imgur.com/xWYWhSP.png",
      text: "GEN AI"
    },
    {
      img: "https://i.imgur.com/nRnbpu1.png",
      text: "IOT"
    },
    {
      img: "https://i.imgur.com/EAk6FLg.png",
      text: "HealthCare"
    },
    {
      img: "https://i.imgur.com/2SSMh8E.png",
      text: "Autonomous Vehicles"
    },
    {
      img: "https://i.imgur.com/hkCamEf.png",
      text: "Cyber Security"
    },
    {
      img: "https://i.imgur.com/mEpBmyc.png",
      text: "OpenEnded"
    },
  ];

  const handleTabClick = (index) => {
    setSelectedTab(index);
  }

  return (
    <div className='h-full w-full bg-[#0A113A] relative overflow-hidden'>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[70%] p-8 rounded-[0%] left-[0%] top-[20%] md:h-[40%] blur-3xl levitate"></div>
        
    <div className='font-poppins h-[100%] mt-[50px]'>
      <p className='font-bold text-[3rem] w-fit mx-auto mb-[20px] relative z-10 bg-opacity-50 backdrop-blur-xl   border-b-1 border-t-3 border-none bg-white rounded-xl font-serif '>Themes</p>
      
      <div className="grid grid-cols-3 md:grid-cols-6  m-5 ">
        {data.map((val, index) => (
          
          <div 
            key={index} 
            className={`cursor-pointer flex flex-col justify-center items-center m-3 ${selectedTab === index ? 'border-black border-4 ' : ''} p-[10%] md:p-5 
            rounded-xl bg-opacity-60 backdrop-blur-3xl   bg-white `}
            onClick={() => handleTabClick(index)}
          >
            
            <Image 
              src={val.img} 
              width={200} // Adjust this to your desired width
              height={200} // Adjust this to your desired height
              alt={val.text} 
              className='object-cover rounded-md'
            /> 
            <p className="mt-2 text-center">{val.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {data.map((val, index) => (
          <div key={index} className={`${selectedTab === index ? 'block' : 'hidden'}`}>
            <p>{val.text}</p>
            {/* Add additional content as needed */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Themes;
