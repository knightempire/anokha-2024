import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FaDownload } from "react-icons/fa6";
import IeteInfo from "./IeteInfo";

const FAQs = () => {
  const guidelines = [
    {
      title: "Submission Guidelines",
      rules: [
        "Participants must strictly engage in the use of Intel® AI Analytics Toolkits, its libraries & SYCL/DPC++ libraries while framing their ideations. If not, your project will not be considered for further evaluation. ",
        "The ideations of the participants must be compiled in the form of a PowerPoint Presentation (PPT) converted into a PDF format for submission. ",
        "A sample template for idea submission will be given to the participants in their hackathon dashboard, all the points mentioned in the template should strictly be covered in their submission. ",
        "Link of the GitHub repository will be given to the participants in their hackathon dashboard. ",
        "Participants will be required to fork this repository and update the README file, filling in the required details. ",
        "To avoid disqualification, participants must submit their ideas in the hackathon dashboard before the deadline. ",
        "The prototype submission should be made on a GitHub public repository.",
        "The entire code base needs to be present on the team's GitHub repository.",
        "The prototype submission must emphasize on both deployment and inference, with and without Intel® one API.",
        "Pull requests of the forked repository need to be generated. ",
      ],
    },
  ];

  const qna = [
    {
      question: "Do I need to pay any money to register for the Hackathon?",
      answer:
        "No. You do not need to pay any registration fees for the Intel AI Hackathon, Anokha 2024.",
    },
    {
      question: "What is the team size of a hackathon?",
      answer: "A team should contain 3-4 members.",
    },
    {
      question:
        "Do I need to have any specific qualifications to be a participant in the Hackathon? ",
      answer:
        "The hackathon is open to undergraduates and postgraduates currently pursuing B.Tech, M.Tech, B.E, M.E, B.Sc, M.Sc, or equivalent degrees.",
    },
    {
      question: "When is the application deadline? ",
      answer:
        "The application closes on 29th Feb. Make sure to register and submit a project based on the given problem statement and theme! ",
    },
    {
      question: "How do I submit what I have made for the Hackathon? ",
      answer:
        "Phase 1: Submit your Ideathon presentation as a PowerPoint file on Google Drive and upload the link. Phase 2: Submit your project or prototype on GitHub; details will be provided later.",
    },
    {
      question:
        "Do we need to have the entire idea in full working condition? ",
      answer:
        "While a complete implementation is not mandatory, the submission should be functional, accompanied by proof of concepts/prototypes for review by the judges.",
    },
    {
      question:
        "How is the environment? Will your environment support any language? Will you provide any IDE and database for us to work on ideas?",
      answer:
        "You will be required to develop the entire software application on your local system or Intel DevCloud and submit it on GitHub. Include instructions for running the application and share the source code.",
    },
    {
      question: "Do I need to give a demo for the product that I have built?",
      answer:
        "Feel free to enhance your submission by providing a brief presentation or video. If you choose to do so, upload it as a private video on YouTube and share the link with us. Keep in mind that this is optional and not a mandatory requirement.",
    },
    {
      question:
        "A fully developed application needs to have a solid backend for data storage like SQL, SharePoint, etc. Considering that it is online, is it acceptable to show only the prototype of it?",
      answer:
        "It is acceptable to submit only the prototype. If you utilize databases such as MySQL or PostgreSQL, you have the option to include a database dump along with your submission. ",
    },
    {
      question:
        "Who will own the IP(Intellectual Property) Rights to the product that I have built?",
      answer:
        "The developer or developers of the web/mobile application will retain all rights and ownership of the intellectual property (IP) for the product. However, it is a requirement that all code be in the public domain (open source) for evaluation by the judges.",
    },
  ];
  return (
    <div className="bg-[rgb(10,17,58)] w-full h-full py-[100px]">
      <div className="md:w-[70%] mx-auto sm:w-[90%]">


        <Accordion key={0} className="rounded my-2 p-2">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header" 
          >
            <Typography className="font-bold  border-black b-4 px-7 py-1 text-xl text-black">
              Hackathon Guidelines
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="px-7">
              <ul className="list-disc md:px-[40px] sm:px-3 md:pb-10  pt-0 sm:py-8 text-md  text-black space-y-1">
                {guidelines[0].rules.map((val, index) => (
                  <li key={index} className="m-0">
                    {val}
                  </li>
                ))}
              </ul>
            </Typography>
            <div class="card-submit ml-auto mr-auto mt-[0%] mb-[1%] w-[100%y]">
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="text-xl mb-[2%] ml-[25%]">Download Sample PPT</h3>
                <a
                  href="https://amritavishwavidyapeetham-my.sharepoint.com/:p:/g/personal/cb_en_u4cse21608_cb_students_amrita_edu/EaAaxjKyWIVLsBlk1ZIgHHABXoTydcJakpTu6g0Tp3ZXug"
                  download
                  className="before:ease relative h-12 w-50 overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
                >
                  <FaDownload size={30} />
                </a>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>


        <Accordion key={0} className="rounded my-2  p-2">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold border-black b-4 px-7 py-1 text-xl text-black">
              Organizer Contact Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
                <IeteInfo/>
          </AccordionDetails>
        </Accordion>
                       

        <Accordion key={0} className="rounded my-2 p-2 ">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold  border-black b-4 px-7 py-1 text-xl text-black">
              FAQs
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {qna.map((val, index) => (
              <Accordion key={index} className="rounded my-2 p-2 bg-gray-300">
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography className="px-7 py-1 text-md text-black">
                    {val.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="px-7 ">{val.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
