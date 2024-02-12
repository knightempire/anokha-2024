import React from 'react'
import crypto from 'crypto'
import secureLocalStorage from 'react-secure-storage'
import {HACKATHON_DASHBOARD_URL} from "@/app/_util/constants"
export const useAuth = ()=> {

    const SignUp = async ({FullName,Email,Phone,Password,CollegeName,CollegeCity}) =>{
        const hashedPassword = crypto.createHash('sha256').update(Password).digest('hex')
        console.log(hashedPassword)
    }
    
    const SignOut = () => {
        secureLocalStorage.clear();
        window.location.href = "/";
    }

    const GetDashboard = async (token) =>{
        try{
            const response = await fetch(HACKATHON_DASHBOARD_URL, {
                method: "GET",
                headers: {
                
                "Authorization": "Bearer " + token,
                },
                
            });
    
            const data = await response.json();
            if (response.status === 200) {
                // ToastAlert('success', "Success", "Registration successful", toastRef);
                secureLocalStorage.setItem("DashBoardData", data);
                console.log(data)
            }   
                

        }catch{
            console.log(e);
        }
    }   
  

  return {
    SignUp,SignOut,GetDashboard
}
}

