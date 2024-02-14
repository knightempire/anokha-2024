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
            router.replace("/login");
          }, 1500)
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

  return (
    <div className="flex flex-col group relative bg-white w-[270px] rounded-xl hover:scale-105 cursor-pointer transition-transform duration-100 ease-in-out">
      <div className="absolute -left-[5px] -top-[5px] -right-[5px] -bottom-[5px] z-[1] rounded-xl bg-white group-hover:bg-gradient-to-r from-[#ef9a17] to-[#e42120]"></div>
      <div
        className={`${
          maxseats == seats
            ? "absolute -left-[5px] -top-[5px] -right-[5px] -bottom-[5px] z-[11] rounded-xl bg-[rgba(0,0,0,0.6)]"
            : ""
        }`}
      ></div>
      {/* Image Section */}
      <div className="z-10 bg-white rounded-xl">
        <div className="flex-none h-[350px] w-full relative group/img overflow-hidden">
          <Image
            src={imgSrc}
            alt="Event Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl transition-transform transform-gpu duration-300 ease-in-out group-hover/img:filter group-hover/img:brightness-[20%]"
          />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover/img:opacity-100 text-white text-center p-7 pt-12">
            {eventDesc}
          </div>
        </div>
        {/* Main Content Section */}
        <div className="flex flex-col">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{eventName}</div>
            <div className="flex flex-row justify-between">
              <p className="text-gray-700 text-sm">{date.slice(0, 10)}</p>
              <span className="text-sm font-bold text-gray-900 ">{`$${price}`}</span>
            </div>
          </div>
          {/* Tags Section */}
          <div className="flex flex-row">
            <div className="px-2 pb-2 flex flex-row flex-wrap w-[95%]">
              {tags &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2 h-[23px]"
                  >
                    #{tag.tagName}{" "}
                  </span>
                ))}
              <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
                #Hello
              </span>
              <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
                #Hello
              </span>
              <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
                #Hello
              </span>
              <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
                #Hello
              </span>
              <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
                #Hello
              </span>
              <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 mr-2 mb-2">
                #Hello
              </span>
            </div>
            {/* Star Section */}
            <div className="mt-[auto] mb-[20px] mr-3">
              <Image
                src={starred == 0 ? Unstar : Star}
                alt=""
                width={20}
                height={20}
                onClick={handleStarToggle}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
