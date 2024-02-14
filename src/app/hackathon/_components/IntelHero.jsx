"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import oneapilogo from "../images/oneAPI-rgb-3000.png";
import { IoLocation } from "react-icons/io5";
import { Button,Chip} from "@material-tailwind/react";
import { useRouter } from 'next/navigation'

function IntelHero( {userState,displayResult}) {
  const router = useRouter()

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
    <div className="w-[100%] overscroll-x-none h-[100vh] bg-[rgb(10,17,58)]">
      <div className="font-poppins text-black mx-auto">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[90%] p-8 rounded-[50%] h-[60%] md:left-[23%] sm:left-[10%] lg:top-[15%] md:top-[15%] sm:top-[21.25%] absolute blur-3xl levitate overflow-hidden"></div>
      <div className="bg-white md:w-[40%] bg-opacity-80 sm:w-[93%] px-10 py-12 rounded-xl sm:mx-auto lg:top-[30%] md:top-[30%] sm:top-[37.5%] lg:left-[30%] md:left-[27%] sm:left-[3%] absolute">
          <Image src={oneapilogo} width={150} alt="oneapilogo" className="mt-[-100px] 2xl:left-[30%] relative" />
          <p className="md:text-[3rem] sm:text-[2rem] font-bold sm:leading-[100%] mt-2 2xl:left-[30%] relative">
            Intel AI Hackathon
          </p>
          <div className="text-xs w-fit py-2 bg-blue-500 px-4 mt-2 rounded-full text-white flex items-center gap-1 2xl:left-[30%] relative">
          <IoLocation size={15}/> Amrita Vishwa Vidyapeetham, Coimbatore
          </div>
          {/* <button className='text-base p-3 bg-[#03C7FD] mt-3 rounded'>IDC Materials</button> */}
          <div className="flex md:gap-4 sm:gap-2 flex-wrap mt-2 2xl:left-[30%] relative">
 
            <Button onClick={(e)=>{router.replace("/hackathon/instructions")}} className="text-[1rem] text-black border border-black p-3 px-8 sm:mt-0 md:mt-0 rounded-xl bg-transparent md:w-fit sm:w-full">
              Instructions
            </Button>
            {userState===0? <Button onClick={(e)=>{router.replace("/register")}} className="before:ease relative h-12  md:w-fit sm:w-full overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                          Sign Up for Anokha !
                          </Button> 
              : userState===1? <Button onClick={(e)=>{router.replace("/hackathon/register")}} className="before:ease relative  md:w-fit   sm:w-full overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
              Register your Team !
              </Button> 
              :userState===2? <Button onClick={(e)=>{router.replace("/hackathon/dashboard")}} className="before:ease relative h-12 w-50 overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
              DashBoard!
              </Button>
              : null
              }
            
          </div>
          <div className="flex md:gap-2 sm:gap-2 justify-center items-center flex-wrap -mb-6 mt-5 bg-[rgb(9,11,60)] mx-auto rounded-full text-white text-[14px] px-2 ">
          {displayResult===2? <p className="p-3 ">You have submitted for Round 2 </p> 
              : displayResult===1? <p className="p-3">You have submitted for Round 1</p> 
              : null
              }
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default IntelHero;
