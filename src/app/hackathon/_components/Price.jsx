"use client"
import { FaTrophy } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import React from 'react'


export default function Price() {
  return (
    <div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:ml-[20%] sm:ml-[10%] mb-20">
            <div>
                <div className="flex flex-row gap-4 items-center justify-start  mt-12">
                    <FaTrophy size="30" color="darkblue"/>
                    <div className="text-2xl capitalize">Price money worth 1000</div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-start mt-12">
                  <MdGroups2 size="40" color="darkblue"/>
                <div className="text-2xl">Who can participate?</div> 
                </div>
                <div className="mt-4 text-xl w-4/5 ">
                Professionals, Developer Communities, AI/ML Enthusiasts, Ph.D. - First Year Students/ M.Tech students working along with their professors, research scholars, start-ups, and freelancers.
                </div>

            </div>

            <div className="flex flex-row">
                <div className="flex flex-row gap-2 mt-10 md:w-[40%] sm:w-full ">
                    <div className="mt-3 text-xl ml-3">Last Date To Register<br/> 
                    <span className="font-bold text-center text-[2rem]">29 Feb 2023</span></div>

                </div>
            </div>
        </div>
    </div>
    
  )
}
