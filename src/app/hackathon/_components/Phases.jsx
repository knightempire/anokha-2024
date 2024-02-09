import React from 'react'
import Image from 'next/image'


const Phases = () => {
  return (
    <div>
      <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center md:mt-0 sm:mt-6 mx-auto">
                        <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div className="z-10 flex items-center justify-center shrink-0">
                            <Image src="/images/phase.png" width={100} height={100} alt="phaseimg" className ='w-[50px] h-[50px]'/>
                        </div>
                        <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>

                    <div className="md:mt-3 sm:mt-3 sm:mb-10 sm:pe-8 max-w-[400px] mx-auto">
                        <p className ='text-[2rem] font-bold text-center'>Phase 1</p>
                        <p className='text-base mb-3 text-center'>29/02/2024</p>
                        <div className='bg-[#017DC5] p-5 rounded-lg text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </li>
    </div>
  )
}

export default Phases
