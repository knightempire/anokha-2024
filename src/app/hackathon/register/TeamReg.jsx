"use client";
import { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HACKATHON_TEAM_REGISTER_URL } from "@/app/_util/constants";
import Navbar from "../_components/HackathonHeader";
import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

import FirstRegister from "@/app/hackathon/_components/_form/FirstRegister";
import SecondRegister from "@/app/hackathon/_components/_form/SecondRegister";
import ThirdRegister from "@/app/hackathon/_components/_form/ThirdRegister";
import secureLocalStorage from "react-secure-storage";

const RegisterSteps = [FirstRegister, SecondRegister, ThirdRegister];
const Register = () => {
  const toastRef = useRef();

  const [teamName, setTeamName] = useState("");
  const [noofMembers, setNoofMembers] = useState(3);
  const [platform, setPlatform] = useState("");
  const [member1Email, setMember1Email] = useState("");
  const [member1IDC, setMember1IDC] = useState("");
  const [member2Email, setMember2Email] = useState("");
  const [member2IDC, setMember2IDC] = useState("");
  const [member3Email, setMember3Email] = useState("");
  const [member3IDC, setMember3IDC] = useState("");
  const [member4Email, setMember4Email] = useState("");
  const [member4IDC, setMember4IDC] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [memOneTwo, setMemONeTwo] = useState([]);

  const [registerEmail, setRegisterEmail] = useState("");
  const [secretToken, setSecretToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [isAmritaCBE, setIsAmritaCBE] = useState(0);
  const [hasActivePassport, setHasActivePassport] = useState(0);

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

  const handle_teamname_change = (e) => {
    setTeamName(e.target.value);
  };
  const handle_noofMembers_change = (e) => {
    setNoofMembers(e.target.value);
  };
  const handle_platform_change = (e) => {
    setPlatform(e.target.value);
  };
  const handle_button_register_click = async (e) => {
    try {
      // Determine the selected platform ID based on the platform
      let selectedPlatformId;
      switch (platform) {
        case "Devfolio":
          selectedPlatformId = member1Email;
          break;
        case "Unstoppable":
          selectedPlatformId = member2Email;
          break;
        case "DevPost":
          selectedPlatformId = member3Email;
          break;
        default:
          break;
      }

      console.log(
        JSON.stringify({
          teamName: teamName,
          devfolioId: platform === "Devfolio" ? selectedPlatformId : "",
          unstopId: platform === "Unstoppable" ? selectedPlatformId : "",
          devpostId: platform === "DevPost" ? selectedPlatformId : "",
          teamMembers: [
            member2Email,
            member3Email,
            ...(noofMembers === 4 ? [member4Email] : []),
          ],
          idcId: [
            member1IDC,
            member2IDC,
            member3IDC,
            ...(noofMembers === 4 ? [member4IDC] : []),
          ],
        })
      );

      // Make the API call with the updated request body
      const response = await fetch(HACKATHON_TEAM_REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + secretToken,
        },
        body: JSON.stringify({
          teamName: teamName,
          devfolioId: platform === "Devfolio" ? selectedPlatformId : "",
          unstopId: platform === "Unstoppable" ? selectedPlatformId : "",
          devpostId: platform === "DevPost" ? selectedPlatformId : "",
          teamMembers: [
            member2Email,
            member3Email,
            ...(noofMembers === 4 ? [member4Email] : []),
          ],
          idcId: [
            member1IDC,
            member2IDC,
            member3IDC,
            ...(noofMembers === 4 ? [member4IDC] : []),
          ],
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        ToastAlert("success", "Success", "Registration Successful!", toastRef);
        console.log(data);
        //   secureLocalStorage.setItem("registerToken", data["SECRET_TOKEN"]);
        //   secureLocalStorage.setItem("registerEmail", email);

        setTimeout(() => {
          router.replace("/hackathon");
        }, 500);
      } else if (response.status === 400) {
        ToastAlert(
          "error",
          "Oops!",
          "Something went wrong! Please try again later!",
          toastRef
        );
        return;
      }
    } catch (e) {
      // ToastAlert("error", "Error", "Please try again!", toastRef);
      console.log(e);
    }

    // setLoading(false);
  };

  const MemberList = [
    {
      name: registerEmail,
      idc: member1IDC,
    },
    {
      name: member2Email,
      idc: member2IDC,
    },
    {
      name: member3Email,
      idc: member3IDC,
    },
    {
      name: member4Email,
      idc: member4IDC,
    },
  ];

  useEffect(() => {
    const mem_12 = {
      me1: registerEmail,
      mi1: member1IDC,
      me2: member2Email,
      mi2: member2IDC,
    };
    setMemONeTwo(mem_12);
  }, [member1IDC, member2Email, member2IDC]);

  const Memberview = ({ member, idc, no }) => {
    return (
      <div className="flex flex-col flex-1 space-y-5 ">
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 w-" />
        <p className="text-lg font-medium text-black text-center">
          Member {no} Information
        </p>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
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
    );
  };

  return (
    <div>
      <Navbar />
      <main className="w-full h-full bg-[rgb(10,17,58)] overflow-x-hidden">
      {/* <WebGLApp colors={webGLColors} /> */}

      <div className="block my-auto space-y-24 md:space-y-10">
        {/* <Navbar />/ */}
        <div className="p-2">
          <Toast ref={toastRef} position="bottom-center" className="p-5" />

        </div>
        <div className="relative min-h-screen">
        <div className="bg-gradient-to-r overflow-x-hidden inset-0 from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[100px] absolute blur-3xl levitate"></div>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">

          <form className="space-y-4 mt-10 md:space-y-6 flex flex-col md:flex-row md:gap-10 justify-center"
                //   onSubmit={handleSignUp}
              >
                {currentStep === 0 ? (
                  <FirstRegister
                    handle_buttonone_click={handle_button_next_click}
                    TeamName={[teamName, setTeamName]}
                    NoofMembers={[noofMembers, setNoofMembers]}
                    platform={[platform, setPlatform]}
                  />
                ) : currentStep === 1 ? (
                  <SecondRegister
                    me1={registerEmail}
                    mi1={member1IDC}
                    me2={member2Email}
                    mi2={member2IDC}
                    member1Email={setMember1Email}
                    member1IDC={setMember1IDC}
                    member2Email={setMember2Email}
                    member2IDC={setMember2IDC}
                    handle_next_click={handle_button_next_click}
                    handle_prev_click={handle_button_Prev_click}
                  />
                ) : currentStep === 2 ? (
                  <ThirdRegister
                    n={noofMembers}
                    me3={member3Email}
                    mi3={member3IDC}
                    me4={member4Email}
                    mi4={member4IDC}
                    member3Email={setMember3Email}
                    member3IDC={setMember3IDC}
                    member4Email={setMember4Email}
                    member4IDC={setMember4IDC}
                    mem12data={memOneTwo}
                    handle_register_click={handle_button_register_click}
                    handle_prev_click={handle_button_Prev_click}
                  />
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
