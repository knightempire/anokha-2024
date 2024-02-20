"use client";

import Link from "next/link";
import WebGLApp from "@/app/bg/WebGLApp";
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "@/app/_util/lotties/transactionFailed";

export default function PaymentFailure() {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#192032]">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="text-[#04002a] items-center justify-center mx-auto my-auto bg-white rounded-3xl px-8 py-8 z-10 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-110">
        <>
          <div className="flex items-center justify-center px-32 py-8">
            <Lottie options={defaultOptions} height={150} width={150} />
          </div>
        </>

        <h1 className="text-center justify-center text-4xl font-bold">
          Payment Failed
        </h1>
        <p className="text-gray-700 text-sm text-center">
          Please try again later after sometime.
        </p>

        <Link href={"/"} className="flex justify-center mt-8">
          <button
            className="rounded-2xl px-4 py-3"
            style={{
              backgroundColor: "#00223a",
              color: "white",
              marginTop: "1rem",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
