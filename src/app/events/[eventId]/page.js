"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import ToastAlert from "../../_util/ToastAlerts";
import { Toast } from "primereact/toast";

import secureLocalStorage from "react-secure-storage";
import WebGLApp from "@/app/bg/WebGLApp";
import Navigationbar from "@/app/components/EventHeader";

import { EVENT_DATA_URL, STAR_UNSTAR_EVENT_URL } from "@/app/_util/constants";
import {
  EVENT_REGISTER_STEP_ONE,
  REGISTERED_EVENT_URL,
} from "../../_util/constants";

import { payU_Key, payU_Action } from "../../_util/constants";
import Markdown from "markdown-to-jsx";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

import validator from "validator";
import gsap from "gsap";
import { useParams } from "next/navigation";

const Event = () => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const [popupvisible, setpopupvisibility] = useState(false);
  const [TeamName, setTeamName] = useState("");
  const [TeamSize, setTeamSize] = useState("");
  const [Emails, setEmails] = useState([]);
  const [memberRoles, setMemberRoles] = useState([]);
  const [Team, setTeam] = useState([]);
  const [disableRegister, setDisableRegister] = useState(false);
  const [registeredData, setRegisteredData] = useState(null);
  const [allValid, setAllValid] = useState(false);
  const { eventId } = useParams();

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

  const registeredEvent = async (currEventData) => {
    try {
      await fetch(REGISTERED_EVENT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secureLocalStorage.getItem(
            "registerToken"
          )}`,
        },
        body: JSON.stringify({
          registrationId: currEventData.registrationId,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Error: ${res.statusText}`);
          }
        })
        .then((data) => {
          console.log("Registered Data ; ", data);
          setRegisteredData(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTeamSize(registeredData?.team?.length);
    setTeam([]);
    setEmails([]);
    setMemberRoles([]);
    setTeamName(registeredData?.teamName);
    for (let i = 0; i < registeredData?.team?.length; i++) {
      setTeam((prevTeam) => [...prevTeam, i]);
      setEmails((prevEmails) => [
        ...prevEmails,
        registeredData?.team[i].studentEmail,
      ]);
      setMemberRoles((prevMemberRoles) => [
        ...prevMemberRoles,
        registeredData?.team[i].roleDescription,
      ]);
    }
    return;
  }, [registeredData]);

  useEffect(() => {
    if (eventId) {
      fetch(`${EVENT_DATA_URL}/${eventId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secureLocalStorage.getItem(
            "registerToken"
          )}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Error: ${res.statusText}`);
          }
        })
        .then(async (data) => {
          if (data.MODE === "0") {
            secureLocalStorage.clear();
          }
          setEventData(data);
          setTeamSize(data.minTeamSize);
          setTeamIfEqual(data.minTeamSize);
          if (
            secureLocalStorage.getItem("isLoggedIn") == "1"
              ? toggleStar(
                  typeof data?.isStarred == "string"
                    ? parseInt(data.isStarred)
                    : 0
                )
              : 0
          )
            data.seatsFilled == data.maxSeats
              ? setDisableRegister(true)
              : setDisableRegister(false);
          if (data.isRegistered == "1") {
            await registeredEvent(data);
          } else {
          }
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

  useEffect(() => {
    eventData?.isStarred != undefined || eventData?.isStarred != null
      ? toggleStar(eventData?.isStarred)
      : toggleStar(0);
  }, []);

  useEffect(() => {
    let isValidMemberRoles = true;
    let isValidEmails = true;
    console.log(Emails, memberRoles);
    if (Emails.length != Team.length || memberRoles.length != Team.length) {
      isValidEmails = false;
      isValidMemberRoles = false;
    } else {
      if (Emails.length == 0) {
        isValidEmails = false;
      } else {
        for (let i = 1; i < Emails.length; i++) {
          if (!validator.isEmail(Emails[i])) {
            isValidEmails = false;
            break;
          }
        }
      }
      if (memberRoles.length == 0) {
        isValidMemberRoles = false;
      } else {
        for (let i = 1; i < memberRoles.length; i++) {
          if (!/^[A-Za-z\s]+$/.test(memberRoles[i])) {
            isValidMemberRoles = false;
            break;
          }
        }
      }
    }
    console.log(isValidEmails, isValidMemberRoles);
    if (
      isValidEmails &&
      isValidMemberRoles &&
      TeamName != "" &&
      TeamName != undefined
    ) {
      setAllValid(true);
    } else setAllValid(false);
  }, [Emails, memberRoles, TeamName, Team]);

  const toggleStarBackend = () => {
    fetch(STAR_UNSTAR_EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + secureLocalStorage.getItem("registerToken"),
      },
      body: JSON.stringify({
        eventId: eventId, // eg. "eventId": 1,
        isStarred: starred == 0 ? "1" : "0", // "1" -> Star Event. "0" -> Unstar Event. eg. "isStarred": "1"
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          // buildDialog('Error', 'You are not logged in!\nPlease Login to continue.', 'Okay');
          // openModal();
          // Session Expired or not logged in. Clear Cache and Navigate to login screen.
        } else if (res.status === 500) {
          // Backend Error. Handle it.
        } else if (res.status === 200) {
          // Valid Request. Data has come
          return res.json();
        } else if (res.status === 400) {
          // Display error message from "MESSAGE" field in data
        } else {
          // Unknown Error.
        }
      })
      .then((data) => {
        // Set Data variables.
      })
      .catch((err) => {
        // Error in Frontend Code. Handle it.
      });
  };

  const [starred, toggleStar] = useState(0);

  const handleStarToggle = (e) => {
    e.preventDefault();
    toggleStar(starred == 0 ? 1 : 0);
    secureLocalStorage.getItem("isLoggedIn") == "1"
      ? toggleStarBackend()
      : toggleStar(starred == 0 ? 1 : 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!eventData) {
    return <div>Error loading data</div>;
  }

  const handleEmails = (index, email) => {
    setEmails((prevEmails) => {
      const updatedEmails = [...prevEmails];
      updatedEmails[index] = email;
      return updatedEmails;
    });
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
          teamMembers: Emails.slice(1),
          memberRoles: memberRoles.slice(1),
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

        // setMessage("Called PayU API to make payment.");
      } else if (response.status === 400) {
        console.log(data);
        ToastAlert("error", "Registration Failed", `${data.MESSAGE}`, toastRef);
      } else if (response.status === 401) {
        window.location.href = "/login";
      } else {
        ToastAlert("error", "Registration Failed", `${data.MESSAGE}`, toastRef);
      }
    } catch (err) {
      console.log(err);
      // ToastAlert("error", "Registration Failed", `Error Occured`, toastRef);
    }
  };

  const HandleTeamRegister = async (e) => {
    e.preventDefault();
    console.log(Team, Emails, memberRoles);
    if (allValid) {
      confirm(
        "Are you ready to make the payment? (You'll be redirected to the payment gateway to complete the registration.)"
      ) && (await getPayUForm());
    }
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

  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    const time12 = `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;

    return time12;
  }

  return (
    <main className="flex min-h-screen max-h-screen flex-col bg-[#192032] text-white items-center justify-center">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <Navigationbar />
      <div className="sm:h-[90%] sm:w-[90%] lg:h-[80%] lg:w-[72%] z-10 flex sm:flex-col lg:flex-row lg:justify-between md:gap-24 lg:gap-32 sm:mt-[34rem] md:mt-[24rem] lg:mt-0">
        <div className="flex flex-col relative items-center">
          {/* Image Section */}
          <div className="flex-none relative sm:h-[32rem] sm:w-full lg:h-full lg:w-[150%] rounded-xl">
            <Image
              src={eventData.eventImageURL}
              layout="fill"
              alt="Event Image"
              objectFit="contain"
              objectPosition="center"
              ref={Poster}
              className="rounded-xl"
            />
          </div>
          {/* Register Button */}
          <div
            className="flex flex-col justify-center sm:mt-4 lg:mt-8"
            ref={Register}
          >
            <div className="flex flex-row gap-3 justify-center">
              <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-4 text-center me-2 mb-2  disabled:cursor-not-allowed"
                onClick={() => {
                  secureLocalStorage.getItem("isLoggedIn") == "0" ||
                  secureLocalStorage.getItem("isLoggedIn") == undefined ||
                  secureLocalStorage.getItem("isLoggedIn") == null
                    ? (window.location.href = "/login")
                    : eventData.isGroup == "1"
                    ? setpopupvisibility(true)
                    : eventData.isRegistered != undefined &&
                      eventData.isRegistered == "0"
                    ? confirm(
                        "Are you ready to make the payment? (You'll be redirected to the payment gateway to complete the registration.)"
                      ) && getPayUForm()
                    : setpopupvisibility(true);
                }}
                disabled={false}
              >
                {secureLocalStorage.getItem("isLoggedIn") == "0" ||
                secureLocalStorage.getItem("isLoggedIn") == undefined ||
                secureLocalStorage.getItem("isLoggedIn") == null
                  ? "Login to Register"
                  : eventData.isRegistered == "0"
                  ? "Register"
                  : "View Registration"}
              </button>
              <div className="flex justify-center items-center ml-4">
                <button
                  onClick={handleStarToggle}
                  id="heartButton2"
                  class="transition ease-in duration-300 bg-gray-800 hover:text-red-500 bg-red shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
                >
                  <svg
                    id="heartSVG2"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke={starred == 0 ? "currentColor" : "rgb(239, 68, 68)"}
                  >
                    <path
                      id="heartPath2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      fill={starred == 0 ? "none" : "rgb(239, 68, 68)"}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Section */}
        <div className="mt-4 flex flex-col overflow-y-auto h-[500px] sm:pr-4 lg:pr-10">
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
                <strong>Date:</strong>{" "}
                {new Date(eventData.eventDate).toDateString()} &bull;{" "}
                <strong>Time:</strong> {eventData.eventTime} IST
                {/* <strong>Date:</strong> Coming Soon{" "} */}
              </p>
              <p className="text-white text-base mb-2">
                {/* <strong>Venue:</strong> {eventData.eventVenue} */}
                <strong>Venue: </strong>{" "}
                {eventData.eventVenue ?? "To be announced"}
              </p>
              <p className="text-white text-base mb-2">
                <strong>Group/Individual:</strong>{" "}
                {eventData.isGroup == "1" ? "Group" : "Individual"}
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
        header={
          eventData.isRegistered == "0"
            ? "Register Team"
            : "Registration Details"
        }
        onHide={() => setpopupvisibility(false)}
        draggable={false}
        className={`sm:w-[90%] md:w-[50%] bg-white`}
      >
        <div className="flex flex-col py-2 items-center justify-center mx-auto">
          <div className="w-full rounded-md mt-5 xl:p-0 bg-white">
            <div className="mx-5 mb-10 px-1 lg:px-5">
              {eventData.isRegistered == "1" ? (
                <div className="w-full">
                  <div className="flex flex-row w-full justify-center mb-3">
                    <div className="">
                      <div className="border-2 border-r-0 px-2 bg-black text-white text-center">
                        Transaction ID
                      </div>
                      <div className="border-2 border-t-0 border-r-0 px-2">
                        {registeredData.txnId}
                      </div>
                    </div>
                    <div>
                      <div className="border-2 border-r-0 px-2 bg-black text-white text-center">
                        Time
                      </div>
                      <div className="border-2 border-t-0 border-r-0 px-2">
                        {registeredData.transactionTime.slice(0, 10)}{" "}
                        {convertTo12HourFormat(
                          registeredData.transactionTime.slice(11, 16)
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="border-2 px-2 bg-black text-white text-center">
                        Amount
                      </div>
                      <div className="border-2 border-t-0 px-2">
                        &#8377; {registeredData.transactionAmount}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {eventData.minTeamSize == 1 && eventData.maxTeamSize == 1 ? (
                ""
              ) : (
                <div>
                  <div
                    className="bg-red-200 p-3 rounded-lg text-center md:w-[75%] mx-auto md:text-sm text-xs"
                    hidden={eventData.minTeamSize <= 1}
                  >
                    <b>Note:</b>
                    <i>
                      {" "}
                      All members of the team should be registered for Anokha
                      2024 and have an Anokha 2024 account.
                    </i>
                  </div>
                  <div className="font-bold flex justify-end mt-5">
                    {eventData.isRegistered == "0"
                      ? eventData.maxTeamSize == eventData.minTeamSize
                        ? "Team size - " + eventData.minTeamSize
                        : "Team size " +
                          eventData.minTeamSize +
                          " - " +
                          eventData.maxTeamSize
                      : "Team size: " + TeamSize}
                  </div>
                  <form>
                    <div className="flex flex-col gap-4 min-h-[250px]">
                      <div className="my-4">
                        <span className="p-float-label">
                          <InputText
                            onChange={(e) => {
                              setTeamName(e.target.value);
                            }}
                            value={TeamName}
                            name="teamName"
                            id="teamName"
                            required
                            disabled={eventData.isRegistered == "1"}
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
                                // checking if its the first member and if not registered, so that you can auto fill details, else render the original details.
                                member === 0 && eventData.isRegistered == "0"
                                  ? secureLocalStorage.getItem("registerEmail")
                                  : Emails[member] || ""
                              }
                              disabled={
                                member === 0 || eventData.isRegistered == "1"
                                  ? true
                                  : false
                              }
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
                                // checking if its the first member and if not registered, so that you can auto fill details, else render the original details.
                                member === 0 && eventData.isRegistered == "0"
                                  ? "Team Leader"
                                  : memberRoles[member] || ""
                              }
                              disabled={
                                member === 0 || eventData.isRegistered == "1"
                                  ? true
                                  : false
                              }
                              style={{ width: "100%" }}
                            />
                            <label htmlFor={`role_${member}`}>
                              Member {member + 1} Role
                            </label>
                          </span>
                        </div>
                      ))}
                      <div className="w-full flex  sm:flex-col lg:flex-row gap-3 justify-center pb-3">
                        {eventData.minTeamSize != eventData.maxTeamSize &&
                        eventData.isRegistered == "0" ? (
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
                        {eventData.minTeamSize != eventData.maxTeamSize &&
                        eventData.isRegistered == "0" ? (
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
                    {eventData.isRegistered == "0" ? (
                      <button
                        type="submit"
                        onClick={HandleTeamRegister}
                        className={
                          "w-full text-black bg-[#f69c18] mt-6 hover:bg-[#f69c18] focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-gray-400"
                        }
                        disabled={!allValid}
                      >
                        Register
                      </button>
                    ) : (
                      ""
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </Dialog>
      <Toast ref={toastRef} position="bottom-center" className="z-[2000]" />
    </main>
  );
};

export default Event;
