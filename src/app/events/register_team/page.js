"use client";
import React, { useState, useEffect } from "react";
import WebGLApp from "@/app/bg/WebGLApp";
import Navbar from "../../components/EventHeader";
import { useSearchParams } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import secureLocalStorage from "react-secure-storage";
import { LoadingScreen } from "@/app/_util/LoadingScreen/LoadingScreen";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { EVENT_REGISTER_STEP_ONE } from "../../_util/constants";
import validator from "validator";

const TeamRegister = () => {
  const searchParams = useSearchParams();
  const eventId = parseInt(searchParams.get("eventId"));
  const minTeamSize = parseInt(searchParams.get("minTeamSize"));
  const maxTeamSize = parseInt(searchParams.get("maxTeamSize"));

  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [registerEmail, setRegisterEmail] = useState("");
  const [secretToken, setSecretToken] = useState("");

  useEffect(() => {
    setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
    setRegisterEmail(secureLocalStorage.getItem("registerEmail"));
    setSecretToken(secureLocalStorage.getItem("registerToken"));
  }, []);

  const [isEmailsVaild, setIsEmailsValid] = useState(0);

  const [TeamName, setTeamName] = useState("");
  const [TeamSize, setTeamSize] = useState(() => {
    const initialTeamSize = minTeamSize;
    return initialTeamSize;
  });
  const [Team, setTeam] = useState(() => {
    const t = Array.from(
      { length: parseInt(minTeamSize, 10) },
      (_, index) => index
    );
    console.log(t);
    return t;
  });
  const [Emails, setEmails] = useState([
    secureLocalStorage.getItem("registerEmail"),
  ]);
  const handleEmails = (index, email) => {
    setEmails((prevEmails) => {
      const updatedEmails = [...prevEmails];
      updatedEmails[index] = email;
      return updatedEmails;
    });
    console.log(Emails);
  };

  const HandleTeamRegister = async (e) => {
    e.preventDefault();
    let isValidEmails = true;
    for (let i of Emails) {
      if (!validator.isEmail(i)) {
        isValidEmails = false;
        break;
      }
    }
    setIsEmailsValid(isValidEmails);
    if (isValidEmails) {
      try {
        const response = await fetch(EVENT_REGISTER_STEP_ONE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${secureLocalStorage.getItem(
              "registerToken"
            )}`,
          },
          body: {
            eventId: "",
            totalMembers: TeamSize,
            isMarketPlacePaymentMode: "",
            teamName: "",
            teamMembers: "",
            memberRoles: "",
          },
        });

        if (response.status === 200) {
          console.log(200);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleTeamName = (name) => {
    setTeamName(name);
  };

  useEffect(() => {
    console.log("SIZE:", TeamSize);
    console.log("TEAM:", Team);
  }, [TeamSize]);

  const handleAddMem = () => {
    if (TeamSize < maxTeamSize) {
      setTeamSize((prevTeamSize) => prevTeamSize + 1);
      setTeam((prevTeam) => {
        const newTeam = [...prevTeam, prevTeam.length];
        return newTeam;
      });
    }
  };

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  return registerEmail === null ||
    secretToken === null ||
    registerEmail.length == 0 ||
    secretToken.length == 0 ? (
    <LoadingScreen />
  ) : (
    <main className="flex min-h-screen flex-col bg-[#192032]">
      <WebGLApp colors={webGLColors} className="-z-10" />
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
                  <div className="flex flex-col gap-4 min-h-[250px]">
                    <div className="my-4">
                      <span className="p-float-label">
                        <InputText
                          onChange={(e) => {
                            handleTeamName(e.target.value);
                          }}
                          name="teamName"
                          id="teamName"
                          required
                          style={{ width: "100%" }}
                        />
                        <label htmlFor="teamName">Team Name</label>
                      </span>
                    </div>
                    {Team.map((member) => (
                      <div key={member}>
                        <span className="p-float-label mt-5">
                          <InputText
                            onChange={(e) => {
                              if (!(member === 0))
                                handleEmails(member, e.target.value);
                            }}
                            name={`email_${member}`}
                            id={`email_${member}`}
                            required
                            value={
                              member === 0
                                ? registerEmail
                                : Emails[member] || ""
                            }
                            disabled={member === 0 ? true : false}
                            style={{ width: "100%" }}
                          />
                          <label htmlFor={`email_${member}`}>
                            Member {member + 1} Email
                          </label>
                        </span>
                      </div>
                    ))}

                    <div className="w-full text-center items-center pb-3">
                      {minTeamSize != maxTeamSize ? (
                        TeamSize == maxTeamSize ? (
                          <Button label="Add Member" type="button" disabled />
                        ) : (
                          <Button
                            label="Add Member"
                            onClick={handleAddMem}
                            type="button"
                          />
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={HandleTeamRegister}
                    className={
                      "w-full text-black bg-[#f69c18] mt-6 hover:bg-[#f69c18] focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    }
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
