"use client"
import React from 'react'

import {useState} from 'react'
import {Button} from "@material-tailwind/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const Memberview =({member,idc,no,e_val,idc_val})=> {
    return(
        
            <div className="flex flex-col flex-1 space-y-5 ">
                {no%2===0?<hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 w-"/>
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
                      className="block mb-2 text-sm font-medium text-black"
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
    )
}
export default function SecondRegister({me1,mi1,me2,mi2,member1Email,member1IDC,member2Email,member2IDC,handle_next_click,handle_prev_click} ) {

    const MemberList = [
        {
            name: member1Email,
            idc: member1IDC,
            e_value: me1,
            idc_value: mi1
        }
        ,
        {
            name: member2Email,
            idc: member2IDC,
            e_value: me2,
            idc_value: mi2
        }
         
    ]
     
  return (
     

             
    <div className="w-full md:w-[560px] sm:hidden md:block  md:h-[600px]  rounded-md bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2   xl:p-0 bg-white">
      
      {/* <Image
        src={anokhalogo}
        priority
        alt="Amrita logo"
        width={128}
        height={128}
        className="ml-auto mr-auto mt-4 h-16"
      /> */}
      <div className="w-full flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
       

           {/* First card */}
          
          <div className="flex flex-col justify-center md:space-y-10 flex-1 space-y-5  ">
            
            <div className="flex flex-col flex-1 space-y-5 pt-5">
                     
                        {MemberList.map((link, index) => (
                            
                                <Memberview member={link.name} idc = {link.idc} no={index+1} e_val ={link.e_value} idc_val = {link.idc_value} key={index}/>
                            )
                        ) }
            
            </div>

            
            <div className="flex mx-auto space-x-3 flex-row flex-1  space-y-5 pt-5">
                    <div className='mt-5  z-10 '>
                        <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_prev_click} >
                        <FaArrowLeft size={20} className='-ml-3 mr-3 '/>
                        <div className='-mr-9 py-1'>Prev</div> 
                        </Button>
                    </div>
                    <div className='mt-5 z-10'>
                        <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_next_click} >
                        <div className='-ml-2 py-1'>Next</div> 
                        <FaArrowRight size={20} className='-mr-6 ml-2 '/>
                        </Button>
                    </div>        
                            
            </div>
             
            
            

             
          </div>

      </div>
    </div>

   

 
  )
}
