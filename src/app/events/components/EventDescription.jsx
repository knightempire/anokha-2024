import Image from "next/image";
import React from "react";

export default function EventDescription({ event }) {
  const {
    eventId,
    eventName,
    eventDescription,
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
  } = event;

  return (
    <div className=" bg-slate-200 h-4/5 w-5/6 z-10 flex ">
      {/* Image Section */}
      <div className="flex-none h-full w-2/4  relative">
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
          <p className="text-gray-700 text-base">{`Date: ${eventDate}, Time: ${eventTime}, Venue: ${eventVenue}`}</p>
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
        {/* Additional Information Section */}
        <div className="px-6 pt-4">
          <p className="text-gray-700 text-base">{`Price: $${eventPrice}`}</p>
          <p className="text-gray-700 text-base">{`Seats: ${seatsFilled}/${maxSeats}`}</p>
          <p className="text-gray-700 text-base">{`Team Size: ${minTeamSize} - ${maxTeamSize}`}</p>
          <p className="text-gray-700 text-base">{`Workshop: ${
            isWorkshop === "1" ? "Yes" : "No"
          }`}</p>
          <p className="text-gray-700 text-base">{`Technical Event: ${
            isTechnical === "1" ? "Yes" : "No"
          }`}</p>
          <p className="text-gray-700 text-base">{`Group Event: ${
            isGroup === "1" ? "Yes" : "No"
          }`}</p>
          <p className="text-gray-700 text-base">{`Per Head Price: ${
            isPerHeadPrice === "1" ? "Yes" : "No"
          }`}</p>
          <p className="text-gray-700 text-base">{`Refundable: ${
            isRefundable === "1" ? "Yes" : "No"
          }`}</p>
          <p className="text-gray-700 text-base">{`Event Status: ${
            eventStatus === "1" ? "Active" : "Inactive"
          }`}</p>
          <p className="text-gray-700 text-base">{`Department: ${departmentName} (${departmentAbbreviation})`}</p>
        </div>
      </div>
    </div>
  );
}
