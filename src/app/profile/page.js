"use client";

import Navbar from "../components/EventHeader";
import { useState, useRef, useEffect } from "react";
import {
  EDIT_PROFILE_URL,
  STUDENT_PROFILE_URL,
  BUY_PASSPORT_DUMMY_PAGE_URL,
} from "../_util/constants";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createHash } from "crypto";

import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import ToastAlert from "../_util/ToastAlerts";

import WebGLApp from "../bg/WebGLApp";

import TextField from "@mui/material/TextField";
import QRCode from "react-qr-code";

export default function Register() {
  const [name, setName] = useState(
    secureLocalStorage.getItem("studentFullName")
  );
  const [email, setEmail] = useState(
    secureLocalStorage.getItem("registerEmail")
  );
  const [phone, setPhone] = useState(
    secureLocalStorage.getItem("studentPhone")
  );
  const [collegeName, setCollegeName] = useState(
    secureLocalStorage.getItem("studentCollegeName")
  );
  const [collegeCity, setCollegeCity] = useState(
    secureLocalStorage.getItem("studentCollegeCity")
  );
  const [isAmrita, setisAmrita] = useState(
    secureLocalStorage.getItem("isAmritaCBE")
  );
  const [loading, setLoading] = useState(false);
  const [studentID, setStudentID] = useState(
    secureLocalStorage.getItem("studentId")
  );
  const router = useRouter();

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(STUDENT_PROFILE_URL, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${secureLocalStorage.getItem(
              "registerToken"
            )}`,
          },
        });

        const data = await response.json();
        if (response.status === 200) {
          secureLocalStorage.setItem("studentFullName", fullname);
          secureLocalStorage.setItem("studentPhone", phoneNumber);
          secureLocalStorage.setItem("studentCollegeCity", collegeCity);
          secureLocalStorage.setItem("studentCollegeName", collegeName);
          return;
        } else if (response.status === 400) {
          secureLocalStorage.clear();
          ToastAlert("error", "Error", "Access restricted!", toastRef);
          router.push("/login");
        } else if (response.status === 401) {
          ToastAlert(
            "error",
            "Unauthorized Access",
            "Please login and try again.",
            toastRef
          );
          secureLocalStorage.clear();
          setTimeout(() => {
            router.push("/");
          }, 1500);
        } else if (response.status === 500) {
          ToastAlert(
            "error",
            "Internal Server Error",
            "Oops! Please try again.",
            toastRef
          );
          return;
        }
      } catch (error) {
        setLoading(false);
      }
    };
    getProfile();
  }, [collegeCity, collegeName, router]); // Calling the function once on mount

  const qrValue = `anokha://${studentID}`;

  //Regular expression to check amrita mail
  const amritaRegex =
    /^[a-zA-Z0-9._%+-]+@(cb\.students\.amrita\.edu|cb\.amrita\.edu|av\.students\.amrita\.edu|av\.amrita\.edu)$/;
  const isAmritaMail = amritaRegex.test(email);

  const nameRegex = /^[a-zA-Z ]{1,25}$/;
  const collegeNameRegex = /^[a-zA-Z ,-]{1,100}$/;
  const collegeCityRegex = /^[a-zA-Z ,-]{1,100}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const isPhoneValid = phoneRegex.test(phone);
  const isNameValid = nameRegex.test(name);
  const isCollegeNameValid = collegeNameRegex.test(collegeName);
  const isCollegeCityValid = collegeCityRegex.test(collegeCity);

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });
  const toastRef = useRef(null);

  const genSHA256 = (email) => {
    return createHash("sha256").update(email).digest("hex");
  };

  const enableUpdate = () => {
    const nameCheck = name === secureLocalStorage.getItem("studentFullName");
    const phoneCheck = phoneNumber === secureLocal.getItem("studentPhone");
    const collegeNameCheck =
      collegeName === secureLocalStorage.getItem("studentCollegeCity");
    const collegeCityCheck =
      collegeCity === secureLocalStorage.getItem("studentCollegeName");

    return !nameCheck && !phoneCheck && !collegeNameCheck && !collegeCityCheck;
  };

  // Confirm edit profile - changes
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(EDIT_PROFILE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secureLocalStorage.getItem(
            "registerToken"
          )}`,
        },
        body: JSON.stringify({
          studentFullName: fullname,
          studentPhone: phoneNumber,
          studentCollegeName: collegeName,
          studentCollegeCity: collegeCity,
        }),
      });
      j;
      const data = await response.json();
      if (response.status === 200) {
        ToastAlert(
          "success",
          "Successful Update",
          "Your profile has been updated!",
          toastRef
        );
        secureLocalStorage.setItem("studentFullName", fullname);
        secureLocalStorage.setItem("studentPhone", phoneNumber);
        secureLocalStorage.setItem("studentCollegeCity", collegeCity);
        secureLocalStorage.setItem("studentCollegeName", collegeName);
        return;
      } else if (response.status === 400) {
        ToastAlert(
          "error",
          "Invalid Request",
          "The details are invalid",
          toastRef
        );
        return;
      } else if (response.status === 401) {
        ToastAlert(
          "error",
          "Unauthorized Access",
          "Operation not permitted",
          toastRef
        );
        secureLocalStorage.clear();
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else if (response.status === 500) {
        ToastAlert(
          "error",
          "Error",
          "Updation unsuccessful! Try again.",
          toastRef
        );
        return;
      } else if (
        typeof data === "undefined" ||
        data.message !== undefined ||
        data.message !== null
      ) {
        ToastAlert(
          "error",
          "Error",
          "Updation unsuccessful! Try again.",
          toastRef
        );
        return;
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const handlePassportClick = async () => {
    const response = await fetch(BUY_PASSPORT_DUMMY_PAGE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secureLocalStorage.getItem("registerToken")}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      const payUData = {
        key: payU_Key,
        txnid: data["txnid"],
        amount: data["amount"],
        productinfo: data["productinfo"],
        firstname: data["firstname"],
        email: data["email"],
        phone: data["phone"],
        surl: data["surl"],
        furl: data["furl"],
        hash: data["hash"],
      };

      const payUForm = document.createElement("form");
      payUForm.method = "post";
      payUForm.action = payU_Action;

      for (const key in payUData) {
        if (payUData.hasOwnProperty(key)) {
          const hiddenField = document.createElement("input");
          hiddenField.type = "hidden";
          hiddenField.name = key;
          hiddenField.value = payUData[key];

          payUForm.appendChild(hiddenField);
        }
      }

      document.body.appendChild(payUForm);

      payUForm.submit();

      setMessage("Called PayU API to make payment.");
    } else {
      console.log("Error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#192032]">
      <WebGLApp colors={webGLColors} />

      <div className="block space-y-24 md:space-y-10">
        <Navbar />
        <div className="relative min-h-screen">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">
            <Toast ref={toastRef} position="bottom-center" />
            <div className="w-full rounded-[24px] bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2 lg:w-3/4 xl:p-0 bg-white">
              <div className="p-1 rounded-full ml-auto mr-auto flex justify-center">
                <Image
                  className=""
                  alt="Travis Howard"
                  src={
                    "https://www.gravatar.com/avatar/" +
                    genSHA256(email ?? "anokhapr@cb.amrita.edu") +
                    ".jpg?s=200&d=robohash"
                  }
                  width={80}
                  height={80}
                />
              </div>
              <div className="w-full flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl mx-auto top-10 font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Profile
                </h1>
                <form
                  className="space-y-4 md:space-y-6 flex flex-col md:flex-row md:gap-10 justify-center"
                  onSubmit={handleUpdate}
                >
                  <div className="flex flex-col justify-center flex-1 space-y-8 md:border-r md:border-black md:pr-10 max-w-600">
                    <div id="Fields">
                      <TextField
                        error={!isNameValid && name != ""}
                        placeholder={"Enter Name"}
                        label="Name"
                        value={name}
                        helperText={
                          !isNameValid && name != ""
                            ? "Should not contain special characters"
                            : ""
                        }
                        sx={{
                          width: "100%",
                          borderRadius: 5,
                        }}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div id="Fields">
                      <TextField
                        error={!isPhoneValid && phone != ""}
                        placeholder={"+91 99999 99999"}
                        label="Phone Number"
                        value={phone}
                        helperText={
                          !isPhoneValid && phone != ""
                            ? "Should contain 10 digits"
                            : ""
                        }
                        sx={{
                          width: "100%",
                          borderRadius: 5,
                        }}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div id="Fields">
                      <div>
                        <TextField
                          error={!isCollegeNameValid && collegeName != ""}
                          placeholder="Enter College Name"
                          label="College Name"
                          value={collegeName}
                          helperText={
                            !isCollegeNameValid && collegeName != ""
                              ? "Should contain only alphabets"
                              : ""
                          }
                          sx={{
                            width: "100%",
                            borderRadius: 5,
                            borderWidth: 5,
                          }}
                          onChange={(e) => {
                            setCollegeName(e.target.value);
                          }}
                          required
                          disabled={isAmrita}
                        />
                      </div>
                      <div id="Fields" className="mt-8 mb-8">
                        <TextField
                          error={!isCollegeCityValid && collegeCity != ""}
                          placeholder="Enter College City"
                          label="College City"
                          value={collegeCity}
                          helperText={
                            !isCollegeCityValid && collegeCity != ""
                              ? "Should contain only alphabets"
                              : ""
                          }
                          sx={{
                            width: "100%",
                            borderRadius: 5,
                            borderWidth: 5,
                          }}
                          onChange={(e) => {
                            setCollegeCity(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div id="Fields">
                        <TextField
                          placeholder="Enter Email"
                          label="Email"
                          value={email}
                          sx={{
                            width: "100%",
                            borderRadius: 5,
                            borderWidth: 5,
                          }}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-8">
                    <div id="Fields">
                      <div
                        className={
                          secureLocalStorage.getItem("studentAccountStatus") ==
                          2
                            ? "m-10 ml-20 mr-20 p-8 flex justify-center bg-[#ffffff] rounded-2xl"
                            : "m-10 ml-20 mr-20 p-8 flex justify-center  bg-blue-300 text-center rounded-2xl"
                        }
                      >
                        {secureLocalStorage.getItem("studentAccountStatus") ==
                        2 ? (
                          <QRCode
                            className=""
                            size={256}
                            value={qrValue}
                            viewBox={`0 0 256 256`}
                          />
                        ) : secureLocalStorage.getItem(
                            "studentAccountStatus"
                          ) == 1 ? (
                          <div>
                            <div>
                              Buy passport to register for events and
                              participate
                            </div>
                            <button
                              className="px-4 py-2 rounded-xl mt-[30px] bg-blue-400"
                              onClick={() => handlePassportClick()}
                            >
                              Buy Passport
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="w-[200px] mt-3 text-black bg-[#f69c18] mb-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={enableUpdate}
                      >
                        Confirm Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
