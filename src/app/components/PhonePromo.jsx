import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PhonePromo = () => {
  return (
    <div className='px-10 pt-10 z-10 md:flex justify-center gap-[60px] mx-auto w-full'>
      <div className='flex justify-center'>
        <Image src='/images/apppromo.png' width={400} height={500}/>
      </div>
      <div className='text-white flex flex-col justify-center gap-0 md:w-[45%]'>
      <h1 className='text-bold md:text-[3rem] sm:text-3xl'>Anokha 2024 in Your Pocket!
        </h1>
        <h3 className='md:text-[1.1rem] sm:text-lg leading-normal md:mt-2 sm:leading-[110%]'>
          {"The team behind Anokha'24 is beyond thrilled to unveil our official app, a seamless platform to access all the information you need in just a few taps. The app will act as a one-stop shop for anything and everything Anokha. Stay up-to-date with all the latest information about the fest, including the schedule, venue, and event details. You can also register for various events and real-time updates. So don't miss out! Download the Anokha app now and get ready to unlock a world of tech and innovation!"}
        </h3>
        <Link href="https://play.google.com/store/apps/details?id=com.vaisakhkrishnank.anokha_home"><Image src="/images/getonplaystore.png" className='mt-5' width={200} height={100}/></Link>
        
      </div>
    </div>
  )
}

export default PhonePromo
