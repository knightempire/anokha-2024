"use client"
import React from 'react'
import Image from 'next/image'
import {useState} from 'react'
import {Button} from "@material-tailwind/react"
import { FaArrowRight } from "react-icons/fa";
import oneapilogo from "../../images/oneAPI-rgb-3000.png";
import { GiTeamIdea } from "react-icons/gi";
import { Switch } from "@material-tailwind/react";
export default function FirstRegister({handle_buttonone_click,TeamName,NoofMembers,platform}) {
  return (
          
    <div className="w-full h-[100vh]  bg-[rgb(10,17,58)]">
    <div className="font-poppins text-black mx-auto">
      <div className="bg-gradient-to-r from-cyan-500 z-0 to-blue-500 md:w-[70%] sm:w-[80%] lg:w-[63%] xl:w-[55%] p-8 rounded-[50%] h-[80%] left-[25%] top-[50px] md:left-[17%] md:top-[40px] lg:left-[19%] xl:left-[23%] absolute blur-3xl levitate"></div>
      <div className="bg-white relative z-10 sm:w-[90%] md:w-[650px] h-fit  bg-opacity-80  px-5  md:px-8 py-8 rounded-xl sm:mx-auto top-[120px]">
              <div className="flex gap-1 items-center text-center text-2xl font-bold justify-center mb-5">
                  <Image src={oneapilogo}  width={80} className="relative ml-auto mr-auto -mt-9" />
                          Register
              
              </div>

        <div className="border-slate-500 rounded border-2 border-dashed w-full h-full sm:px-4 mx md:px-10 mt-3 py-8">
                           
              <div className='flex bg-white items-center rounded px-4 py-2 gap-3 '>
                  <GiTeamIdea size={30}/>
                  <input type="text"
                        
                        value={TeamName[0]}
                        name="teamname"
                        id="teamname"
                        className="w-full focus:outline-0"
                        placeholder="Enter Your Team Name"
                        onChange={(e) => TeamName[1](e.target.value)}
                        required
                      />
              </div>
                  
                        
                        
              <label htmlFor="phone"
                          className="block px-4 py-2 gap-3 mt-3 text-sm font-medium text-black">
                          Number of Team Members
                        </label>
  
                      <div className='flex bg-white items-center rounded px-4 py-2 gap-3'>
                        
                        
                        <input
                          
                          type="number"
                          name="teamnumber"
                          id="teamnumber"
                          value={NoofMembers[0]}
                          className="bg-transparent text-center border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5"
                          placeholder="3" min="3" max="4" 
                          onChange={(e) => NoofMembers[1](e.target.value)}
                          required
                        />
                      </div>
  
                      
                      <div>
                        <div>
                          <label
                            htmlFor="college"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            Registered through
                          </label>
  
                          <div className='flex'>
                          <select id="platform" className="bg-transparent mr-2 border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5 border-y-1">
                          <option value="none" defaultValue>None</option>
                          <option value="devfolio">DevFolio</option>
                          <option value="unstop">Unstop</option>
                          <option value="devpost">Devpost</option>
                          </select>
                          <input
                          
                            type="text"
                            name="platformid"
                            id="platformid"
                            value={platform[0]}
                            className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                            placeholder="Platform ID"
                            onChange={(e) => platform[1](e.target.value)}
                          
                          />
  
                        </div>
                          
                          
  
                        </div>
                      </div>
                      
                      
  
                      <div className="flex sm:hidden md:block mx-auto  flex-col     pt-1">
                            <div className='mt-2 z-10'>
                                <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_buttonone_click} >
                                <div className='-ml-2'>Next</div> 
                                <FaArrowRight size={20} className='-mr-6 ml-2 '/>
                                </Button>
                            </div>
                      
                     
                    
                </div>
                 
          

           
          
        </div>
      </div>
    </div>
  </div>
    
             
               
                
              

             

       
  )
}