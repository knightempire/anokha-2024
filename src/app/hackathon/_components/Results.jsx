import React, { useEffect, useState } from 'react'
import { FaTrophy } from "react-icons/fa6";
// import { FaMedal } from "react-icons/fa";
import Image from "next/image";

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
const top_11_data = [
    {
        "teamName": "Comic-ify",
        "college": "Amrita Vishwa Vidyapeetham, Coimbatore",
        "students": [
            {
                "studentFullName": "Surya Santhosh Kumar",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Navneet Krishna",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "C Amrit Subramanian",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Kottakki Srikar Vamsi",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/S0L009/COMIC-IFY_OneAPI?tab=readme-ov-file"
    },
    {
        "teamName": "Tharkoori Boizz",
        "college": "Amrita Vishwa Vidyapeetham, Coimbatore",
        "students": [
            {
                "studentFullName": "Navabhaarathi Asokan",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "K Dev Prashad",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Vethis Arun ",
                "studentCollegeName": "Coimbatore institute of technology ",
                "studentCollegeCity": "Coimbatore ",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/nb0309/human-detection-in-railway-using-openvino.git"
    },
    {
        "teamName": "Drastic Innovators ",
        "college": "Sri Eshwar collage of Engineering, Coimbatore",
        "students": [
            {
                "studentFullName": "Barath Raj",
                "studentCollegeName": "Sri Eshwar collage of engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Mohamed Abubakkar S",
                "studentCollegeName": "Sri Eshwar College Of Engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Arun Kumar R",
                "studentCollegeName": "Sri Eshwar College Of Engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Karthikeyan M",
                "studentCollegeName": "Sri Eshwar College of Engineering",
                "studentCollegeCity": "Tiruppur",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/ArunKumar200510/MediChat-Anokha.git"
    },
    {
        "teamName": "TechTitans",
        "college": "KGISL Institute of Technology, Coimbatore",
        "students": [
            {
                "studentFullName": "shobika",
                "studentCollegeName": "kgisl institute of tech",
                "studentCollegeCity": "saravanampatti",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Rithika T S",
                "studentCollegeName": "KGISL Institute of Technology",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "sahaana",
                "studentCollegeName": "kgisl institute of technology",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Vikrant Vikaasa V ",
                "studentCollegeName": "Kgisl institute of technology ",
                "studentCollegeCity": "Coimbatore ",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/vikrantvikaasa27/Smart-Farming-and-Crop-Price-Prediction"
    },
    {
        "teamName": "Blind Uchiha",
        "college": "Sri Eshwar College Of Engineering, Coimbatore",
        "students": [
            {
                "studentFullName": "Haresh",
                "studentCollegeName": "Sri Eshwar College Of Engineering",
                "studentCollegeCity": "Coiambature",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Mohammed Arshad",
                "studentCollegeName": "Sri Eshwar college of engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Logabaalan R S",
                "studentCollegeName": "Sri Eshwar College of Engineering ",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Abdul Rahman H",
                "studentCollegeName": "Sri Eshwar College of Engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/Arshad-Smd/DeepfakeDetection"
    },
    {
        "teamName": "Courtesy call",
        "college": "Amrita Vishwa Vidyapeetham, Coimbatore",
        "students": [
            {
                "studentFullName": "Ezhilkirthik M",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Anton Rejoe",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Battula Uday Venu Gopal",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Chokkalingam S",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/antonrejoe/malware-detection-pe-file-and-url"
    },
    {
        "teamName": "Innovators",
        "college": "Sri Eshwar College Of Engineering, Coimbatore",
        "students": [
            {
                "studentFullName": "Darshika R K",
                "studentCollegeName": "Sri Eshwar College of Engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Asmita G",
                "studentCollegeName": "Sri Eshwar College Of Engineering ",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Harreni R",
                "studentCollegeName": "Sri Eshwar College of Engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "BALASURYA P T",
                "studentCollegeName": "Sri Eshwar College of Engineering",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/darkdevily0412/INNOVATORS"
    },
    {
        "teamName": "Electrospark",
        "college": "Amrita Vishwa Vidyapeetham, Coimbatore",
        "students": [
            {
                "studentFullName": "Shakthi",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Neharika K",
                "studentCollegeName": "Amrita Vishwa vidyapeetham ",
                "studentCollegeCity": "Coimbatore ",
                "isLeader": "Member"
            },
            {
                "studentFullName": "M NAVEEN BALAJI",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            }
        ],
        "githubLink": "https://github.com/shakthi-20/electrospark"
    },
    {
        "teamName": "AIM HIGH ACHIEVE HIGH",
        "college": "K Ramakrishnan College of Technology, Trichy",
        "students": [
            {
                "studentFullName": "Sriraj S",
                "studentCollegeName": "K Ramakrishnan College of Technology",
                "studentCollegeCity": "Trichy",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Sivalekshmi B",
                "studentCollegeName": "K Ramakrishnan College Of Technology",
                "studentCollegeCity": "Trichy",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Yeshwin M",
                "studentCollegeName": "K Ramakrishnan College Of Technology",
                "studentCollegeCity": "Trichirappali",
                "isLeader": "Member"
            },
            {
                "studentFullName": "PREMKUMAR G",
                "studentCollegeName": "K RAMAKRISHNAN COLLEGE OF TECHNOLOGY",
                "studentCollegeCity": "TRICHY",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/Hunt-03/Traffic-signal-AI"
    },
    {
        "teamName": "Logic First ",
        "college": "K Ramakrishnan College of Technology, Tiruchengode",
        "students": [
            {
                "studentFullName": "Gobiha J S",
                "studentCollegeName": "K S RANGASAMY COLLEGE OF TECHNOLOGY ",
                "studentCollegeCity": "Thiruchengode ",
                "isLeader": "Member"
            },
            {
                "studentFullName": "ARUL",
                "studentCollegeName": "K S Rangasamy College Of Technology ",
                "studentCollegeCity": "Tiruchengode ",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Dhanush Shankar U ",
                "studentCollegeName": "K S Rangasamy College of Technology ",
                "studentCollegeCity": "Tiruchengode ",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Balasastha",
                "studentCollegeName": "K S RANGASAMY COLLEGE OF TECHNOLOGY",
                "studentCollegeCity": "Namakkal",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/ArulG2005/intel-Hackathon-Agromate"
    },
    {
        "teamName": "THE 404",
        "college": "Amrita Vishwa Vidyapeetham, Coimbatore",
        "students": [
            {
                "studentFullName": "Monish Kiran A",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Team Lead"
            },
            {
                "studentFullName": "Suneelvijay M",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Nikil S",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            },
            {
                "studentFullName": "Vishnu Vasantthan N",
                "studentCollegeName": "Amrita Vishwa Vidyapeetham",
                "studentCollegeCity": "Coimbatore",
                "isLeader": "Member"
            }
        ],
        "githubLink": "https://github.com/codeshark304/Intel-AI-Hackathon"
    }
];



const Result = () => {
    return (
        <>
            <div id="result" className='w-[100%] min-h-[100vh] flex flex-col justify-center items-center align-middle m-auto bg-gradient-to-r from-[rgb(10,17,58)] to-[rgb(13,26,99)] z-10'>
                <div className="text-[3rem] font-bold flex flex-col text-center md:flex-row pt-2 text-white justify-center align-middle items-center">
                    <Image src={"/images/Intel_logo_white.png"} height={100} width={100} alt="intel logo" />
                    <p className='ml-2'>{"oneAPI Hackathon Result"}</p>
                </div>
                <p className='text-lime-50 text-2xl'>Congratulations!</p>

                <div className="w-[90%] h-full md:flex mx-auto pb-10 justify-center items-center">
                    {prizes.map((val, id) => (
                        <div key={id} className={`px-8 ml-auto mr-auto bg-[#000000] bg-opacity-50 border border-gray-800 backdrop:blur-2xl rounded-xl sm:my-4 sm:pb-5 ${id == 1 ? " md:py-10 h-full md:shadow-xl" : "md:my-12 md:py-5 md:h-[50%]"}`}>
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

            <div className='w-[100%] min-h-[100vh] flex flex-col justify-center items-center align-middle m-auto bg-gradient-to-r from-[rgb(10,17,58)] to-[rgb(13,26,99)] z-10 pb-32'>
                <div className="text-[2rem] font-bold flex flex-col text-center md:flex-row pt-2 text-white justify-center align-middle items-center">
                    <Image src={"/images/Intel_logo_white.png"} height={100} width={100} alt="intel logo" />
                    <p className='ml-2'>{"oneAPI Hackathon"}</p>
                </div>

                <p className='text-lime-50 text-2xl mb-16'>Finalists</p>

                {/* Table with same card like design. teamName and members with colspan */}

                <table className='min-w-[64%] min-h-screen mx-auto bg-[#000000] bg-opacity-50 border border-gray-800 backdrop:blur-2xl'>
                    <thead className=''>
                        <tr>
                            <th className='text-[rgb(19,22,43)] bg-white text-center p-2 rounded-tl-xl'>Team Name</th>
                            <th className='text-[rgb(19,22,43)] bg-white text-center p-2'>Members</th>
                            <th className='text-[rgb(19,22,43)] bg-white text-center p-2  rounded-tr-xl'>GitHub</th>
                        </tr>
                    </thead>
                    <tbody>
                        {top_11_data.map((team, index) => (
                            <tr key={index}>
                                <td className={'text-white text-center p-2 border border-gray-800'}>
                                    <div className='bg-[rgba(34,43,96,0.77)] w-fit ml-auto mr-auto rounded-2xl p-4 m-2'>
                                        <h2 className="font-semibold text-lg text-white text-center">
                                            {team.teamName}
                                        </h2>
                                        <p className='font-light text-gray-300 text-center text-sm'>{team.college}</p>
                                    </div>
                                </td>
                                <td className='text-white text-center p-2 border border-gray-800'>
                                    <div className='flex flex-col text-white text-center bg-gray-800 w-fit ml-auto mr-auto rounded-2xl p-4'>
                                        {team.students.map((member, index) => (
                                            <div key={index} className='flex flex-row justify-center items-center'>
                                            <p className='font-light text-md pr-2'>{member.studentFullName}</p>
                                            <p>|</p>
                                            <p className='font-light text-sm text-gray-300 ml-2'>{member.isLeader}</p>
                                        </div>
                                        ))}
                                    </div>
                                </td>
                                <td className='text-white text-center p-2 border border-gray-800'>
                                    <a className='bg-white text-black rounded-xl p-2' target="_blank" href={team.githubLink}>View in GitHub</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Result
