import React from 'react'
import { FaTrophy } from "react-icons/fa6";
// import { FaMedal } from "react-icons/fa";

const prizes = [
    {
        title: "2nd Place",
        price: "Team Blind Uchiha",
        college: "Sri Eshwar College Of Engineering, Coimbatore",
        github: "https://github.com/Arshad-Smd/DeepfakeDetection",
        teamMembers: [
            {
                "name": "Haresh A V",
                "role": "Team Lead"
            },
            {
                "name": "Mohammed Arshad",
                "role": "Member"
            },
            {
                "name": "Logabaalan R S",
                "role": "Member"
            },
            {
                "name": "Abdul Rahman H",
                "role": "Member"
            },
        ],
    },
    {
        title: "1st Place",
        price: "Team Comic-ify",
        college: "Amrita Vishwa Vidyapeetham, Coimbatore",
        github: "https://github.com/S0L009/COMIC-IFY_OneAPI",
        teamMembers: [
            {
                "name": "Surya Santhosh Kumar",
                "role": "Team Lead"
            },
            {
                "name": "Navneet Krishna",
                "role": "Member"
            },
            {
                "name": "C Amrit Subramanian",
                "role": "Member"
            },
            {
                "name": "Kottakki Srikar Vamsi",
                "role": "Member"
            },
        ],
    },
    {
        title: "3rd Place",
        price: "Team AIM HIGH ACHIEVE HIGH",
        college: "K Ramakrishnan College of Technology, Trichy",
        github: "https://github.com/Hunt-03/Traffic-signal-AI",
        teamMembers: [
            {
                "name": "Sriraj S",
                "role": "Team Lead"
            },
            {
                "name": "Sivalekshmi B",
                "role": "Member"
            },
            {
                "name": "Yeshwin M",
                "role": "Member"
            },
            {
                "name": "PREMKUMAR G",
                "role": "Member"
            },
        ],
    },

];

const Result = () => {
    return (
        <div id="result" className='w-[100%] min-h-[100vh] flex flex-col justify-center items-center align-middle m-auto bg-gradient-to-r from-[rgb(10,17,58)] to-[rgb(13,26,99)]'>
            <h1 className="text-[3rem] font-bold text-center text-lime-50">Finale Result</h1>
            <div className="md:w-[80%] w-[90%] h-full md:flex mx-auto pb-10 items-center ">
                {prizes.map((val, id) => (
                    <div key={id} className={`md:w-[30%] sm:w-[70%]  mx-auto bg-[#000000] bg-opacity-50 border border-gray-800 backdrop:blur-2xl rounded-xl sm:my-4 sm:pb-5 ${id == 1 ? " md:w-[30%] md:py-10 h-full md:shadow-xl" : "md:my-12 md:py-5 md:h-[50%] md:w-[25%]"}`}>
                        <div className="flex justify-center w-full rounded-xl rounded-b-none backdrop-blur-3xl ">
                            <FaTrophy size={200} className={`md:mx-0 sm:mx-[35%]  ${id === 0 ? "text-[#b8b8b8] md:p-7" : id === 1 ? "text-[#FFD700] md:p-2" : "text-[#cd7f32] md:p-7"}  `} />
                        </div>
                        <h1 className='text-xl text-white text-center m-3'>{val.title}</h1>
                        <div className='bg-[rgba(34,43,96,0.77)] w-fit ml-auto mr-auto rounded-2xl p-3 m-2'>
                            <h2 className="font-semibold text-lg text-white text-center">
                                {val.price}
                            </h2>
                            <p className='font-light text-gray-300 text-center text-sm'>{val.college}</p>
                        </div>
                        <div className='flex flex-col text-white text-center bg-gray-800 w-fit ml-auto mr-auto rounded-2xl p-4'>
                            {val.teamMembers.map((member, index) => (
                                <div key={index} className='flex flex-row justify-center items-center'>
                                    <p className='font-light text-md pr-2'>{member.name}</p>
                                    <p>|</p>
                                    <p className='font-light text-sm text-gray-300 ml-2'>{member.role}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col text-black text-center bg-gray-300 mt-4 ml-auto mr-auto rounded-2xl p-3 cursor-pointer w-[75%]'>
                            <a target="_blank" href={val.github}>View Project in GitHub</a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
        /* <div className='w-full h-full bg-[#0A113A]'>
          <h1 className="text-[3rem] font-bold text-center text-white">Prizes</h1>
          <div className="md:w-[80%] sm:w-[100%] h-full md:flex mx-auto pb-10 items-center ">
            <div className="md:w-[40%] sm:w-[90%]  mx-auto bg-white backdrop-blur-3xl rounded-xl sm:my-5 p-8 shadow-xl shadow-blue-900">
              <FaMedal size={100}  className='w-full mx-auto ' />
              <h1 className='text-center text-[1.5rem] mt-6 font-bold'> Prize Pool </h1>
              <p className="font-bold text-center text-[2rem] bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white rounded w-fit px-4 mx-auto">  ₹ 1,25,000/- </p>
            </div>
        </div>
      </div> */

    )
}

export default Result
