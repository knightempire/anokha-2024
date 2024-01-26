"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const Event = ({ searchParams }) => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(false);

  const { id } = searchParams;
  console.log("Event ID:", id);

  useEffect(() => {
    if (id) {
      fetch(
        `https://web.abhinavramakrishnan.tech/api/user/getEventData/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer <SECRET_TOKEN>`,
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Error: ${res.statusText}`);
          }
        })
        .then((data) => {
          console.log("Received Data:", data);
          setEventData(data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Handle the case where id is not present in the URL
      console.error("Event ID not found in the URL");
      setLoading(false);
    }
  }, [id]);

  console.log("Event Data:", eventData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!eventData) {
    return <div>Error loading data</div>;
  }

  const {
    eventName,
    eventDescription,
    eventMarkdownDescription,
    eventDate,
    eventTime,
    eventVenue,
    eventImageURL,
    eventPrice,
    maxSeats,
    seatsFilled,
    minTeamSize,
    maxTeamSize,
    isWorkshop,
    isTechnical,
    isGroup,
    needGroupData,
    isPerHeadPrice,
    isRefundable,
    eventStatus,
    departmentName,
    departmentAbbreviation,
    tags,
  } = eventData;

  return (
    <main className="flex min-h-screen max-h-screen flex-col bg-[#121212] text-white items-center justify-center">
      <div className="h-4/5 w-5/6 z-10 grid grid-cols-2 gap-4">
        <div className="flex-row relative">
          {/* Image Section */}
          <div className="flex-none relative h-full">
            <Image
              src={eventImageURL}
              layout="fill"
              alt="Event Image"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          {/* Register Button */}
          <div className="flex justify-center mt-8">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Register
            </button>
          </div>
        </div>
        {/* Main Content Section */}
        <div className="mt-5 flex flex-col overflow-y-auto h-[500px]">
          <div className="font-bold text-5xl mb-2">{eventName}</div>
          {/* Tags Section */}
          <div className="pt-4">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                >
                  #{tag.tagName}
                </span>
              ))}
          </div>
          <div className="flex flex-row justify-between items-center ">
            {/* Additional Info */}
            <div className="flex flex-col mt-4">
              <p className="text-white text-base mb-2">
                <strong>Date:</strong> {eventDate.slice(0, 10)} &bull;{" "}
                <strong>Time:</strong> {eventTime}
              </p>
              <p className="text-white text-base mb-2">
                <strong>Venue:</strong> {eventVenue}
              </p>
              <p className="text-white text-base mb-2">
                <strong>Group/Individual:</strong>{" "}
                {isGroup ? "Group" : "Individual"}
              </p>
            </div>
            {/* Price Section */}
            <div className="flex items-end justify-end pb-2 pr-8">
              <span className="text-4xl font-bold text-white">{`$${eventPrice}`}</span>
            </div>
          </div>

          <hr className="my-2" />
          <h2 className="text-2xl">Description</h2>
          <br />

          <ReactMarkdown className={showFullText ? "" : "line-clamp-[4]"}>
            {eventMarkdownDescription}
          </ReactMarkdown>
          {eventMarkdownDescription.length > 4 && (
            <button
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Event;
