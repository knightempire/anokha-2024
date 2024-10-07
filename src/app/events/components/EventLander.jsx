"use client"
import React, { useEffect, useState } from "react";
import EventCard from "@/app/events/components/EventCard";
import DataHandler from "@/app/events/components/DataHandler";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EventLander() {
  const [eventsData, setEventsData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await DataHandler();
      setEventsData(eventData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-row min-h-screen mt-5 justify-center items-center mx-10 pt-10 lg:mt-20">
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {eventsData &&
          eventsData.events.map((event) => (
            <div key={event.id}>
              <Link
                href={{
                  pathname: `/events/${event.id}`,
                  query: { data: encodeURIComponent(JSON.stringify(event)) },
                }}
              >
                <EventCard
                  imgSrc={event.imgsrc}
                  eventName={event.title}
                  eventBlurb={event.blurb}
                  eventStatus={event.eventStatus}
                  eventDesc={event.description}
                  date={event.date}
                  time={event.time}
                  goi={event.groupOrIndividual}
                  tags={event.tags}
                  price={event.price}
                  isAllowed={event.isAllowed}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const eventData = await DataHandler();

  return {
    props: {
      eventsData: eventData,
    },
  };
}
