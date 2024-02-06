"use client";
import React, { useState, useEffect } from "react";
import WebGLApp from "@/app/bg/WebGLApp";
import Navbar from "../../components/EventHeader";

const TeamRegister = ({ minTeamSize, maxTeamSize }) => {
  minTeamSize = 2;
  maxTeamSize = 4;

  const [TeamSize, setTeamSize] = useState(1);
  const [Team, setTeam] = useState(() => {
    const t = Array.from(
      { length: parseInt(minTeamSize, 10) },
      (_, index) => index
    );
    console.log(t);
    return t;
  });
  let Emails = [];

  const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  let isValidEmails;
  const HandleTeamRegister = async (e) => {
    e.preventDefault();
    let isValidEmails = true;
    for (let i of Emails) {
      const isValidEmail = i.length > 0 && emailRegex.test(i);
      if (!isValidEmail) isValidEmails = false;
    }
    if (isValidEmails == false) {
      alert("Error Invalid email");
      return;
    }
  };

  const handleEmails = (index, email) => {
    Emails[index] = email;
  };

  useEffect(() => {
    console.log("SIZE:", TeamSize);
    console.log("TEAM:", Team);
  }, [TeamSize]);

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <webGLApp colors={webGLColors} />
      <div className="block space-y-24 md:space-y-10">
        <Navbar />
        <div className="relative">
          <div className="flex flex-col py-10 px-[200px] items-center justify-center mx-auto min-h-screen w-[80%]">
            <div className="w-full rounded-md bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2 lg:w-3/4 xl:p-0 bg-white">
              <div className="mx-10 mb-10 px-1 lg:px-10">
                <div className="py-2 my-4 text-center text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Register Team
                </div>
                <form>
                  <div className="w-full text-center items-center pb-3">
                    {minTeamSize != maxTeamSize ? (
                      <div>
                        <label className="pr-2">select team size</label>
                        <input
                          type="number"
                          min={minTeamSize}
                          max={maxTeamSize}
                          className="text-black w-10 pl-2"
                          onChange={(e) => {
                            setTeamSize(e.target.value);
                            let t;
                            t = Array.from(
                              { length: parseInt(e.target.value, 10) },
                              (_, index) => index
                            );
                            setTeam(t);
                          }}
                        />
                        <hr></hr>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col gap-4 min-h-[250px]">
                    <div className="my-4">
                      <label
                        htmlFor="team_name"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Team name
                      </label>
                      <input
                        type="text"
                        name="team_name"
                        id="team_name"
                        className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                        placeholder="Team Name"
                        required
                      />
                    </div>
                    {Team.map((member) => (
                      <div key={member}>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Member {member + 1} Email
                        </label>
                        <input
                          type="text"
                          onChange={(e) => {
                            handleEmails(member, e.target.value);
                            console.log(Emails);
                          }}
                          name="email"
                          id="email"
                          className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                          placeholder="Email"
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="submit"
                    onClick={HandleTeamRegister}
                    className="w-full text-black bg-[#f69c18] mt-6 hover:bg-[#f69c18] focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamRegister;
