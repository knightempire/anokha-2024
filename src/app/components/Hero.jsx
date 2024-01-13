import React from 'react'
import Image from 'next/image'
import bg from '/public/images/bg.png'
import logo from '/public/images/anokha2024_logo.png'


const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image 
          src={bg}
          layout="fill"
          objectFit="center"
          alt="hero background"
        />
      </div>
      <div className="absolute inset-0">
              <div className="absolute bottom-20 left-20">
                <Image 
                src={logo}
                height={600}
                width={600}/>

      </div>
        
      </div>
    </div>
  )
}

export default Hero;