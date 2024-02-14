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
        "During this initial phase, participants are tasked with brainstorming ideas centered around provided problem statements. Provide a submission with a PowerPoint presentation and a concise 200-character description that clearly explains the proposed concept, making specific reference to the Intel toolkit used.",
    },
    {
            title: "Round 2: Prototype Development",
      description:
        "In the subsequent phase, participants embark on crafting prototypes based on their ideation submissions. Comprehensive resources including intensive video playlists accessible via the official ANOKHA website facilitate the development process. Prototypes are to be shared via GitHub repositories, with linkage to DevMesh for streamlined visibility.",
    },
    {
            title: "Round 3: Final Round",
      description:
        "Shortlisted participants progress to the culminating 24-hour offline hackathon hosted at the Amrita Vishwa Vidyapeetham, Coimbatore campus. Participants need to bring their laptops, and hardware resources will be provided based on the requirements of the prototype.",
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
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">{phases[1].title}</h3>
                <p>{phases[1].description}</p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">{phases[2].title}</h3>
                <p>{phases[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
