"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import ProfileCard from "@/app/components/Profile/ProfileCard";
import Hamburger from 'hamburger-react'
import MenuOverlay from "@/app/components/MenuOverlay";
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
    
    
    

    <nav className="fixed z-20 h-fit rounded-md inset-1 max-w-full bg-opacity-50 backdrop-blur-xl mb-3 border-b-1 border-t-3 border-none bg-[#121212]">
      <div className="flex items-center justify-between mx-auto px-4 py-2  ">
          <div className="mobile-menu lg:hidden">
            <Button variant="text" className="rounded-full p-1">
            <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={24} color="#ffffff" /> 
            </Button>
          </div>
        
        <div>
            <Link
              href={"/"}
              className="text-2xl md:text-5xl text-gray-300 font-normal"
            >
              <Image
                src="/images/anokha2024_logo.png"
                alt="logo"
                width={250}
                height={250}
                className="w-40 lg:h-full float-left "
              />
            </Link>
        </div>
        
        <div className="menu hidden lg:block justify-end  lg:w-auto w-2/4" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row lg:space-x-3 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Button variant="text" size="sm" className=" text-white ml-auto mr-auto hover:bg-gray-700" >
                  <Link href={link.path}
                    className="block py-2 pl-3 pr-4 text-gray-300 lg:text-md text-md rounded md:p-0 hover:text-white"
                                >
                    {link.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-center items-start">
          
          <div className="mr-5">
            <ProfileCard/>
          </div>
         
         
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    
    </nav>

  );
};

export default Navigationbar;