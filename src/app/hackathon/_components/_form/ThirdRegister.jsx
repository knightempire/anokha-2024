"use client"
import React from 'react'

import {useState} from 'react'
import {Button} from "@material-tailwind/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const Memberview =({member,idc,no,e_val,idc_val})=> {
    return(
        <div className='w-full h-full px-5'>
            <div className="flex flex-col flex-1 space-y-1 -mt-2">
                {no%2===0?<hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 "/>
                :null
                }
                <p className='text-lg font-medium text-black text-center'>Member {no} Information</p>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black">
                    Member {no} : Email
                  </label>
                  <input
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                    type="email"
                    name="email"
                    id="email"
                    value={e_val}
                    className=" bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                    placeholder="eon@anokha.amrita.edu"
                    required
                    onChange={(e) => member(e.target.value)}
                  />
                </div>

                
                  <div>
                    <label
                      htmlFor="idc"
                      className="block mt-3 text-sm font-medium text-black"
                    >
                      Member {no} : Intel Dev Cloud ID
                    </label>
                    <input
                    //   onChange={(e) => {
                    //     setCollegeName(e.target.value);
                    //   }}
                      type="text"
                      name="devcloudid"
                      id="devcloudid"
                      value={idc_val}
                    //   value={collegeName}
                      className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                      placeholder="IDC ID"
                      onChange={(e) => idc(e.target.value)}
                    //   disabled={isAmrita}
                    />
                    
                  </div>
        </div>
        </div>
    )
}
export default function ThirdRegister({n,me3,mi3,me4,mi4,member3Email,member3IDC,member4Email,member4IDC,handle_register_click,handle_prev_click} ) {

    const MemberList = [
        {
            name: member3Email,
            idc: member3IDC,
            e_value: me3,
            idc_value: mi3
        }
        ,
        {
            name: member4Email,
            idc: member4IDC,
            e_value: me4,
            idc_value: mi4
        }
         
    ]
     
  return (
    
             
    <div className="w-full md:w-[560px] sm:hidden md:block  md:h-fit  rounded-md bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2   xl:p-0 bg-white">
      
      {/* <Image
        src={anokhalogo}
        priority
        alt="Amrita logo"
        width={128}
        height={128}
        className="ml-auto mr-auto mt-4 h-16"
      /> */}
      <div className="w-full flex flex-col justify-center p-6 space-y-2  sm:p-8">
       

           {/* First card */}
          
          <div className="flex flex-col justify-center flex-1 space-y-6  ">
            
            <div className="flex flex-col flex-1 space-y-2 ">

                        {n==3?<Memberview member={member3Email} idc = {member3IDC} no={3} e_val ={me3} idc_val = {mi3} key={3}/>:
                        MemberList.map((link, index) => (
                            
                                <Memberview member={link.name} idc = {link.idc} no={index+3} e_val ={link.e_value} idc_val = {link.idc_value} key={index}/>
                            )
                        ) }
            
            </div>

            <div className="w-full justify-center gap-2 mt-2 flex">
                {/* <button className="text-[1rem] bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-2 md:mt-3 rounded-[15px] ">
                  Upload Link
                </button> */}
                <Button onClick={handle_prev_click} className="text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                      <span relative="relative z-10">Previous</span>
                    </Button>
                <Button onClick={(e)=>handle_register_click(e)} className="text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                      <span relative="relative z-10">Register!</span>
                    </Button>
              </div>
            {/* <div className="flex mx-auto space-x-3 flex-row flex-1  space-y-5 pt-5">
                    <div className='mt-5  z-10 '>
                        <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_prev_click} >
                        <FaArrowLeft size={20} className='-ml-3 mr-3 '/>
                        <div className='-mr-9 py-1'>Prev</div> 
                        </Button>
                    </div>
                    <div className='mt-5 z-10'>
                        <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_register_click} >
                        <div className='-ml-2 py-1'>Register Team</div> 
                        <FaArrowRight size={20} className='-mr-6 ml-2 '/>
                        </Button>
                    </div>        
                            
            </div> */}
             
            
            

             
          </div>

      </div>
    </div>

   

 
  )
}
