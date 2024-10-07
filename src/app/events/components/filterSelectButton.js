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
  const [currVal, setCurrVal] = useState(val());
  const [buttonClick, setButtonClick] = useState(0);
  function val() {
    if (typeof window === "undefined") return null;
    let value;
    if (type === "eventType") {
      value = sessionStorage.getItem("eventTypeList");
    } else if (type === "technical") {
      value = sessionStorage.getItem("techFilterList");
    } else if (type === "team") {
      value = sessionStorage.getItem("participationList");
    } else if (type === "reg") {
      value = sessionStorage.getItem("regFilterList");
    }
    return value ? JSON.parse(value)?.[0] : null;
  }
  useEffect(() => {
    if ((!currVal || currVal == null || currVal == "") && buttonClick == 0) {
      return;
    } else {
      if (typeof window !== "undefined") {
        if (type == "eventType")
          sessionStorage.setItem("eventTypeList", JSON.stringify([currVal]));
        else if (type == "technical")
          sessionStorage.setItem("techFilterList", JSON.stringify([currVal]));
        else if (type == "team")
          sessionStorage.setItem(
            "participationList",
            JSON.stringify([currVal])
          );
        else if (type == "reg")
          sessionStorage.setItem("regFilterList", JSON.stringify([currVal]));
      }
      sendSelectedOption();
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
