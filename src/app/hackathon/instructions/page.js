// pages/index.js
"use client";
import React from "react";
import { SimpleCard } from "../_components/InstructCard";
import Resources from "../_components/Resources";
import SubGuidelines from "../_components/SubGuidelines";
import Image from "next/image";
import flowChart from "../images/process.jpg";
import Rules from "../_components/Rules";
import Judging from "../_components/Judging";
import Navigationbar from "@/app/components/EventHeader";
import Footer from "@/app/components/Footer";
import TimelineInstruct from "../_components/IntructTimeline";
import { FaAngleDoubleDown } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
const Home = () => {
  const handleScrollMore = () => {
    window.scrollTo({
      top: window.scrollY + 700, // Adjust the value as needed for your desired scroll distance
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };
  return (
    <div className="">
      <Navigationbar />
      {/* <Instructions/> */}
      <div className="w-full h-screen  relative flex flex-col justify-center items-center bg-[#0A113A]">
        <div className="font-poppins text-white ml-auto mr-auto lg:mt-[7%] md:mt-[10%] sm:mt-[25%] text-center">
          <h1 className="text-4xl font-black">INSTRUCTIONS</h1>
          <p className="text-lg mb-8">Follow these steps to get started</p>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] p-8 rounded-[50%] md:h-[40%] sm:h-[45%] sm:left-[12%] md:left-[25%] md:top-[35%] sm:top-[35%] absolute blur-3xl levitate sm:w-[80%]"></div>
          <SimpleCard />

          <div className=" inset-0 flex justify-center items-center">
            <div
              onClick={handleScrollMore}
              className="bg-white text-black animate-bounce absolute md:top-[92%] sm:top-[90%]  w-60 rounded-full px-3 py-2 flex items-center justify-center"
            >
              Scroll More <FaAngleDoubleDown className="ml-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[70%] mx-auto sm:w-[90%]">
        <Accordion key={0} className="rounded my-2 p-2">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold text-center border-black b-4 px-7 py-1 text-xl text-black">
              Pre-Requisites for the Hackathon
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="ml-5 text-[17px]">
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Intel®️ Developer Cloud setup guide{" "}
                  <a
                    href="https://www.youtube.com/watch?v=QFR3SvcTikY&t=5s"
                    target="_blank"
                    className="text-blue-500 font-bold underline"
                  >
                    Link 1
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=Enp8TP7ac18&t=61s"
                    target="_blank"
                    className="text-blue-500 font-bold underline"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  Intel®️ AI Analytics Toolkit and Libraries{" "}
                  <a
                    href="http://tinyurl.com/3a9rd6by"
                    target="_blank"
                    className="text-blue-500 font-bold underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <strong>GitHub repo links</strong>
                  <ul className="list-disc ml-6">
                    <li>
                      GitHub repo:{" "}
                      <a
                        href="https://github.com/Sriram-code/Intel-Hackathon/tree/main"
                        target="_blank"
                        className="text-blue-500 font-bold underline"
                      >
                        Link 1
                      </a>
                    </li>
                    <li>
                      GitHub repo:{" "}
                      <a
                        href="https://github.com/jaydip1235/oneAPI-GenAI-Hackathon-2023/tree/main/Lannister-Lions"
                        target="_blank"
                        className="text-blue-500 font-bold underline"
                      >
                        Link 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Demo:{" "}
                  <a
                    href="https://youtu.be/Z-T3kgeMHlM?si=eI6Na2tvrrk6Gz7t"
                    target="_blank"
                    className="text-blue-500 font-bold underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  Signing up to Intel®️ Developer Cloud - IDC link{" "}
                  <a
                    href="https://console.cloud.intel.com/"
                    target="_blank"
                    className="text-blue-500 font-bold underline"
                  >
                    https://console.cloud.intel.com/
                  </a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion key={0} className="rounded my-2 p-2 ">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold text-center border-black b-4 px-7 py-1 text-xl text-black">
              Submission Guidelines
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SubGuidelines />
          </AccordionDetails>
        </Accordion>
        <Accordion key={0} className="rounded my-2 p-2">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold text-center border-black b-4 px-7 py-1 text-xl text-black">
              Hackathon Timeline
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TimelineInstruct />
          </AccordionDetails>
        </Accordion>
        <Accordion key={0} className="rounded my-2 p-2">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold text-center border-black b-4 px-7 py-1 text-xl text-black">
              Rules
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Rules />
          </AccordionDetails>
        </Accordion>
        <Accordion key={0} className="rounded my-2 p-2">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold text-center border-black b-4 px-7 py-1 text-xl text-black">
              Judging Criteria
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Judging />
          </AccordionDetails>
        </Accordion>
        <Accordion key={0} className="rounded my-2 p-2">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="faq-header"
          >
            <Typography className="font-bold text-center border-black b-4 px-7 py-1 text-xl text-black">
              Resources
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Resources />
          </AccordionDetails>
        </Accordion>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
