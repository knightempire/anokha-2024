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
import {
  payU_Key,
  payU_Action
} from "../../_util/constants";
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
  const [memberRoles, setMemberRoles] = useState(["Team Leader"]);
  const handleEmails = (index, email) => {
    setEmails((prevEmails) => {
      const updatedEmails = [...prevEmails];
      updatedEmails[index] = email;
      return updatedEmails;
    });
    console.log(Emails);
  };
  const handleRoles = (index, role) => {
    setMemberRoles((prevRoles) => {
      const updatedRoles = [...prevRoles];
      updatedRoles[index] = role;
      return updatedRoles;
    });
    console.log(memberRoles);
  };

  const HandleTeamRegister = async (e) => {
    e.preventDefault();
    let isValidEmails = true;
    for (let i of Emails) {
      console.log(i);
      if (!validator.isEmail(i)) {
        isValidEmails = false;
        break;
      }
    }
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
            eventId: eventId,
            totalMembers: TeamSize,
            isMarketPlacePaymentMode: "0",
            teamName: TeamName,
            teamMembers: Emails,
            memberRoles: memberRoles,
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

  const hanndleRemoveMem = () => {
    if (TeamSize > minTeamSize) {
      setTeamSize((prevTeamSize) => prevTeamSize - 1);
      setTeam((prevTeam) => {
        const newTeam = prevTeam.slice(0, prevTeam.length - 1);
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
          
        </div>
      </div>
    </main>
  );
};

export default TeamRegister;
