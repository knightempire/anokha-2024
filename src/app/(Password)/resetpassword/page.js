"use client";

import Background from "@/app/components/user/Background";
import { LoadingScreen } from "@/app/_util/LoadingScreen/LoadingScreen";

import { STUDENT_REGISTER_VERIFY_URL, STUDENT_RESET_PASSWORD_URL } from "@/app/_util/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { hashPassword } from "@/app/_util/hash";
import Navbar from "@/app/components/EventHeader";
import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import ToastAlert from "@/app/_util/ToastAlerts";

export default function RegisterVerify() {
    const toastRef = useRef();

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const otpRegex = /^[0-9]{6}$/;
    const isValidOtp = otp.length === 6 && otpRegex.test(otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5]);

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerToken, setRegisterToken] = useState("");

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setRegisterEmail(secureLocalStorage.getItem("registerEmail"));
        setRegisterToken(secureLocalStorage.getItem("registerToken"));
    }, []);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleVerify = async (e) => {
        e.preventDefault();
        console.log(password,confirmPassword,registerEmail)
        const otpString = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];

        if (registerEmail === null || registerToken === null || registerToken.length == 0 || registerEmail.length == 0) {
            alertError("Error", "Session expired. Please try again.");
            secureLocalStorage.clear();
            setTimeout(() => {
                router.replace("/login");
            }, 2000);
            return;
        }

        setLoading(true);

        try {
            const s = JSON.stringify({
                "otp": hashPassword(otpString),
                "studentPassword" : password
            })
            console.log(s)
            const response = await fetch(STUDENT_RESET_PASSWORD_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + registerToken,
                },
                body: JSON.stringify({
                    "otp": hashPassword(otpString),
                    "studentPassword" : hashPassword(password)
                }),
            });

      
            const data = await response.json();
            if (response.status === 200) {
                ToastAlert("success",
              "Password Reset Successful",
              "Please Login to continue",
              toastRef);
              console.log(data);
              setTimeout(()=>{
                router.replace("/login")
              },500)
              
            } else if (response.status === 401) {
                ToastAlert("error",
                "Session expired!",
                "Please try again",
                toastRef);
                 
              setTimeout(()=>{
                router.replace("/forgotpassword")
              },500)
            } 
            else if (response.status === 400) {
                ToastAlert("error",
                "Invalid OTP",
                "Please Verify OTP again!",
                toastRef);
                 
                 
              } 
            else if (data.message !== undefined || data.message !== null) {
              alertError("Registration Failed", data.message);
            } else {
              alertError("Oops!", "Something went wrong! Please try again later!");
            }
          } catch (e) {
            console.log(e);
          }
    }

    

    return (
        registerEmail === null || registerToken === null || registerEmail.length == 0 || registerToken.length == 0 ?
            <LoadingScreen /> :
            <main className='flex h-screen flex-1 flex-col justify-center'>
                
                <Background />
                <Navbar />
                <Toast ref={toastRef} position="bottom-center" />
                <div className="border border-gray-300 rounded-2xl mx-auto w-11/12 sm:max-w-11/12 md:max-w-md lg:max-w-md backdrop-blur-xl bg-gray-50 ">
                    <div
                        className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[64%] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#cea8a8] to-[#dea9a9] opacity-10"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%, 45.2% 34.5%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md">
                        <div className='flex flex-row justify-center'>
                            <h1 className='px-4 py-4 m-1 w-full text-2xl font-semibold text-center  bg-green-400 rounded-2xl '>OTP Verification</h1>
                        </div>
                        <hr className='border-gray-500 w-full' />
                    </div>

                    <div className="mt-10 mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md px-6 pb-8 lg:px-8 ">
                        <form className="space-y-6" onSubmit={handleVerify}>
                            {/* OTP input */}
                            <div>
                                <label htmlFor="otp" className="block text-lg font-medium text-gray-900">
                                    OTP
                                </label>
                                <p className="mt-1 text-sm text-gray-500">
                                    {"Enter the OTP received through email in " + registerEmail}
                                </p>

                                <div className="flex flex-1 space-x-1 mt-4">
                                    {/* 6 input boxes */}
                                    {otp.map((data, index) => {
                                        return (
                                            <input
                                                key={index}
                                                type="text"
                                                name="otp"
                                                id="otp"
                                                maxLength={1}
                                                size={1}
                                                autoComplete="off"
                                                className="w-1/6 px-2 py-4 rounded-xl text-center border border-gray-500 focus:ring-0 text-lg font-semibold"
                                                value={data}
                                                onChange={(e) => {
                                                    const otpCopy = [...otp];
                                                    otpCopy[index] = e.target.value;
                                                    setOtp(otpCopy);
                                                    if (e.target.value.length === 1 && index !== otp.length - 1) {
                                                        e.target.nextSibling.focus();
                                                    } else if (e.target.value.length === 0 && index !== 0) {
                                                        e.target.previousSibling.focus();
                                                    }
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-lg font-medium text-gray-900">
                                    Password
                                </label>
                                <p className="mt-1 text-sm text-gray-500">
                                    {"Enter your new password"}
                                </p>

                                <div className="flex flex-1 space-x-1 mt-4">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="off"
                                        className="w-full px-2 py-2 rounded-xl text-center border border-gray-500 focus:ring-0 text-lg font-semibold"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {"Confirm your new password"}
                                </p>

                                <div className="flex flex-1 space-x-1 mt-4">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="off"
                                        className="w-full px-2 py-2 rounded-xl text-center border border-gray-500 focus:ring-0 text-lg font-semibold"
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>  
                                  
                            <div>
                                <input
                                    value="Verify"
                                    type="submit"
                                    // disabled={!isValidOtp || loading}
                                    className={"w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"} />
                            </div>
                        </form>
                    </div>
                </div>

                 
            </main>
    );
}