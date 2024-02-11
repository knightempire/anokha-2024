import React from "react";
import { FaCode } from "react-icons/fa";
import { IoMdBuild } from "react-icons/io";
import { IoSparkles } from "react-icons/io5";

const judge = [
  {
    title: "Code Quality",
    criteria: [
      "Code is easy to understand and is reproducible",
      "Code is well tested, and functions without errors",
      "Code is well documented",
    ],
  },
  {
    title: "Technical Implementation",
    criteria: [
      "Intel® AI Analytics Toolkits, its Libraries and SYCL/DPC++ Libraries are leveraged and used appropriately by developer",
      "Data Preprocessing and Exploratory Data Analysis (EDA)",
      "Model Training and Inference",
      "Implementation of Intel® oneAPI is a must",
    ],
  },
  {
    title: "Creativity & Originality",
    criteria: [
      "Solution is original and clearly differentiates itself from submissions in the same category",
      "Solution creates clear additional value beyond competition",
      "Scale and novelty of technology",
    ],
  },
];

const Judging = () => {
  return (
    <div className="w-full md:h-full bg-[#0A113A]">
      <h1 className="text-[3rem] font-bold text-center text-white pt-10 pb-0">
        Judging Criteria
      </h1>

      <div className="md:w-[80%] w-[90%] h-full md:flex justify-center gap-2 mx-auto pb-10">
        {judge.map((val, id) => (
          <div className="md:w-[30%] sm:w-[90%] mx-auto backdrop-blur-sm bg-opacity-90 bg-white rounded-xl sm:my-7 shadow-xl shadow-blue-900">
                <div className="flex justify-center bg-blue-800 w-full rounded-xl rounded-b-none backdrop-blur-3xl">
                {
                id === 0? <FaCode size={100} className="py-2 text-white sm:m-3"/>  
                :id === 1 ? <IoMdBuild size={100} className="py-2 text-white sm:m-3"/> :id===2? <IoSparkles size={100} className="py-2 text-white sm:m-3"/> : null
            }
                    
                </div>
                <h2 className="font-bold text-2xl pt-7 pb-4 sm:px-5 w-full text-black text-center">
                {val.title}
                </h2>
                <ul className="list-disc pt-2 pb-10 text-md text-black space-y-1 sm:px-[50px] md:px-[60px] h-full ">
                {val.criteria.map((c, id) => (
                    <li>{c}</li>
                ))}
                </ul>
            </div>
            
        ))}
      </div>
    </div>
  );
};

export default Judging;
