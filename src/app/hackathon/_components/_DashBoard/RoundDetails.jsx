import React from 'react'
import { Button } from "@material-tailwind/react";

const RoundDetails = () => {
  return (
    <div className='h-full bg-[#0A113A] text-white m-3 rounded-xl w-full p-5'>
        <div className='h-[50%] bg-white text-black rounded-xl p-6 w-full mx-auto my-4 py-[30%]'>
            <h1 className='font-bold text-3xl text-center'>Round 1</h1>
            <p className='text-center'>PDF Submission</p>
            <Button  className="mx-auto text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40 mt-3">
            <span relative="relative z-10">Upload Link</span>
            </Button>
        </div>
        <div className='h-[10%] bg-white text-black rounded-xl p-6 w-full mx-auto my-4'>
            Round 2
        </div>
        <div className='h-[10%] bg-white text-black rounded-xl p-6 w-full mx-auto my-4'>
            Round 3
        </div>
        
    </div>
  )
}

export default RoundDetails
