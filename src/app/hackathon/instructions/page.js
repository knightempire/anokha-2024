// pages/index.js
"use client";
import React from 'react';
import { SimpleCard } from '../_components/InstructCard';
import Resources from '../_components/Resources';
import SubGuidelines from '../_components/SubGuidelines';
import Image from 'next/image';
import flowChart from '../images/process.jpg'
import Rules from '../_components/Rules';
import Judging from '../_components/Judging';
import Navigationbar from '@/app/components/EventHeader';
import Footer from '@/app/components/Footer';
import { FaAngleDoubleDown } from "react-icons/fa";

const Home = () => {
  const handleScrollMore = () => {
    window.scrollTo({
      top: window.scrollY + 700, // Adjust the value as needed for your desired scroll distance
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };
  return (

    <div className=''>
<Navigationbar />
      {/* <Instructions/> */}
    <div className="w-full h-screen  relative flex flex-col justify-center items-center bg-[#0A113A]">
      <div className="font-poppins text-white ml-auto mr-auto lg:mt-[7%] md:mt-[10%] sm:mt-[25%] text-center">
      <h1 className="text-4xl font-bold mb-4">INSTRUCTIONS</h1>
      <p className="text-lg mb-8">Follow these steps to get started</p>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[70%] p-8 rounded-[50%] lg:h-[60%] md:h-[40%] sm:h-[25%] lg:left-[20%] sm:left-[12%] md:left-[18%] lg:top-[20%] md:top-[30%] sm:top-[35%] absolute blur-3xl levitate sm:w-[80%]"></div>
      <SimpleCard />
      <div className="mx-auto flex justify-center items-center">
        <div
          onClick={handleScrollMore}
          className="bg-white text-black animate-bounce absolute top-[92%]  w-60 rounded-full px-3 py-2 flex items-center justify-center"
        >
        Scroll More <FaAngleDoubleDown className="ml-2" />
        </div>
      </div>
    </div>

    </div>
    <Image src={flowChart} width={1050} alt="intel flowchart" className="mx-auto" />
    <SubGuidelines/>
    <Resources />
    <Rules/>
    <Judging/>
    <Footer/>
    </div>
  );
};

export default Home;
