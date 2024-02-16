"use client";
import React, { useState, createElement } from "react";

import { Avatar } from "primereact/avatar";
import { MD5 } from "crypto-js";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import secureLocalStorage from "react-secure-storage";

const ProfileMenuItems = [
  {
    text: "Profile",
    icon: UserCircleIcon,
  },
  {
    text: "Sign Out",
    icon: PowerIcon,
  },
];
export default function ProfileCard({ email }) {
  console.log("Email sis", email);
  const hash = MD5(email + email);
  const [isArrowMenuOpen, setIsArrowMenuOpen] = useState(false);
  const handlearrowclick = () => {
    setIsArrowMenuOpen(!isArrowMenuOpen);
    console.log(isArrowMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {};

  const handleLogOut = () => {
    secureLocalStorage.clear();
    window.location.href = "/login";
  };

  const handleProfileClick = () => {
    window.location.href = "/profile";
  };

  const handleClose = () => {
    setIsArrowMenuOpen(false);
  };

  return (
    <div>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom-end"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Button
            variant="text"
            color="blue"
            onClick={handleClick}
            className="flex flex-row items-center rounded-full py-0.5 pr-0.5 pl-0.5   backdrop-blur-3xl"
          >
            <div className="border-blue-600 border-2 p-1 rounded-full bg-gray-300 ">
              <Avatar
                shape="circle"
                className=""
                alt="Travis Howard"
                image={
                  "https://www.gravatar.com/avatar/" +
                  hash +
                  ".jpg?s=50&d=robohash"
                }
                size="xlarge"
              />
            </div>
            <div className="cursor-pointer">
              {isMenuOpen ? (
                <FaArrowUp size={10} color="gray" onClick={handlearrowclick} />
              ) : (
                <FaArrowDown
                  size={10}
                  color="gray"
                  onClick={handlearrowclick}
                />
              )}
            </div>
          </Button>
        </MenuHandler>
        <MenuList className="z-40 p-1">
          {ProfileMenuItems.map(({ text, icon }, index) => {
            const isLastItem = index === ProfileMenuItems.length - 1;
            return (
              <Link href="#" key={index}>
                <MenuItem
                  key={index}
                  className={`group flex items-center gap-3 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : "hover:bg-gray-500/10"
                  }`}
                  onClick={isLastItem ? handleLogOut : handleProfileClick}
                >
                  {createElement(icon, {
                    strokeWidth: 2,
                    className: `h-4 w-4 mt-2 mx-1 ${
                      isLastItem
                        ? "text-red-500 group-hover:text-red-700 "
                        : "text-gray-500 group-hover:text-gray-700"
                    } 
                      group-transition ease-in duration-300
                      `,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    color={isLastItem ? "red" : "gray"}
                    className={`group-transition ease-in duration-300 font-normal mt-2 ${
                      isLastItem
                        ? "text-red-500 group-hover:text-red-700"
                        : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {text}
                  </Typography>
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>

      {/* <Popover
        open={isArrowMenuOpen}
        sx={{width:6600,absolute:true,top:10 }}
      >
        <div className='w-58'>
          {ProfileMenuItems.map(({ text, icon },index)=>{
          const isLastItem = index === ProfileMenuItems.length - 1;
          return (<li key={index} 
          className={`list-none h-7 m-1 flex flex-row justify-start items-center p-1 gap-1 rounded ${
            isLastItem ? "hover:bg-red-500/10 hover:border-2 hover:border-red-600 focus:bg-red-500/10 active:bg-red-500/10"
            : "hover:bg-blue-700/10 hover:border-2 hover:border-black  focus:bg-blue-700/10 active:bg-blue-700/10"
          } `}>
          {createElement( icon,{
            className:`h-4 w-4 mx-1 ${isLastItem ?
               "text-red-500" : "text-gray-500"}`}
            )}
          <Link href="#" 
          className={` text-sm ${isLastItem ?
            "text-red-500" : "text-gray-500 hover:text-blue-500 hover:border"}`}
          >{text}</Link> 
        </li>)
        })}
        </div>
       
      </Popover> */}
    </div>
  );
}
