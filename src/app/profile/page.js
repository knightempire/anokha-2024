"use client";

import QRCode from "react-qr-code";
import Navbar from "../components/EventHeader";
import securelocalStorage from "react-secure-storage";

import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

import { useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WebGLApp from "../bg/WebGLApp";
import ToastAlert from "../_util/ToastAlerts";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";

import { EDIT_PROFILE_URL } from "../_util/constants";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function Profile() {
  // Manage references to toast notifications
  const toastRef = useRef();

  // state variables
  const [toActivate, setToActivate] = useState(
    securelocalStorage.getItem("studentAccountStatus"),
  );
  const [fullname, setFullName] = useState(
    securelocalStorage.getItem("studentFullName"),
  );
  const [phoneNumber, setPhoneNumber] = useState(
    securelocalStorage.getItem("studentPhone"),
  );
  const [email, setEmail] = useState(
    securelocalStorage.getItem("studentEmail"),
  );
  const [collegeName, setCollegeName] = useState(
    securelocalStorage.getItem("studentCollegeName"),
  );
  const [collegeCity, setCollegeCity] = useState(
    securelocalStorage.getItem("studentCollegeCity"),
  );
  const [studentID, setStudentID] = useState(
    securelocalStorage.getItem("studentId"),
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Validators for regex testing
  const nameValid = /^[a-zA-Z ]{1,25}$/;
  const collegeNameValid = /^[a-zA-Z ,-]{1,100}$/;
  const collegeCityValid = /^[a-zA-Z ,-]{1,100}$/;
  const phoneNumberValid = /^[0-9]{10}$/;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isNameValid = nameValid.test(fullname);
  const isEmailValid = emailValid.test(email);
  const isPhoneNumberValid = phoneNumberValid.test(phoneNumber);
  const isCollegeNameValid = collegeNameValid.test(collegeName);
  const isCollegeCityValid = collegeCityValid.test(collegeCity);

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  // Confirm edit profile - changes
  const handleUpdate = async (e) => {
    e.preventDefault;
    try {
      setLoading(true);
      const response = await fetch(EDIT_PROFILE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${securelocalStorage.getItem("SECRET_TOKEN")}`,
        },
        body: JSON.stringify({
          studentFullName: fullname,
          studentPhone: phoneNumber,
          studentCollegeName: collegeName,
          studentCollegeCity: collegeCity,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        ToastAlert(
          "success",
          "Successful Update",
          "Your profile has been updated!",
          toastRef,
        );
        secureLocalStorage.setItem("StudentFullName", fullname);
        secureLocalStorage.setItem("studentPhone", phoneNumber);
        secureLocalStorage.setItem("studentCollegeCity", collegeCity);
        secureLocalStorage.setItem("studentCollegeName", collegeName);
        return;
      } else if (response.status === 400) {
        ToastAlert(
          "error",
          "Invalid Request",
          "The details are invalid",
          toastRef,
        );
        return;
      } else if (response.status === 401) {
        ToastAlert(
          "error",
          "Unauthorized Access",
          "Operation not permitted",
          toastRef,
        );
        secureLocalStorage.clear();
        router.replace("/login");
      } else if (response.status === 500) {
        ToastAlert(
          "error",
          "Error",
          "Updation unsuccessful! Try again.",
          toastRef,
        );
        return;
      } else if (data.message !== undefined || data.message !== null) {
        ToastAlert(
          "error",
          "Error",
          "Updation unsuccessful! Try again.",
          toastRef,
        );
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Page Render
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <WebGLApp colors={webGLColors} />
      <div className="block space-y-24 md:space-y-10">
        <Navbar />
        <Toast ref={toastRef} position="bottom-center" />
        <div className="relative min-h-screen">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl">
            {/* Column 01 - Becomes bottom row in mobile view */}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">
              <div id="name-field">
                <TextField
                  error={!isNameValid && fullname != ""}
                  id="outlined-error-helper-text"
                  placeholder="Can't be empty"
                  label="Name"
                  defaultValue={fullname}
                  sx={{
                    width: "100%",
                    borderRadius: 5,
                    borderWidth: 5,
                  }}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  required
                />
              </div>
              <div id="email-field">
                <TextField
                  error={!isEmailValid && email != ""}
                  id="outlined-error-helper-text"
                  placeholder="Can't be empty"
                  label="Email"
                  defaultValue={email}
                  sx={{
                    width: "100%",
                    borderRadius: 5,
                    borderWidth: 5,
                  }}
                  disabled
                  required
                />
              </div>
              <div id="phone-field">
                <TextField
                  error={!isPhoneNumberValid && phoneNumber != ""}
                  id="outlined-error-helper-text"
                  placeholder="Can't be empty"
                  label="Phone Field"
                  defaultValue={phoneNumber}
                  sx={{
                    width: "100%",
                    borderRadius: 5,
                    borderWidth: 5,
                  }}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  required
                />
              </div>
              <div id="collegeName-field">
                <TextField
                  error={!isCollegeNameValid && collegeName != ""}
                  id="outlined-error-helper-text"
                  placeholder="Can't be empty"
                  label="College Name"
                  defaultValue={collegeName}
                  sx={{
                    width: "100%",
                    borderRadius: 5,
                    borderWidth: 5,
                  }}
                  onChange={(e) => {
                    setCollegeName(e.target.value);
                  }}
                  required
                />
              </div>
              <div id="collegeCity-field">
                <TextField
                  error={!isCollegeCityValid && collegeCity != ""}
                  id="outlined-error-helper-text"
                  placeholder="Can't be empty"
                  label="College City"
                  defaultValue={collegeCity}
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
            </div>
            {/* Column 02 - Becomes top row in mobile view*/}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">
              <div className="flex flex-col">
                <div
                  id="qr-code-holder"
                  className="p-10 bg-[#ffffff] max-w-256"
                >
                  <QRCode
                    value={`anokha://${studentID}`}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    viewBox={`0 0 256 256`}
                    size="256"
                  />
                </div>
                <div id="confirm-btn-container">
                  <Button variant="contained" endIcon={<EditNoteIcon />} onClick={handleUpdate}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
