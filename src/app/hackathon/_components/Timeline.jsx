import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Timeline = () => {
  const container = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        end: "bottom 75%",
        scrub: true,
      },
    });

    tl.from(container.current.children[0].children[1], {
      opacity: 0,
      scale: 0.5,
      x: 300,
      duration: 0.5,
      ease: "power4.out",
    });
    tl.from(container.current.children[1].children[1], {
      opacity: 0,
      scale: 0.5,
      x: -300,
      duration: 0.5,
      ease: "power4.out",
    });
    tl.from(container.current.children[2].children[1], {
      opacity: 0,
      scale: 0.5,
      x: 300,
      duration: 0.5,
      ease: "power4.out",
    });
  });

  const phases = [
    {
            title: "Round 1: Ideation",
      description:
"During this initial phase, participants are tasked with brainstorming ideas centred around the provided problem statements. They are required to submit a PowerPoint presentation along with a concise description that clearly explains the proposed concept, with specific reference to the Intel toolkit employed.",
        Date: "February 15th - March 7th"


},
    {
            title: "Round 2: Prototype Development",
      description:
"The resources essential for building with OneAPI can be found in the learning resources section. Prototypes are to be shared through GitHub repositories, with a link to DevMesh."
,Date: "March 7th - 23th"    
},
    {
            title: "Round 3: Final Round",
      description:
"Shortlisted participants will advance to the culminating 24-hour offline hackathon hosted at Amrita Vishwa Vidyapeetham, Coimbatore. During the grand finale, participants are required to bring their laptops and develop their prototypes into end products."
,Date: "April 4th - 5th",    
},
  ];

  return (
    <div className="w-full bg-[#0A113A] pt-10  overflow-hidden">
      <h1 className="text-[3rem] font-bold text-center text-white mt-6">
        Hackathon Phases
      </h1>
      <div className="flex justify-items-center">
        <div class="timeline">
          <div class="outer mx-500px" ref={container}>
            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[65%] md:left-0 top-[-50px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">{phases[0].title}</h3>
                <p>{phases[0].description}</p>
                <h4 className="bg-[#87a5cb] text-black rounded-full w-fit border-1 border-black py-1 px-2 font-medium mx-auto">{phases[0].Date}</h4>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">{phases[1].title}</h3>
                <p>{phases[1].description}</p>
                <h4 className="bg-[#87a5cb] text-black rounded-full w-fit border-1 border-black py-1 px-2 font-medium mx-auto">{phases[1].Date}</h4>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">{phases[2].title}</h3>
                <p>{phases[2].description}</p>
                <h4 className="bg-[#87a5cb] text-black rounded-full w-fit border-1 border-black py-1 px-2 font-medium mx-auto">{phases[2].Date}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
