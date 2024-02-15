"use client"
import { FaTrophy } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { Button} from "@material-tailwind/react";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

import React from 'react'
import CountdownTimer from "@/app/components/Counter";


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

  const disableCondition = () => {
        const token = secureLocalStorage.getItem("SECRET_TOKEN");
        if(token == null || token == undefined){
            return true;
        }
        return false;
    }

  const handleStateChange = () => {
    setCurrentState((prevState) => {
      return prevState === "guest" ? "registered" : "guest";
    });
  };
  return (
    <div className="">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:ml-[20%]  sm:ml-[10%] mb-20">
            <div>
                <div className="flex flex-row gap-4 items-center justify-start  mt-12">
                    <FaTrophy size="30" color="#1c5dad"/>
                    <div className="md:text-2xl sm:text-xl capitalize  sm:px-2 md:px-0">Prize money upto <span className="font-black md:text-3xl sm:text-2xl text-[#1c5dad] ">₹1,25,000/-</span></div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-start mt-12">
                  <MdGroups2 size="40" color="#1c5dad"/>
                <div className="md:text-2xl sm:text-xl ">Who can participate?</div> 
                </div>
                <div className="mt-4 text-md w-4/5 md:text-xl sm:text-md ">
                AI/ML Enthusiasts, Undergraduate and Postgraduate Students
                </div>

            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-2 mt-10 md:w-[40%] sm:w-full">
                    <div className="mt-3 text-xl ml-3">Last Date To Register<br/> 
                    <span className="font-bold text-center text-[2rem]">29 Feb 2023</span></div>
                </div>
                {/* <CountdownTimer/> */}

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

                 {/* Timer here if possible  */}

              <div>
              <Button 
                onClick={(e)=>{router.push("/hackathon/register")}} 
                className="text-[1rem]  bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-4  rounded-[5px] mt-3 ml-3"
                disabled={disableCondition}
              >
              Registrations Open!
            </Button>
              </div>
            </div>
        </div>
    </div>
  )
}
