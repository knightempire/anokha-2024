"use client";

import { AiOutlineMail } from "react-icons/ai";

import {
  STUDENT_FORGOT_PASSWORD_URL,
  STUDENT_REGISTER_VERIFY_URL,
} from "@/app/_util/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { hashPassword } from "@/app/_util/hash";
import Navbar from "@/app/components/EventHeader";
import WebGLApp from "../../bg/WebGLApp";

import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import ToastAlert from "@/app/_util/ToastAlerts";

export default function ForgetPassword() {
  const toastRef = useRef();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerToken, setRegisterToken] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const ser = JSON.stringify({
        studentEmail: registerEmail,
      });
      console.log(ser);
      const response = await fetch(STUDENT_FORGOT_PASSWORD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEmail: registerEmail,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        secureLocalStorage.setItem("registerEmail", registerEmail);
        secureLocalStorage.setItem("registerToken", data["SECRET_TOKEN"]);
        console.log(data);

        ToastAlert(
          "success",
          "Enter OTP to reset password!",
          `${data.MESSAGE}`,
          toastRef
        );
        setTimeout(() => {
          router.replace("/resetpassword");
        }, 1500);
      } else if (response.status === 400) {
        ToastAlert(
          "error",
          "Account not found",
          "Please check your email and try again!",
          toastRef
        );
      } else if (response.status === 500) {
        alertError("Oops!", "Something went wrong! Please try again later!");
      } else if (data.message !== undefined || data.message !== null) {
        alertError("Registration Failed", data.message);
      } else {
        alertError("Oops!", "Something went wrong! Please try again later!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    // registerEmail === null || registerToken === null || registerEmail.length == 0 || registerToken.length == 0 ?
    //     <LoadingScreen /> :
    <main className="flex h-screen flex-1 flex-col justify-center">
      <Toast ref={toastRef} position="bottom-center" className="p-5" />
      <WebGLApp colors={webGLColors} />

      <Navbar />

      <div className="border border-gray-300 rounded-2xl mx-auto w-11/12 sm:max-w-11/12 md:max-w-md lg:max-w-md backdrop-blur-xl bg-gray-50 ">
        <div className="mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md">
          <div className="flex flex-row justify-center">
            <h1 className="px-4 py-4 m-1 w-full text-2xl font-semibold text-center  bg-green-400 rounded-2xl ">
              Forgot Password?
            </h1>
          </div>
          <hr className="border-gray-500 w-full" />
        </div>

        <div className="mt-10 mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md px-6 pb-8 lg:px-8 ">
          <form className="space-y-6" onSubmit={handleVerify}>
            {/* OTP input */}
            <div>
              <p className="mt-1 text-sm text-gray-500">
                {
                  "Don't worry! Enter your email below and we'll email you OTP to reset your password."
                }
              </p>

              <div className="flex flex-row flex-1 space-x-1 mt-4">
                <AiOutlineMail
                  style={{
                    fontSize: "1.5em",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                />
                <input
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setRegisterEmail(e.target.value);
                  }}
                  className=" border-gray-400 border-2 w-full h-12 px-3 rounded-xl text-lg focus:outline-green"
                />
              </div>
            </div>

            <div>
              <input
                value="SEND"
                type="submit"
                disabled={false}
                className={
                  "w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                }
              />
            </div>
          </form>
        </div>
      </div>

      <Toast position="bottom-center" ref={toastRef} />
    </main>
  );
}
