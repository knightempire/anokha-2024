"use client";
import { useState } from "react";
import Navbar from "../components/EventHeader";
import WebGLApp from "../bg/WebGLApp";
import Image from 'next/image'

export default function Error() {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });
  return (
    <main className="w-full h-[100vh] bg-[#192032]">
      <WebGLApp colors={webGLColors} />
      <div className="">
        {/* <Navbar /> */}
        <div className="relative min-h-screen text-white mx-auto top-[200px] w-full">
          {/* <Image
            src={errorimg}
            width={150}
            alt="error"
            className="mt-[-100px]"
          /> */}
          <div className="lg:w-[50%] sm:w-[90%] text-center text-black bg-white bg-opacity-65 mx-auto p-10 rounded-xl">
            <div className="w-fit mx-auto">
            <span className="flex flex-row items-center md:w-fit sm:w-[60%]">
              <h1 id="404e" className="font-black text-[6rem] ">4</h1>
              <Image src="https://i.imgur.com/46OUqzg.png" width={100} height={50} alt="" class="logo mx-3" />
              <h1 id="404e" className="font-black text-[6rem]">4</h1>
            </span>
            </div>
            
            <h1 className="font-black md:text-[3rem] sm:text-[2rem] -mt-2">Page Not Found!</h1>
            <h2 className="text-xl"> Oops! You seem to have taken a wrong turn!</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
