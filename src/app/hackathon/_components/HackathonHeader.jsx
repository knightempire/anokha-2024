"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import Hamburger from 'hamburger-react'
import MenuOverlay from "@/app/components/MenuOverlay";
import Image from 'next/image'
import secureLocalStorage from "react-secure-storage"
import {useAuth } from '@/app/_auth/useAuth'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
 


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

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    
    
   
    
      return (
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="bg-gray-500 "
        >

          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>
    
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              
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
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              
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
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="#">
              Link1
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
              Link1
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Link1
              </Link>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>

  );
};

export default Navigationbar;