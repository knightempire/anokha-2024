import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaPlus } from "react-icons/fa6";

const Themes = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  // const [selectedTab1, setSelectedTab1] = useState(0);


  const themes = [
    {
      text: "Generative AI",
      problemStatements: [
        ["Gen-AI based Ecommerce personalized recommendation system", "Recomendation systems is an intresting and rapidly evolving field of study In this track, You will have to develop a chatbot that 1) Understands conducts a goal-oriented chat with the user and understand user requirements, and is able into represent it in a domai specific query language. 2)Take the query generated from the step (1) and  Integrate it with a recomendation system and present the relevent products to the user. "],
        ["Github Repository navigator", "A Real time solution to understand a developer's problem statement (prompts) , show relevant repositories (Not just generated based on keywords but rather analyzing the entire github repositories and providing proper reccomendations) and provide a workflow if the solution can't be tackled with just a single repository"],
        ["Make it real: WHAT YOU SHOW IS WHAT YOU GET", "In this track, you will build an application, that converts the user wireframe (Hand-drawn or digital), into front-end code, essentially developing an “WHAT YOU SHOW IS WHAT YOU GET APPLICATION”"],
        ["Other Problem Statements","Participants are free to choose any problem statement which comes under this theme."]
      ],
    },
    {
      text: "IOT",
      problemStatements: [
        ["Smart Classroom Environment Control System", "Create an innovative solution for optimizing energy consumption and enhancing user comfort in large spaces, such as classrooms or expansive rooms with multiple fans, lights, and AC units. Develop a system that integrates IoT devices and AI algorithms to intelligently control individual appliances based on occupancy. The objective is to dynamically activate and deactivate fans, lights, and AC units in response to the presence or absence of individuals within specific zones, ensuring efficient resource utilization and a comfortable environment. "],
        ["Smart Farming Hackathon Challenge", "Design an intelligent farming system that harmoniously integrates IoT and AI technologies. Your mission is to develop a solution that monitors soil moisture, temperature, and crop health through IoT sensors. Implement AI algorithms for predicting optimal planting times and detecting potential diseases. With a focus on resource optimization and informed decision- making, empower farmers to elevate crop yield and enhance overall crop management practices. "],
        ["Smart Retail Inventory Management", "In the era of smart retail, the challenge is to develop an innovative inventory management system that leverages the power of IoT and AI. The goal is to create a solution that not only monitors product levels but also predicts demand, optimizes restocking schedules, and minimizes the risk of overstock or stockouts. Additionally, the system should prioritize enhancing the overall user experience through a user-friendly interface."],
        ["Other Problem Statements","Participants are free to choose any problem statement which comes under this theme."]
      ],
    },
    {
      text: "Health Care",
      problemStatements: [
        ["Multimodal Mental Health Assessment", "Mental health seems to be the new pandemic. With increasing number of mental health related concerns, Tools for early detection of signs of detoriating mental health and depression is neccessary to maintain a healthy community. In this track, You are tasked to build a multi-modal mental health assesment suite, that analyses the mental health condition of the personal by 1) Analysing the vidio of the person. Specifically, by analyzing facial expressions and body langeuge.  2) Analysing the audio of the person.  3) You may also utilize some standard scales availabe for mental health assesment to support your model.  velop an innovative approach for mental health assessment by combining NLP analysis of patient interviews and written responses with alysis of facial expressions and body language. The system should provide a nuanced understanding of mental health conditions, aiding re accurate diagnostics and treatment planning."] ,
        ["Other Problem Statements","Participants are free to choose any problem statement which comes under this theme."]
      ],
    },
    {
      text: "Autonomous Vehicles",
      problemStatements: [
        ["Other Problem Statements","Participants are free to choose any problem statement which comes under this theme."]
      ],
    },
    {
      text: "Cyber Security",
      problemStatements: [
        ["Other Problem Statements","Participants are free to choose any problem statement which comes under this theme."]
      ],
    },
    {
      text: "Open Ended",
      problemStatements: [
        ["DeepFake Detection Shield", "Deep-Fake encompasses various technologies employed to create audio, image, and video hoaxes. The widespread accessibility of these tools has led to an unprecedented surge in AI-driven content generation. However, the unauthorized use of individuals' information to create such hoaxes raises significant concerns. In this track, participants are tasked with devising techniques to detect Deep-Fakes, addressing the need to safeguard against the misuse of personal data in fabricated media content."],
        
        ["Interactive Learning Experience for Kids" ,"The design of learning pedagogies has been a central topic of discussion among educators and teachers. Historically, pedagogies have been tailored to meet the evolving needs of society, with great attention given to addressing individual needs, even within established educational institutions like schools and colleges. In this track, participants are tasked with developing an AI-Agent that engages in goal-oriented conversations with students to teach them a concept of their choice from a given syllabus (S), along with specified outcomes (O). Additionally, bonus points are awarded for integrating a planning module that receives real-time feedback from users and adjusts itself accordingly in real-time. Essentially, participants are challenged to create a personalized tutor that adapts to each student's strengths and weaknesses over time. Bonus points will also be awarded for creating a highly interactive user interface (UI) to enhance the learning experience."], 

        ["Real-Time Energy Estimation in Buildings Using Computer Vision (Floor-wise)", "The task at hand involves creating an innovative, AI-powered solution using computer vision to track energy consumption within buildings in real-time, with a focus on monitoring consumption on a floor-by-floor basis. This solution aims to utilize advanced algorithms and machine learning techniques to analyze video frames captured by cameras installed within buildings. By leveraging computer vision capabilities, the system will be able to identify and quantify energy consumption patterns within the camera frame, providing insights into the usage of electricity, heating, and cooling systems across different floors of the building. The proposed solution will enable facility managers and building operators to gain a comprehensive understanding of energy usage t within their facilities, allowing for timely interventions to optimize energy efficiency and reduce costs. Additionally, by prov real-time feedback on energy consumption, the system can help identify potential anomalies or inefficiencies, enabling proactive mea to be taken to address them promptly In essence, the goal of this project is to develop an AI-powered solution that leverages computer vision technology to provide accu real-time estimates of energy consumption within buildings, on a floor-by-floor basis. This solution has the potential to revoluti energy management practices in buildings, enabling more efficient resource allocation and contributing to sustainability efforts."], 

        ["Other Problem Statements","Participants are free to choose any problem statement which comes under this theme."],
      ],
    },
  ];

  // const data1 = [
  //   {
  //     img: "https://i.imgur.com/xWYWhSP.png",
  //     text: "Generative AI",
  //   },
  //   {
  //     img: "https://i.imgur.com/nRnbpu1.png",
  //     text: "IOT",
  //   },
  //   {
  //     img: "https://i.imgur.com/mEpBmyc.png",
  //     text: "Open Ended",
  //   },
  // ];

  // const data2 = [
  //   {
  //     img: "https://i.imgur.com/EAk6FLg.png",
  //     text: "Health Care",
  //   },
  //   {
  //     img: "https://i.imgur.com/2SSMh8E.png",
  //     text: "Autonomous Vehicles",
  //   },
  //   {
  //     img: "https://i.imgur.com/hkCamEf.png",
  //     text: "Cyber Security",
  //   },
  // ];

  const data = [
    {
      img: "https://i.imgur.com/xWYWhSP.png",
      text: "GEN AI",
    },
    {
      img: "https://i.imgur.com/nRnbpu1.png",
      text: "IOT",
    },
    {
      img: "https://i.imgur.com/EAk6FLg.png",
      text: "HealthCare",
    },
    {
      img: "https://i.imgur.com/2SSMh8E.png",
      text: "Autonomous Vehicles",
    },
    {
      img: "https://i.imgur.com/hkCamEf.png",
      text: "Cyber Security",
    },
    {
      img: "https://i.imgur.com/mEpBmyc.png",
      text: "OpenEnded",
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
      <div className="h-full w-full bg-[#0A113A] relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[30%] sm:w-[70%] p-8 rounded-full left-[10%] top-10 md:h-[30%] sm:h-[30%] blur-3xl levitate"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[40%] sm:w-[70%] p-8 rounded-full left-[80%] top-10 md:h-[40%] sm:h-[30%] blur-3xl levitate"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[40%] sm:w-[70%] p-8 rounded-full left-[20%] top-[40%] md:h-[40%] sm:h-[30%] blur-3xl levitate"></div>

        <div className="font-poppins h-[100%] mt-[30px]">
          <p className="font-bold text-[3rem] w-fit mx-auto relative z-10 rounded-xl text-white mt-4">
            Themes
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6  m-5 ">
            {data.map((val, index) => (
              <div
                key={index}
                className={`cursor-pointer flex flex-col justify-center items-center mx-3 my-2 ${
                  selectedTab === index ? "border-black border-4 " : "" } p-[10%] md:p-5 
            rounded-xl bg-opacity-60 backdrop-blur-3xl   bg-white `}
                onClick={() => handleTabClick(index)}
              >
                <Image
                  src={val.img}
                  width={200} // Adjust this to your desired width
                  height={200} // Adjust this to your desired height
                  alt={val.text}
                  className="object-cover rounded-md"
                />
                <p className="mt-2 text-center">{val.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            {data.map((val, index) => (
              <div
                key={index}
                className={`${selectedTab === index ? "block" : "hidden"}`}
              >
                <div className="mt-4">
                  {data.map((val, index) => (
                    <div
                      key={index}
                      className={`${
                        selectedTab === index ? "block" : "hidden"
                      }`}
                    >
                      <div className="mb-9 md:justify-center gap-5 bg-white bg-opacity-20 backdrop-blur-3xl rounded mx-auto md:w-[80%] sm:w-[90%] py-8 sm:px-6 md:px-0 shadow-xl">
                      <h1 className="text-center text-white font-bold text-3xl">{themes[selectedTab].text}</h1>
                      <h3 className="text-xl text-white text-center font-normal">Problem Statements</h3> 
                        {themes[selectedTab].problemStatements.map(
                          (statement, id) => (
                            <div key={id}>
                              <div  className="md:px-[50px] my-3 ">
                                <div className="w-full">
                                <Accordion key={index} className='rounded p-2 bg-transparent bg-white bg-opacity-80 shadow-none'>
                                <AccordionSummary 
                                expandIcon={<FaPlus />}
                                aria-controls="panel1-content"
                                id="panel1-header">
                                <Typography className='md:px-7 sm:px-2 py-1 text-md text-black font-bold text-lg'>{statement[0]}</Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                <Typography className='md:px-7 sm:px-2 text-lg'>
                                {statement[1]}
                                </Typography>
                                </AccordionDetails>
                            </Accordion>

                                
                              </div>
                            </div>
                            </div>
                            
                            
                          )
                        )}
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
