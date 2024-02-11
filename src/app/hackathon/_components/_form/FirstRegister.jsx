"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Switch from "@mui/material/Switch";
import { FaArrowRight } from "react-icons/fa";
import oneapilogo from "../../images/oneAPI-rgb-3000.png";
import { RiTeamFill } from "react-icons/ri";

export default function FirstRegister({
  handle_buttonone_click,
  TeamName,
  NoofMembers,
  platform,
}) {
  const [switchVal, setSwitch] = useState(0);
  useEffect(()=>{
    console.log(NoofMembers[0], switchVal);
  },[switchVal])
  return (
    <div className="w-full md:w-[560px] sm:hidden md:block  md:h-fit  rounded-md bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2   xl:p-0 bg-white">
      {/* <Image
                  src={anokhalogo}
                  priority
                  alt="Amrita logo"
                  width={128}
                  height={128}
                  className="ml-auto mr-auto mt-4 h-16"
                />  */}
      <Image src={oneapilogo} width={80} className="ml-auto mr-auto -mt-9" />
      <div className="w-full flex flex-col justify-center p-2 space-y-4  sm:p-8">
        <h1 className="text-xl -mt-4 mx-auto font-bold leading-tight tracking-tight text-black md:text-2xl">
          Register
        </h1>
        <div className=" w-full h-full px-5">
          {/* First card */}

          <div className="flex flex-col justify-center md:space-y-4 flex-1 ">
            <div>
              <label
                htmlFor="teamname"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your Team Name
              </label>
              <div className="flex flex-row bg-transparent border-2 border-gray-800 rounded-[5px]">
                <RiTeamFill className="h-8 w-8 mt-[4px] ml-2" />
                <input
                  type="text"
                  value={TeamName[0]}
                  name="teamname"
                  id="teamname"
                  className="bg-transparent text-black font-medium text-[16px] py-1 px-5 py-2.5 block w-full p-2.5 focus:outline-none placeholder:font-light"
                  placeholder="Team Name"
                  onChange={(e) => TeamName[1](e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-black"
              >
                Number of Team Members
              </label>
              <div>
                3
                <Switch
                  value={switchVal}
                  checked={NoofMembers[0]==3?0:1}
                  onChange={(e) => {
                    console.log(NoofMembers[0], switchVal, e.target.checked);
                    if(e.target.checked == true){
                      NoofMembers[1](4)
                      setSwitch(1)
                    }else{
                      NoofMembers[1](3)
                      setSwitch(0);
                    }
                  }}
                />
                4
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="college"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Registered through
                </label>

                <div className="flex">
                  <select
                    id="platform"
                    className="bg-transparent mr-2 border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5 border-y-1"
                  >
                    <option value="none" defaultValue>
                      None
                    </option>
                    <option value="devfolio">DevFolio</option>
                    <option value="unstop">Unstop</option>
                    <option value="devpost">Devpost</option>
                  </select>
                  <input
                    type="text"
                    name="platformid"
                    id="platformid"
                    value={platform[0]}
                    className="bg-transparent text-black border-2 border-gray-800 font-medium text-[16px] py-1 rounded-[5px] px-5 py-2.5 block w-full p-2.5 focus:outline-none placeholder:font-light"
                    placeholder="Platform ID"
                    onChange={(e) => platform[1](e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex sm:hidden md:block mx-auto  flex-col  pt-1">
              <div className="mt-1 z-10">
                <Button
                  onClick={handle_buttonone_click}
                  className="before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
                >
                  <span relative="relative z-10 text-xl ">Next</span>
                </Button>
                {/* <Button variant='text' className='text-3xl bg-blue-600 flex flex-row w-[120px] items-center' onClick={handle_buttonone_click} >
                                <div className='-ml-2'>Next</div> 
                                <FaArrowRight size={20} className='-mr-6 ml-2 '/>
                                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
