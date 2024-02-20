"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Star from "../../../../public/images/star.png";
import Unstar from "../../../../public/images/unstar.png";
import { STAR_UNSTAR_EVENT_URL } from "@/app/_util/constants";

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
  maxseats,
  seats,
}) {
  const [starred, toggleStar] = useState(0);
  const [tagAbb, setTagAbb] = useState(-1);

  useEffect(() => {
    fetch(STAR_UNSTAR_EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer v4.public.eyJzdHVkZW50RnVsbE5hbWUiOiJBYmhpbmF2IFJhbWFrcmlzaG5hbiIsInN0dWRlbnRFbWFpbCI6ImhzaGVhZG9uZUBnbWFpbC5jb20iLCJzdHVkZW50UGhvbmUiOiI5NTk3MzQ3NTk0Iiwic3R1ZGVudFBhc3N3b3JkIjoiNGJjMzQ0NmI2NzJkMzBjYTA0NWViNTdjZDY2MTM0N2MyN2E3Y2EzZWRkODBjYzJmZTMyMDE1OTgwMGY4Yzg1NiIsIm5lZWRQYXNzcG9ydCI6IjEiLCJzdHVkZW50QWNjb3VudFN0YXR1cyI6IjEiLCJzdHVkZW50Q29sbGVnZU5hbWUiOiJBbXJpdGEgVmlzaHdhIFZpZHlhcGVldGhhbSIsInN0dWRlbnRDb2xsZWdlQ2l0eSI6IkNvaW1iYXRvcmUiLCJpc0luQ2FtcHVzIjoiMCIsInNlY3JldF9rZXkiOiJlNzQ2NWYyMGIxMzNkMjk0MzgyZDFmNTJkZGUwY2Y5NDk5NGM3NjJhNjNkNzk2NzA0ZDU1ZWU5ZjdhMTg0NmJlODhjODUzMWNjMGUxZjYwZjVjZWExNjIwMDM3NDRiYmYyY2NhNWIxM2QzOGRhZGY3MWRiMjU0NGM2NGQ3OGZlNDllNDRhYmZlYzgwOTRmMzM3MTE3YmE1YjAxNjBmYjY1ZGQ5MTRlOGIxNGI4YWIxMGJmNDRlMTQxOGQ3OWRjOWI3ODU5N2EwYjJhN2NlNDIwNjA5MDYxM2Q4Zjc2ZTMxMWIyYWJkZDY0OWJmYjQ4M2IzYjUzMTI4YWE1ZTI3MDAyYTY2YWE4ODhhZmQzYjJiYjRhMTYyNTc5MGRkZDQ1NmFjYjFhNzdjMmI4YTczZjU4MTZjYjExOTY4MzYzYTMwMDMyY2UwYjNkOTBiYTQ2NmI1MWE4NWNlMzA2ZTZlYjAzMGMwOTVkYjJjNjI4NmMwYTYyOTM5ZjEwNTZlN2VkNDc3Y2I5ZjE1NDUwNDUyNTM5ZWEzNzU2YTlmNDBhMTZiNTRmNTAxNjgwNTI4ODQyZjJmNDM2YTY4NDMzN2JkODU2MTc5Y2YwYThkOWU3MWZjNmM5MTMzMWYxZmQ2MDA2ZDYyYWQyNDI5NzhhMjUyMjQ1NWEzMWY4NjNlYzgxY2RjOGFlZmQzZWFkYjQyYjAwMzZjMWFlYTE3NmE3ZWEiLCJpYXQiOiIyMDI0LTAxLTE2VDExOjQ1OjM2LjM4OFoiLCJleHAiOiIyMDI0LTAxLTE2VDExOjUwOjM2LjM4OFoifZzXQXArINaREDHyRrTFKFnd7RYRmjsYJcro170WYbXRQFz685wV0Q7OEmCGz_5QI1V8LO2P_CxfqRWE_UzWdAk",
      },
      body: JSON.stringify({
        eventId: id,
        isStarred: starred ? "1" : "0",
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          setTimeout(() => {
            router.push("/login");
          }, 1500);
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
  }, [starred]);

  const handleStarToggle = (e) => {
    e.preventDefault();
    toggleStar(!starred);
  };

  const toogleTag = (e, i) => {
    tagAbb == -1 ? setTagAbb(i) : setTagAbb(-1);
  };

  return (
    <div class="bg-gray-900 min-h-[600px] shadow-lg rounded-xl p-4 border-2 border-transparent hover:border-2 hover:border-purple-600 transition duration-150">
      <div class="flex flex-col relative group">
        <div class="relative h-[400px] w-full mb-3">
          <Image
            src={"https://i.imgur.com/iQy8GLM.jpg"}
            width={400}
            height={400}
            objectFit="contain"
            alt="https://i.imgur.com/iQy8GLM.jpg"
            class=" rounded-2xl h-full transition duration-300 hover:filter hover:brightness-0 hover:grayscale-100 hover:opacity-0"
          />

          <div class="absolute top-2 left-2 p-1 text-xs text-green-800 font-semibold border border-white rounded-lg bg-green-100">
            Registered
          </div>

          <div class=" absolute rounded-2xl inset-0 bg-black bg-opacity-80 text-white p-3 text-center opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
            <span>{eventDesc}</span>
            <div class="flex justify-center mt-3">
              <div class="flex justify-center mt-3">
                <div class="flex space-x-2 text-sm font-medium">
                  <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium bg-white px-5 py-2 hover:shadow-lg tracking-wider text-black rounded-full ">
                    <span>Register</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto justify-between flex flex-col">
        <div class="flex flex-wrap items-center justify-between">
          <h1 class="text-2xl cursor-pointer text-gray-200 hover:text-purple-500 break-word">
            {eventName}
          </h1>
          <button
            onClick={handleStarToggle}
            id="heartButton2"
            class="transition ease-in duration-300 bg-gray-800 hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
          >
            <svg
              id="heartSVG2"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                id="heartPath2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                fill="none"
              />
            </svg>
          </button>
        </div>

        <div class="flex justify-between items-center">
          <p class="text-gray-400 text-md flex flex-row">
            <svg
              class="h-6 w-6 inline-block mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              ></path>
            </svg>
            {date.slice(0, 10)} {time.slice(0, 5)}
          </p>
          <div class="text-xl flex justify-center items-center text-white font-semibold h-10 w-20 rounded-full ">
            ₹{price}
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-start mt-2">
          <div class="flex flex-wrap mt-2">
            {tags.map((tag, index) => {
              return (
                <div
                  onMouseEnter={(e) => toogleTag(e, index)}
                  onMouseLeave={(e) => toogleTag(e, index)}
                  class="flex items-center text-xs px-2 py-1 mr-2 mb-2 rounded-lg bg-gray-400 text-white "
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
