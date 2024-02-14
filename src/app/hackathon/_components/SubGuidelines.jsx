import React from 'react'
import { FaDownload } from 'react-icons/fa'

const rules = [
    {
        title: "Submission Guidelines",
        rules: [
            "Participants must strictly engage in the use of Intel® AI Analytics Toolkits, its libraries & SYCL/DPC++ libraries while framing their ideations. If not, your project will not be considered for further evaluation. ",
            "The ideations of the participants must be compiled in the form of a PowerPoint Presentation (PPT) converted into a PDF format for submission. ",
            "A sample template for idea submission will be given to the participants in their hackathon dashboard, all the points mentioned in the template should strictly be covered in their submission. ",
            "Link of the GitHub repository will be given to the participants in their hackathon dashboard. ",
            "Participants will be required to fork this repository and update the README file, filling in the required details. ",
            "To avoid disqualification, participants must submit their ideas in the hackathon dashboard before the deadline. ",
            "The prototype submission should be made on a GitHub public repository.",
            "The entire code base needs to be present on the team's GitHub repository.",
            "The prototype submission must emphasize on both deployment and inference, with and without Intel® one API.",
            "Pull requests of the forked repository need to be generated. ",
        ]
    },
]

const SubGuidelines = () => {
  return (
    <div>
      <div className='w-full h-full my-2 mt-10'>
        {rules.map((val, id)=>(
            <div key={id} className='bg-blue-900 md:w-[70%] sm:w-[95%] mx-auto odd:rounded-bl-[50px] even:rounded-br-[50px]'>
                <div className=' mb-0 rounded-tr-none rounded-bl-none '>
                <h2 className='font-bold text-2xl py-5 px-12 bg-gradient-to-r from-[#0A113A]  to-blue-900  w-full text-white odd:rounded-bl-[50px] even:rounded-tl-[50px]'>{val.title}</h2>
                <ul className='list-disc md:px-[80px] sm:px-6 md:pb-10  pt-0 sm:py-8 text-md  text-white space-y-1'>
                {val.rules.map((rule, id)=>(
                    <li key={id} className='ml-5'>{rule}</li>
                ))}
                
            </ul>
        </div>
        <div class="card-submit mx-auto mt-[0px] mb-[2%]">
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="text-xl mb-[2%] text-center">Download Sample PPT</h3>
                <a
                href="https://amritavishwavidyapeetham-my.sharepoint.com/:p:/g/personal/cb_en_u4cse21608_cb_students_amrita_edu/EaAaxjKyWIVLsBlk1ZIgHHABXoTydcJakpTu6g0Tp3ZXug"
                download
                className="before:ease relative h-12 w-50 overflow-hidden border rounded-xl border-blue-800 bg-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
            >
                <FaDownload size={30}/>
            </a>
              </div>
            </div>
            </div>

            

        ))}

      </div>
    </div>
  )
}

export default SubGuidelines
