'use client';
import React from 'react';
import Image from 'next/image';
import mascot from '/public/images/mascot_base.svg';

const Hero = () => (
  <div className="container mx-auto px-4 py-2">
    <div className="relative h-screen overflow-hidden flex items-center justify-end">

      <div className="absolute flex flex-col items-center justify-center w-full lg:bottom-10 lg:w-1/3 h-full">
        <Image
          src={mascot}
          height={100}
          width={100}
          className="w-full h-full lg:mx-auto"
          layout="intrinsic"
          objectFit="contain"
        />
      </div>
      <div className="absolute left-10 font-bold footer-font text-lg  lg:text-4xl xl:text-6xl text-white">
        <p>Idiots are not born</p>
        <p>They are made....</p>
      </div>
      <div className="absolute flex flex-row justify-center items-center w-full p-5 bottom-10 space-x-5 text-white text-xl footer-font font-bold lg:space-x-52 lg:text-2xl lg:py-10 xl:text-4xl">
        <p>12th Edition</p>
        <p>20+ Events</p>
        <p>3 Days of Fun</p>
      </div>
    </div>
  </div>
);

export default Hero;