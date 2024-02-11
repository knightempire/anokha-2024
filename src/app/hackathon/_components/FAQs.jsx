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
            question: "Lorem Ipsum?",
            answer: "Yes"
        },
        {
            question: "Lorem Ipsum?",
            answer: "No"
        },
        {
            question: "Lorem Ipsum?",
            answer: "Yes"
        },
        {
            question: "Lorem Ipsum?",
            answer: "Okay"
        }
    ]
  return (
    <div className='bg-gradient-to-r from-[#0A113A] to-blue-800  w-full h-full py-[60px]'>
      <h1 className="text-[3rem] font-bold text-center text-white md:pb-2">FAQs</h1>
      <div className='md:w-[50%] mx-auto sm:w-[90%]'>
        {qna.map((val, index) =>(
            <Accordion >
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
