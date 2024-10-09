"use client";

import React, { useState, useEffect, useRef } from "react";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { MultiSelect } from "primereact/multiselect";

export default function FilterComponent({
  needSearch,
  type,
  name,
  options,
  sendSelectedOption,
}) {
  const [curr_options, setCurrOptions] = useState(val());
  const [buttonClick, setButtonClick] = useState(0);
  function val() {
    let value;
    if (typeof window === "undefined") return null;
    if (type == "day") value = sessionStorage.getItem("dayFilterList");
    else if (type == "tag") value = sessionStorage.getItem("tagslist");
    return value ? JSON.parse(value) : null;
  }
  useEffect(() => {
    if (
      (!curr_options || curr_options == null || curr_options == "") &&
      buttonClick == 0
    ) {
      return;
    } else {
      if (typeof window !== "undefined") {
        if (type == "day")
          sessionStorage.setItem("dayFilterList", JSON.stringify(curr_options));
        else if (type == "tag")
          sessionStorage.setItem("tagslist", JSON.stringify(curr_options));
      }
      sendSelectedOption();
      setButtonClick(0);
    }
  }, [curr_options]);

  return (
    <div className="z-13">
      <MultiSelect
        filter={needSearch}
        options={options}
        placeholder={name}
        value={curr_options}
        maxSelectedLabels={3}
        onChange={(e) => {
          setCurrOptions(e.value);
          setButtonClick(1);
        }}
        display="chip"
        className="w-[14rem]"
      />
    </div>
  );
}
