"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import oneapilogo from "../images/oneAPI-rgb-3000.png";
import { IoDocumentText } from "react-icons/io5";
import { Select, Option } from "@material-tailwind/react";

function IntelHero() {
  const [currentState, setCurrentState] = useState("guest");
  const [value, setValue] = useState("Select Theme");
  
  useEffect(() => {}, []);

  const getButtonText = () => {
    switch (currentState) {
      case "guest":
        return "Register";
      case "registered":
        return "View Details";
      default:
        return "Register";
    }
  };

  const handleStateChange = () => {
    setCurrentState((prevState) => {
      return prevState === "guest" ? "registered" : "guest";
    });
  };

  return (
    // <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
    //     <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
    //         <img src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" />
    //         <div>
    //             <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">INTEL HACKATHON  <span className="md:block mt-4">ANOKHA 2024</span></h1>
    //             <p className="py-2 text-xl text-slate-100 mt-4 pr-12">Join the most amazing<br /> Hackathon</p>
    //             <div className="flex flex-row items-center mt-16 space-x-4">
    //                 <Link href="/hackathon-register">
    //                     <button className="btn text-lg px-4 py-2 bg-white text-gray-800 hover:bg-gray-200 rounded-lg">
    //                         {getButtonText()}
    //                     </button>
    //                 </Link>
    //                 <button onClick={handleStateChange} className="btn text-lg px-4 py-2 bg-white text-gray-800 hover:bg-gray-200 rounded-lg">
    //                     Toggle State
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div>
      <div className="w-full h-[100vh] bg-[rgb(10,17,58)]">
        <div className="font-poppins text-black mx-auto">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[120px] absolute blur-3xl levitate"></div>
          <div className="bg-white md:w-[40%] bg-opacity-80 sm:w-[80%] px-8 py-12 rounded-xl sm:mx-auto top-[210px] relative">
            <div className="flex gap-1 items-center text-center text-2xl font-bold justify-center mb-5">
              <IoDocumentText color="#4287f5" className="mr-2" /> 
              UPLOAD PDF LINK!
            </div>

            <div className="border-slate-700 rounded border-2 border-dashed w-full h-full px-10 mt-3 py-8">
              <select className="w-full p-3 rounded border-2 mx-auto bg-transparent border-black">
                <option value="" disabled selected>
                  Select a Problem Statement
                </option>
                <option value="theme1ps1">Theme 1: Problem Statement 1</option>
                <option value="theme1ps1">Theme 1: Problem Statement 1</option>
                <option value="theme1ps1">Theme 1: Problem Statement 1</option>
                <option value="theme1ps1">Theme 1: Problem Statement 1</option>
              </select>
              <input
                type="text"
                placeholder="PDF Link Here!"
                className="w-full p-3 mt-3 rounded"
              />

              <div className="w-full ml-[32%] mt-5">
                {/* <button className="text-[1rem] bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-2 md:mt-3 rounded-[15px] ">
                  Upload Link
                </button> */}

                <button class="before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                      <span relative="relative z-10">Upload Link</span>
                    </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntelHero;
