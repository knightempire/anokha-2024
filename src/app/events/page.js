"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/app/events/components/EventCard";
import Link from "next/link";
import Navbar from "../components/EventHeader";
import Footer from "../components/Footer";

const Events = () => {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    fetch("https://web.abhinavramakrishnan.tech/api/user/getAllEvents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer <SECRET_TOKEN>`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          buildDialog(
            "Error",
            "You are not logged in!\nPlease Login to continue.",
            "Okay"
          );
          // openModal();
          // Session Expired or not logged in. Clear Cache and Navigate to login screen.
        } else if (res.status === 500) {
          // Backend Error. Handle it.
        } else if (res.status === 200) {
          // Valid Request. Data has come
          return res.json();
        } else if (res.status === 400) {
          // Display error message from "MESSAGE" field in data
        } else {
          // Unknown Error.
        }
      })
      .then((data) => {
        console.log("Recived Data:", data);
        setEventsData(data.EVENTS);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        throw err;
      });
  }, []); // This empty bracket here is important

  console.log("Events Data:", eventsData);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="block">
        <Navbar />
        <div className="flex flex-row min-h-screen mt-5 justify-center items-center mx-10 pt-10 lg:mt-20">
          <div className="grid grid-flow-row gap-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {eventsData && eventsData.length > 0 ? (
              eventsData.map((event) => (
                <div key={event.eventId}>
                  <Link
                    href={{
                      pathname: "/events/event",
                      query: { id: event.eventId },
                    }}
                  >
                    <EventCard
                      imgSrc={event.eventImageURL}
                      eventName={event.eventName}
                      eventBlurb={event.eventDescription}
                      eventDesc={event.eventDescription}
                      date={event.eventDate}
                      time={event.eventTime}
                      goi={event.isGroup}
                      tags={event.tags}
                      price={event.eventPrice}
                      isAllowed={event.eventStatus === "1"} // Adjust as needed
                      maxseats={event.maxSeats}
                      seats={event.seatsFilled}
                    />
                  </Link>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Events;
