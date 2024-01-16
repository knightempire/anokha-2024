import Image from "next/image";
import React from "react";

export default function EventCard({
  imgSrc,
  eventName,
  eventDesc,
  tags,
  price,
}) {
  return (
    <div className="flex flex-row bg-white   w-full rounded shadow-lg    ">
      {/* Image Section */}
      <div className="flex-none h-full w-2/4  relative">
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
      <div className="flex flex-col hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition duration-500 ease-in-out opacity-90">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{eventName}</div>
          <p className="text-gray-700 text-base">{eventDesc}</p>
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
