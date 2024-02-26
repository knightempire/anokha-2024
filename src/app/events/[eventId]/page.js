"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToastAlert from "../../_util/ToastAlerts";
import { Toast } from "primereact/toast";

import secureLocalStorage from "react-secure-storage";
import WebGLApp from "@/app/bg/WebGLApp";
import { EVENT_DATA_URL } from "@/app/_util/constants";
import { EVENT_REGISTER_STEP_ONE } from "../../_util/constants";
import { payU_Key, payU_Action } from "../../_util/constants";
import Markdown from "markdown-to-jsx";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

import validator from "validator";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useParams } from "next/navigation";
import customScrollBarStyle from "../components/eventScrollbar.css";

const Event = () => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const [popupvisible, setpopupvisibility] = useState(false);
  const [TeamName, setTeamName] = useState("");
  const [TeamSize, setTeamSize] = useState("");
  const [Emails, setEmails] = useState([
    secureLocalStorage.getItem("registerEmail"),
  ]);
  const [memberRoles, setMemberRoles] = useState(["Team Leader"]);
  const [Team, setTeam] = useState([]);

  const { eventId } = useParams();
  console.log("Event ID:", eventId);

  const Poster = useRef(null);
  const Register = useRef(null);
  const Title = useRef(null);
  const MainInfo = useRef(null);
  const Tags = useRef(null);
  const Price = useRef(null);
  const Desc = useRef(null);
  const toastRef = useRef();

  const setTeamIfEqual = (size) => {
    setTeam([]);
    for (let i = 0; i < size; i++) {
      setTeam((Team) => [...Team, i]);
    }
  };

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  useEffect(() => {
    if (eventId) {
      fetch(`${EVENT_DATA_URL}/${eventId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Error: ${res.statusText}`);
          }
        })
        .then((data) => {
          setEventData(data);
          setTeamSize(data.minTeamSize);
          setTeamIfEqual(data.minTeamSize);
          // Trigger GSAP animations once data is fetched and rendered
          let tl = gsap.timeline();
          tl.from(Poster.current, { opacity: 0, duration: 0.3 });
          tl.from(Register.current, { opacity: 0, y: 20, duration: 0.3 });
          tl.from(Title.current, { opacity: 0, y: -30, duration: 0.3 });
          tl.from(
            MainInfo.current,
            {
              opacity: 0,
              stagger: 0.1,
              duration: 0.3,
            },
            "start"
          );
          tl.from(Price.current, { opacity: 0, duration: 0.3 }, "start");
          tl.from(Desc.current, { opacity: 0, duration: 0.3 });
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Handle the case where eventId is not present in the URL
      console.error("Event eventId not found in the URL");
      setLoading(false);
    }
  }, [eventId]);

  console.log("Event Data:", eventData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!eventData) {
    return <div>Error loading data</div>;
  }

  const checkisTeam = () => {
    if (eventData.isGroup == "1") {
    }
  };

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

  const getPayUForm = async () => {
    try {
      const response = await fetch(EVENT_REGISTER_STEP_ONE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secureLocalStorage.getItem(
            "registerToken"
          )}`,
        },
        body: JSON.stringify({
          eventId: eventData.eventId,
          totalMembers: TeamSize,
          isMarketPlacePaymentMode: "0",
          teamName: TeamName,
          teamMembers: Emails,
          memberRoles: memberRoles,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log(200);
        const payUData = {
          key: payU_Key,
          txnid: data["txnid"],
          amount: data["amount"],
          productinfo: data["productinfo"],
          firstname: data["firstname"],
          email: data["email"],
          phone: data["phone"],
          surl: data["surl"],
          furl: data["furl"],
          hash: data["hash"],
        };

        const payUForm = document.createElement("form");
        payUForm.method = "post";
        payUForm.action = payU_Action;

        for (const key in payUData) {
          if (payUData.hasOwnProperty(key)) {
            const hiddenField = document.createElement("input");
            hiddenField.type = "hidden";
            hiddenField.name = key;
            hiddenField.value = payUData[key];

            payUForm.appendChild(hiddenField);
          }
        }

        document.body.appendChild(payUForm);

        payUForm.submit();

        setMessage("Called PayU API to make payment.");
      } else if (response.status === 400) {
        console.log(data);
        ToastAlert("error", "Registration Failed", `${data.MESSAGE}`, toastRef);
      } else {
        ToastAlert("error", "Registration Failed", `${data.MESSAGE}`, toastRef);
      }
    } catch (err) {
      console.log(err);
      ToastAlert("error", "Registration Failed", `Error Occured`, toastRef);
    }
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
      await getPayUForm();
    }
  };

  const handleTeamName = (name) => {
    setTeamName(name);
  };

  const handleAddMem = () => {
    if (TeamSize < eventData.maxTeamSize) {
      setTeamSize((prevTeamSize) => prevTeamSize + 1);
      setTeam((prevTeam) => {
        const newTeam = [...prevTeam, prevTeam.length];
        return newTeam;
      });
    }
  };

  const hanndleRemoveMem = () => {
    if (TeamSize > eventData.minTeamSize) {
      setTeamSize((prevTeamSize) => prevTeamSize - 1);
      setTeam((prevTeam) => {
        const newTeam = prevTeam.slice(0, prevTeam.length - 1);
        return newTeam;
      });
    }
  };

  return (
    <main className="flex min-h-screen max-h-screen flex-col bg-[#192032] text-white items-center justify-center">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="h-[80%] w-[72%] z-10 flex flex-row justify-between">
        <div className="flex flex-col relative items-center">
          {/* Image Section */}
          <div className="flex-none relative h-full w-[160%]">
            <Image
              src={eventData.eventImageURL}
              layout="fill"
              alt="Event Image"
              objectFit="contain"
              objectPosition="center"
              ref={Poster}
            />
          </div>
          {/* Register Button */}
          <div className="flex justify-center mt-8" ref={Register}>
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => {
                eventData.minTeamSize != 1 && eventData.maxTeamSize != 1
                  ? setpopupvisibility(true)
                  : getPayUForm();
              }}
            >
              Registerations Opening Soon
            </button>
          </div>
        </div>
        {/* Main Content Section */}
        <div className="mt-5 flex flex-col overflow-y-auto h-[500px] pr-10">
          <div className="font-bold text-5xl mb-2" ref={Title}>
            {eventData.eventName}
          </div>
          {/* Tags Section */}
          <div className="pt-4">
            {eventData.tags &&
              eventData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                  ref={Tags}
                >
                  #{tag.tagName}
                </span>
              ))}
          </div>
          <div className="flex flex-row justify-between items-center ">
            {/* Additional Info */}
            <div className="flex flex-col mt-4 mr-10" ref={MainInfo}>
              <p className="text-white text-base mb-2">
                <strong>Date:</strong> {eventData.eventDate.slice(0, 10)} &bull;{" "}
                <strong>Time:</strong> {eventData.eventTime}
              </p>
              <p className="text-white text-base mb-2">
                <strong>Venue:</strong> {eventData.eventVenue}
              </p>
              <p className="text-white text-base mb-2">
                <strong>Group/Individual:</strong>{" "}
                {eventData.isGroup ? "Group" : "Individual"}
              </p>
            </div>
            {/* Price Section */}
            <div
              className="flex flex-col items-end justify-end pb-2 pr-8"
              ref={Price}
            >
              <span className="text-4xl font-bold text-white">{`₹${Math.ceil(
                eventData.eventPrice * 1.18
              )}`}</span>
              <span className="text-md">Incl. of GST</span>
            </div>
          </div>

          <hr className="my-2" tag="Others" />
          <h2 className="text-2xl" tag="Others">
            Description
          </h2>
          <br />
          {console.log("Markdown content:", eventData.eventMarkdownDescription)}
          <div className={showFullText ? "" : "line-clamp-[4]"} ref={Desc}>
            <Markdown className="prose dark:prose-invert">
              {eventData.eventMarkdownDescription}
            </Markdown>
          </div>
          {eventData.eventMarkdownDescription.length > 4 && (
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-3 text-center m-4"
              onClick={() => setShowFullText(!showFullText)}
              tag="Others"
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
      <Dialog
        visible={popupvisible}
        header="Register Team"
        onHide={() => setpopupvisibility(false)}
        draggable={false}
        className={`sm:w-[90%] md:w-[50%] bg-white ${customScrollBarStyle}`}
      >
        <div className="flex flex-col py-10 items-center justify-center mx-auto">
          <div className="w-full rounded-md mt-5 xl:p-0 bg-white">
            <div className="mx-10 mb-10 px-1 lg:px-10">
              <div>
                {eventData.maxTeamSize == eventData.minTeamSize
                  ? "Team size - " + eventData.minTeamSize
                  : "Team size " +
                    eventData.minTeamSize +
                    " - " +
                    eventData.maxTeamSize}
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
                      <span className="p-float-label mt-8">
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
                              ? secureLocalStorage.getItem("registerEmail")
                              : Emails[member] || ""
                          }
                          disabled={member === 0 ? true : false}
                          style={{ width: "100%" }}
                        />
                        <label htmlFor={`email_${member}`}>
                          Member {member + 1} Email
                        </label>
                      </span>
                      <span className="p-float-label mt-7">
                        <InputText
                          onChange={(e) => {
                            if (!(member === 0))
                              handleRoles(member, e.target.value);
                          }}
                          name={`role_${member}`}
                          id={`role_${member}`}
                          required
                          value={
                            member === 0
                              ? "Team Leader"
                              : memberRoles[member] || ""
                          }
                          disabled={member === 0 ? true : false}
                          style={{ width: "100%" }}
                        />
                        <label htmlFor={`role_${member}`}>
                          Member {member + 1} Role
                        </label>
                      </span>
                    </div>
                  ))}

                  <div className="w-full flex  sm:flex-col lg:flex-row gap-3 justify-center pb-3">
                    {eventData.minTeamSize != eventData.maxTeamSize ? (
                      <Button
                        label="Add Member"
                        onClick={handleAddMem}
                        type="button"
                        disabled={
                          TeamSize == eventData.maxTeamSize ? true : false
                        }
                      />
                    ) : (
                      ""
                    )}
                    {eventData.minTeamSize != eventData.maxTeamSize ? (
                      <Button
                        label="Remove Member"
                        onClick={hanndleRemoveMem}
                        type="button"
                        disabled={
                          TeamSize == eventData.minTeamSize ? true : false
                        }
                      />
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
      </Dialog>
      <Toast ref={toastRef} position="bottom-center" className="z-[2000]" />
    </main>
  );
};

export default Event;
