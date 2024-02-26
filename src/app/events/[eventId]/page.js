"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { EVENT_DATA_URL } from "@/app/_util/constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useParams } from "next/navigation";

const Event = () => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(false);

  const { eventId } = useParams();
  console.log("Event ID:", eventId);

  const Poster = useRef(null);
  const Register = useRef(null);
  const Title = useRef(null);
  const MainInfo = useRef(null);
  const Tags = useRef(null);
  const Price = useRef(null);
  const Desc = useRef(null);

  useEffect(() => {
    if (eventId) {
      fetch(`${EVENT_DATA_URL}/${eventId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer <SECRET_TOKEN>`,
        },
      })
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
          // Trigger GSAP animations once data is fetched and rendered
          let tl = gsap.timeline();
          tl.from(Poster.current, { opacity: 0, duration: 0.3 });
          tl.from(Register.current, { opacity: 0, y: 20, duration: 0.3 });
          tl.from(Title.current, { opacity: 0, y: -30, duration: 0.3 });
          tl.from(
            MainInfo.current,
            {
              opacity: 0,
              stagger: 0.1,
              duration: 0.3,
            },
            "start"
          );
          tl.from(Price.current, { opacity: 0, duration: 0.3 }, "start");
          tl.from(Desc.current, { opacity: 0, duration: 0.3 });
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Handle the case where eventId is not present in the URL
      console.error("Event eventId not found in the URL");
      setLoading(false);
    }
  }, [eventId]);

  console.log("Event Data:", eventData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!eventData) {
    return <div>Error loading data</div>;
  }

  const checkisTeam = () => {
    if (eventData.isGroup == "1") {
    }
  };

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
    <main className="flex min-h-screen max-h-screen flex-col bg-[#192032] text-white items-center justify-center">
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
              ref={Poster}
            />
          </div>
          {/* Register Button */}
          <div className="flex justify-center mt-8" ref={Register}>
            <button className="text-white cursor-not-allowed disabled bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              {/* <Link
                href={{
                  pathname: "/events/register_team",
                  query: {
                    eventId: eventId,
                    minTeamSize: minTeamSize,
                    maxTeamSize: maxTeamSize,
                  },
                }}
              >
              </Link> */}
              Registrations Opening Soon
            </button>
          </div>
        </div>
        {/* Main Content Section */}
        <div className="mt-5 flex flex-col overflow-y-auto h-[500px]">
          <div className="font-bold text-5xl mb-2" ref={Title}>
            {eventName}
          </div>
          {/* Tags Section */}
          <div className="pt-4">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                  ref={Tags}
                >
                  #{tag.tagName}
                </span>
              ))}
          </div>
          <div className="flex flex-row justify-between items-center ">
            {/* Additional Info */}
            <div className="flex flex-col mt-4" ref={MainInfo}>
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
            <div className="flex items-end justify-end pb-2 pr-8" ref={Price}>
              <span className="text-4xl font-bold text-white">{`$${eventPrice}`}</span>
            </div>
          </div>

          <hr className="my-2" tag="Others" />
          <h2 className="text-2xl" tag="Others">
            Description
          </h2>
          <br />

          <ReactMarkdown
            className={showFullText ? "" : "line-clamp-[4]"}
            ref={Desc}
          >
            {eventMarkdownDescription}
          </ReactMarkdown>
          {eventMarkdownDescription.length > 4 && (
            <button
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
              onClick={() => setShowFullText(!showFullText)}
              tag="Others"
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
