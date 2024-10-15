import React from "react";

const AbstractDesign = ({ role }) => {
  // Define gradient colors for different roles (using the original color scheme)
  const gradients = {
    Head: "from-[#00c6ff] to-[#0072ff]", // Light Cyan to Bold Blue
    "Co-Head": "from-[#FC00FF] to-[#00DBDE]", // Magenta to Teal
    "App Developer": "from-[#2af598] to-[#009efd]", // Bright Green to Light Blue
    "Web Developer": "from-[#4ECDC4] to-[#556270]", // Teal to Dark Grey
    "Software Engg. Lead": "from-[#FC00FF] to-[#00DBDE]", // Magenta to Teal
    Default: "from-[#D9AFD9] to-[#97D9E1]", // Light Purple to Light Blue
  };

  // Function to generate a unique shape path for each role
  const getShapePath = (role) => {
    switch (role) {
      case "Head":
        return "M0,100 C50,180 150,20 200,100 L200,0 L0,0 Z";
      case "Co-Head":
        return "M0,100 C80,180 120,20 200,100 L200,0 L0,0 Z";
      case "App Developer":
        return "M0,100 C30,150 70,50 100,100 S170,150 200,100 L200,0 L0,0 Z";
      case "Web Developer":
        return "M0,100 Q50,180 100,100 T200,100 L200,0 L0,0 Z";
      case "Software Engg. Lead":
        return "M0,100 C50,180 150,20 200,100 L200,0 L0,0 Z";
      default:
        return "M0,100 L50,180 L100,20 L150,180 L200,100 L200,0 L0,0 Z";
    }
  };

  const gradientClass = gradients[role] || gradients.Default;

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradientClass} overflow-hidden`}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full text-white opacity-20"
        preserveAspectRatio="none"
      >
        <path d={getShapePath(role)} fill="currentColor" />
      </svg>
    </div>
  );
};

export default AbstractDesign;
