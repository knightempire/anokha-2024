import React from "react";
import phase from "@/../public/images/phase.png";
import Phases from "./PhaseCard";
import Image from "next/image";

const phases = [
  {
    title: "Ideation",
    description:
      "During this initial phase, participants are tasked with brainstorming ideas centered around provided problem statements. Provide a submission with a PowerPoint presentation and a concise 200-character description that clearly explains the proposed concept, making specific reference to the Intel toolkit used.",
  },
  {
    title: "Prototype Development",
    description:
      "In the subsequent phase, participants embark on crafting prototypes based on their ideation submissions. Comprehensive resources including intensive video playlists accessible via the official ANOKHA website facilitate the development process. Prototypes are to be shared via GitHub repositories, with linkage to DevMesh for streamlined visibility.",
  },
  {
    title: "Final Round",
    description:
      "Shortlisted participants progress to the culminating 24-hour offline hackathon hosted at the Amrita Vishwa Vidyapeetham, Coimbatore campus. Participants need to bring their laptops, and hardware resources will be provided based on the requirements of the prototype.",
  },
];

const Timeline = () => {
  return (
    <div>
      <div className="font-poppins  w-full py-10 pb-2 text-black">
        <p className="md:text-[3rem] sm:text-[2rem] font-bold text-center">
          Hackathon Phases
        </p>
        <ol className="md:flex md:w-[90%] sm:w-[100%] h-full justify-center mx-auto ">
          {phases.map((ph, id) => (
            <li key={id} className="my-5 md:w-[100%] sm:w-[90%] mx-auto">
              {/* Div for line and icon */}
              <div className="flex md:justify-center items-center">
                <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <Image
                  src="/images/phase.png"
                  width={100}
                  height={100}
                  alt="phaseimg"
                  className="w-[50px] h-[50px]"
                />
                <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>

              {/* Div for headings */}
              <div className="mt-3 max-w-[400px] mx-auto h-full w-full mb-[100px] px-3">
                <p className="md:text-[2rem] sm:text-[1.6rem] font-bold text-center">
                  Phase {id + 1}
                </p>
                <p className="text-lg font-bold mb-3 text-center">{ph.title}</p>
                <div className="bg-[#017DC5] p-5 rounded-lg sm:mx-auto h-fit text-white w-full rounded-tr-none rounded-bl-none">
                  {ph.description}
                </div>
              </div>
            </li>
          ))}
        </ol>
        {/* <ol className= "md:flex px-[10%] py-2 h-full w-full">
                <li className="relative mb-6 sm:mb-0 h-full">
                        <div className="flex items-center md:mt-0 sm:mt-6 mx-auto">
                            <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            <div className="z-10 flex items-center justify-center shrink-0">
                                <Image src="/images/phase.png" width={100} height={100} alt="phaseimg" className ='w-[50px] h-[50px]'/>
                            </div>
                            <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>

                        <div className="md:mt-3 sm:mt-3 sm:mb-10 sm:pe-8 max-w-[400px] mx-auto h-full w-full">
                            <p className ='md:text-[2rem] sm:text-[1.6rem] font-bold text-center'>Phase 1</p>
                            <p className='text-lg font-bold mb-3 text-center'>Ideation</p>
                            <div className='bg-[#017DC5] p-5 h-full rounded-lg  mx-auto text-white w-full rounded-tr-none rounded-bl-none'>
                            During this initial phase, participants are tasked with brainstorming ideas centered around provided problem statements. Submissions entail a PowerPoint presentation complemented by a succinct 500-character description elucidating the proposed concept, with explicit reference to the Intel toolkit employed.</div>
                            </div>
                    </li>

                    <li className="relative mb-6 sm:mb-0 h-full">
                        <div className="flex items-center md:mt-0 sm:mt-6 mx-auto">
                            <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            <div className="z-10 flex items-center justify-center shrink-0">
                                <Image src="/images/phase.png" width={100} height={100} alt="phaseimg" className ='w-[50px] h-[50px]'/>
                            </div>
                            <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>

                        <div className="md:mt-3 sm:mt-3 sm:mb-10 sm:pe-8 max-w-[400px] mx-auto h-full w-full">
                            <p className ='md:text-[2rem] sm:text-[1.6rem] font-bold text-center'>Phase 2</p>
                            <p className='text-lg font-bold mb-3 text-center'>Prototype Development</p>
                            <div className='bg-[#017DC5] p-5 rounded-lg text-white h-full mx-auto w-full rounded-tr-none rounded-bl-none'>
                            In the subsequent phase, participants embark on crafting prototypes based on their ideation submissions. Comprehensive resources including intensive video playlists accessible via the official ANOKHA website facilitate the development process. Prototypes are to be shared via GitHub repositories, with linkage to DevMesh for streamlined visibility.</div>
                        </div>
                    </li>

                    <li className="relative mb-6 sm:mb-0 h-full">
                        <div className="flex items-center md:mt-0 sm:mt-6 mx-auto w-full">
                            <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            <div className="z-10 flex items-center justify-center shrink-0">
                                <Image src="/images/phase.png" width={100} height={100} alt="phaseimg" className ='w-[50px] h-[50px]'/>
                            </div>
                            <div className="hidden md:flex w-[50%] bg-gray-200 h-0.5 dark:bg-gray-700 "></div>
                        </div>

                        <div className="md:mt-3 sm:mt-3 sm:mb-10  max-w-[400px] mx-auto h-full">
                            <p className ='text-[2rem] font-bold text-center'>Phase 3</p>
                            <p className='text-lg font-bold mb-3 text-center'>Final Round</p>
                            <div className='bg-[#017DC5] p-5 rounded-lg text-white h-full mx-auto w-full rounded-tr-none rounded-bl-none'>
                            Shortlisted participants progress to the culminating 24-hour offline hackathon hosted at Amrita campus. Essential guidelines necessitate participants to furnish their own laptops, with hardware resources allocated based on prototype requirements.</div>
                        </div>
                    </li>
            </ol> */}
      </div>
    </div>
  );
};

export default Timeline;
