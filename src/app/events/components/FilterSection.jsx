import React, { useEffect, useState } from "react";
import FilterComponent from "./filterMultiSelect";
import FilterComponent2 from "./filterSelectButton";
import secureLocalStorage from "react-secure-storage";
import { ALL_TAGS_URL } from "@/app/_util/constants";

export default function FilterSection({ sendcurrentFilters }) {
  const [filters, setFilters] = useState([]);
  const [regFilterList, setregFilterList] = useState([]);
  const [tagslist, settagslist] = useState([]);
  const [eventTypeList, seteventTypeList] = useState([]);
  const [participationList, setparticipationList] = useState([]);
  const [dayFilterList, setdayFilterList] = useState([]);
  const [techFilterList, setTechFilterList] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    fetch(ALL_TAGS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
        console.log("Recived Data:", data);
        setTagList([]);
        for (let i of data.tags) {
          setTagList((tagList) => [...tagList, i.tagName]);
        }
        // Set Data variables.
      })
      .catch((err) => {
        // Error in Frontend Code. Handle it.
      });
  }, []); // This empty bracket here is important

  useEffect(() => {
    sendcurrentFilters(filters);
  }, [filters]);

  useEffect(() => {
    let newFilters = [].concat(
      tagslist,
      regFilterList,
      eventTypeList,
      participationList,
      techFilterList,
      dayFilterList
    );
    newFilters = newFilters.filter((elem) => elem != null && elem != undefined);
    setFilters(newFilters);
  }, [
    regFilterList,
    tagslist,
    eventTypeList,
    participationList,
    dayFilterList,
    techFilterList
  ]);

  const handleItemFromFilters = (filter, type) => {
    if (type == "day") setdayFilterList(filter);
    else if (type == "tag") settagslist(filter);
    else if (type == "eventType") seteventTypeList(filter);
    else if (type == "technical") setTechFilterList(filter);
    else if (type == "team") setparticipationList(filter);
    else if (type == "reg") setregFilterList(filter);
  };
  return (
    <div className="p-5">
      <div className="flex flex-row justify-center items-center space-x-2 flex-wrap space-y-2">
        {/* All of the following should be Dropdown-Checkbox Components*/}
        {/* Select Day: "01" | "02" | "03"; */}
        <div className="mt-[8px] ml-[8px]">
          <FilterComponent
            needSearch={0}
            name={"Day"}
            options={["01", "02", "03"]}
            type={"day"}
            sendSelectedOption={handleItemFromFilters}
          />
        </div>
        {/* Select Tags: <Bunch of tag options> */}
        <FilterComponent
          needSearch={1}
          name={"Tags"}
          options={tagList} //Add all possible tags here
          type={"tag"}
          sendSelectedOption={handleItemFromFilters}
        />
        {/* Select Type: "Tech Workshop"| "Non-Tech Workshop" | "Tech Event" | "Non-Tech Event" | "Tech Contest" | "Non-Tech Contest" */}
        <FilterComponent2
          options={["Workshop", "Event"]}
          type={"eventType"}
          sendSelectedOption={handleItemFromFilters}
        />

        <FilterComponent2
          options={["Technical", "Non Technical"]}
          type={"technical"}
          sendSelectedOption={handleItemFromFilters}
        />

        {/* Select Participants: "Group" | "Individual" */}
        <FilterComponent2
          options={["Group", "Individual"]}
          type={"team"}
          sendSelectedOption={handleItemFromFilters}
        />

        {/* Select Status: "Registered" | "Not Registered" */}
        {secureLocalStorage.getItem("isLoggedIn") ? (
          <FilterComponent2
            options={["Registered", "Not Registered"]}
            type={"reg"}
            sendSelectedOption={handleItemFromFilters}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

// Functionality is to be added post UI design and responsiveness checks
