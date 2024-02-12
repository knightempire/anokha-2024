import React from 'react'

const rules = [
    {
        title: "General Hackathon Rules",
        rules: [
            "Teams should build their product from scratch (Mobile App / Consumer Web App / Business Web App).",
            "Teams cannot choose multiple problem statements; they are only allowed to choose one problem statement and theme at a time. Problem statements are mentioned in the given tracks.",
            "Teams must be between 3 - 4 members.",
            "Students aged from 15-22 are only allowed to participate.", 
            "Working Professionals are not allowed to participate.",
            "Participants are encouraged to form teams before the Hackathon starts.",
            "Participants, from their DevPost accounts, may “Look for Teammates”."
        ]
    },
    {
        title: "Round 1: Idea Submission Phase",
        rules: [
            "Participants are mandated to exclusively leverage Intel® AI Analytics Toolkits, Libraries & SYCL/DPC++ Libraries in formulating their ideations.",
            "Ideations must be presented in PowerPoint format converted to PDF for submission. Uploaded via Google Drive links.",
            "A designated template shall be provided, covering all requisite points for inclusion in submissions.",
            "Optional inclusion of GitHub repository link for ideation phase.",
            "Timely submission through the hackathon dashboard is imperative to avoid disqualification.",
            "Submitting a video explaining your idea and the problem statement will give your team a better chance to qualify for the next round.",
            "Only the Top 100 teams will qualify for round 2."
        ]
    },
    {
        title: "Round 2: Prototype Development Phase",
        rules: [
            "Prototypes are to be submitted via public GitHub repositories, with linkage to DevMesh accounts.",
            "The entirety of codebase must be accessible within the team's GitHub repository.",
            "Equal emphasis on deployment/inference benchmarking with and without Intel® oneAPI is mandated.",
            "Participants are strictly prohibited from modifying their PowerPoint presentations post-submission, with non-compliance risking disqualification.",
            "Hardware implementation may be demonstrated via video submissions, hosted on GitHub.",
            "Only the top 25 teams will qualify for round 3."
        ]
    },
    {
        title: "Round 3: 24-Hour Hackathon Phase",
        rules: [
            "Shortlisted participants receive ANOKHA passports for admission to Amrita University.",
            "Accommodation arrangements are to be managed independently by shortlisted participants, with detailed information available on the ANOKHA website.",
            "Further instructions and updates will be communicated in due course. "
        ]
    }
]

const Rules = () => {
  return (
    <div>
      <h1 className="text-[3rem] font-bold text-center mt-10 mb-4">Rules</h1>
      <div className='w-full h-full'>
        {rules.map((val, id)=>(
            <div key={id} className='bg-blue-900 md:w-[70%] sm:w-[90%] mx-auto odd:rounded-bl-[50px] even:rounded-br-[50px]'>
                <div className=' mb-10 rounded-tr-none rounded-bl-none '>
                <h2 className='font-bold text-2xl py-5 px-12 bg-gradient-to-r from-[#0A113A]  to-blue-900  w-full text-white odd:rounded-bl-[50px] even:rounded-tl-[50px]'>{val.title}</h2>
                <ul className='list-disc md:px-[80px] sm:px-10 md:pb-10  pt-0 sm:py-8 text-md  text-white space-y-1'>
                {val.rules.map((rule, id)=>(
                    <li key={id}>{rule}</li>
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
