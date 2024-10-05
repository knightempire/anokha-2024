"use client";

import React, { useState, useEffect, useRef } from "react";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { SelectButton } from "primereact/selectbutton";

export default function FilterSelectButton({
  type,
  options,
  sendSelectedOption,
}) {
  const [currVal, setCurrVal] = useState();
  const [buttonClick, setButtonClick] = useState(0);
  function val(){
    if (type == "day")
      return JSON.parse(sessionStorage.getItem("dayFilterList"))[0];
    else if (type == "tag")
      return JSON.parse(sessionStorage.getItem("tagslist"))[0];
    else if (type == "eventType")
      return JSON.parse(sessionStorage.getItem("eventTypeList"))[0];
    else if (type == "technical")
      return JSON.parse(sessionStorage.getItem("techFilterList"))[0];
    else if (type == "team")
      return JSON.parse(sessionStorage.getItem("participationList"))[0];
    else if (type == "reg")
      return JSON.parse(sessionStorage.getItem("regFilterList"))[0];
  }
  useEffect(() => {
    if ((!currVal || currVal == null || currVal == "") && buttonClick == 0) {
      console.log("suppressing resetting session storage! #####");
      console.log(
        sessionStorage.getItem("participationList"),
        sessionStorage.getItem("techFilterList")
      );
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
      sendSelectedOption([currVal], type);
      setButtonClick(0);
    }
  }, [currVal]);
  return (
    <div>
      <SelectButton
        value={currVal}
        onChange={(e) => {
          setCurrVal(e.value);
          setButtonClick(1);
        }}
        options={options}
      />
    </div>
  );
}
