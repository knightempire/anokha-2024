"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import WebGLApp from "@/app/bg/WebGLApp";
import Lottie from "react-lottie";
import { VERIFY_TRANSACTIONS_URL } from "@/app/_util/constants";
import animationData from "@/app/_util/lotties/transactionPending";

export default function PaymentPending() {
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
          <div className="flex items-center justify-center">
            <Lottie options={defaultOptions} height={250} width={250} />
          </div>
          <h1 className="mt-8 text-center justify-center text-4xl font-bold mb-4">
            Payment Pending
          </h1>
          <p className="text-gray-700 text-sm text-center">
            {"Wait For 10 minutes and head over to your Profile then click on My Transactions."}
          </p>
          <p className="text-gray-700 text-sm text-center">
            {
              "Click on Verify Now to the corresponding transaction to complete the registration."
            }
          </p>
        </>

        <Link href={"/"} className="flex justify-center">
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
