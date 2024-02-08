"use client"
import React from 'react'
import Navbar from './_components/HackathonHeader'
import Price from './_components/Price'
import Themes from './_components/Themes'
import About from './_components/Themes'
import Carousel from './_components/Carousel'
import Timeline from './_components/Timeline'
import Footer from './_components/Footer'
import {Button } from "@material-tailwind/react";
export default function page() {
  return (
  
        <div className="min-h-screen bg-[#82a0e7] flex flex-col" >
            
        <Navbar />
        <div className='flex-1 h-2/5 bg-blue-500 flex items-center justify-center'>
            HERO LANDER
            <Button variant='text'>Materials</Button>
            <Button variant='text'>Register</Button>
        </div>
        <div className='flex-1 m-5'>
            <Price />
        </div>
        <Themes/>
        {/* <About/> */}
        <Timeline/>
        <Footer/>
    </div>
     
  )
}
