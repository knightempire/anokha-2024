import React from "react";
import secureLocalStorage from "react-secure-storage";

//     const hash = "isajithrajan@gmail.com"

//   <img height={200} src={https://www.gravatar.com/avatar/${hash}.jpg?s=200&d=robohash} alt="Profile" width={200} className="rounded-lg"/>

const TeamDetails = ({
  teamName,
  noOfMembers,
  platform,
  platformID,
  teamMembers,
  teamStatus,
}) => {
  return (
    <div className="w-full bg-[#172786] text-white rounded-xl text-lg">
      <div className="flex flex-col space-y-4 p-7 text-black rounded my-1 bg-opacity-80 space-between">
        <h1 className="text-white  text-center font-light text-[2rem]">
          Welcome <i className="font-bold">{teamName}</i>
        </h1>
        <h3 className="mx-auto text-white font-normal bg-[rgba(255,255,255,0.5)] py-1 px-2 rounded-2xl">
          {teamStatus==1? "Sorry, you didn't make it to Round 2": teamStatus == 2 ? "Congratulations. You are shortlisted for Round 2":""}
        </h3>
        <p className="w-full text-center font-light test-md mt-3 text-white">
          Team Details
        </p>

        <table className="table-auto w-full border-collapse mt-2 text-sm text-center">
          <thead className="text-white bg-[#0e1853]">
            <tr>
              <th className="border border-gray-800 px-4 font-light py-2">
                Team Name
              </th>
              <th className="border border-gray-800 px-4 font-light py-2">
                Number Of Members
              </th>
              <th className="border border-gray-800 font-light px-4 py-2">
                Registered Platform
              </th>
              <th className="border border-gray-800 font-light px-4 py-2">
                Platform ID
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border border-gray-400 px-4 py-2">{teamName}</td>
              <td className="border border-gray-400 px-4 py-2">
                {noOfMembers}
              </td>
              <td className="border border-gray-400 px-4 py-2">{platform}</td>
              <td className="border border-gray-400 px-4 py-2">{platformID}</td>
            </tr>
          </tbody>
        </table>
        <p className="w-full text-center test-md mt-3 text-white font-light">
          Team Member Details
        </p>
        <table className="table-auto w-full border-collapse mt-2 text-sm">
          <thead className="text-white bg-[#0e1853] ">
            <tr>
              <th className="border border-black px-4 font-light py-2">Name</th>
              <th className="border border-black px-4 font-light py-2">
                Contact
              </th>
              <th className="border border-black px-4 font-light py-2">
                IDC ID
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {Array.isArray(teamMembers)
              ? teamMembers.map((member, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">
                      <p>{member.studentFullName}</p>
                      <p className="text-xs text-gray-500">
                        {member.isLeader === "1" ? "Team Lead" : "Member"}
                      </p>
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <p>{member.studentEmail}</p>
                      <p className="text-xs text-gray-500">
                        {member.studentPhone}
                      </p>
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <p>{member.idcId}</p>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamDetails;
