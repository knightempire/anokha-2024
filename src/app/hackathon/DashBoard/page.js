"use client"
import React,{useState,useEffect} from 'react'
import {Button } from "@material-tailwind/react";
import {HACKATHON_DASHBOARD_URL} from "@/app/_util/constants";
import secureLocalStorage from "react-secure-storage";
import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import ToastAlert from "@/app/_util/ToastAlerts";




export default function page() {

const [registerEmail, setRegisterEmail] = useState("");
const [registerToken, setRegisterToken] = useState("");

const handleclick = async () => {
    

    try {
      const response = await fetch(HACKATHON_DASHBOARD_URL, {
        method: "GET",
        headers: {
          
          "Authorization": "Bearer " + registerToken,
        },
         
      });

      const data = await response.json();
      if (response.status === 200) {
        // ToastAlert('success', "Success", "Registration successful", toastRef);
        // alert("Registration Successful");
        console.log(data);
         
      } else if (response.status === 500) {
        // ToastAlert('error', "Oops!", "Something went wrong! Please try again later!", toastRef);
        // alertError("Oops!", "Something went wrong! Please try again later!");
      } else if (data.message !== undefined || data.message !== null) {
        // ToastAlert('error', "Oops!", "Something went wrong! Please try again later!", toastRef);
        // alertError("Registration Failed", data.message);
      } else {
        // ToastAlert('error', "Oops!", 'Something went wrong! Please try again later', toastRef);
        // alertError("Oops!", "Something went wrong! Please try again later!");
      }
    } catch (e) {
      console.log(e);
    }
  
}
useEffect(() => {
    setRegisterEmail(secureLocalStorage.getItem("registerEmail"));
    setRegisterToken(secureLocalStorage.getItem("registerToken"));
  }, []);
  return (
    
    <div>
        <Button onClick={handleclick}>
            getValues
        </Button>    

    </div>
  )
}
