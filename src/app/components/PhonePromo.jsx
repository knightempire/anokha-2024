import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PhonePromo = () => {
  return (
    <div className='px-10 pt-10 z-10 md:flex justify-center gap-3 mx-auto'>
      <div className=''>
        <Image src='/images/apppromo.png' width={400} height={500}/>
      </div>
      <div className='text-white flex flex-col justify-center gap-0'>
      <h1 className='text-bold md:text-[3rem] sm:text-3xl'>Anokha 2024 in Your Pocket!
        </h1>
        <h3 className='md:text-[1.5rem] sm:text-xl'>Download Now to Stay Ahead!</h3>
        <Link href="https://play.google.com/store/apps/details?id=com.vaisakhkrishnank.anokha_home"><Image src="/images/getonplaystore.png" className='mt-5' width={200} height={100}/></Link>
        
      </div>
    </div>
  )
}

export default PhonePromo
