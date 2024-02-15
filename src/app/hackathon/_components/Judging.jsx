import React from "react";

const judge = [
  {
    title: "Code Quality",
    criteria: [
      "Code is easy to understand and is reproducible",
      "Code is well tested and fully functional",
    ],
  },
  {
    title: "Technical Implementation",
    criteria: [
      "Intel® AI Analytics Toolkits, its Libraries and SYCL/DPC++ Libraries are leveraged and used appropriately by the developer",
      "Data Preprocessing and Exploratory Data Analysis (EDA) should be included",
      "Model Training and Inference is an evaluation metric",
      "Implementation of Intel® oneAPI is mandatory",
    ],
  },
  {
    title: "Creativity & Originality",
    criteria: [
      "The solution should be original and clearly differentiable from submissions in the same category",
      "The solution must effectively address a real-life problem",
      "Scale and novelty of technology is an evaluation metric",
    ],
  },
];

const Judging = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      {judge.map((val, id) => (
        <div
          key={id}
          className="bg-white rounded-lg shadow-md p-6 mb-8 w-full max-w-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            {val.title}
          </h2>
          <ul className="list-disc ml-6">
            {val.criteria.map((c, id) => (
              <li key={id}>{c}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Judging;
