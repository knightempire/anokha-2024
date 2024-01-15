"use client";

import React, { useEffect, useState } from "react";
import EventCard from "@/app/events/components/EventCard";
import DataHandler from "@/app/events/components/DataHandler";

export default function EventLander() {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await DataHandler();
      setEventsData(eventData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-row min-h-screen justify-center items-center mx-10 pt-10">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {eventsData &&
            eventsData.map((event) => (
              <EventCard
                key={event.id}
                imgSrc={event.imgsrc}
                eventName={event.title}
                eventDesc={event.description}
                tags={event.tags}
                price={event.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
