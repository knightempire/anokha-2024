"use client"
import React from 'react'
import Navbar from './_components/HackathonHeader'
import Price from './_components/Price'
import Themes from './_components/Themes'
import About from './_components/About'
import Carousel from './_components/Carousel'
import Timeline from './_components/Timeline'
import Footer from './_components/Footer'
import {Button } from "@material-tailwind/react";
import HeroSection from './_components/HeroSection'
import IntelHero from './_components/IntelHero'
import Phases from './_components/Phases'
 
import { useState,useEffect } from 'react'
import RoundOne from './_components/RoundOne'
import RoundOnePt2 from './_components/RoundOnePt2'
import secureLocalStorage from 'react-secure-storage'
import {HACKATHON_DASHBOARD_URL} from "@/app/_util/constants"
import { useRouter } from 'next/navigation'
import {useAuth} from "@/app/_auth/useAuth"

import Resources from './_components/Resources'
import FAQs from './_components/FAQs'
import Rules from './_components/Rules'
import Judging from './_components/Judging'
 
import WinnerPrice from './_components/WinnerPrice'
import SubGuidelines from './_components/SubGuidelines'
 
export default function page() {
    const router = useRouter()
    const {SignOut} = useAuth()
    const [currentStep,setCurrentStep] = useState(0);
    const [theme,setTheme] = useState( -1);
    const [problemStatement,setProblemStatement] = useState("");
    const [githublink,setGithubLink] = useState("");
    const [devmeshlink,setDevmeshLink] = useState("");
    const [youtubelink,setYoutubeLink] = useState("");
    const [pdflink,setPdfLink] = useState("");
    const [currentState, setCurrentState] = useState("guest");

    
    const [secretToken, setSecretToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(0);
    const [userState,setUserState] = useState(0) 
    const [displayResult,setDisplayResult] = useState(0)

    useEffect(()=>{
        console.log(userState,displayResult)
    },[userState,displayResult])

    useEffect(()=>{
      console.log(isLoggedIn,secretToken,userState)
      if (isLoggedIn===1 ) {
         
        setUserState(GetDashboard(secretToken))
        console.log(GetDashboard(secretToken))
         
      }
    },[isLoggedIn,secretToken])

    useEffect(() => {
      setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
      setSecretToken(secureLocalStorage.getItem("registerToken"));
    }, []);

    const GetDashboard = async (token) =>{
      try{
          const response = await fetch(HACKATHON_DASHBOARD_URL, {
              method: "GET",
              headers: {
              
              "Authorization": "Bearer " + token,
              },
              
          });
  
          // userState -> 0 -> not logged in
          // userState -> 1 -> logged in but not registered
          // userState -> 2 -> logged in and registered
          

          const data = await response.json();
          console.log(data)
          if (response.status === 200) {
              // ToastAlert('success', "Success", "Registration successful", toastRef);
              secureLocalStorage.setItem("DashBoardData",  JSON.stringify(data));
              if (data.secondRoundSubmission.length!=0) {
                setDisplayResult(2)
              }
              else if (data.firstRoundSubmission.length!=0) {
                setDisplayResult(1)
              }
              
              setUserState(2)
          }   
          else if (response.status === 401) {
            //timeout
            setUserState(0)
            SignOut()
              
          }
          else if (response.status === 400) {
            
            setUserState(1)
        }

              


      }catch(e){
          console.log(e);
          return -1;
      }
  }   


    console.log(isLoggedIn,secretToken,userState)
    // 
    const getButtonText = () => {
      switch (currentState) {
        case "guest":
          return <IntelHero />;
        case "registered":
          return (
            currentStep === 0? <RoundOne theme_val={theme} theme={setTheme} problem_val={problemStatement} problem={setProblemStatement} next={handle_button_next_click}/>  
            :currentStep === 1 ? <RoundOnePt2  prev={handle_button_Prev_click} upload={handle_upload_click} github_val={githublink} github={setGithubLink} devmesh={setDevmeshLink} devmesh_val={devmeshlink} youtube={setYoutubeLink} youtube_val={youtubelink} pdf={setPdfLink} pdf_val={pdflink}  />:null
        
        );
        default:
          return "Register";
      }
    };

    const handle_button_next_click = () =>{
        setCurrentStep(currentStep+1) 
      }   
      
    const handle_button_Prev_click = ()=>{
        setCurrentStep(currentStep-1)
      }
    const handle_upload_click = ()=>{
        console.log("uploaded")
    }
  return (
  
        <div className="overflow-x-hidden w-full bg-gray-200"> 
            
        <Navbar />
        
        {/* <div className='flex-1 min-h-screen bg-[#193056] flex items-center justify-center'>
             HERO LANDER
            <Button variant='text'>Materials</Button>
            <Button variant='text'>Register</Button>
        </div> */}

        
        
        
        <IntelHero userState={userState} displayResult={displayResult} />
       
        <Price />
        <About/>
        <Phases/>
        <SubGuidelines/>
        <Themes />
        <Timeline/>  
        <Rules/>
 
        {/* <WinnerPrice/> */}
 
        <Judging/>
        <WinnerPrice/>
        <Resources/>
        <FAQs/>
        <Footer/>
    </div>
     
  )
}