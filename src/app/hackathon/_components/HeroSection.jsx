import React from 'react'
import Image from 'next/image'
import oneapilogo from '../images/oneAPI-rgb-3000.png'

const HeroSection = () => {
  return (
    <div className="w-full h-[100vh] bg-[rgb(10,17,58)]">
      <div className="font-poppins text-black mx-auto">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[120px] absolute blur-3xl levitate"></div>
        <div className="bg-white md:w-[40%] bg-opacity-80 sm:w-[80%] px-10 py-12 rounded-xl sm:mx-auto top-[250px] relative">
          <Image src={oneapilogo} width={150} alt="oneapiicon" className="mt-[-100px]" />
          <p className="text-[3rem]  font-bold sm:leading-[100%] mt-2">
            Intel AI Hackathon
          </p>
          <div className="text-xs  w-fit py-2 bg-blue-600 px-4 mt-2 rounded-full text-white">
            Amrita Vishwa Vidyapeetham, Coimbatore
          </div>
          {/* <button className='text-base p-3 bg-[#03C7FD] mt-3 rounded'>IDC Materials</button> */}
          <div className="flex gap-4 flex-wrap mt-2">
            <button className="text-[1rem] border border-black p-3 px-8 mt-2 rounded-[15px]">
              IDC Materials
            </button>
            <button className="text-[1rem]  bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-0 md:mt-2 rounded-[15px]">
              Register Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
