'use client';
import React from 'react';
import Image from 'next/image';
import logo from '/public/images/anokha2024_logo.png';
import DrifterStars from '@devil7softwares/react-drifter-stars';

const Hero = () => (
  <div className="relative h-screen overflow-hidden">
    <DrifterStars
      color="#a1a8b2"
      motion={{ ratio: 0.015, noiseLength: 1000, noiseStrength: 2 }}
      particle={{ count: 60 }}
      links={{fade:300, maxLength:15}}
      flare={{maxLength:20}}
      glare={{opacityMultiplier:0.05}}
       />
    <Image
      src={logo}
      className="absolute bottom-20 left-20 hidden w-1/5 lg:block"
    />
    <div className="absolute flex flex-row justify-center p-5 bottom-20 space-x-10 text-white text-xl footer-font font-bold lg:space-x-20 lg:text-2xl lg:right-20 lg:py-10 xl:text-4xl">
      <p>12th Edition</p>
      <p>20+ Events</p>
      <p>3 Days of Fun</p>
    </div>
  </div>
);

export default Hero;