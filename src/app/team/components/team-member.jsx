import { useState } from "react";
import { LuClipboardCopy } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

function ProfileCard({ name, imgSrc, Position, rollno, email, dept }) {
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
      className={`relative max-w-xs bg-[rgba(0,0,0,0.7)] backdrop-blur-md border border-gray-600 rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out ${
        isHovered ? "shadow-xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full flex justify-center mb-8 transition duration-300 ease-in-out transform ${
          isHovered ? "scale-105" : ""
        }`}
      >
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
          <Image
            src={imgSrc}
            alt="profile-pic"
            width={150}
            height={150}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
        <p className="text-sm text-gray-300 mb-1">{rollno}</p>

        {/* Position: Color changes to light blue on hover */}
        <p
          className={`text-sm mb-2 transition-colors duration-300 ${
            isHovered ? "text-blue-300" : "text-gray-300"
          }`}
        >
          {Position}
        </p>

        <div className="flex items-center justify-center mb-3">
          {/* Email: Darker blue */}
          <p className="text-sm text-blue-500">{email}</p>
          <button
            className="ml-2 p-1 rounded-full hover:bg-gray-100"
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
  );
}

export default ProfileCard;
