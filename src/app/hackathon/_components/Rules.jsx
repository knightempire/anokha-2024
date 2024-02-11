import React from 'react'

const rules = [
    {
        title: "Idea Submission Phase:",
        rules: [
            "Participants are mandated to exclusively leverage Intel® AI Analytics Toolkits, Libraries & SYCL/DPC++ Libraries in formulating their ideations.",
            "Ideations must be presented in PowerPoint format converted to PDF for submission. Uploaded via Google Drive links.",
            "A designated template shall be provided, covering all requisite points for inclusion in submissions.",
            "Optional inclusion of GitHub repository link for ideation phase.",
            "Timely submission through the hackathon dashboard is imperative to avoid disqualification."
        ]
    },
    {
        title: "Prototype Development Phase:",
        rules: [
            "Prototypes are to be submitted via public GitHub repositories, with linkage to DevMesh accounts.",
            "The entirety of codebase must be accessible within the team's GitHub repository.",
            "Equal emphasis on deployment/inference benchmarking with and without Intel® oneAPI is mandated.",
            "Participants are strictly prohibited from modifying their PowerPoint presentations post-submission, with non-compliance risking disqualification.",
            "Hardware implementation may be demonstrated via video submissions, hosted on GitHub."
        ]
    },
    {
        title: "24-hour Hackathon Phase:",
        rules: [
            "Shortlisted participants receive ANOKHA passports for admission to Amrita University.",
            "Accommodation arrangements are to be managed independently by shortlisted participants, with detailed information available on the ANOKHA website.",
            "Further instructions and updates will be communicated in due course."
        ]
    }
]

const Rules = () => {
  return (
    <div>
      <h1 className="text-[3rem] font-bold text-center mt-10 mb-4">Rules</h1>
      <div className='w-full h-full'>
        {rules.map((val, id)=>(
            <div className='bg-blue-900 md:w-[60%] sm:w-[90%] mx-auto odd:rounded-bl-[50px] even:rounded-br-[50px]'>
                <div className=' mb-10 rounded-tr-none rounded-bl-none '>
                <h2 className='font-bold text-2xl py-5 px-8 bg-gradient-to-r from-[#0A113A]  to-blue-900  w-full text-white odd:rounded-bl-[50px] even:rounded-tl-[50px]'>{val.title}</h2>
                <ul className='list-disc md:px-[80px] sm:px-10 md:py-10 sm:py-8 text-md  text-white space-y-1'>
                {val.rules.map((rule, id)=>(
                    <li>{rule}</li>
                ))}
                
            </ul>
        </div>

            </div>

            

        ))}
        
      </div>
    </div>
  )
}

export default Rules
