// pages/index.js
"use client";
import React from 'react';
import { SimpleCard } from '../_components/InstructCard';
import Resources from '../_components/Resources';
import Instructions from '../_components/Instructions';
import SubGuidelines from '../_components/SubGuidelines';
import Image from 'next/image';
import flowChart from '../images/intel_flowchart.jpeg'
import { FaDownload } from 'react-icons/fa';


const Home = () => {
  return (

    <div className='w-[100%]'>

      {/* <Instructions/> */}
    <div className="w-[100%] h-screen flex flex-col justify-center bg-[#0A113A] overscroll-x-none md:px-[30%] sm:px-0">
    <div className="font-poppins text-white w-full">
        <h1 className="md:text-[3rem] sm:text-2xl font-black text-center">INSTRUCTIONS</h1>
        <p className="text-xl mb-10  text-center">Follow these steps to get started</p>
        <div className="overflow-hidden  bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[40%] left-[15%] top-[250px] absolute blur-3xl levitate"></div>

                <SimpleCard  />


       
    </div>



    </div>
    
    <div className=' w-full'>
      
    <Image src={flowChart} width={900} alt="intel flowchart" className="mx-auto mt-10" />

    <div class="mx-auto mt-[7%] mb-[7%] sm:w-full md:w-[50%]" >
              {/* <div className="bg-gradient-to-r from-gray-500 to-gray-500 md:w-[100%] sm:w-[500px] p-8 h-[65%] md:left-0 top-[50px] absolute blur-3xl"></div> */}
              <div class=" bg-opacity-60 bg-white bg-blur p-6 ">
                <h3 class="text-xl mb-[2%] text-bold text-center">Download Sample PPT</h3>
                <a
                href="https://amritavishwavidyapeetham-my.sharepoint.com/:p:/g/personal/cb_en_u4cse21608_cb_students_amrita_edu/EaAaxjKyWIVLsBlk1ZIgHHABXoTydcJakpTu6g0Tp3ZXug"
                download
                className="before:ease relative h-12 w-50 overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex w-full justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
            >
                <FaDownload size={30}/>
            </a>
              </div>
            </div>
    </div>
    
    <SubGuidelines/>
    <Resources />
    </div>
    
    
  );
};

export default Home;
