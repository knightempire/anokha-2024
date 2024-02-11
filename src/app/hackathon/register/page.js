"use client"
import {useEffect, useState} from 'react'
import {Button} from "@material-tailwind/react"
import { FaArrowRight } from "react-icons/fa";
import {HACKATHON_TEAM_REGISTER_URL} from  "@/app/_util/constants";
import Navbar from '../_components/HackathonHeader'
import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import ToastAlert from "@/app/_util/toastAlerts";

import FirstRegister  from '@/app/hackathon/_components/_form/FirstRegister';
import SecondRegister from '@/app/hackathon/_components/_form/SecondRegister';
import ThirdRegister from '@/app/hackathon/_components/_form/ThirdRegister';
import secureLocalStorage from 'react-secure-storage'

const RegisterSteps = [FirstRegister,SecondRegister,ThirdRegister]
const Register = () => {
    const [teamName,setTeamName] = useState('')
    const [noofMembers,setNoofMembers] = useState(3)
    const [platform,setPlatform] = useState('')
    const [member1Email, setMember1Email] = useState('')
    const [member1IDC, setMember1IDC] = useState('')
    const [member2Email, setMember2Email] = useState('')
    const [member2IDC, setMember2IDC] = useState('')
    const [member3Email, setMember3Email] = useState('')
    const [member3IDC, setMember3IDC] = useState('')
    const [member4Email, setMember4Email] = useState('')
    const [member4IDC, setMember4IDC] = useState('')
    const [currentStep, setCurrentStep] = useState(0)

    const [registerEmail, setRegisterEmail] = useState("");
    const [secretToken, setSecretToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(0);
    const [isAmritaCBE, setIsAmritaCBE] = useState(0);
    const [hasActivePassport, setHasActivePassport] = useState(0);
    
    useEffect(() => {
      setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
      setIsAmritaCBE(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
      setHasActivePassport(parseInt(secureLocalStorage.getItem("hasActivePassport")));
      setRegisterEmail(secureLocalStorage.getItem("registerEmail"));
      setSecretToken(secureLocalStorage.getItem("registerToken"));
 

    },
    [])    
        
    const handle_button_next_click = () =>{
      setCurrentStep(currentStep+1) 
    }   
    
    const handle_button_Prev_click = ()=>{
      setCurrentStep(currentStep-1)
    }

    const handle_teamname_change = (e) =>{
      setTeamName(e.target.value)
    }
    const handle_noofMembers_change = (e) =>{
      setNoofMembers(e.target.value)
    }
    const handle_platform_change = (e) =>{
      setPlatform(e.target.value)
    }
    const handle_button_register_click = async (e) =>{
      try {
        console.log(JSON.stringify({
          teamName: teamName,
          devfolioId: platform,
          unstopId: "",
          devpostId: "",
          teamMembers: [member2Email,member3Email, ... (noofMembers==4) ? [member4Email] : []],
          idcId:[member1IDC,member2IDC,member3IDC, ... (noofMembers==4) ? [member4IDC] : []]
          }))
        // setLoading(true);
        const response = await fetch(HACKATHON_TEAM_REGISTER_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + secretToken,

          },
          body: JSON.stringify({
            teamName: teamName,
            devfolioId: platform,
            unstopId: null,
            devpostId: null,
            teamMembers: [member2Email,member3Email, ... (noofMembers==4) ? [member4Email] : []],
            idcId:[member1IDC,member2IDC,member3IDC, ... (noofMembers==4) ? [member4IDC] : []]
            })
        });

        const data = await response.json();
        if (response.status === 200) {
          ToastAlert(
            "success",
            "Success",
            "Registration Successful!",
            toastRef
          );
          console.log(data);
        //   secureLocalStorage.setItem("registerToken", data["SECRET_TOKEN"]);
        //   secureLocalStorage.setItem("registerEmail", email);

          setTimeout(() => {
            router.replace("/hackathon");
          }, 500);
        // } else if (response.status === 500) {
        //   ToastAlert(
        //     "error",
        //     "Oops!",
        //     "Something went wrong! Please try again later!",
        //     toastRef
        //   );
        //   return;
        // } else if (data.message !== undefined || data.message !== null) {
        //   ToastAlert("error", "Registration Failed", data.message, toastRef);
        // } else {
        //   ToastAlert(
        //     "error",
        //     "Oops!",
        //     "Something went wrong! Please try again later!",
        //     toastRef
        //   );
        //   return;
        // }

        //  console.log(data);
      } }catch (e) {
        // ToastAlert("error", "Error", "Please try again!", toastRef);
        console.log(e);
      }

      // setLoading(false);
    }
  

   
     
    const MemberList = [
        {
            name: member1Email,
            idc: member1IDC
        }
        ,
        {
            name: member2Email,
            idc: member2IDC
        }
        ,
        {
            name: member3Email,
            idc: member3IDC
        },
        {
            name: member4Email,
            idc: member4IDC
        }
    ]

    const Memberview =({member,idc,no})=> {
        return(
            
                <div className="flex flex-col flex-1 space-y-5 ">
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 w-"/>
                    <p className='text-lg font-medium text-black text-center'>Member {no} Information</p>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-black">
                        Member {no} : Email
                      </label>
                      <input
                        // onChange={(e) => {
                        //   setEmail(e.target.value);
                        // }}
                        type="email"
                        name="email"
                        id="email"
                        className=" bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                        placeholder="eon@anokha.amrita.edu"
                        required
                      />
                    </div>

                    
                      <div>
                        <label
                          htmlFor="idc"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Member {no} : Intel Dev Cloud ID
                        </label>
                        <input
                        //   onChange={(e) => {
                        //     setCollegeName(e.target.value);
                        //   }}
                          type="text"
                          name="devcloudid"
                          id="devcloudid"
                        //   value={collegeName}
                          className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                          placeholder="IDC ID"
                        //   disabled={isAmrita}
                        />
                        
                      </div>
            </div>
        )
    }

  return (
    <div>
      <Navbar />
      <main className="w-full h-full bg-[rgb(10,17,58)]">
      {/* <WebGLApp colors={webGLColors} /> */}

      <div className="block my-auto space-y-24 md:space-y-10">
        {/* <Navbar />/ */}
        <div className="relative min-h-screen">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[100px] absolute blur-3xl levitate"></div>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">

          <form className="space-y-4 md:space-y-6 flex flex-col md:flex-row md:gap-10 justify-center"
                //   onSubmit={handleSignUp}
                >
            <div className="w-full md:w-[560px] md:hidden  md:h-[600px]  rounded-md bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2   xl:p-0 bg-white">
              {/* <Image
                src={anokhalogo}
                priority
                alt="Amrita logo"
                width={128}
                height={128}
                className="ml-auto mr-auto mt-4 h-16"
              /> */}
              <div className="w-full flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl mx-auto top-10 font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Register
                </h1>
                

                   {/* First card */}
                  
                  <div className="flex flex-col justify-center md:space-y-10 flex-1 space-y-5  ">
                    <section>
                        <div>
                          <label
                            htmlFor="teamname"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            Your Team Name
                          </label>
                          <input
                            type="text"
                            // onChange={(e) => {
                            //   setName(e.target.value);
                            // }}
                            name="teamname"
                            id="teamname"
                            className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                            placeholder="Team Name"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-black">
                            Number of Team Members
                          </label>
                          <input
                            // onChange={(e) => {
                            //   setPhone(e.target.value);
                            // }}
                            type="number"
                            name="teamnumber"
                            id="teamnumber"
                            className="bg-transparent text-center border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5"
                            placeholder="3" min="3" max="4" 
                            required
                          />
                        </div>
                        <div>
                          <div>
                            <label
                              htmlFor="college"
                              className="block mb-2 text-sm font-medium text-black"
                            >
                              Registered through
                            </label>

                            <div className='flex'>
                            <select id="platform" className="bg-transparent mr-2 border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5 border-y-1">
                            <option value="none" defaultValue>None</option>
                            <option value="devfolio">DevFolio</option>
                            <option value="unstop">Unstop</option>
                            <option value="devpost">Devpost</option>
                            </select>
                            <input
                            //   onChange={(e) => {
                            //     setCollegeName(e.target.value);
                            //   }}
                              type="text"
                              name="platformid"
                              id="platformid"
                            //   value={collegeName}
                              className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                              placeholder="Platform ID"
                            //   disabled={isAmrita}
                            />

                            </div>
                            
                            

                          </div>
                        </div>
                    </section>
                    
                    {/* Div to enter Member  */}
                    <div className="flex md:hidden flex-col flex-1 space-y-5 pt-5">
                     
                        {MemberList.map((link, index) => (
                            
                                <Memberview key ={index} member={link.name} idc = {link.idc} no={index+1}/>
                            )
                        ) }
                    </div>

                       

                    {/* Buttons to submit  */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="w-[200px] text-black bg-[#f69c18] mb-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                        // disabled={loading}
                      >
                        Sign Up
                      </button>
                      <p className="text-sm font-light text-[#ed1d21]">
                        Already have an account?{" "}
                        <a
                          href="/login"
                          className="font-medium text-primary-500 hover:underline"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>

                  </div>
              </div>
            </div>
            
            {
                currentStep === 0? <FirstRegister  handle_buttonone_click={handle_button_next_click} TeamName = {[teamName,setTeamName]} NoofMembers={[noofMembers,setNoofMembers]} platform={[platform,setPlatform]} />
                :currentStep === 1 ?  <SecondRegister me1={member1Email} mi1={member1IDC} me2={member2Email} mi2={member2IDC} member1Email={setMember1Email} member1IDC = {setMember1IDC} member2Email={setMember2Email } member2IDC={setMember2IDC}  handle_next_click={handle_button_next_click} handle_prev_click = {handle_button_Prev_click}/> 
                : currentStep === 2 ? <ThirdRegister n={noofMembers} me3={member3Email} mi3={member3IDC} me4={member4Email} mi4={member4IDC} member3Email={setMember3Email} member3IDC={setMember3IDC} member4Email={setMember4Email} member4IDC={setMember4IDC} handle_register_click={handle_button_register_click} handle_prev_click = {handle_button_Prev_click} />:null
            
            }


          </form>
              
              
            
           
          </div>
        </div>
      </div>
    </main>
 
    </div>
  )
}

export default Register