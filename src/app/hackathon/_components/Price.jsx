"use client"
import { FaTrophy } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import React from 'react'


export default function Price() {
  return (
    <div className="flex flex-col items-start ml-10 mt-12"> 
        <div className="flex flex-row gap-4 items-center justify-start">
            <FaTrophy size="30" color="darkblue"/>
            <div className="text-2xl capitalize">Price money worth 1000</div>
        </div>

         
            <div className="flex flex-row gap-4 items-center justify-start mt-10">
                <MdGroups2 size="40" color="darkblue"/>
               <div className="text-2xl">Who can participate?</div> 
            </div>
            <div className="mt-6 text-xl w-4/5 ml-10">
            Professionals, Developer Communities, AI/ML Enthusiasts, Ph.D. - First Year Students/ M.Tech students working along with their professors, research scholars, start-ups, and freelancers.
            </div>

            <div className="flex flex-row gap-2 mt-10">
                <div className="mt-3 text-xl w-4/5 ml-3">Last Date To Register 29 Feb 2023</div>

            </div>
        
    </div>
  )
}
