import React, { useState } from "react";
import FilterComponent from "./FilterComponent";

export default function FilterSection() {
  const [filters, setFilters] = useState([]);
  const handleItemFromFilters = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
      console.log(filters);
    }
  };
  return (
    <div className="border-2 p-5 rounded-xl">
      {filters.length > 0 && (
        <div className="flex flex-row gap-3 mb-3 min-h-[30px] w-full">
          {filters.map((filter, index) => (
            <div key={index} className="bg-white flex flex-row px-1">
              <div className="mr-2">{filter}</div>
              <div>X</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-row gap-5 justify-evenly">
        {/* All of the following should be Dropdown-Checkbox Components*/}
        {/* Select Day: "01" | "02" | "03"; */}
        <FilterComponent
          name={"Day"}
          options={["01", "02", "03"]}
          sendSelectedOption={handleItemFromFilters}
        />
        {/* Select Department: <Bunch of department options> */}
        <FilterComponent
          name={"department"}
          options={["CSE", "ARE", "CYS", "AI", "MEC", "EEE", "ECE", "MAT"]}
          sendSelectedOption={handleItemFromFilters}
        />
        {/* Select Participants: "Group" | "Individual" */}
        <FilterComponent
          name={"Participation"}
          options={["Group", "Individual"]}
          sendSelectedOption={handleItemFromFilters}
        />
        {/* Select Type: "Tech Workshop"| "Non-Tech Workshop" | "Tech Event" | "Non-Tech Event" | "Tech Contest" | "Non-Tech Contest" */}
        <FilterComponent
          name={"Event Type"}
          options={[
            "Tech Workshop",
            "Non-Tech Workshop",
            "Tech Event",
            "Non-Tech Event",
            "Tech Contest",
            "Non-Tech Contest",
          ]}
          sendSelectedOption={handleItemFromFilters}
        />
        {/* Select Tags: <Bunch of tag options> */}
        {/* Select Status: "Registered" | "Not Registered" */}
        <FilterComponent
          name={"Status"}
          options={["Registered", "Not Registered"]}
          sendSelectedOption={handleItemFromFilters}
        />
      </div>
    </div>
  );
}

// Functionality is to be added post UI design and responsiveness checks
