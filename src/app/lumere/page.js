"use client";
import Image from "next/image";
import WebGLApp from "../bg/WebGLApp";
import Navigationbar from "../components/EventHeader";
import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";

const Lumere = () => {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  return (
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
        <WebGLApp colors={webGLColors} className="-z-10" />
        <div className="flex z-20 w-full flex-col">
          <Navigationbar />
          <div className="flex w-full bg-white h-full mt-16 ">
            
          </div>
        </div>
    </main>
  );
}

export default Lumere;