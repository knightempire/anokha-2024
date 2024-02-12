import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { SiIntel } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdEditOff } from "react-icons/md";

const RoundOneComp = ({ roundOneSubmission }) => {
  const [gitEditable, setGitEditable] = useState(0);
  const [ytEditable, setYTEditable] = useState(0);
  const [devMeshEditable, setDevMeshEditable] = useState(0);
  const [pptEditable, setPptEditable] = useState(0);

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

  const [gitLink, setGitLink] = useState(roundOneSubmission[0]["githubLink"]);
  const [ytLink, setYTLink] = useState(
    roundOneSubmission[0]["youtubeVideoLink"]
  );
  const [devMeshLink, setDevMeshLink] = useState(
    roundOneSubmission[0]["devmeshLink"]
  );
  const [pptLink, setPptLink] = useState(roundOneSubmission[0]["pptFileLink"]);
  const [canSubmit, setCanSubmit] = useState(0);

  useEffect(() => {
    if (
      (gitLink == roundOneSubmission[0]["githubLink"] &&
      ytLink == roundOneSubmission[0]["youtubeVideoLink"] &&
      devMeshLink == roundOneSubmission[0]["devmeshLink"] &&
      pptLink == roundOneSubmission[0]["pptFileLink"]) || (gitEditable != 0 ||
        ytEditable != 0 ||
        devMeshEditable != 0 ||
        pptEditable != 0)
    ) {
      setCanSubmit(0);
    } else {
      setCanSubmit(1);
    }
  }, [gitEditable, ytEditable, devMeshEditable, pptEditable, gitLink, ytLink, devMeshLink, pptLink]);

  const handleSubmit = () => {
  };
  const SubmissionComponent = (
    icon,
    link,
    linkEditState,
    setLink,
    setLinkEdit
  ) => {
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
            className={linkEditState ? "hidden" : "text-blue-400"}
          >
            {link}
          </a>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className={linkEditState ? "focus:outline-0 w-full" : "hidden"}
          />
        </div>
        {linkEditState ? (
          <MdEditOff size={22} onClick={() => setLinkEdit(!linkEditState)} />
        ) : (
          <MdEdit size={22} onClick={() => setLinkEdit(!linkEditState)} />
        )}
      </div>
    );
  };

  return (
    <div className=" bg-[#0a113a] text-white w-full p-5 pt-0 h-[80%] rounded-b-xl">
      <div className="bg-[#0a113a] text-white rounded-xl p-6 w-full h-full mx-auto py-[5%]">
        <h1 className="font-bold text-3xl text-center">Round 1</h1>
        <p className="text-center">PDF Submission</p>
        {SubmissionComponent(
          "github",
          gitLink,
          gitEditable,
          setGitLink,
          setGitEditable
        )}
        {SubmissionComponent(
          "YT",
          ytLink,
          ytEditable,
          setYTLink,
          setYTEditable
        )}
        {SubmissionComponent(
          "devmesh",
          devMeshLink,
          devMeshEditable,
          setDevMeshLink,
          setDevMeshEditable
        )}
        {SubmissionComponent(
          "pdf",
          pptLink,
          pptEditable,
          setPptLink,
          setPptEditable
        )}

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
