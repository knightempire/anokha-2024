import React, { useState } from "react";
import Image from "next/image";
import Glow from "./Glow";
const Themes = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  // const [selectedTab1, setSelectedTab1] = useState(0);

  const themes = [
    {
      text: "Generative AI",
      problemStatements: [
        "Develop a Gen-AI based Ecommerce personalized recommendation system , which asks the users about their requirements of the purchase, understands and then provide personalized recommendations on Ecommerce Platforms",
        "Make it real : Leverage the power of Multimodal Models to create a Apps/websites just by Drawing/Image prompting which can ease the experience of software development",
        "Other AI/ML related ideas to Gen AI are acceptable too",
      ],
    },
    {
      text: "IOT",
      problemStatements: [
        "Create an innovative solution for optimizing energy consumption and enhancing user comfort in large spaces, such as classrooms or expansive rooms with multiple fans, lights, and AC units. Develop a system that integrates IoT devices and AI algorithms to intelligently control individual appliances based on occupancy. The objective is to dynamically activate and deactivate fans, lights, and AC units in response to the presence or absence of individuals within specific zones, ensuring efficient resource utilization and a comfortable environment.",
        "Design an intelligent farming system that harmoniously integrates IoT and AI technologies. Your mission is to develop a solution that monitors soil moisture, temperature, and crop health through IoT sensors. Implement AI algorithms for predicting optimal planting times and detecting potential diseases. With a focus on resource optimization and informed decision-making, empower farmers to elevate crop yield and enhance overall crop management practices.",
        "In the era of smart retail, the challenge is to develop an innovative inventory management system that leverages the power of IoT and AI. The goal is to create a solution that not only monitors product levels but also predicts demand, optimizes restocking schedules, and minimizes the risk of overstock or stockouts. Additionally, the system should prioritize enhancing the overall user experience through a user-friendly interface.",
      ],
    },
    {
      text: "Open Ended",
      problemStatements: [
        "Interactive Learning Experience for Kids : Develop an AI powered solution  that aligns and understands the behavior and caliber of Kids , and generates relevant interactive content for their immersive learning experience",
        "Energy Estimation in buildings using Computer vision (Floor wise): Develop a Real time AI Powered solution using computer vision to track the amount of Energy being consumed in the frame of camera",
        "Other AI/ML related ideas are acceptable too",
      ],
    },
    {
      text: "Health Care",
      problemStatements: ["Any problem statement can be chosen!"],
    },
    {
      text: "Autonomous Vehicles",
      problemStatements: ["Any problem statement can be chosen!"],
    },
    {
      text: "Cyber Security",
      problemStatements: ["Any problem statement can be chosen!"],
    },
  ];

  const data1 = [
    {
      img: "https://i.imgur.com/xWYWhSP.png",
      text: "Generative AI",
    },
    {
      img: "https://i.imgur.com/nRnbpu1.png",
      text: "IOT",
    },
    {
      img: "https://i.imgur.com/mEpBmyc.png",
      text: "Open Ended",
    },
  ];

  const data2 = [
    {
      img: "https://i.imgur.com/EAk6FLg.png",
      text: "Health Care",
    },
    {
      img: "https://i.imgur.com/2SSMh8E.png",
      text: "Autonomous Vehicles",
    },
    {
      img: "https://i.imgur.com/hkCamEf.png",
      text: "Cyber Security",
    },
  ];

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
  };
  // const handleTabClick1 = (index) => {
  //   setSelectedTab1(index);
  // };

  return (
    // <div className="h-full w-full bg-[#0A113A] relative overflow-hidden mt-10">
    //   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[60%] sm:w-[70%] p-8 rounded-[20%] left-[70%] top-[5%] md:h-[60%] sm:h-[10%] blur-3xl levitate"></div>

    //   <div className="font-poppins h-[100%] mt-[50px]">
    //     <p className="font-bold text-[3rem] w-fit mx-auto relative z-10  text-white rounded-xl py-3 px-6">
    //       Themes
    //     </p>

    //     <div className="flex justify-center mx-auto ">
    //       {data1.map((val, index) => (
    //         <div
    //           key={index}
    //           className={`cursor-pointer flex flex-col justify-center items-center md:m-3  ${
    //             selectedTab === index ? "border-black border-4 " : ""
    //           } p-[10%] md:p-10 rounded-xl bg-opacity-60 backdrop-blur-3xl  bg-white `}
    //           onClick={() => handleTabClick(index)}
    //         >
    //           <Image
    //             src={val.img}
    //             width={150} // Adjust this to your desired width
    //             height={200} // Adjust this to your desired height
    //             alt={val.text}
    //             className="object-cover rounded-md"
    //           />
    //           <p className="mt-2 text-center">{val.text}</p>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="mt-4">
    //       {data1.map((val, index) => (
    //         <div
    //           key={index}
    //           className={`${selectedTab === index ? "block" : "hidden"}`}
    //         >
    //           <div className="mb-9 md:flex md:justify-center gap-5 mx-5">
    //             {themes[selectedTab].problemStatements.map((statement, id) => (
    //               <div
    //                 key={id}
    //                 className="md:w-[30%] sm:w-[90%] p-8 my-2 py-10 bg-white bg-opacity-70 backdrop-blur-3xl rounded mx-auto"
    //               >
    //                 <h1 className=" font-bold text-xl mb-4">
    //                   {themes[selectedTab].text} : Problem Statement {id + 1}
    //                 </h1>
    //                 <p>{statement}</p>
    //               </div>
    //             ))}
    //           </div>

    //           {/* Add additional content as needed */}
    //         </div>
    //       ))}
    //     </div>

    //     {/* Part 2 */}
    //     <div className="flex justify-center mx-auto m-5 ">
    //       {data2.map((val, index) => (
    //         <div
    //           key={index}
    //           className={`cursor-pointer flex flex-col justify-center items-center m-3  ${
    //             selectedTab1 === index ? "border-black border-4 " : ""
    //           } p-[10%] md:p-10 rounded-xl bg-opacity-60 backdrop-blur-3xl  bg-white `}
    //           onClick={() => handleTabClick1(index)}
    //         >
    //           <Image
    //             src={val.img}
    //             width={150} // Adjust this to your desired width
    //             height={200} // Adjust this to your desired height
    //             alt={val.text}
    //             className="object-cover rounded-md"
    //           />
    //           <p className="mt-2 text-center">{val.text}</p>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="mt-4">
    //       {data2.map((val, index) => (
    //         <div
    //           key={index}
    //           className={`${selectedTab1 === index ? "block" : "hidden"}`}
    //         >
    //           <div className="mb-9 md:flex md:justify-center gap-5 mx-5">
    //             <div className="md:w-[50%] sm:w-[90%] p-8 my-2 py-10 bg-white bg-opacity-70 backdrop-blur-3xl rounded mx-auto">
    //               <h1 className=" font-bold text-xl mb-4">
    //                 {val.text} : Problem Statement
    //               </h1>
    //               <p>Any problem statement can be chosen!</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className='h-full w-full bg-[#0A113A] relative overflow-hidden mt-10'>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[70%] p-8 rounded-[0%] left-[0%] top-[20%] md:h-[40%] blur-3xl levitate"></div>
        
    <div className='font-poppins h-[100%] mt-[50px]'>
    <p className="font-bold text-[3rem] w-fit mx-auto relative z-10  text-white rounded-xl py-3 px-6">
          Themes
        </p>
      
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
            <div className="mt-4">
           {data.map((val, index) => (
             <div
               key={index}
              className={`${selectedTab === index ? "block" : "hidden"}`}>
               <div className="mb-9  md:justify-center gap-5  bg-white bg-opacity-70 backdrop-blur-3xl rounded mx-auto md:w-[70%] sm:w-[90%] py-8 ">
                 {themes[selectedTab].problemStatements.map((statement, id) => (
                   <div
                     key={id}
                     className="md:px-[100px] my-2 py-3 px-10">
                     <h1 className=" font-bold text-xl mb-2">
                       {themes[selectedTab].text} : Problem Statement</h1>
                     <p>{statement}</p>
                   </div>
                 ))}
               </div>

               {/* Add additional content as needed */}
             </div>
           ))}
         </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Themes;
