import React from 'react'
import Image from 'next/image'
import oneapilogo from '../images/oneAPI-rgb-3000.png'

const HeroSection = () => {
  return (
    <div className='w-full h-[98vh] bg-[rgb(10,17,58)]'>
        <div className='font-poppins text-black '>
            <div className='bg-blue-700 md:w-[40%] sm:w-[80%] p-8 rounded h-[40%] lg:ml-[200px] sm:mx-auto top-[300px] absolute blur-3xl'></div>
            <div className='bg-white md:w-[40%] sm:w-[80%] p-8 rounded-xl lg:ml-[200px] sm:mx-auto top-[300px] relative'>
                    <Image src={oneapilogo} width={150} className='mt-[-100px]'/>
                    <p className='text-[3rem]  font-bold sm:leading-[100%] mt-2'>Intel AI Hackathon</p>
                    <div className='text-xs  w-fit py-2 bg-blue-600 px-4 mt-2 rounded-full text-white'>
                      Amrita Vishwa Vidyapeetham, Coimbatore</div>
                    {/* <button className='text-base p-3 bg-[#03C7FD] mt-3 rounded'>IDC Materials</button> */}
                    <div className='flex gap-4 flex-wrap mt-2'>
                        <button className='text-[1rem] border border-black p-3 px-8 mt-2 rounded-[15px]'>IDC Materials</button>
                        <button className='text-[1rem]  bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-0 md:mt-2 rounded-[15px]'>Register Now!</button>
                    </div>
                    
            </div>
         
        </div>

    </div>
  )
}

export default HeroSection
