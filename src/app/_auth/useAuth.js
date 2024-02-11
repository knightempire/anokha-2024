import React from 'react'

export const useAuth = ()=> {

    const SignUp = async ({FullName,Email,Phone,Password,CollegeName,CollegeCity}) =>{
        const hashedPassword = crypto.createHash('sha256').update(Password).digest('hex')
        console.log(hashedPassword)
    }
    
    const SignOut = () => {
        secureLocalStorage.clear();
        window.location.href = "/";
    }

    

  return {
    SignUp,SignOut
}
}

