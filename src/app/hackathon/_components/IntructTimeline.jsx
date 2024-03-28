import React from "react";

const TimelineInstruct = () => {
  const phases = [
    {
      title: "Feb 15th - Mar 7th",
      description: "Registrations and submissions for first round",
    },
    {
      title: "March 7th",
      description: "Announcement for shortlisted teams for 2nd round (prototype)",
    },
    {
      title: "March 7th to April 2nd (10 AM)",
      description: "Prototype development",
    },
    {
      title: "April 2nd (EOD)",
      description: "Announcement for the shortlisted teams for offline round",
    },
    {
      title: "April 4th - 5th",
      description: "24 hour offline hackathon (final round)",
    },
  ];

  return (
    <div className="w-full bg-white pt-10 overflow-hidden">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="outer">
            {phases.map((phase, index) => (
              <div className="flex items-start mb-6" key={index}>
                <div className="flex-shrink-0 mr-4">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineInstruct;
