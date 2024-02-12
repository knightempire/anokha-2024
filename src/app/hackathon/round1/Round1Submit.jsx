"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../_components/HackathonHeader";
import { HACKATHON_FIRST_ROUND_SUBMISSION_URL } from "@/app/_util/constants.js";
import About from "../_components/About";
import { Toast } from "primereact/toast";

import secureLocalStorage from "react-secure-storage";
import Footer from "../_components/Footer";
import { Button } from "@material-tailwind/react";

import RoundOne from "../_components/RoundOne";
import RoundOnePt2 from "../_components/RoundOnePt2";

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

  const toastRef = useRef(null);

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
        // ToastAlert(
        //   "success",
        //   "Success",
        //   "Registration Successful!",
        //   toastRef
        // );
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
      }
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
 
    <div>
      <Navbar />

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
