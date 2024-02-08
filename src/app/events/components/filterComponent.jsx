"use client";

import React, { useState, useEffect, useRef } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { MultiSelect } from "primereact/multiselect";

export default function FilterComponent({
  icon,
  name,
  options,
  sendSelectedOption,
}) {
  const [curr_options, setCurrOptions] = useState(null);
  const opt = [{ name: "hi", val: "hi", name: "hello", val: "hello" }];
  useEffect(() => {
    console.log(curr_options);
  }, [curr_options]);

  return (
    <div className="z-13">
      <MultiSelect
        options={options}
        optionLabel="name"
        optionValue="val"
        placeholder={name}
        onChange={(e) => console.log(e.value)}
      />
    </div>
  );
}
