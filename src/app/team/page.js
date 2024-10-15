"use client";
import { useEffect, useState } from "react";
import ProfileCard from "./components/team-member";
import WebGLApp from "@/app/bg/WebGLApp";
import { CREW_URL } from "../_util/constants.js";
import Footer from "../components/Footer";
import Navigationbar from "../components/EventHeader";

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

  const renderTeamRow = (members) => (
    <div className="flex flex-row flex-wrap gap-6 justify-center items-start mb-12">
      {members.map((member) => (
        <ProfileCard
          key={member.memberId}
          name={member.managerName}
          Position={member.roleDescription} // Use role description for unique shapes
          imgSrc={member.memberImageURL}
          email={member.memberEmail}
          dept={member.departmentName}
          rollno={member.memberId}
        />
      ))}
    </div>
  );

  const renderWMDCrew = (data) => {
    const teamMembers = data.teamMembers;

    const head = teamMembers.filter(
      (member) =>
        member.roleDescription === "Head" ||
        member.roleDescription === "Co-Head" ||
        member.roleDescription === "Software Engg. Lead"
    );
    const appDevelopers = teamMembers.filter(
      (member) => member.roleDescription === "App Developer"
    );
    const webDevelopers = teamMembers.filter(
      (member) => member.roleDescription === "Web Developer"
    );

    return (
      <>
        {renderTeamRow(head)}
        {renderTeamRow(appDevelopers)}
        {renderTeamRow(webDevelopers)}
      </>
    );
  };

  const renderNormalCrew = (data) => (
    <div className="flex flex-row flex-wrap gap-6 justify-center items-start">
      {data.teamMembers.map((member) => (
        <ProfileCard
          key={member.memberId}
          name={member.managerName}
          Position={member.roleDescription}
          imgSrc={member.memberImageURL}
          email={member.memberEmail}
          dept={member.departmentName}
          rollno={member.memberId}
        />
      ))}
    </div>
  );

  return (
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} />
      <div className="flex z-20 w-full flex-col">
        <Navigationbar />
        <div className="flex flex-col gap-16 pb-16 mt-28 px-4">
          {crew ? (
            crew.map((data, index) => (
              <div key={index}>
                <h2 className="text-center w-full text-white text-3xl font-bold mb-10">
                  &#9672; {data.crewName} &#9672;
                </h2>
                {data.crewName.toLowerCase().includes("wmd")
                  ? renderWMDCrew(data)
                  : renderNormalCrew(data)}
              </div>
            ))
          ) : (
            <div className="text-white text-center">
              Team data not available
            </div>
          )}
        </div>
        <Footer current_page={"team"} />
      </div>
    </main>
  );
};

export default Team;
