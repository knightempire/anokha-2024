"use client";

import React, { useEffect, useState } from "react";
import EventCard from "@/app/events/components/EventCard";
import DataHandler from "@/app/events/components/DataHandler";
import EventDescription from "@/app/events/components/EventDescription";
import { IoCloseCircle } from "react-icons/io5";
import gsap from 'gsap';

export default function EventLander() {
  const [eventsData, setEventsData] = useState(null);
  const [isClicked,setIsClicked] = useState(false); //to detect if a event is clicked
  const [clickedEvent,setClickedEvent] = useState(null)

  const handleEventClick = (curEle)=>{
      setClickedEvent(curEle)
      setIsClicked(true)
      
    }
  const handleGoBack = ()=>{
    gsap.to('#event-desc', { opacity: 0, duration: 0.5, y: -50, ease: 'power2.inOut' });
    const timeout1 = setTimeout(() => {
      setClickedEvent(null)
      setIsClicked(false)
    }, 500);
    return()=>{
      clearTimeout(timeout1);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const eventData = await DataHandler();
      setEventsData(eventData);
      console.log(eventsData)
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Check if the condition is met and animate
    if (clickedEvent && isClicked) {
      // Animation using GSAP
      gsap.fromTo('#event-desc', { opacity: 0, y: -50, duration: 0.5}, {opacity: 1, y: 0, ease: 'power2.inOut' });
    }
  }, [clickedEvent, isClicked]);


  return (
    <div>
       
         <div>
          
          {
            clickedEvent && isClicked?
            <div className="absolute flex w-full h-full justify-center mt-5 pt-5 z-10 backdrop-blur-sm" id="event-desc">

              <EventDescription 
                key={clickedEvent.id}
                imgSrc={clickedEvent.imgsrc}
                eventName={clickedEvent.title}
                eventDesc={clickedEvent.description}
                tags={clickedEvent.tags}
                price={clickedEvent.price}/>

              <div onClick = {()=>handleGoBack()}  >
                <IoCloseCircle className="  text-4xl text-black hover:text-red-500 cursor-pointer"/>
              </div>

            </div>
          :null
        }
        </div> 
        
      
      

      <div className="flex flex-row min-h-screen mt-5 justify-center items-center mx-10 pt-10 lg:mt-20 ">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2   ">
          {eventsData &&
            eventsData.events.map((event) => (
              <div onClick={()=>handleEventClick(event)} key={event.id}>
              <EventCard 
                key={event.id}
                imgSrc={event.imgsrc}
                eventName={event.title}
                eventDesc={event.description}
                tags={event.tags}
                price={event.price}
              />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
