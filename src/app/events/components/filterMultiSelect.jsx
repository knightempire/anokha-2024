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
  function val() {
    let value;
    if (type == "day")
      value =  sessionStorage.getItem("dayFilterList");
    else if (type == "tag")
      value =  sessionStorage.getItem("tagslist");
    return value ? JSON.parse(value) : null;
  }
  useEffect(() => {
    if (!curr_options || curr_options == null || curr_options == "") {
      return
    } else {
      if (type == "day")
        sessionStorage.setItem("dayFilterList",JSON.stringify(curr_options));
      else if (type == "tag")
        sessionStorage.setItem("tagslist",JSON.stringify(curr_options))
      sendSelectedOption();
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
