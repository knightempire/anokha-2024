import React from 'react'
import phase from '@/../public/images/phase.png'
import Phases from './Phases'
const Timeline = () => {
  return (
    <div>
      <div className="font-poppins h-full w-full py-5 text-black">
            <p className='text-[3rem] font-bold text-center'>Hackathon Phases</p>

            <ol className="items-center md:flex px-[10%] py-10">
                <Phases/>
                <Phases/>
                <Phases/>
                
            </ol>
        </div>
    </div>
  )
}

export default Timeline
