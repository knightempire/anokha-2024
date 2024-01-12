import React from 'react'
import Image from 'next/image'
import bg from '/public/images/hero.jpg'


const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image 
          src={bg}
          layout="fill"
          objectFit="contain"
          alt="hero background"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-20">
        
      </div>
    </div>
  )
}

export default Hero;