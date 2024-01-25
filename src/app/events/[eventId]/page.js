"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

const Event = ({ searchParams }) => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <>
      <div className="bg-slate-200 h-4/5 w-5/6 z-10 flex">
        {/* Image Section */}
        <div className="flex-none h-full w-2/4 relative">
          <Image
            src={eventImageURL}
            alt="Event Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded"
          />
        </div>
        {/* Main Content Section */}
        <div className="mt-5 flex flex-col">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{eventName}</div>
            <p className="text-gray-700 text-base">{eventDescription}</p>
          </div>
          {/* Tags Section */}
          <div className="px-6 pt-4">
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
          {/* Price Section */}
          <div className="flex items-end justify-end pb-2 pr-8">
            <span className="text-4xl font-bold text-gray-900">{`$${eventPrice}`}</span>
          </div>
          {/* Additional Info */}
          <div className="flex flex-col mt-4">
            <p className="text-gray-700 text-base mb-2">
              <strong>Date:</strong> {eventDate}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>Time:</strong> {eventTime}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>Group/Individual:</strong>{" "}
              {isGroup ? "Group" : "Individual"}
            </p>
            {/* Add other fields as needed */}
          </div>
          {/* Register Button */}
          <div className="flex justify-center mt-8">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
