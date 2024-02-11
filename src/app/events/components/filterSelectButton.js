"use client";

import React, { useState, useEffect, useRef } from "react";

import "primereact/resources/themes/arya-orange/theme.css";
import "primereact/resources/primereact.min.css";
import { SelectButton } from "primereact/selectbutton";

export default function FilterSelectButton({
  type,
  options,
  sendSelectedOption,
}) {
  const [currVal, setCurrVal] = useState();
  useEffect(() => {
    sendSelectedOption([currVal], type);
  }, [currVal]);
  return (
    <div>
      <SelectButton
        value={currVal}
        onChange={(e) => setCurrVal(e.value)}
        options={options}
      />
    </div>
  );
}
