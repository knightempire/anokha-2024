"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import ProfileCard from "./Profile/ProfileCard";
import Hamburger from 'hamburger-react'
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image'
import secureLocalStorage from "react-secure-storage"
import {useAuth } from '@/app/_auth/useAuth'
import {
  Button,
  Navbar
} from "@material-tailwind/react";


const navLinks = [
   
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Eventide",
    path: "/eventide",
  },
  {
    title: "TechFair",
    path: "/techfair",
  },
  {
    title: "Hackathon",
    path: "/hackathon",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Crew",
    path: "/team",
  },
  {
    title: "Contact Us",
    path: "#footer",
  },
    
];

const Navigationbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(parseInt(secureLocalStorage.getItem("isLoggedIn")));
  const [isAmritaCBE,setIsAmritaCBE] = useState(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
  const [hasActivePassport,setHasActivePassport] = useState(parseInt(secureLocalStorage.getItem("hasActivePassport")))
  const [email,setEmail] = useState(secureLocalStorage.getItem("email"));
  console.log(navbarOpen,isLoggedIn,isAmritaCBE,email)
  
  useEffect(()=>{
    setIsLoggedIn(parseInt(0));
    setIsAmritaCBE(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
    setHasActivePassport(parseInt(secureLocalStorage.getItem("hasActivePassport")));
    setEmail(secureLocalStorage.getItem("email"));
  },[])

  const {SignOut} = useAuth()

  const handleSignOut = ()=>{
    setIsLoggedIn(0)
    SignOut()
  }

  return (
    
    
    

    <nav className="fixed z-20 h-fit rounded-md inset-2 max-w-full bg-opacity-50 backdrop-blur-xl mb-3 border-b-1 border-t-3 border-none bg-[#121212]">
      <div className="flex container   flex-nowrap items-center justify-between mx-auto px-4 py-2  ">
          <div className="mobile-menu lg:hidden">
            <Button variant="text" className="rounded-full p-1">
            <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={24} color="#ffffff" /> 
            </Button>
          </div>
        
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-normal"
        >
          <Image
            src="/images/anokha2024_logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-36 lg:h-full float-left "
          />
        </Link>
        
        
        <div className="menu hidden lg:block  lg:w-auto w-2/4" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Button variant="text" size="sm" className=" text-gray-50 ml-auto mr-auto" >
                  <Link href={link.path}
                    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                                >
                    {link.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center">
          
          <div className="">
            <ProfileCard/>
          </div>
         
         
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    
    </nav>

  );
};

export default Navigationbar;