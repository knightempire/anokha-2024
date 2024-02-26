"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/app/events/components/EventCard";
import Link from "next/link";
import Navbar from "../components/EventHeader";
import Footer from "../components/Footer";
import FilterSection from "./components/FilterSection";
import WebGLApp from "../bg/WebGLApp";
import { ALL_EVENTS_URL } from "../_util/constants";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";

const Events = () => {
  const [groupFilter, setgroupFilter] = useState(null);
  const [TypeFilter, setTypeFilter] = useState(null);
  const [DayFilter, setDayFilter] = useState(null);
  const [TechFilter, setTechFilter] = useState(null);
  const [TagsFilter, setTagsFilter] = useState(null);
  const [RegisteredFilter, setRegisteredFilter] = useState(null);

  const [eventsData, setEventsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [secretToken, setSecretToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [isAmritaCBE, setIsAmritaCBE] = useState(0);
  const [hasActivePassport, setHasActivePassport] = useState(0);

  const tagsFunction = (eventData) => {
    for (let i of eventData.tags) {
      if (TagsFilter.includes(i.tagAbbreviation)) {
        return true;
      }
      console.log(i);
    }
    return false;
  };

  const router = useRouter();
  useEffect(() => {
    setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
    setIsAmritaCBE(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
    setHasActivePassport(
      parseInt(secureLocalStorage.getItem("hasActivePassport"))
    );
    setSecretToken(secureLocalStorage.getItem("registerToken"));
  }, [router]);

  useEffect(() => {
    console.log("DAY: ", DayFilter);
    if (eventsData) {
      setFilteredData(
        eventsData.filter(
          (eventData) =>
            (groupFilter == -1 ||
              eventData.isGroup == groupFilter?.toString()) &&
            (TechFilter == -1 ||
              eventData.isTechnical == TechFilter?.toString()) &&
            (TypeFilter == -1 ||
              eventData.isWorkshop == TypeFilter?.toString()) &&
            (DayFilter == [] ||
              DayFilter == -1 ||
              DayFilter?.length == 0 ||
              DayFilter?.includes(eventData.eventDate.slice(0, 10))) &&
            (TagsFilter == [] ||
              TagsFilter?.length == 0 ||
              tagsFunction(eventData)) &&
            (RegisteredFilter == -1 ||
              eventData.isRegistered == RegisteredFilter?.toString())
        )
      );
    }
  }, [groupFilter, TypeFilter, DayFilter, TechFilter, RegisteredFilter, TagsFilter]);

  const hanldeCurrentFilters = (filters) => {
    let grpCode = -1;
    let techCode = 0;
    let evetypeCode = 0;
    let registerCode = -1;
    let Days = [];
    let Tags = [];
    for (let i of filters) {
      console.log(i);
      switch (i) {
        case "Group":
          grpCode = 1;
          break;
        case "Individual":
          grpCode = 0;
          break;
        case "Registered":
          registerCode = 1;
          break;
        case "Not Registered":
          registerCode = 0;
          break;
        case "Tech Workshop":
          techCode += 1;
          evetypeCode += 1;
          break;
        case "Non-Tech Workshop":
          techCode -= 1;
          evetypeCode += 1;
          break;
        case "Tech Event":
          techCode += 1;
          evetypeCode -= 1;
          break;
        case "Non-Tech Event":
          techCode -= 1;
          evetypeCode -= 1;
          break;
        case "01":
          Days.push("2021-02-26");
          break;
        case "02":
          Days.push("2021-03-02");
          break;
        case "03":
          Days.push("2021-02-28");
          break;
        default:
          Tags.push(i);
      }
    }
    setgroupFilter(grpCode);
    if (techCode == -1) setTechFilter(0);
    else if (techCode == 0) setTechFilter(-1);
    else setTechFilter(1);
    if (evetypeCode == -1) setTypeFilter(0);
    else if (evetypeCode == 0) setTypeFilter(-1);
    else setTypeFilter(1);
    setRegisteredFilter(registerCode);
    console.log("Day", Days);
    if (Days == []) setDayFilter(-1);
    else setDayFilter(Days);
    setTagsFilter(Tags);
  };

  useEffect(() => {
    fetch(ALL_EVENTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + secureLocalStorage.getItem("registerToken"),
      },
    })
      .then((res) => {
        if (res.status === 401) {
          console.log('hi');
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
        console.log("Recived Data:", data);
        setEventsData(data.EVENTS);
        setFilteredData(data.EVENTS);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // This empty bracket here is important

  console.log("Events Data:", eventsData);
  console.log("Filter Data:", filteredData);

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#192032]">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="block">
        <Navbar />
        <div className="flex flex-col gap-5 min-h-screen justify-center items-center mx-10 pt-10 mt-10">
          <div className="my-3 z-10 w-full min-h-[100px] flex justify-center">
            <FilterSection sendcurrentFilters={hanldeCurrentFilters} />
          </div>
          <div className="grid mb-10 z-10 grid-flow-row gap-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {eventsData && eventsData.length > 0 ? (
              filteredData.map((event) => {
                return (
                  <div key={event.eventId}>
                    {/* <Link href={`/events/${event.eventId}`}> */}
                    <EventCard
                      imgSrc={event.eventImageURL}
                      id={event.eventId}
                      eventName={event.eventName}
                      eventBlurb={event.eventDescription}
                      eventDesc={event.eventDescription}
                      date={event.eventDate}
                      time={event.eventTime}
                      goi={event.isGroup}
                      tags={event.tags}
                      price={event.eventPrice}
                      isAllowed={event.eventStatus === "1"}
                      isRegistered={
                        secureLocalStorage.getItem("isLoggedIn")
                          ? event.isRegistered
                          : -1
                      }
                      maxseats={event.maxSeats}
                      seats={event.seatsFilled}
                      router={router}
                    />
                    {/* </Link> */}
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Events;
