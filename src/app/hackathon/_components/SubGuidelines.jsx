import React from 'react'

const rules = [
    {
        title: "Submission Guidelines",
        rules: [
            "Participants must strictly engage in the use of Intel® AI Analytics Toolkits, its Libraries & SYCL/DPC++ Libraries while framing their ideations. If not, your project will not be considered for further evaluation.",
            "The ideations of the participants must be compiled in the form of a PowerPoint Presentation (PPT) converted into a PDF format for submission.",
            "A sample template for idea submission will be given to the participants in their hackathon dashboard, all the points mentioned in the template should strictly be covered in their submission.",
            "Link of the GitHub repository will be given to the participants in their hackathon dashboard.",
            "Participants will be required to fork this repository and update the README file, filling in the required details.",
            "To avoid disqualification, participants must submit their ideas in the hackathon dashboard before the deadline.",
            "The prototype submission should be made on a GitHub public repository.",
            "The entire code base needs to be present on the team's GitHub repository.",
            "The prototype submission must lay down equal emphasis on the deployment/inference benchmarking for both, with and without Intel® one API.",
            "Pull requests of the forked repository need to be generated.",
            "To know more about details about the registration and the rules of the hackathon. Please click on this link <Amrita Hack Website>"
        ]
    },
]

const SubGuidelines = () => {
  return (
    <div>
      <div className='w-full h-full'>
        {rules.map((val, id)=>(
            <div key={id} className='bg-blue-900 md:w-[80%] sm:w-[90%] mx-auto odd:rounded-bl-[50px] even:rounded-br-[50px]'>
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

export default SubGuidelines
