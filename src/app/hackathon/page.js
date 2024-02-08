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
  
        <div className="" >
            
        <Navbar />
        <div className='flex-1 h-[600px] bg-[#193056] flex items-center justify-center'>
            HERO LANDER
            <Button variant='text'>Materials</Button>
            <Button variant='text'>Register</Button>
        </div>
        <div className=' m-5'>
            <Price />
            <Carousel />
        </div>
        <Themes/>
        <About/>
        <Timeline/>
        <Footer/>
    </div>
     
  )
}
