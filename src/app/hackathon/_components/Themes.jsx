import React from 'react'
import theme1 from '@/../public/images/theme1.png'
import Image from 'next/image'

const Themes = () => {
  return (
    <div className='font-poppins h-[100%] mt-[50px]'>
      <p className='font-bold text-[3rem]'>Themes</p>
      {/*<div className='font-bold w-full text-[3rem] ml-[250px] mt-10'>Themes</div>*/}
      <div className='bg-indigo-500 md:w-[40%] sm:w-[90%] mx-auto  rounded-[15px] my-2'>
        <Image src={theme1} className='h-[250px] object-cover w-full rounded-t-[15px]'/>

        <div className='text-white text-[2.5rem] text-left font-bold pb-7 mx-10 mt-[-30px]'>
          Theme #1
            <div className='text-base font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
            </br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>    
    </div>

  </div>
  )
}

export default Themes
