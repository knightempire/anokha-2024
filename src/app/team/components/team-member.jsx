import React, { useState } from "react";
import { LuClipboardCopy } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import AbstractDesign from "./AbstractDesgin";

const ProfileCard = ({ name, Position, imgSrc, email, dept, rollno }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
    }
  };

  return (
    <div
      className="relative max-w-xs rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out min-w-72"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Abstract Design as a background */}
      <div className="absolute inset-0">
        <AbstractDesign role={Position} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 bg-black bg-opacity-70 p-4">
        <div
          className={`w-full flex justify-center mb-4 transition duration-300 ease-in-out transform ${
            isHovered ? "scale-105" : ""
          }`}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              src={imgSrc}
              alt={name}
              width={128}
              height={128}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
          <p
            className={`text-sm mb-2 transition-colors duration-300 ${
              isHovered ? "text-blue-300" : "text-gray-300"
            }`}
          >
            {Position}
          </p>

          <div className="flex items-center justify-center mb-2">
            <p className="text-sm text-blue-500">{email}</p>
            <button
              className="ml-2 p-1 rounded-full hover:scale-110 transition-transform duration-200"
              onClick={handleCopyClick}
            >
              {copied ? (
                <TiTick className="text-green-500" />
              ) : (
                <LuClipboardCopy className="text-gray-400" />
              )}
            </button>
          </div>
          <p className="text-sm text-gray-300">{dept}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
