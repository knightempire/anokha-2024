"use client";
import { useEffect, useState } from "react";

import TeamMember from "./components/team-member";
import WebGLApp from "@/app/bg/WebGLApp";
import { CREW_URL } from "../_util/constants.js";
import Footer from "../components/Footer";
import Navigationbar from "../components/EventHeader";

// import ComingSoon from "../components/ComingSoon";

const Team = () => {
  const [crew, setCrew] = useState();
  useEffect(() => {
    fetch(CREW_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((data) => {
        console.log(data.CREW_DATA);
        setCrew(data.CREW_DATA);
      });
  }, []);

  const webGLColors = {
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  };

  return (
    // <ComingSoon />
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} />
      <div className="flex z-20 w-full flex-col">
        <Navigationbar />
        <div className="flex flex-col gap-10 pb-16 mt-28">
          {crew
            ? crew.map((data, index) => (
                <div key={index}>
                  <div className="text-center w-full text-white text-2xl">
                    &#9672; {data.crewName} &#9672;
                  </div>
                  <div className="flex flex-row flex-wrap gap-4 m-10">
                    {data.teamMembers && data.teamMembers.length > 0 ? (
                      data.teamMembers.map((member) => (
                        <div key={member.memberId}>
                          <TeamMember
                            name={member.managerName}
                            Position={member.roleDescription}
                            imgSrc={member.memberImageURL}
                            email={member.memberEmail}
                            dept={member.departmentName}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="text-white">NOT FOUND</div>
                    )}
                  </div>
                </div>
              ))
            : "NOT AVAILABLE"}
        </div>
        <Footer current_page={"team"}/>
      </div>
    </main>
  );
};

export default Team;
