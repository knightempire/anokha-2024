const SignUp = async ({FullName,Email,Phone,Password,CollegeName,CollegeCity}) =>{
    const hashedPassword = crypto.createHash('sha256').update(Password).digest('hex')
    console.log(hashedPassword)
}