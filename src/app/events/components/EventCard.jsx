"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { STAR_UNSTAR_EVENT_URL } from "@/app/_util/constants";
import secureLocalStorage from "react-secure-storage";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function EventCard({
  imgSrc,
  id,
  eventName,
  eventBlurb,
  eventDesc,
  date,
  time,
  goi,
  tags,
  price,
  isAllowed,
  isRegistered,
  isStarred,
  maxseats,
  seats,
  router,
}) {
  const [secretToken, setSecretToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [isAmritaCBE, setIsAmritaCBE] = useState(0);
  const [hasActivePassport, setHasActivePassport] = useState(0);

  useEffect(() => {
    setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
    setIsAmritaCBE(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
    setHasActivePassport(
      parseInt(secureLocalStorage.getItem("hasActivePassport"))
    );
    setSecretToken(secureLocalStorage.getItem("registerToken"));
    isStarred != undefined || isStarred != null
      ? toggleStar(isStarred)
      : toggleStar(0);
  }, []);

  const [starred, toggleStar] = useState(
    typeof isStarred == "string" ? parseInt(isStarred) : 0
  );
  const [tagAbb, setTagAbb] = useState(-1);
  const toggleStarBackend = () => {
    fetch(STAR_UNSTAR_EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + secureLocalStorage.getItem("registerToken"),
      },
      body: JSON.stringify({
        eventId: id, // eg. "eventId": 1,
        isStarred: starred == 0 ? "1" : "0", // "1" -> Star Event. "0" -> Unstar Event. eg. "isStarred": "1"
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          // buildDialog('Error', 'You are not logged in!\nPlease Login to continue.', 'Okay');
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
        // Set Data variables.
      })
      .catch((err) => {
        // Error in Frontend Code. Handle it.
      });
  };
  const handleStarToggle = (e) => {
    e.preventDefault();
    toggleStar(starred == 0 ? 1 : 0);
    secureLocalStorage.getItem("isLoggedIn") == "1"
      ? toggleStarBackend()
      : toggleStar(starred == 0 ? 1 : 0);
  };

  const toogleTag = (e, i) => {
    tagAbb == -1 ? setTagAbb(i) : setTagAbb(-1);
  };

  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    const time12 = `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;

    return time12;
  }

  return (
    <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-lg max-w-[350px] min-h-[600px] shadow-lg rounded-xl p-4 border-2 border-transparent hover:border-2 hover:border-purple-600 transition duration-150">
      <div className="flex flex-col relative group">
        <div className="relative h-[400px] w-full mb-3">
          <Image
            src={imgSrc}
            width={400}
            height={400}
            objectFit="contain"
            alt="https://i.imgur.com/iQy8GLM.jpg"
            className=" rounded-2xl h-full transition duration-300 hover:filter hover:brightness-0 hover:grayscale-100 hover:opacity-0"
          />
          {secureLocalStorage.getItem("isLoggedIn") && isRegistered == "1" ? (
            <div class="absolute top-2 left-2 p-1 text-xs text-green-800 font-semibold border border-white rounded-lg bg-green-100">
              Registered
            </div>
          ) : seats == maxseats ? (
            <div class="absolute top-2 left-2 p-1 text-xs text-red-800 font-semibold border border-white rounded-lg bg-red-100">
              Registrations Closed
            </div>
          ) : (
            ""
          )}
          <div class=" absolute rounded-2xl inset-0 bg-black bg-opacity-80 text-white p-3 text-center opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
            <span>{eventDesc}</span>
            <div class="flex justify-center mt-3">
              <div class="flex justify-center mt-3">
                <div class="flex space-x-2 text-sm font-medium">
                  <button class="transition disabled cursor-not-allowed ease-in duration-300 inline-flex items-center text-sm font-medium bg-white px-5 py-2 hover:shadow-lg tracking-wider text-black rounded-full ">
                    <span>Opening Soon</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto justify-between flex flex-col">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-2xl cursor-pointer text-gray-200 hover:text-purple-500 break-word">
            {eventName}
          </h1>
          <button
            onClick={handleStarToggle}
            id="heartButton2"
            class="transition ease-in duration-300 bg-gray-800 hover:text-red-500 bg-red shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
          >
            <svg
              id="heartSVG2"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke={starred == 0 ? "currentColor" : "rgb(239, 68, 68)"}
            >
              <path
                id="heartPath2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                fill={starred == 0 ? "none" : "rgb(239, 68, 68)"}
              />
            </svg>
          </button>
        </div>
        <div class="flex justify-between items-center mt-2">
          <p class="text-gray-400 text-md flex flex-row gap-2">
            <svg
              width="20px"
              height="20px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              style={{ marginTop: "1px" }}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#e6e6e6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            {/* {"APRIL " + date.slice(8, 10)}  */}
            To be announced
            <vt></vt>
            {goi == "1" ? (
              <div className="flex flex-row gap-2 mt-1">
                <FaUserGroup />
                <span className="font-normal text-xs mt-1">Group</span>
              </div>
            ) : (
              <div className="flex flex-row gap-2 mt-1">
                <FaUser />
                <span className="font-normal text-xs mt-1">Individual</span>
              </div>
            )}
          </p>
          <div className="flex flex-col">
            <div class="text-xl flex justify-center items-center text-white font-semibold h-7 w-20 rounded-full ">
              ₹{Math.ceil(price * 1.18)}
            </div>
            <span className="text-[8px] mx-auto text-white">Incl. of GST</span>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-start mt-2">
          <div class="flex flex-wrap mt-2">
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  onMouseEnter={(e) => toogleTag(e, index)}
                  onMouseLeave={(e) => toogleTag(e, index)}
                  class="flex items-center text-xs px-2 py-1 mr-2 mb-2 transition-200 rounded-xl bg-black text-white border-[2px] border-purple-600"
                >
                  {tagAbb == index ? tag.tagName : tag.tagAbbreviation}
                </div>
              );
            })}
          </div>
        </div>
        {/* <script>
              const tags = document.querySelectorAll('.tag');
      
              tags.forEach(tag => {
                  let originalText = tag.innerText; // Store the original text content of the tag
      
                  tag.addEventListener('mouseover', () => {
                      const abbreviation = tag.getAttribute('data-title');
                      tag.innerText = abbreviation;
                  });
      
                  tag.addEventListener('mouseout', () => {
                      tag.innerText = originalText; // Restore the original text content of the tag
                  });
              });
          </script> */}
      </div>
    </div>
  );
}
