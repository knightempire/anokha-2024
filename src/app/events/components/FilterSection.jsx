import React, { useEffect, useState } from "react";
import FilterComponent from "./filterMultiSelect";
import FilterComponent2 from "./filterSelectButton";

export default function FilterSection({ sendcurrentFilters }) {
  const [filters, setFilters] = useState([]);
  const [regFilterList, setregFilterList] = useState([]);
  const [tagslist, settagslist] = useState([]);
  const [eventTypeList, seteventTypeList] = useState([]);
  const [participationList, setparticipationList] = useState([]);
  const [dayFilterList, setdayFilterList] = useState([]);

  useState(() => {
    setdayFilterList([]);
    seteventTypeList([]);
    setparticipationList([]);
    setregFilterList([]);
    setregFilterList([]);
    settagslist([]);
  });

  useEffect(() => {
    sendcurrentFilters(filters);
  }, [filters]);

  useEffect(() => {
    let newFilters = [].concat(
      tagslist,
      regFilterList,
      eventTypeList,
      participationList,
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
  ]);

  const handleItemFromFilters = (filter, type) => {
    if (type == "day") setdayFilterList(filter);
    else if (type == "tag") settagslist(filter);
    else if (type == "event") seteventTypeList(filter);
    else if (type == "team") setparticipationList(filter);
    else if (type == "reg") setregFilterList(filter);
  };
  return (
    <div className="p-5 ">
      <div className="flex flex-row gap-5 justify-evenly flex-wrap">
        {/* All of the following should be Dropdown-Checkbox Components*/}
        {/* Select Day: "01" | "02" | "03"; */}
        <FilterComponent
          needSearch={0}
          name={"Day"}
          options={["01", "02", "03"]}
          type={"day"}
          sendSelectedOption={handleItemFromFilters}
        />
        {/* Select Tags: <Bunch of tag options> */}
        <FilterComponent
          needSearch={1}
          name={"Tags"}
          options={["IOT", "COD","CS", "CYS", "AI", "MEC", "EEE", "ECE", "MAT"]} //Add all possible tags here
          type={"tag"}
          sendSelectedOption={handleItemFromFilters}
        />
        {/* Select Type: "Tech Workshop"| "Non-Tech Workshop" | "Tech Event" | "Non-Tech Event" | "Tech Contest" | "Non-Tech Contest" */}
        <FilterComponent
          needSearch={0}
          name={"Event Type"}
          options={[
            "Tech Workshop",
            "Non-Tech Workshop",
            "Tech Event",
            "Non-Tech Event",
          ]}
          type={"event"}
          sendSelectedOption={handleItemFromFilters}
        />

        {/* Select Participants: "Group" | "Individual" */}
        <FilterComponent2
          options={["Group", "Individual"]}
          type={"team"}
          sendSelectedOption={handleItemFromFilters}
        />

        {/* Select Status: "Registered" | "Not Registered" */}
        <FilterComponent2
          options={["Registered", "Not Registered"]}
          type={"reg"}
          sendSelectedOption={handleItemFromFilters}
        />
      </div>
    </div>
  );
}

// Functionality is to be added post UI design and responsiveness checks
