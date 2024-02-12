import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Dropdown } from "primereact/dropdown";
import { FaGithub } from "react-icons/fa";
import { SiIntel } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdEditOff } from "react-icons/md";

const RoundOneComp = ({ roundOneSubmission }) => {
  const [editable, setEditable] = useState(0);

  roundOneSubmission = [
    {
      theme: "0",
      problemStatement: "github.com/Sajithrajan03",
      githubLink: "github.com/Sajithrajan03",
      youtubeVideoLink: "github.com/Sajithrajan03",
      devmeshLink: "https://github.com/Sajithrajan03",
      pptFileLink: "https://github.com/Sajithrajan03",
    },
  ];
  const availThemes = [
    { code: "0", val: "GenAI" },
    { code: "1", val: "IOT" },
    { code: "2", val: "Healthcare" },
    { code: "3", val: "AutonomousVehicles" },
    { code: "4", val: "CyberSecurity" },
    { code: "5", val: "OpenEnded" },
  ];
  const ThemeCode = {
    0: "GenAI",
    1: "IOT",
    2: "Healthcare",
    3: "AutonomousVehicles",
    4: "CyberSecurity",
    5: "OpenEnded",
  };
  const [gitLink, setGitLink] = useState(roundOneSubmission[0]["githubLink"]);
  const [ytLink, setYTLink] = useState(
    roundOneSubmission[0]["youtubeVideoLink"]
  );
  const [devMeshLink, setDevMeshLink] = useState(
    roundOneSubmission[0]["devmeshLink"]
  );
  const [pptLink, setPptLink] = useState(roundOneSubmission[0]["pptFileLink"]);
  const [canSubmit, setCanSubmit] = useState(0);

  //Use this for sending to backend
  const [themeCode, setThemeCode] = useState("0");

  const [theme, setTheme] = useState(ThemeCode[roundOneSubmission[0]["theme"]]);
  const [probStatement, setProbStat] = useState(
    roundOneSubmission[0]["problemStatement"]
  );
  const changeTheme = (e) => {
    console.log(e.target.value);
    for (let i in ThemeCode) {
      if (ThemeCode[i] == e.target.value) {
        console.log(i);
        setTheme(e.target.value);
        setThemeCode(toString(i));
      }
    }
  };
  useEffect(() => {
    if (
      ((gitLink == roundOneSubmission[0]["githubLink"] &&
        ytLink == roundOneSubmission[0]["youtubeVideoLink"] &&
        devMeshLink == roundOneSubmission[0]["devmeshLink"] &&
        pptLink == roundOneSubmission[0]["pptFileLink"] &&
        probStatement == roundOneSubmission[0]["problemStatement"]) ||
      editable != 0)
    ) {
      setCanSubmit(0);
    } else {
      setCanSubmit(1);
    }
  }, [probStatement, theme, gitLink, ytLink, devMeshLink, pptLink]);

  const handleSubmit = () => {};

  const SubmissionComponent = (icon, link, setLink) => {
    return (
      <div className="flex bg-white  text-black items-center rounded px-4 py-2 gap-3 mt-3">
        {icon == "github" ? (
          <FaGithub size={30} />
        ) : icon == "YT" ? (
          <FaYoutube size={30} />
        ) : icon == "devmesh" ? (
          <SiIntel size={30} />
        ) : icon == "pdf" ? (
          <p className="w-[90px] font-bold">PDF Link</p>
        ) : (
          ""
        )}
        <div className="w-full focus:outline-0 pl-2">
          <a
            href={link}
            target="blank"
            className={editable ? "hidden" : "text-blue-400"}
          >
            {link}
          </a>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className={editable ? "focus:outline-0 w-full" : "hidden"}
          />
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-[#0a113a] text-white w-full p-5 pt-0 h-[80%] rounded-b-xl ">
      <div className="bg-[#0a113a] text-white rounded-xl p-6 w-full h-full mx-auto pt-1">
        <div className="flex flex-row mx-auto justify-between">
          <p className="text-center mb-8 text-xl ml-[43%] mt-3">Submission</p>
          {editable ? (
            <MdEditOff
              onClick={(e) => setEditable(!editable)}
              className="mt-2"
            />
          ) : (
            <MdEdit onClick={(e) => setEditable(!editable)} className="mt-2" />
          )}
        </div>
        <div className="flex flex-row gap-4">
          <Dropdown
            disabled={!editable}
            value={theme}
            onChange={(e) => changeTheme(e)}
            options={availThemes}
            optionLabel="val"
            optionValue="val"
            placeholder="Theme"
            className="w-[100px] h-fit flex-1"
          ></Dropdown>
          <div className="flex-2 bg-white text-black items-center p-2 rounded-md">
            <div className=" focus:outline-0 pl-2">
              <textarea
                style={{ resize: "none", height: "170px" }}
                disabled={!editable}
                placeholder="Enter problem statement"
                value={probStatement}
                onChange={(e) => setProbStat(e.target.value)}
                className="focus:outline-0 w-full"
                maxLength={500}
                cols={400}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {SubmissionComponent("github", gitLink, setGitLink)}
          {SubmissionComponent("YT", ytLink, setYTLink)}
          {SubmissionComponent("devmesh", devMeshLink, setDevMeshLink)}
          {SubmissionComponent("pdf", pptLink, setPptLink)}
        </div>

        <Button
          className="mx-auto text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40 mt-6"
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          <span relative="relative z-10">Submit</span>
        </Button>
      </div>
    </div>
  );
};

export default RoundOneComp;
