"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import oneapilogo from "../images/oneAPI-rgb-3000.png";
import ieeelogo from "../images/ieee.png"
import intelogo from "../images/intel-logo.png"
import { IoLocation } from "react-icons/io5";
import { Button, Chip } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { FaAngleDoubleDown } from "react-icons/fa";

function IntelHero({ userState, displayResult }) {
  const router = useRouter();
  const handleScrollMore = () => {
    window.scrollTo({
      top: window.scrollY + 700, // Adjust the value as needed for your desired scroll distance
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };
  return (

    <div className="w-[100%] relative overscroll-x-none h-[100vh] bg-[rgb(10,17,58)]">
      <div className="font-poppins text-black mx-auto">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] md:left-[25%] sm:l-[5%] top-[120px] absolute blur-3xl levitate overflow-hidden"></div>
        <div className="bg-white md:w-[40%] bg-opacity-80 sm:w-[93%] px-10 py-12 rounded-xl sm:mx-auto top-[250px] relative">
          <div className="flex justify-between items-center mt-[-100px] w-full">
            <Image src={oneapilogo} width={150} alt="oneapilogo" />
            <Image src={ieeelogo} width={150} alt="ieeelogo" className="mt-5 -mr-2" />
          </div>
          <p className="md:text-[3rem] sm:text-[2.2rem] font-bold sm:leading-[100%] md:flex sm:block items-baseline gap-3 pt-2">
            <span><Image src={intelogo} width={100} alt="intel logo" /></span> 
            AI Hackathon
          </p>
          <div className="text-xs w-fit py-2 bg-blue-500 px-4 mt-2 rounded-full text-white flex items-center gap-1">
            <IoLocation size={15} /> Amrita Vishwa Vidyapeetham, Coimbatore
          </div>
          {/* <button className='text-base p-3 bg-[#03C7FD] mt-3 rounded'>IDC Materials</button> */}
          <div className="flex md:gap-4 sm:gap-2 flex-wrap mt-2">
            <Button
              onClick={(e) => {
                router.push("/hackathon/instructions");
              }}
              // disabled={1}


              className="text-[1rem] text-black border border-black p-3 px-8 sm:mt-0 md:mt-0 rounded-xl bg-transparent md:w-fit sm:w-full"
            >
              Instructions
            </Button>

            {userState === 0 ? (
              <Button
                onClick={(e) => {
                  router.push("/register");
                }}
                className="before:ease relative h-12  md:w-fit sm:w-full overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
                disabled={true}
              >
                Registrations Closed!
              </Button>
            ) : userState === 1 ? (
              <Button
                onClick={(e) => {
                  router.push("/hackathon/register");
                }}
                className="before:ease relative  md:w-fit   sm:w-full overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
                disabled={true}
              >
                Registrations Closed!
              </Button>
            ) : userState === 2 ? (
              <Button
                onClick={(e) => {
                  router.push("/hackathon/dashboard");
                }}
                className="before:ease relative h-12 w-50 md:w-fit sm:w-fulloverflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
              >
                DashBoard!
              </Button>
            ) : null}
          </div>
          <div className="flex md:gap-2 sm:gap-2 justify-center items-center flex-wrap -mb-6 mt-5 bg-[rgb(9,11,60)] mx-auto rounded-full text-white text-[14px] px-2 ">
            {displayResult === 2 ? (
              <p className="p-3 ">You have submitted for Round 2 </p>
            ) : displayResult === 1 ? (
              <p className="p-3">You have submitted for Round 1</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className=" inset-0 flex justify-center items-center">
        <div onClick={handleScrollMore} className="bg-white tex animate-bounce absolute md:top-[92%] sm:top-[90%]  w-60 rounded-full px-3 py-2 flex items-center justify-center">Scroll More  <FaAngleDoubleDown className="ml-2" /></div>
      </div>
    </div>
  );
}

export default IntelHero;
