import React from 'react'
import Image from 'next/image'
import bg from '/public/images/bg.png'


const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image 
          src={bg}
          layout="fill"
          objectFit="cover"
          alt="hero background"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-20">
        
      </div>
    </div>
  )
}

export default Hero;