"use client";
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import oneapilogo from "../images/oneAPI-rgb-3000.png";
import { SimpleCard } from './InstructCard';
import dummy from "../images/dummy.jpg";
import { IoLocation } from 'react-icons/io5';
import { Button} from "@material-tailwind/react";


export default function NextJsCarousel() { 

	  return (
		<div className="w-full h-screen bg-[rgb(10,17,58)] relative flex flex-col justify-center items-center">
    <div className="font-poppins text-white mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Instructions</h1>
        <p className="text-lg mb-8">Follow these steps to get started</p>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[120px] absolute blur-3xl levitate"></div>
        <Carousel
            className="crsl"
            showArrows
            showIndicators
            infiniteLoop
            interval={1000}
        >
            <div>
                <SimpleCard title={"Title1"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"} />
            </div>
            <div>
                <SimpleCard title={"Title2"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"} />
            </div>
            <div>
                <SimpleCard title={"Title3"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"} />
            </div>
        </Carousel>
    </div>
</div>


		  
	
	  );
	} 

