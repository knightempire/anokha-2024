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
  const [curr_options, setCurrOptions] = useState(null);
  const opt = [{ name: "hi", val: "hi", name: "hello", val: "hello" }];
  useEffect(() => {
    if (!curr_options || curr_options == null || curr_options == "") {
      if (type == "day")
        sendSelectedOption(
          JSON.parse(sessionStorage.getItem("dayFilterList")),
          type
        );
      else if (type == "tag")
        sendSelectedOption(
          JSON.parse(sessionStorage.getItem("tagslist")),
          type
        );
      else if (type == "eventType")
        sendSelectedOption(
          JSON.parse(sessionStorage.getItem("eventTypeList")),
          type
        );
      else if (type == "technical")
        sendSelectedOption(
          JSON.parse(sessionStorage.getItem("techFilterList")),
          type
        );
      else if (type == "team")
        sendSelectedOption(
          JSON.parse(sessionStorage.getItem("participationList")),
          type
        );
      else if (type == "reg")
        sendSelectedOption(
          JSON.parse(sessionStorage.getItem("regFilterList")),
          type
        );
    } else {
      sendSelectedOption(curr_options, type);
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
        onChange={(e) => setCurrOptions(e.value)}
        display="chip"
        className="w-[14rem]"
      />
    </div>
  );
}
