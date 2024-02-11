"use client"
import React from 'react'
import Navbar from './_components/HackathonHeader'
import Price from './_components/Price'
import Themes from './_components/Themes'
import About from './_components/About'
import Carousel from './_components/Carousel'
import Timeline from './_components/Timeline'
import Footer from './_components/Footer'
import {Button } from "@material-tailwind/react";
import HeroSection from './_components/HeroSection'
import IntelHero from './_components/IntelHero'
import Phases from './_components/Phases'
import Resources from './_components/Resources'
import FAQs from './_components/FAQs'
export default function page() {
  return (
  
        <div>
            
        <Navbar />
        
        {/* <div className='flex-1 min-h-screen bg-[#193056] flex items-center justify-center'>
             HERO LANDER
            <Button variant='text'>Materials</Button>
            <Button variant='text'>Register</Button>
        </div> */}
        <IntelHero/>
        <Price />
        <About/>
        <Phases/>
        <Themes/>
        
        <Timeline/> 
        <Resources/>
        <FAQs/>
        <Footer/>
    </div>
     
  )
}
