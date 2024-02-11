"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date("April 4, 2024 00:00:00 GMT+0530"); // Set your event date here

  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const difference = +eventDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  const formatTime = (time) => {
    // Pad single digits with leading zero
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      {timeLeft.days === undefined ? (
        <div></div>
      ) : (
        <div className="flex relative flex-col justify-center items-center w-30 xl:mr-24 lg:mr-24 ">
          <div className="flex relative my-4 p-1 h-10 w-full items-center justify-center">
            LAUNCHING IN
          </div>
          <div className="flex relative h-40 w-full m-2 text-[240px] font-thin items-center justify-center">
            {timeLeft.days}
            <div className="absolute top-[80%] left-[90%] flex text-2xl bg-fuchsia-600 p-1">
              Days
            </div>
          </div>
          <div className="flex flex-row mx-4 my-8 h-10 w-full justify-between">
            <div className="flex relative h-full font-thin text-4xl">
              {formatTime(timeLeft.hours)}{" "}
              <span className="align-baseline mx-2 mt-2 text-2xl font-light text-slate-600">
                H
              </span>
            </div>
            <div className="flex relative h-full font-thin text-4xl">
              {formatTime(timeLeft.minutes)}{" "}
              <span className="align-baseline mx-2 mt-2 text-2xl font-light text-slate-600">
                M
              </span>
            </div>
            <div className="flex relative h-full font-thin text-4xl">
              {formatTime(timeLeft.seconds)}{" "}
              <span className="align-baseline mx-2 mt-2 text-2xl font-light text-slate-600">
                S
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
