import React from "react";
import EventCard from "@/app/events/components/EventCard";
import Image from "next/image";
export default function EventLander() {
  return (
    <div>
      <div className="flex flex-row min-h-screen justify-center items-center mx-10 pt-10">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <EventCard imgsrc="/images/dummy.jpg" />
          <EventCard imgsrc="/images/dummy.jpg" />
          <EventCard imgsrc="/images/dummy.jpg" />
          
        </div>
      </div>
    </div>
  );
}
