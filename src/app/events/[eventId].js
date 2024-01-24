"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Event = () => {
  const router = useRouter();
  const { eventId } = router.query;

  if (eventId) {
    try {
      const decodedData = JSON.parse(decodeURIComponent(eventId));

      ({
        id,
        title,
        imgsrc,
        tags,
        price,
        date,
        time,
        groupOrIndividual,
        blurb,
        description,
        isAllowed,
      } = decodedData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  return (
    <>
      <div className="bg-slate-200 h-4/5 w-5/6 z-10 flex">
        {/* Image Section */}
        <div className="flex-none h-full w-2/4 relative">
          <Image
            src={imgsrc}
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
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          {/* Tags Section */}
          <div className="px-6 pt-4">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
          </div>
          {/* Price Section */}
          <div className="flex items-end justify-end pb-2 pr-8">
            <span className="text-4xl font-bold text-gray-900">{`$${price}`}</span>
          </div>
          {/* Additional Info */}
          <div className="flex flex-col mt-4">
            <p className="text-gray-700 text-base mb-2">
              <strong>Date:</strong> {date}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>Time:</strong> {time}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>Group/Individual:</strong> {groupOrIndividual}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>Blurb:</strong> {blurb}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>Allowed:</strong> {isAllowed ? "Yes" : "No"}
            </p>
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
