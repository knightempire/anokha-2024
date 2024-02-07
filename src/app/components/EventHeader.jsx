"use client";
import Link from "next/link";
import  { useState } from "react";

import Hamburger from 'hamburger-react'
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image'
// import {
//   Navbar
// } from "@material-tailwind/react";


const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Event",
    path: "/events",
  },
  {
    title: "Contact",
    path: "#contact",
  },
    {
    title: "Login",
    path: "/login",
  },
];





const Navigationbar = ({login}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [islogined, setIslogined] = useState(login);


  const ProfileObject = {
    title: "Profile",
    path: "/profile",
  };

  const loginIndex = navLinks.findIndex(link => link.title === "Login");

 
  if (islogined && loginIndex !== -1) {
    navLinks.splice(loginIndex, 1);
  }
  
  
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
        <div className="mobile-menu lg:hidden place-self-start pb-2 flex items-center">

          <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={20} color="#ffffff" />
        </div>
        <div className="menu hidden  lg:block lg:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                 <Link
      href={link.path}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {link.title}
    </Link>
              </li>
            ))}

            <li key="7">
              <Link
                href={ProfileObject.path}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                {ProfileObject.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navigationbar;