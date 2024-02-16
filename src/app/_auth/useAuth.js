import React from 'react'
import crypto from 'crypto'
import secureLocalStorage from 'react-secure-storage'
import {HACKATHON_DASHBOARD_URL} from "@/app/_util/constants"
export const useAuth = ()=> {

    const SignUp = async ({FullName,Email,Phone,Password,CollegeName,CollegeCity}) =>{
        const hashedPassword = crypto.createHash('sha256').update(Password).digest('hex')
    }
    
    const SignOut = () => {
        secureLocalStorage.clear();
        window.location.href = "/";
    }

    

  return {
    SignUp,SignOut 
}
}

