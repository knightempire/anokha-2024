import React from 'react'
import Image from 'next/image'
import bg from '/public/images/info.jpg'

/*

This is where the info divs will be displayed. Use locomotive scroll for the inner divs movements.

The inner div scrolls, the outer div is fixed. Background colors will change.

*/

const Info = () => {
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

export default Info;