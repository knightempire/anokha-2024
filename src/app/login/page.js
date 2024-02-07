"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "../components/EventHeader";
import securelocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import { LOGIN_URL } from "../_util/constants";
import { hashPassword } from "../_util/hash";
import toastAlert from "../_util/toastAlerts";
import validator from "validator";

import WebGLApp from "../bg/WebGLApp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";

import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

export default function Login() {
  useEffect(() => {
    securelocalStorage.clear();
  });

  const toastRef = useRef();
  const loginFrame = useRef(null);
  const Heading = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const SignIn = useRef(null);

  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  const router = useRouter();

  const HandleLogin = async (e) => {
    e.preventDefault();

    if (
      studentEmail == "" ||
      studentEmail == undefined ||
      !validator.isEmail(studentEmail)
    ) {
      toastAlert(
        "error",
        "Invalid Email",
        "The email provided is invalid!",
        toastRef
      );
      return;
    }
    if (
      studentPassword == "" ||
      studentPassword == undefined ||
      studentPassword.length < 8
    ) {
      toastAlert("error","Invalid Password", "The password provided is invalid!", toastRef);
      return;
    }
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEmail: studentEmail,
          studentPassword: hashPassword(studentPassword), //
        }),
      });
      console.log(response);

      const data = await response.json();
      if (response.status === 200) {
        console.log(data);
        toastAlert('success', "Successful Login", "You have logged in successfully!", toastRef);
        router.replace("/");
      } else if (response.status === 500) {
        toastAlert(
          "error",
          "Oops!",
          "Something went wrong! Please try again.",
          toastRef
        );
      } else if (data.message !== undefined || data.message !== null) {
        toastAlert("error", "Login Failed", `${data.message}`, toastRef);
      } else {
        toastAlert(
          "error",
          "Oops!",
          "Something went wrong! Please try again!",
          toastRef
        );
        // alertError("Oops!", "Something went wrong! Please try again later!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255], 
  });

  useGSAP(() => {
    let tl = new gsap.timeline();
    tl.from(loginFrame.current, { opacity: 0, duration: 1 });
    tl.from(Heading.current, { opacity: 0, y: -30, duration: 0.3 });
    tl.from(Email.current, { opacity: 0, stagger: 0.1, duration: 0.3 });
    tl.from(Password.current, { opacity: 0, stagger: 0.1, duration: 0.3 });
    tl.from(SignIn.current, { opacity: 0, y: 20, duration: 0.3 });
    tl.from("#Others", { opacity: 0, duration: 0.3 });
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <WebGLApp colors={webGLColors} />
      <div className="block">
        <Navbar />
        <div className="p-2">
            <Toast ref={toastRef} position="bottom-center" className="p-5" />
        </div>
        <div className="relative min-h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
            <div
              className="w-full  rounded-md bg-clip-padding bg-opacity-80  md:mt-0 sm:max-w-md xl:p-0 bg-white "
              ref={loginFrame}
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                  className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl"
                  ref={Heading}
                >
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div ref={Email}>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Your email
                    </label>
                    <input
                      onChange={(e) => {
                        setStudentEmail(e.target.value);
                      }}
                      type="email"
                      name="email"
                      id="email"
                      className=" bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                      placeholder="eon@anokha.amrita.edu"
                      required
                    />
                  </div>
                  <div ref={Password}>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => {
                        setStudentPassword(e.target.value);
                      }}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className=" border bg-transparent border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start"></div>
                    <Link
                      id="Others"
                      href="/forgotpassword"
                      className="text-sm font-medium text-primary-500 text-black hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    ref={SignIn}
                    type="submit"
                    onClick={HandleLogin}
                    className="w-full text-black bg-[#f69c18] hover:bg-[#f69c18] focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                  <p
                    className="text-sm font-light text-[#ed1d21] sm:flex sm:flex-col sm:justify-center"
                    id="Others"
                  >
                    <span className="sm:text-center">
                      Don’t have an account yet?{" "}
                    </span>
                    <a
                      href="/register"
                      className="font-medium text-primary-500 hover:underline sm:text-center"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
