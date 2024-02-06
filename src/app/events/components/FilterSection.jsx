import React, { useState } from "react";
import FilterComponent from "./FilterComponent";

export default function FilterSection() {
  return (
    <div className="flex flex-row gap-5 justify-evenly w-[80%]">
      {/* All of the following should be Dropdown-Checkbox Components*/}
      {/* Select Day: "01" | "02" | "03"; */}
      <FilterComponent name={"Day"} options={["01", "02", "03"]} />

      {/* Select Department: <Bunch of department options> */}
      <FilterComponent
        name={"department"}
        options={["CSE", "ARE", "CYS", "AI", "MEC", "EEE", "ECE", "MAT"]}
      />

      {/* Select Participants: "Group" | "Individual" */}
      <FilterComponent
        name={"Participation"}
        options={["Group", "Individual"]}
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
      />

      {/* Select Tags: <Bunch of tag options> */}

      {/* Select Status: "Registered" | "Not Registered" */}
      <FilterComponent
        name={"Status"}
        options={["Registered", "Not Registered"]}
      />
    </div>
  );
}

// Functionality is to be added post UI design and responsiveness checks
