"use client"
import { FaTrophy } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { Button} from "@material-tailwind/react";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

import React from 'react'


export default function Price() {
  const [currentState, setCurrentState] = useState("guest");
  const router = useRouter()
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
    <div className=" ">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:ml-[20%]  sm:ml-[10%] mb-20">
            <div>
                <div className="flex flex-row gap-4 items-center justify-start  mt-12">
                    <FaTrophy size="30" color="#1c5dad"/>
                    <div className="text-2xl capitalize">Price money worth 1000</div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-start mt-12">
                  <MdGroups2 size="40" color="#1c5dad"/>
                <div className="text-2xl">Who can participate?</div> 
                </div>
                <div className="mt-4 text-xl w-4/5 ">
                Professionals, Developer Communities, AI/ML Enthusiasts, Ph.D. - First Year Students/ M.Tech students working along with their professors, research scholars, start-ups, and freelancers.
                </div>

            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-2 mt-10 md:w-[40%] sm:w-full ">
                    <div className="mt-3 text-xl ml-3">Last Date To Register<br/> 
                    <span className="font-bold text-center text-[2rem]">29 Feb 2023</span></div>
                </div>

                <div className="md:flex gap-4 mt-5 ml-3 text-lg">
                      <div className="flex items-center gap-2">
                        <IoGlobeOutline/> Offline
                      </div>

                      <div className="flex items-center gap-2">
                        <IoPeople/> 3-4
                      </div>

                      <div className="flex items-center gap-2">
                        <ImLocation/> Coimbatore, India
                      </div>
                </div>

                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":15}}></span>
                      </span>
                      days
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":10}}></span>
                      </span>
                      hours
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":24}}></span>
                      </span>
                      min
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-5xl">
                        <span style={{"--value":14}}></span>
                      </span>
                      sec
                    </div>
                </div>
              <div>
              <Button onClick={(e)=>{router.replace("/hackathon/register")}} className="text-[1rem]  bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-0 md:mt-1 rounded-[5px] mt-8 ml-3">
              Registrations Open!
            </Button>
              </div>
            </div>
        </div>
    </div>
    
  )
}
