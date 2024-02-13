import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FAQs = () => {

    const qna = [
        {
            question: "Do I need to pay any money to register for the Hackathon?",
            answer: "No. You do not need to pay any registration fees for the Intel AI Hackathon, Anokha 2024."
        },
        {
            question: "What is the team size of a hackathon?",
            answer: "A team should contain 3-4 members."
        },
        {
            question: "Do I need to have any specific qualifications to be a participant in the Hackathon? ",
            answer: "Open to undergraduates and postgraduates pursuing B.Tech, M.Tech, B.E, M.E, B.Sc, M.Sc, or equivalent degrees."
        },
        {
            question: "When is the application deadline? ",
            answer: "The application closes on 29th Feb. Make sure to register and submit a project based on the given problem statement and theme! "
        },
        {
            question: "How do I submit what I have made for the Hackathon? ",
            answer: "Phase 1: Submit your Ideathon presentation as a PowerPoint file on Google Drive and upload the link. Phase 2: Submit your project or prototype on GitHub; details will be provided later."
        },
        {
            question: "Do we need to have the entire idea in full working condition? ",
            answer: "While a complete implementation is not mandatory, the submission should be functional, accompanied by proof of concepts/prototypes for review by the judges."
        },
        {
            question: "How is the environment? Will your environment support any language? Will you provide any IDE and DB for us to work on ideas?",
            answer: "You will be required to develop the entire software application on your local system or Intel DevCloud and submit it on GitHub. Include instructions for running the application and share the source code."
        },
        {
            question: "Do I need to give a demo for the product that I have built?",
            answer: "Feel free to enhance your submission by providing a brief presentation or video. If you choose to do so, upload it as a private video on YouTube and share the link with us. Keep in mind that this is optional and not a mandatory requirement."
        },
        {
            question: "A fully developed application needs to have a solid backend for data storage like SQL, SharePoint, etc. since it's online, is it acceptable to show only the prototype of it?",
            answer: "It is acceptable to submit only the prototype. If you utilize databases such as MySQL or PostgreSQL, you have the option to include a database dump along with your submission. "
        },
        {
            question: "Who will own the IP(Intellectual Property) Rights to the product that I have built?",
            answer: "The developer or developers of the web/mobile application will retain all rights and ownership of the intellectual property (IP) for the product. However, it is a requirement that all code be in the public domain (open source) for evaluation by the judges."
        },
        
    ]
  return (
    <div className='bg-gradient-to-r from-[#0A113A] to-blue-800  w-full h-full py-[60px]'>
      <h1 className="text-[3rem] font-bold text-center text-white md:pb-2">FAQs</h1>
      <div className='md:w-[70%] mx-auto sm:w-[90%]'>
        {qna.map((val, index) =>(
            <Accordion key={index} className='rounded my-2 p-2'>
            <AccordionSummary 
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className='px-7 py-1 text-md text-black'>{val.question}</Typography>
            </AccordionSummary>
            <AccordionDetails >
            <Typography className='px-7 '>
                {val.answer}
            </Typography>
            </AccordionDetails>
        </Accordion>
        ))}
      </div>
    </div>
  )
}

export default FAQs
