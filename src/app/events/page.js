"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/app/events/components/EventCard";
import Link from "next/link";
import Navbar from "../components/EventHeader";
import Footer from "../components/Footer";
import FilterSection from "./components/FilterSection";

const Events = () => {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    fetch("https://web.abhinavramakrishnan.tech/api/user/getAllEvents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer v4.public.eyJzdHVkZW50RnVsbE5hbWUiOiJBYmhpbmF2IFJhbWFrcmlzaG5hbiIsInN0dWRlbnRFbWFpbCI6ImhzaGVhZG9uZUBnbWFpbC5jb20iLCJzdHVkZW50UGhvbmUiOiI5NTk3MzQ3NTk0Iiwic3R1ZGVudFBhc3N3b3JkIjoiNGJjMzQ0NmI2NzJkMzBjYTA0NWViNTdjZDY2MTM0N2MyN2E3Y2EzZWRkODBjYzJmZTMyMDE1OTgwMGY4Yzg1NiIsIm5lZWRQYXNzcG9ydCI6IjEiLCJzdHVkZW50QWNjb3VudFN0YXR1cyI6IjEiLCJzdHVkZW50Q29sbGVnZU5hbWUiOiJBbXJpdGEgVmlzaHdhIFZpZHlhcGVldGhhbSIsInN0dWRlbnRDb2xsZWdlQ2l0eSI6IkNvaW1iYXRvcmUiLCJpc0luQ2FtcHVzIjoiMCIsInNlY3JldF9rZXkiOiJlNzQ2NWYyMGIxMzNkMjk0MzgyZDFmNTJkZGUwY2Y5NDk5NGM3NjJhNjNkNzk2NzA0ZDU1ZWU5ZjdhMTg0NmJlODhjODUzMWNjMGUxZjYwZjVjZWExNjIwMDM3NDRiYmYyY2NhNWIxM2QzOGRhZGY3MWRiMjU0NGM2NGQ3OGZlNDllNDRhYmZlYzgwOTRmMzM3MTE3YmE1YjAxNjBmYjY1ZGQ5MTRlOGIxNGI4YWIxMGJmNDRlMTQxOGQ3OWRjOWI3ODU5N2EwYjJhN2NlNDIwNjA5MDYxM2Q4Zjc2ZTMxMWIyYWJkZDY0OWJmYjQ4M2IzYjUzMTI4YWE1ZTI3MDAyYTY2YWE4ODhhZmQzYjJiYjRhMTYyNTc5MGRkZDQ1NmFjYjFhNzdjMmI4YTczZjU4MTZjYjExOTY4MzYzYTMwMDMyY2UwYjNkOTBiYTQ2NmI1MWE4NWNlMzA2ZTZlYjAzMGMwOTVkYjJjNjI4NmMwYTYyOTM5ZjEwNTZlN2VkNDc3Y2I5ZjE1NDUwNDUyNTM5ZWEzNzU2YTlmNDBhMTZiNTRmNTAxNjgwNTI4ODQyZjJmNDM2YTY4NDMzN2JkODU2MTc5Y2YwYThkOWU3MWZjNmM5MTMzMWYxZmQ2MDA2ZDYyYWQyNDI5NzhhMjUyMjQ1NWEzMWY4NjNlYzgxY2RjOGFlZmQzZWFkYjQyYjAwMzZjMWFlYTE3NmE3ZWEiLCJpYXQiOiIyMDI0LTAxLTE2VDExOjQ1OjM2LjM4OFoiLCJleHAiOiIyMDI0LTAxLTE2VDExOjUwOjM2LjM4OFoifZzXQXArINaREDHyRrTFKFnd7RYRmjsYJcro170WYbXRQFz685wV0Q7OEmCGz_5QI1V8LO2P_CxfqRWE_UzWdAk",
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
        <div className="flex flex-col gap-5 min-h-screen justify-center items-center mx-10 pt-10 mt-10">
          <div className="my-3 z-20 w-full min-h-[100px] flex justify-center">
            <FilterSection />
          </div>
          <div className="grid grid-flow-row gap-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                      id={event.eventId}
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
