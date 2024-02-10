"use client"
import React from 'react'
import Navbar from '../_components/HackathonHeader'
 
import About from '../_components/About'
 
 
import Footer from '../_components/Footer'
import {Button } from "@material-tailwind/react";
 
import RoundOne from '../_components/RoundOne'
 
export default function page() {
  return (
  
        <div>
            
        <Navbar />
        
        {/* <div className='flex-1 min-h-screen bg-[#193056] flex items-center justify-center'>
             HERO LANDER
            <Button variant='text'>Materials</Button>
            <Button variant='text'>Register</Button>
        </div> */}
        <RoundOne/>
        
        <Footer/>
    </div>
     
  )
}
