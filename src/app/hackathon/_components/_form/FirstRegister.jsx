"use client"
import React from 'react'

import {useState} from 'react'
import {Button} from "@material-tailwind/react"
import { FaArrowRight } from "react-icons/fa";
export default function FirstRegister({handle_buttonone_click,TeamName,NoofMembers,platform}) {
  return (
          
             
              // <div className="w-full md:w-[560px] sm:hidden md:block  md:h-[600px]  rounded-md bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2  xl:p-0 bg-white">
                
              //   {/* <Image
              //     src={anokhalogo}
              //     priority
              //     alt="Amrita logo"
              //     width={128}
              //     height={128}s
              //     className="ml-auto mr-auto mt-4 h-16"
              //   /> */}
              //   <div className="w-full flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
              //     <h1 className="text-xl mx-auto top-10 font-bold leading-tight tracking-tight text-black md:text-2xl">
              //       Register
              //     </h1>
                  
  
              //        {/* First card */}
                    
              //       <div className="flex flex-col justify-center md:space-y-10 flex-1 space-y-5  ">
              //         <div>
              //           <label
              //             htmlFor="teamname"
              //             className="block mb-2 text-sm font-medium text-black"
              //           >
              //             Your Team Name
              //           </label>
              //           <input
              //             type="text"
              //             // onChange={(e) => {
              //             //   setName(e.target.value);
              //             // }}
              //             value={TeamName[0]}
              //             name="teamname"
              //             id="teamname"
              //             className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
              //             placeholder="Team Name"
              //             onChange={(e) => TeamName[1](e.target.value)}
              //             required
              //           />
              //         </div>
  
  
              //         <div>
              //           <label
              //             htmlFor="phone"
              //             className="block mb-2 text-sm font-medium text-black">
              //             Number of Team Members
              //           </label>
              //           <input
              //             // onChange={(e) => {
              //             //   setPhone(e.target.value);
              //             // }}
              //             type="number"
              //             name="teamnumber"
              //             id="teamnumber"
              //             value={NoofMembers[0]}
              //             className="bg-transparent text-center border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5"
              //             placeholder="3" min="3" max="4" 
              //             onChange={(e) => NoofMembers[1](e.target.value)}
              //             required
              //           />
              //         </div>
  
                      
              //         <div>
              //           <div>
              //             <label
              //               htmlFor="college"
              //               className="block mb-2 text-sm font-medium text-black"
              //             >
              //               Registered through
              //             </label>
  
              //             <div className='flex'>
              //             <select id="platform" className="bg-transparent mr-2 border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5 border-y-1">
              //             <option value="none" selected>None</option>
              //             <option value="devfolio">DevFolio</option>
              //             <option value="unstop">Unstop</option>
              //             <option value="devpost">Devpost</option>
              //             </select>
              //             <input
              //             //   onChange={(e) => {
              //             //     setCollegeName(e.target.value);
              //             //   }}
              //               type="text"
              //               name="platformid"
              //               id="platformid"
              //               value={platform[0]}
              //               className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
              //               placeholder="Platform ID"
              //               onChange={(e) => platform[1](e.target.value)}
              //             //   disabled={isAmrita}
              //             />
  
              //           </div>
                          
                          
  
              //           </div>
              //         </div>
                      
                      
  
              //         <div className="flex sm:hidden md:block mx-auto  flex-col flex-1 space-y-5 pt-5">
              //               <div className='mt-5 z-10'>
              //                   <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_buttonone_click} >
              //                   <div className='-ml-2'>Next</div> 
              //                   <FaArrowRight size={20} className='-mr-6 ml-2 '/>
              //                   </Button>
              //               </div>
                      
              //         </div>
              //       </div>
  
              //   </div>
              // </div>



    <div>
    <div className="w-full h-[100vh] bg-[rgb(10,17,58)]">
      <div className="font-poppins text-black mx-auto">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[80%] left-[25%] top-[100px] absolute blur-3xl levitate"></div>
        <div className="bg-white md:w-[40%] bg-opacity-80 sm:w-[80%] px-8 py-8 rounded-xl sm:mx-auto top-[120px] relative">
          <div className="flex gap-1 items-center text-center text-2xl font-bold justify-center mb-5">
            UPLOAD PDF LINK!
          </div>
    
          <div className="border-slate-500 rounded border-2 border-dashed w-full h-full px-10 mt-3 py-8">
            <select className="w-full p-3 rounded border-2 mx-auto bg-transparent border-black mt-3">
              <option value="" disabled selected>
                Select a Theme
              </option>
              <option value="0">Generative AI</option>
              <option value="1">Internet of Things (IOT)</option>
              <option value="2">Health Care</option>
              <option value="3">Autonomous Vehicles</option>
              <option value="4">Cyber Security</option>
              <option value="5">Open Ended</option>
            </select>
    
            <div className="mt-7">
            <label for="ps" >Problem Statement Description</label><br/>
            <textarea name="ps" className="w-full h-[200px] rounded p-3 resize-none" placeholder="Describe your problem statement here"/>
    
            </div>
            
    
            <div className="w-full flex justify-center mt-5">
              {/* <button className="text-[1rem] bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-2 md:mt-3 rounded-[15px] ">
                Upload Link
              </button> */}
    
              <button class="before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                    <span relative="relative z-10">Next</span>
                  </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>

       
  )
}
