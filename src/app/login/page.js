"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "../components/EventHeader";
import Background from "@/app/components/user/Background";
import securelocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import { LOGIN_URL } from "../_util/constants";
import { hashPassword } from "../_util/hash";

import WebGLApp from "../bg/WebGLApp";

import Link from "next/link";
export default function Login() {
  useEffect(() => {
    securelocalStorage.clear();
  });

  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  const toast = useRef(null);
  const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");

  const isValidEmail = studentEmail.length > 0 && emailRegex.test(studentEmail);
  const isValidPassword = studentPassword.length > 0;

  const router = useRouter();

  const HandleLogin = async (e) => {
    e.preventDefault();

    if (!isValidEmail || !isValidPassword) {
      alertError("Error", "Invalid email or password");
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
        router.replace("/");
      } else if (response.status === 500) {
        alertError("Oops!", "Something went wrong! Please try again later!");
      } else if (data.message !== undefined || data.message !== null) {
        alertError("Login Failed", data.message);
      } else {
        alertError("Oops!", "Something went wrong! Please try again later!");
      }
    } catch {
      console.log(error);
    }
  };

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <WebGLApp colors={webGLColors} />
      <div className="block">
        <Navbar />
        <div className="relative min-h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
            <div className="w-full  rounded-md bg-clip-padding bg-opacity-80  md:mt-0 sm:max-w-md xl:p-0 bg-white ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
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
                  <div>
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
                      href="/forgotpassword"
                      className="text-sm font-medium text-primary-500 text-black hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    onClick={HandleLogin}
                    className="w-full text-black bg-[#f69c18] hover:bg-[#f69c18] focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-[#ed1d21]">
                    Don’t have an account yet?{" "}
                    <a
                      href="/register"
                      className="font-medium text-primary-500 hover:underline"
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
