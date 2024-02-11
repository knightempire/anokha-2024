import React from "react";

const judge = [
  {
    title: "Code Quality - 33.33%",
    criteria: [
      "Code is easy to understand and is reproducible",
      "Code is well tested, and functions without errors",
      "Code is well documented",
    ],
  },
  {
    title: "Technical Implementation - 33.33%",
    criteria: [
      "Intel® AI Analytics Toolkits, its Libraries and SYCL/DPC++ Libraries are leveraged and used appropriately by developer",
      "Data Preprocessing and Exploratory Data Analysis (EDA)",
      "Model Training and Inference",
      "Implementation of Intel® oneAPI is a must",
    ],
  },
  {
    title: "Creativity & Originality - 33.33%",
    criteria: [
      "Solution is original and clearly differentiates itself from submissions in the same category",
      "Solution creates clear additional value beyond competition",
      "Scale and novelty of technology",
    ],
  },
];

const Judging = () => {
  return (
    <div className="w-full md:h-[100vh] bg-[#0A113A]">
      <h1 className="text-[3rem] font-bold text-center text-white pt-10 pb-3">
        Judging Criteria
      </h1>

      <div className="w-[90%] h-[70%] md:flex justify-center gap-10 mx-auto pb-10">
        {judge.map((val, id) => (
          <div className="md:w-[70%] sm:w-[90%] mx-auto backdrop-blur-sm bg-opacity-90 bg-white rounded-xl md:px-[60px] sm:px-10 sm:my-3">

                <h2 className="font-bold text-2xl pt-7 pb-4 w-full text-black text-center">
                {val.title}
                </h2>
                <ul className="list-disc pt-2 pb-10 text-md text-black space-y-1">
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
