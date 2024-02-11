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
            answer: "No. You do not have to pay anything to anyone to register yourself for this Intel AI Hackathon for Anokha."
        },
        {
            question: "What is the team size of a hackathon?",
            answer: "A team should contain 3-4 members."
        },
        {
            question: "Do I need to have any specific qualifications to be a participant for the Hackathon? ",
            answer: "Undergraduate students pursuing B.Tech, B.E, Bsc or any other equivalent degree."
        },
        {
            question: "When is the application deadline? ",
            answer: "The application closes on 29th Feb. Make sure to register and submit a project based on the given problem statement and theme! "
        },
        {
            question: "How do I submit what I have made for the Hackathon? ",
            answer: "For the Phase 1 You need to submit the ideathon ppt in gdrive and upload the link. For the Phase 2 , your project/prototype should be submitted in the github that will be informed later."
        },
        {
            question: "Do we need to have the entire idea fully working? ",
            answer: "The entire idea need not be fully implemented; however, the submission should be functional and submitted with proof of concepts/prototypes so that it can be reviewed by the judges."
        },
        {
            question: "How is the environment? Will your environment support any language? Will you provide any IDE and DB for us to work on ideas? ",
            answer: "You have to develop the entire software application on your local system or intel dev cloud and submit it on github along with instructions to run the application and source code."
        },
        {
            question: "Do I need to give a demo for the product that I have built? ",
            answer: "If you want you can submit a small presentation or video that demonstrates your submission and upload it as a private video to Youtube and share us the link, however it's not mandatory."
        },
        {
            question: "A fully developed application needs to have a solid backend for data storage like SQL, SharePoint etc. since it's online, is it acceptable to show only the proto type of it?",
            answer: "Yes it's absolutely fine to submit just the prototype. If you use any database like MySQL or PostgreSQL you can also submit a database dump along with your submission. However you are allowed to submit just the prototype."
        },
        {
            question: "Who will own the IP(Intellectual Property) Rights to the product that I have built?",
            answer: "The developer/developers of the web/mobile application will have all rights and own the IP of the product. However, all code needs to be in public domain (open source) so that it can be evaluated by the judges."
        },
        
    ]
  return (
    <div className='bg-gradient-to-r from-[#0A113A] to-blue-800  w-full h-full py-[60px]'>
      <h1 className="text-[3rem] font-bold text-center text-white md:pb-2">FAQs</h1>
      <div className='md:w-[50%] mx-auto sm:w-[90%]'>
        {qna.map((val, index) =>(
            <Accordion className='rounded my-2 p-2'>
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
