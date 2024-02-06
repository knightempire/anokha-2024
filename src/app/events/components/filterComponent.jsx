"use client";

import React, { useState, useEffect, useRef } from "react";

export default function FilterComponent({
  icon,
  name,
  options,
  sendSelectedOption,
}) {
  const [curr_options, setCurrOptions] = useState(options);
  const [displayOptions, setDisplayOptions] = useState(0);
  const componentRef = useRef(null);
  const inputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setDisplayOptions(0);
    }
  };

  const handleSendingOption = (item) => {
    sendSelectedOption(item);
  };

  useEffect(() => {
    // Attach event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-13" ref={componentRef}>
      <input
        className="max-w-[170px] px-2 py-1"
        type="text"
        placeholder={name}
        ref={inputRef}
        onFocus={() => {
          setDisplayOptions(1);
        }}
        onChange={(e) => {
          console.log(curr_options);
          const opt = options.filter((element) =>
            element.toLowerCase().includes(e.target.value.toLowerCase())
          );
          console.log("OPT", opt);
          if (opt != []) setCurrOptions(opt);
          else setCurrOptions(options);
        }}
      />
      {displayOptions ? (
        <div className="flex flex-col cursor-pointer absolute w-[170px]">
          {curr_options.map((filterItem, index) => (
            <div
              key={index}
              className="bg-white text-black"
              onClick={() => {
                inputRef.current.value = filterItem;
                setDisplayOptions(0);
                handleSendingOption(filterItem);
              }}
            >
              {filterItem}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
