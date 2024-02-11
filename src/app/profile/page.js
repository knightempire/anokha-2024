"use client";

import QRCode from "react-qr-code";
import { Navbar } from "../components/EventHeader";
import securelocalStorage from "react-secure-storage";

import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

import validator from "validator";
import { useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";

export default function Profile(){

    // state variables
    const [toActivate, setToActivate] = useState(0);
    const [fullname, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [collegeCity, setCollegeCity] = useState("");

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

    useEffect(() => {
        securelocalStorage.clear();
    })  

    return(
        <main className="flex md:flex-col">
            <Navbar />
            <div className="flex">
                <div id="data">
                    <div id="name-field">
                        <TextField 
                            error={!isNameValid && fullname != ""}
                            variant="outlined-error-helper-text"
                            placeholder="Can't be empty"
                            label="Name" 
                            default={securelocalStorage}
                        />
                    </div>
                    <div id="email-field">
                        <TextField 
                            error={!isEmailValid && email != ""}
                            variant="outlined-error-helper-text"
                            placeholder="Can't be empty"
                            label="Email" 
                            default={securelocalStorage}
                        />
                    </div>
                    <div id="phone-field">
                        <TextField 
                            error={!isPhoneNumberValid && phoneNumber != ""}
                            variant="outlined-error-helper-text"
                            placeholder="Can't be empty"
                            label="Phone Field" 
                            default={securelocalStorage}
                        />
                    </div>
                    <div id="collegeName-field">
                        <TextField 
                            error={!isCollegeNameValid && collegeName != ""}
                            variant="outlined-error-helper-text"
                            placeholder="Can't be empty"
                            label="College Name" 
                            default={securelocalStorage}
                        />
                    </div>
                    <div id="collegeCity-field">
                        <TextField 
                            error={!isCollegeCityValid && collegeCity != ""}
                            variant="outlined-error-helper-text"
                            placeholder="Can't be empty"
                            label="College City" 
                            default={securelocalStorage}
                        />
                    </div>

                </div> 
                <div className="flex flex-col">
                    <div id="qr-code-holder" className="p-10 bg-[#ffffff] max-w-256">
                        <QRCode />            
                    </div>
                </div>
            </div>
        </main> 
    );
}
