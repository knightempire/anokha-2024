"use client";
import React from "react";

import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import validator from "validator";

const Memberview = ({ member, idc, no, e_val, idc_val }) => {
  return (
    <div className="w-full h-full px-5">
      <div className="flex flex-col flex-1 space-y-1 -mt-2 ">
        {no % 2 === 0 ? (
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
        ) : null}
        <p className="text-lg font-medium text-black text-center">
          Member {no} Information
        </p>
        <div>
          <label
            htmlFor="email"
            className="block my-2 text-sm font-medium text-black"
          >
            Member {no} : Email
          </label>
          <div className={"flex flex-row bg-transparent border-2 border-gray-800 rounded-[5px] "+ (validator.isEmail(e_val) || e_val=="" ?"":"border-red-600")}>
            <IoPersonCircle className="h-8 w-8 mt-[4px] ml-2" />
            <input
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              
              type="email"
              name="email"
              id="email"
              value={e_val}
              className="bg-transparent text-black font-medium text-[16px] py-1 rounded-[10px] px-5 py-2.5 block w-full p-2.5 focus:outline-none placeholder:font-light"
              placeholder="Enter Your Email"
              required
              onChange={(e) => member(e.target.value)}
            />
          </div>
        </div>

        <div className="">
          <label
            htmlFor="idc"
            className="block my-2 text-sm font-medium text-black"
          >
            Member {no} : Intel Dev Cloud ID
          </label>
          <div className={"flex flex-row bg-transparent border-2 border-gray-800 rounded-[5px] "+ (validator.isNumeric(idc_val) || idc_val=="" ?"":"border-red-600")}>
            <PiIdentificationBadgeFill className="h-8 w-8 mt-[4px] ml-2" />
            <input
              //   onChange={(e) => {
              //     setCollegeName(e.target.value);
              //   }}
              type="text"
              name="devcloudid"
              id="devcloudid"
              value={idc_val}
              //   value={collegeName}
              className=" bg-transparent text-black font-medium text-[16px] py-1 rounded-[10px] px-5 py-2.5 block w-full p-2.5 focus:outline-none placeholder:font-light"
              placeholder="IDC ID"
              onChange={(e) => idc(e.target.value)}
              //   disabled={isAmrita}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default function SecondRegister({
  me1,
  mi1,
  me2,
  mi2,
  member1Email,
  member1IDC,
  member2Email,
  member2IDC,
  handle_next_click,
  handle_prev_click,
}) {
  const MemberList = [
    {
      name: member1Email,
      idc: member1IDC,
      e_value: me1,
      idc_value: mi1,
    },
    {
      name: member2Email,
      idc: member2IDC,
      e_value: me2,
      idc_value: mi2,
    },
  ];

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
      <div className="w-full flex flex-col justify-center p-4 space-y-2  sm:p-8">
        {/* First card */}

        <div className="flex flex-col justify-center space-y-6 flex-1 ">
          <div className="flex flex-col flex-1 space-y-2 ">
            {MemberList.map((link, index) => (
              <Memberview
                member={link.name}
                idc={link.idc}
                no={index + 1}
                e_val={link.e_value}
                idc_val={link.idc_value}
                key={index}
              />
            ))}
          </div>

          <div className="w-full justify-center gap-2 mt-3 flex">
            {/* <button className="text-[1rem] bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-2 md:mt-3 rounded-[15px] ">
                  Upload Link
                </button> */}
            <Button
              onClick={handle_prev_click}
              className="text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
            >
              <span relative="relative z-10">Previous</span>
            </Button>
            <Button
              disabled={!validator.isNumeric(mi1) || !validator.isEmail(me1) || !validator.isNumeric(mi2) || !validator.isEmail(me2) || me1==me2 || mi1==mi2 }
              onClick={handle_next_click}
              className="text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
            >
              <span relative="relative z-10">Next</span>
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
                        <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_next_click} >
                        <div className='-ml-2 py-1'>Next</div> 
                        <FaArrowRight size={20} className='-mr-6 ml-2 '/>
                        </Button>
                    </div>        
                            
            </div> */}
        </div>
      </div>
    </div>
  );
}
