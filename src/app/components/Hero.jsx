"use client";
import React from "react";
import CountdownTimer from "./Counter";

const Hero = () => (
  <div className="container mx-auto flex xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-between items-center ">
    <div className="relative xl:h-screen lg:h-screen md:h-[80vh] sm:h-[60vh] flex items-center container sm:w-full">
      <section className="mx-4 md:mx-16 cursor-default">
        <h3 className="text-3xl hero-font font-bold tracking-wider md:text-3xl lg:text-4xl xl:text-5xl text-white">
          #Dare2BeDifferent
        </h3>
        <h2 className="text-6xl hero-font-2 tracking-widest md:text-7xl lg:text-8xl xl:text-9xl font-semibold mt-6 text-orange-500 font-family: Spin-cycle">
          Anokha
        </h2>
        <h2 className="text-6xl hero-font-2 tracking-widest md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-orange-500 font-family: Spin-cycle">
          2024
        </h2>
        <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold my-6 text-white"></h2>
        <h3 className="text-3xl font-roobert tracking-wider md:text-2xl lg:text-3xl xl:text-4xl text-white">
          12th Edition
        </h3>
        <h4 className="text-3xl font-rooberto tracking-wider md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mt-4">
          April 4th, 5th & 6th
        </h4>
      </section>
    </div>
    <div className="text-2xl sm:m-5 md:m-10 lg:m-20 xl:m-20 z-10 text-white cursor-default">
      <CountdownTimer />
    </div>
  </div>
);

export default Hero;
