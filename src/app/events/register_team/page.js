"use client";
import React, { useState, useEffect } from "react";
import WebGLApp from "@/app/bg/WebGLApp";
import Navbar from "../../components/EventHeader";

const TeamRegister = ({ minTeamSize, maxTeamSize }) => {
  const [TeamSize, setTeamSize] = useState(1);
  const [Team, setTeam] = useState([1, 2, 3, 4]);
  const [Emails, addEmails] = useState([]);
  minTeamSize = 1;
  maxTeamSize = 3;

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
              <div className="mx-10 px-10 mb-10">
                <div className="py-2 my-4 text-center text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Register Team
                </div>
                <form>
                  <div className="w-full text-center items-center">
                    {minTeamSize != maxTeamSize ? (
                      <div>
                        <label className="pr-2">select team size</label>
                        <input
                          type="number"
                          min={minTeamSize}
                          max={maxTeamSize}
                          className="text-black w-10 pl-2"
                          onChange={(e) => {
                            if (e.target.value > TeamSize) {
                              setTeamSize(e.target.value);
                              let t;
                              if (TeamSize == 1) {
                                t = ["1"];
                              } else {
                                t = [...Team, TeamSize];
                              }
                              console.log("new:", t);
                              setTeam(t);
                            } else {
                              setTeamSize(e.target.value);
                              const t = Team.slice(0, -1);
                              console.log("new:", t);
                              setTeam(t);
                            }
                          }}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {Team.map((member) => (
                      <div key={member}>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Member {member} Email
                        </label>
                        <input
                          type="text"
                          onChange={(e) => {
                            let emails = [...Emails, e.target.value];
                            setEmail(emails);
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
