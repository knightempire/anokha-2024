"use client";

import Background from "@/app/components/background";
import { LoadingScreen } from "@/app/_util/LoadingScreen/LoadingScreen";

import { STUDENT_FORGOT_PASSWORD_URL, STUDENT_REGISTER_VERIFY_URL } from "@/app/_util/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { hashPassword } from "@/app/_util/hash";
import Navbar from "@/app/components/EventHeader";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";


export default function forgetpassword() {
    const toast = useRef(null);

 
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerToken, setRegisterToken] = useState("");

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    


    const handleVerify = async (e) => {
        e.preventDefault();

        // const otpString = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];
        console.log(registerEmail)
        // if (registerEmail === null || registerToken === null || registerToken.length == 0 || registerEmail.length == 0) {
        //     alertError("Error", "Session expired. Please try again.");
        //     secureLocalStorage.clear();
        //     setTimeout(() => {
        //         router.replace("/register");
        //     }, 2000);
        //     return;
        // }

        // setLoading(true);

        try {
            
            const ser = JSON.stringify({
                "studentEmail": registerEmail
            })
            console.log(ser)
            const response = await fetch(STUDENT_FORGOT_PASSWORD_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    "studentEmail": registerEmail
                }),
            });

      
            const data = await response.json();
            if (response.status === 200) {
              secureLocalStorage.setItem("registerEmail", registerEmail);
                secureLocalStorage.setItem("registerToken", data['SECRET_TOKEN']);
              console.log(data);
              setTimeout(()=>{
                router.replace("/resetpassword")
              },500)
              
            } else if (response.status === 400) {
              alertError("Account not found", "Please check your email and try again!");
            } 
             else if (response.status === 500) {
                alertError("Oops!", "Something went wrong! Please try again later!");
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

    const alertError = (summary, detail) => {
        toast.current.show({
            severity: 'error',
            summary: summary,
            detail: detail,
            
                
            
        });
    };

    const alertSuccess = (summary, detail) => {
        toast.current.show({
            severity: 'success',
            summary: summary,
            detail: detail,
        });
    };

    return (
        // registerEmail === null || registerToken === null || registerEmail.length == 0 || registerToken.length == 0 ?
        //     <LoadingScreen /> :
            <main className='flex h-screen flex-1 flex-col justify-center'>
                {/* <Toast ref={toast}></Toast> */}
                <Background />
                <Navbar />

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
                            <h1 className='px-4 py-4 m-1 w-full text-2xl font-semibold text-center  bg-green-400 rounded-2xl '>Forgot Password?</h1>
                        </div>
                        <hr className='border-gray-500 w-full' />
                    </div>

                    <div className="mt-10 mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md px-6 pb-8 lg:px-8 ">
                        <form className="space-y-6" onSubmit={handleVerify}>
                            {/* OTP input */}
                            <div>
                                
                                <p className="mt-1 text-sm text-gray-500">
                                    {"Don't worry! Enter your email below and we'll email you OTP to reset your password."}
                                </p>

                                <div className="flex flex-1 space-x-1 mt-4">
                                    <input type="text" id="email"
                                    onChange={(e)=>{
                                        setRegisterEmail(e.target.value)
                                    
                                    }}
                                    className="bg-yellow-200 border-gray-400 border-2 w-full h-12 px-3 rounded-xl text-lg focus:outline-green"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    value="Verify"
                                    type="submit"
                                    disabled={false}
                                    className={"w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"} />
                            </div>
                        </form>
                    </div>
                </div>

                <Toast position="bottom-center" ref={toast} />
            </main>
    );
}