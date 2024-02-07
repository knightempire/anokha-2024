"use client";

import { useState } from "react";
import Image from "next/image";

function ProfileCard({ name, imgSrc, Position, rollno }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`profile-card bg-white rounded-lg p-2 w-[250px] h-[350px] flex flex-col items-center justify-center transition duration-300 ease-in-out transform ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`profile-pic w-[150px] h-[150px] rounded-full overflow-hidden mb-8 flex justify-center items-center transition duration-300 ease-in-out transform ${
          isHovered ? "scale-105" : ""
        }`}
      >
        <Image
          src={imgSrc}
          alt="profile-pic"
          width={150}
          height={150}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="content text-center">
        <div className="name text-xl font-semibold mb-1">{name}</div>
        <div className="position text-md font-normal mb-2">{rollno}</div>
        <div className="position text-md font-normal">{Position}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
