import React from 'react'
import { TimelineWithIcon } from './InstructTimeline'

const Instructions = () => {
  return (
    <div className='sm:w-full md:w-[70%] mx-auto p-10 rounded-xl  '>
        <h1 className='text-center font-black text-[3rem] text-white'>Instructions</h1>
        <p className='text-center font-base text-xl text-white'>Follow these steps to get started!</p>
        <div className='w-[100%] mx-auto'>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[180px] absolute blur-3xl levitate"></div>
        <TimelineWithIcon/>
        </div>
        
    </div>
  )
}

export default Instructions
