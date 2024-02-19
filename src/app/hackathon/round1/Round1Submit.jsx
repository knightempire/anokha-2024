"use client";
import { useState, useEffect, useRef } from "react";
import { HACKATHON_FIRST_ROUND_SUBMISSION_URL } from "@/app/_util/constants.js";
import About from "../_components/About";


import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import ToastAlert from "@/app/_util/ToastAlerts";
import { useRouter } from "next/navigation";

import secureLocalStorage from "react-secure-storage";
import Footer from "@/app/components/Footer";
import { Button } from "@material-tailwind/react";

import RoundOne from "../_components/RoundOne";
import RoundOnePt2 from "../_components/RoundOnePt2";
import { LoadingScreen } from "@/app/_util/LoadingScreen/LoadingScreen";
import Navigationbar from "@/app/components/EventHeader";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [theme, setTheme] = useState(-1);
  const [problemStatement, setProblemStatement] = useState("");
  const [githublink, setGithubLink] = useState("");
  const [devmeshlink, setDevmeshLink] = useState("");
  const [youtubelink, setYoutubeLink] = useState("");
  const [pdflink, setPdfLink] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [secretToken, setSecretToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [isAmritaCBE, setIsAmritaCBE] = useState(0);
  const [hasActivePassport, setHasActivePassport] = useState(0);

  const toastRef = useRef();
  const router = useRouter();
  useEffect(() => {
    setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
    setIsAmritaCBE(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
    setHasActivePassport(
      parseInt(secureLocalStorage.getItem("hasActivePassport"))
    );
    setRegisterEmail(secureLocalStorage.getItem("registerEmail"));
    setSecretToken(secureLocalStorage.getItem("registerToken"));
  }, []);

  const handle_button_next_click = () => {
    setCurrentStep(currentStep + 1);
  };

  const handle_button_Prev_click = () => {
    setCurrentStep(currentStep - 1);
  };
  const handle_upload_click = async (e) => {
    try {
      console.log(
        JSON.stringify({
          theme: theme,
          problemStatement: problemStatement,
          pptFileLink: pdflink,
          githubLink: githublink,
          youtubeVideoLink: youtubelink,
          devmeshLink: devmeshlink,
        })
      );
      // setLoading(true);
      const response = await fetch(HACKATHON_FIRST_ROUND_SUBMISSION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + secretToken,
        },
        body: JSON.stringify({
          theme: theme,
          problemStatement: problemStatement,
          pptFileLink: pdflink,
          githubLink: githublink,
          youtubeVideoLink: youtubelink,
          devmeshLink: devmeshlink,
        }),
      });

      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        ToastAlert(
          "success",
          "Success",
          `${data.MESSAGE}`,
          toastRef
        );
        
    
        setTimeout(() => {
          router.push("/hackathon");
        }, 1500);
        } else if (response.status === 401) {
          ToastAlert(
            "error",
            "Session Expired",
        "Please Login again.",
            toastRef
           
          );
          setTimeout(() => {
            router.push("/hackathon");
          }, 1500);

          
        } else if (data.MESSAGE !== undefined || data.MESSAGE !== null) {
          ToastAlert("error", "Registration Failed", data.MESSAGE, toastRef);
        } else {
          ToastAlert(
            "error",
            "Oops!",
            "Something went wrong! Please try again later!",
            toastRef
          );
          return;
        }

        //  console.log(data);
      
    } catch (e) {
      // ToastAlert("error", "Error", "Please try again!", toastRef);
      console.log(e);
    }

    // setLoading(false);
  };

  useEffect(() => {
    console.log("Current Step", currentStep);
    console.log("Theme", theme);
    console.log("Problem Statement", problemStatement);
    console.log("Github Link", githublink);
    console.log("Devmesh Link", devmeshlink);
    console.log("Youtube Link", youtubelink);
    console.log("PDF Link", pdflink);
  }, [
    currentStep,
    theme,
    problemStatement,
    githublink,
    devmeshlink,
    youtubelink,
    pdflink,
  ]);

  return (
    (
      registerEmail === null ||
      secretToken === null ||
      registerEmail.length == 0 ||
      secretToken.length == 0) ? (
        
       
        <LoadingScreen />
         
       
    ) : 
    <div>
      <Navigationbar />
      <Toast ref={toastRef} position="bottom-center" className="p-5" />
      {currentStep === 0 ? (
        <RoundOne
          theme_val={theme}
          theme={setTheme}
          problem_val={problemStatement}
          problem={setProblemStatement}
          next={handle_button_next_click}
        />
      ) : currentStep === 1 ? (
        <RoundOnePt2
          prev={handle_button_Prev_click}
          upload={handle_upload_click}
          github_val={githublink}
          github={setGithubLink}
          devmesh={setDevmeshLink}
          devmesh_val={devmeshlink}
          youtube={setYoutubeLink}
          youtube_val={youtubelink}
          pdf={setPdfLink}
          pdf_val={pdflink}
        />
      ) : null}

      <Footer />
    </div>
  );
}
