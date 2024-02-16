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
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[70%] p-8 rounded-[50%] lg:h-[60%] md:h-[40%] sm:h-[25%] lg:left-[20%] sm:left-[12%] md:left-[18%] lg:top-[20%] md:top-[30%] sm:top-[35%] absolute blur-3xl levitate sm:w-[80%]"></div>
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
