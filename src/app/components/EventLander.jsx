import React from 'react'
import Header from './Header'
import Footer from './Footer'
import EventCard from './EventCard'
import Image from 'next/image'
export default function EventLander() {
  return (
    <div>
        <Header />
        <div className='flex flex-row mt-5 min-h-screen justify-center items-center mx-16 lg:mt-10'>
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <EventCard imgsrc = "/images/hero.jpg"/>
            <EventCard imgsrc = "/images/hero.jpg"/>
            <EventCard imgsrc = "/images/hero.jpg"/>
            <EventCard imgsrc = "/images/hero.jpg"/>
            <EventCard imgsrc = "/images/hero.jpg"/>
            <EventCard imgsrc = "/images/hero.jpg"/>
            <EventCard imgsrc = "/images/hero.jpg"/>
            </div>
        </div>
    </div>
  )
}
