import React from "react";
import secureLocalStorage from "react-secure-storage";

 
//     const hash = "isajithrajan@gmail.com"
    
//   <img height={200} src={`https://www.gravatar.com/avatar/${hash}.jpg?s=200&d=robohash`} alt="Profile" width={200} className="rounded-lg"/> 
 
const TeamDetails = ({
  teamStatus,
  teamName,
  noOfMembers,
  platform,
  platformID,
  teamMembers,
}) => {
  const details= JSON.parse(JSON.jsonify(secureLocalStorage.getItem("DashBoardData")));

  teamName = details.teamName;
  noOfMembers = details.totalMembers;
  platform = "DevPost";
  platformID = details.platformId;
  teamMembers = details.teamMembers;

  return (
    <div className="w-full bg-[#172786] text-white w-full rounded-xl text-lg">
      <div className="flex flex-col space-y-4 p-7 text-black rounded my-1 bg-opacity-80 space-between">
        <h1 className="text-white font-light text-[2rem]">
          Welcome {teamName}!
        </h1>
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
            {teamMembers.map((member, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  <p>{member.studentFullName}</p>
                  <p className="text-xs text-gray-500">
                    {member.isLeader === "1" ? "Team Lead" : "Member"}
                  </p>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <p>{member.studentEmail}</p>
                  <p className="text-xs text-gray-500">{member.studentPhone}</p>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <p>{member.idcId}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamDetails;
 
