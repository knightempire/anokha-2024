"use client"
import React, { useState,useRef,createElement  } from 'react'
 
import { Menu, MenuItem,Avatar,Popover,Typography } from '@mui/material';

import { FaArrowDown,FaArrowUp  } from "react-icons/fa";
import {Button,Dropdown,Tooltip,Whisper} from 'rsuite'
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Link from 'next/link'

const ProfileMenuItems = [
  {
    text:"View Profile",
    icon: UserCircleIcon,

  },
  { 
    text:"Edit Profile",
    icon: Cog6ToothIcon
  },
  {
    text:"Sign Out",
    icon: PowerIcon
  },
]
export default function ProfileCard() {
  const [isArrowMenuOpen,setIsArrowMenuOpen] = useState(false)
  const handlearrowclick = ()=>{
    setIsArrowMenuOpen(!isArrowMenuOpen)
    console.log(isArrowMenuOpen)
  }

  
  const Profile_Avatar = ()=>{
    return (
    <Button  color="blue" onClick={handleClick} className='flex flex-row justify-self-center items-center rounded-3xl bg-blue-950 backdrop-blur-xl '>
        <div className='border-blue-600 border-2 p-1 rounded-3xl w-13'>
        <Avatar variant='circle' className='' alt="Travis Howard" src="/images/s_avatar.jpg" 
        sx={{ width: 35, height: 35,
            bg:"red" }}
        />
        </div>
        <div className='mr-2 cursor-pointer' >
          {isArrowMenuOpen?
           (<FaArrowUp size={12} color='white' onClick={handlearrowclick} />):
           (<FaArrowDown size={12} color='white' onClick={handlearrowclick} />)
            }
        </div>
        
    </Button>)
  }
//notclickable dropdown
   
   
  const [anchorEl, setAnchorEl] =useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsArrowMenuOpen(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div  onClick={handleClick}>
        <Profile_Avatar/>
      </div>
      <Popover
      className=''
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            width: 150, 
          },
        }}
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
       
      </Popover>
    </div>
  );
}
