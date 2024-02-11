"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import oneapilogo from "../images/oneAPI-rgb-3000.png";
import { IoDocumentText } from "react-icons/io5";
import { Button,Textarea } from "@material-tailwind/react";

function RoundOne({theme_val,theme,problem_val,problem,next}) {
//   const [currentState, setCurrentState] = useState("guest");
//   const [value, setValue] = useState("Select Theme");
  
//   useEffect(() => {}, []);

//   const getButtonText = () => {
//     switch (currentState) {
//       case "guest":
//         return "Register";
//       case "registered":
//         return "View Details";
//       default:
//         return "Register";
//     }
//   };

//   const handleStateChange = () => {
//     setCurrentState((prevState) => {
//       return prevState === "guest" ? "registered" : "guest";
//     });
//   };

  return (

    <div>
      <div className="w-full h-[100vh]  bg-[rgb(10,17,58)]">
        <div className="font-poppins text-black mx-auto">
          <div className="bg-gradient-to-r from-cyan-500 z-0 to-blue-500 md:w-[70%] sm:w-[80%] lg:w-[63%] xl:w-[55%] p-8 rounded-[50%] h-[80%] left-[25%] top-[50px] md:left-[17%] md:top-[40px] lg:left-[19%] xl:left-[23%] absolute blur-3xl levitate"></div>
          <div className="bg-white relative z-10 sm:w-[90%] md:w-[650px] h-fit  bg-opacity-80  px-5  md:px-8 py-8 rounded-xl sm:mx-auto top-[80px]">
            <div className="flex gap-1 items-center text-center text-2xl font-bold justify-center mb-5">
              <IoDocumentText color="#4287f5" className="mr-2" /> 
              UPLOAD PDF LINK!
            </div>

            <div className="border-slate-500 rounded border-2 border-dashed w-full h-full sm:px-4 mx md:px-10 mt-3 py-8">
            <label className="text-lg font-semibold">Theme</label><br/>
             <select value={theme_val} className="w-full p-3 rounded border-2 mx-auto bg-transparent border-black mt-3"
                    onChange={(e)=>theme(e.target.value)}>
                <option value={-1} disabled defaultValue>
                  Select a Theme
                </option>
                <option value={0}>Generative AI</option>
                <option value={1}>Internet of Things (IOT)</option>
                <option value={2}>Health Care</option>
                <option value={3}>Autonomous Vehicles</option>
                <option value={4}>Cyber Security</option>
                <option value={5}>Open Ended</option>
              </select>

              <div className="mt-7">
              <label className="text-lg font-semibold">Problem Statement Description
              <span className="font-medium text-gray-700 text-sm"> (200 char Max)</span> 
              
              </label><br/>
              <Textarea 
                    maxLength="200"
                    name="ps" 
                    value={problem_val} 
                    className="w-full mt-2 h-[200px] border-black border-2 rounded p-3 bg-gray-100 overflow-auto" // Added overflow-auto
                    placeholder="Describe your problem statement here"
                    onChange={(e)=>problem(e.target.value)}
                    style={{resize:"none"}}
                    />

              </div>
              

              <div className="w-full flex justify-center mt-5">
                {/* <button className="text-[1rem] bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-2 md:mt-3 rounded-[15px] ">
                  Upload Link
                </button> */}

                <Button onClick={next} className="before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                      <span relative="relative z-10 text-xl ">Next</span>
                    </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoundOne;
