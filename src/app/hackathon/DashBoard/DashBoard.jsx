"use client"
import React,{useState,useEffect} from 'react'
import {Button } from "@material-tailwind/react";
import {HACKATHON_DASHBOARD_URL} from "@/app/_util/constants";
import secureLocalStorage from "react-secure-storage";
import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import ToastAlert from "@/app/_util/ToastAlerts";
import Navbar from '../_components/HackathonHeader'
 



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
      {/* <Navbar /> */}
        <main className='flex my-auto flex-row w-full h-full justify-evenly bg-[rgb(10,17,58)] p-5'>
            <div className='flex flex-col bg-white rounded'>
                <div className='w-[40vh]'>
                TeamName , PlatForm Type ,Platform Id,
                

                </div>
                <div>
                Total Members, Team Status
                </div>
                <div>
                    display 3/4 members separately
                </div>
            </div>
            <div className='bg-white rounded' >
                <div>
                    First Round Submission
                </div>
                <div>
                    Second Round Submission
                </div>
            </div>
            
        </main>
     
        <Button onClick={handleclick}>
                getValues
            </Button>    
    </div>
  )
}


// {
//     "MESSAGE": "Data Fetched Successfully",
//     "teamId": 1,
//     "teamName": "bottle",
//     "platformType": "1",
//     "platformId": "cb.en.u4cse21001@cb.students.amrita.edu",
//     "totalMembers": 3,
//     "teamStatus": "1",
//     "teamMembers": [
//         {
//             "studentEmail": "cb.en.u4cse21001@cb.students.amrita.edu",
//             "studentFullName": "Abhinav R",
//             "idcId": "idcId1",
//             "isLeader": "1"
//         },
//         {
//             "studentEmail": "cb.en.u4cse21008@cb.students.amrita.edu",
//             "studentFullName": "Ashwin S",
//             "idcId": "idcId2",
//             "isLeader": "0"
//         },
//         {
//             "studentEmail": "dharmapravardhana7@gmail.com",
//             "studentFullName": "Dharma Pravardhana V",
//             "idcId": "idcId3",
//             "isLeader": "0"
//         }
//     ],
//     "firstRoundSubmission": [
//         {
//             "theme": "2",
//             "problemStatement": "Problem Statement",
//             "githubLink": null,
//             "youtubeVideoLink": null,
//             "devmeshLink": null,
//             "pptFileLink": "https://amritavishwavidyapeetham-my.sharepoint.com/:b:/g/personal/cb_en_u4cse21257_cb_students_amrita_edu/EVyogD-Exw1BrpxKmRdizYQBIxzbmI-NA_xsxX7gnDM93Q?e=GTob89"
//         }
//     ],
//     "secondRoundSubmission": []
// }