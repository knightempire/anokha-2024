"use client"
import  {useState,useEffect} from 'react'
import Navbar from '../_components/HackathonHeader'
 
import About from '../_components/About'
 
 
import Footer from '../_components/Footer'
import {Button } from "@material-tailwind/react";
 
import RoundOne from '../_components/RoundOne'
import RoundOnePt2 from '../_components/RoundOnePt2'
 
export default function page() {
    const [currentStep,setCurrentStep] = useState(0);
    const [theme,setTheme] = useState( -1);
    const [problemStatement,setProblemStatement] = useState("");
    const [githublink,setGithubLink] = useState("");
    const [devmeshlink,setDevmeshLink] = useState("");
    const [youtubelink,setYoutubeLink] = useState("");
    const [pdflink,setPdfLink] = useState("");

    const handle_button_next_click = () =>{
        setCurrentStep(currentStep+1) 
      }   
      
    const handle_button_Prev_click = ()=>{
        setCurrentStep(currentStep-1)
      }
    const handle_upload_click = ()=>{
        console.log("uploaded")
    }

      useEffect(() => {
        console.log('Current Step',currentStep)
        console.log('Theme',theme)
        console.log('Problem Statement',problemStatement)
        console.log('Github Link',githublink)   
        console.log('Devmesh Link',devmeshlink)
        console.log('Youtube Link',youtubelink)
        console.log('PDF Link',pdflink)

      },
      [currentStep,theme,problemStatement,githublink,devmeshlink,youtubelink,pdflink])  


  return (
  
        <div>
            
        <Navbar />
        
        {
                currentStep === 0? <RoundOne theme_val={theme} theme={setTheme} problem_val={problemStatement} problem={setProblemStatement} next={handle_button_next_click}/>  
                :currentStep === 1 ? <RoundOnePt2  prev={handle_button_Prev_click} upload={handle_upload_click} github_val={githublink} github={setGithubLink} devmesh={setDevmeshLink} devmesh_val={devmeshlink} youtube={setYoutubeLink} youtube_val={youtubelink} pdf={setPdfLink} pdf_val={pdflink}  />:null
            
            }
        
        
        
        <Footer/>
    </div>
     
  )
}
