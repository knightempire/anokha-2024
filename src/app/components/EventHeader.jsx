"use client";
import Link from "next/link";
import  { useState } from "react";

import Hamburger from 'hamburger-react'
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image'






const Navigationbar = ({login}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [islogined, setIslogined] = useState(login);


  const ProfileObject = {
    title: "Profile",
    path: "/profile",
  };

 
  return (

    

    <nav className="fixed z-20 h-fit rounded-md inset-2 max-w-full lg:px-16 lg:py-2 bg-opacity-50 backdrop-blur-xl mb-3 border-b-1 border-t-3 border-none bg-[#121212]">
      <div className="flex container lg:py-2 flex-nowrap items-center justify-between mx-auto px-4 py-2  ">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-normal"
        >
            <Image
              src="/images/anokha2024_logo.png"
              alt="logo"
              width={200}
              height={200}
              className="w-36 lg:h-full"
            />
        </Link>
        <div className="mobile-menu lg:hidden place-self-end pb-2">
          <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={20} color="#ffffff" />
        </div>
        <div className="menu hidden  lg:block lg:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
          
        <a href="/#about">
          <button variant="text" className=" text-gray-50 ml-auto mr-auto">
            About
          </button>
        </a>
        <a href="/#eventide">
          <button type="button" variant="text" className="text-gray-50 ml-auto mr-auto text-md">
          Eventide
          </button>
        </a>
        <a href="/#techfair">
          <button variant="text" className="text-gray-50 ml-auto mr-auto">
            <h2 className="flex items-center capitalize">
              TechFair
             </h2>
          </button>
        </a>
        <a href="/events">
          <button variant="text" className="text-gray-50 ml-auto mr-auto">
          Events & Workshops
          </button>
        </a>
         
        <a href="/#footer">
          <button variant="text" className="text-gray-50 ml-auto mr-auto">
          Contact Us
          </button>
        </a>
       
     
        <li key="7">
              <Link
                href={ProfileObject.path}
                className="text-gray-50 text-lg  hover:text-white"
              >
                <button variant="text" className="text-gray-50 ml-auto mr-auto">
                {ProfileObject.title}
          </button>
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}
    </nav>
  );
};

export default Navigationbar;