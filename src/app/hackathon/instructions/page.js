// pages/index.js
"use client";
import React from 'react';
import { SimpleCard } from '../_components/InstructCard';
import Resources from '../_components/Resources';
import SubGuidelines from '../_components/SubGuidelines';
import Image from 'next/image';
import flowChart from '../images/process.jpg'
import { FaDownload } from 'react-icons/fa';


const Home = () => {
  return (

    <div className=''>

      {/* <Instructions/> */}
    <div className="w-full h-screen  relative flex flex-col justify-center items-center bg-[#0A113A]">
    <div className="font-poppins text-white mx-auto text-center">
        <h1 className="text-4xl font-black mb-2">INSTRUCTIONS</h1>
        <p className="text-lg mb-8">Follow these steps to get started</p>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] p-8 rounded-[50%] lg:h-[60%] md:h-[30%] sm:h-[25%] lg:left-[25%] sm:left-[12%] md:left-[23%] lg:top-[20%] md:top-[60%] sm:top-[35%] absolute blur-3xl levitate sm:w-[80%]"></div>
                <SimpleCard  />


       
    </div>



    </div>
    <Image src={flowChart} width={1050} alt="intel flowchart" className="mx-auto" />
    <div class="card mx-auto my-[7%]">
              <div className="bg-gradient-to-r from-gray-500 to-black-500 md:w-[50%] p-8 rounded-[50%] lg:h-[60%] md:h-[40%] sm:h-[25%] lg:left-[25%] sm:left-[12%] md:left-[23%] lg:top-[10%] md:top-[30%] sm:top-[40%] absolute blur-3xl levitate sm:w-[80%] lg:w-[100%]"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="text-lg text-center">Download Sample PPT</h3>
                <a
                href="https://amritavishwavidyapeetham-my.sharepoint.com/:p:/g/personal/cb_en_u4cse21608_cb_students_amrita_edu/EaAaxjKyWIVLsBlk1ZIgHHABXoTydcJakpTu6g0Tp3ZXug"
                download
                className="before:ease relative h-12 w-50 overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
            >
                <FaDownload size={30}/>
            </a>
              </div>
            </div>
    <SubGuidelines/>
    <Resources />
    </div>
    
    
  );
};

export default Home;
