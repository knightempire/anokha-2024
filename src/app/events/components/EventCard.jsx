import Image from "next/image";
import React from "react";

export default function EventCard({
  imgSrc,
  eventName,
  eventBlurb,
  eventDesc,
  date,
  time,
  goi,
  tags,
  price,
  isAllowed,
}) {
  return (
    <div className="flex flex-row bg-white w-full rounded shadow-lg hover:scale-105 cursor-pointer transition-transform duration-100 ease-in-out">
      {/* Image Section */}
      <div className="flex-none h-full w-1/3  relative">
        <Image
          src={imgSrc}
          alt="Event Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded"
        />
      </div>
      {/* Main Content Section */}
      <div className="flex flex-col">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{eventName}</div>
          <p className="text-gray-700 text-base">{eventBlurb}</p>
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
          <span className="text-4xl font-bold text-gray-900 ">{`$${price}`}</span>
        </div>
      </div>
    </div>
  );
}
