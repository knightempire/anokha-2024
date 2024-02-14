import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

const TimelineInstruct = () => {
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
    tl.from(container.current.children[3].children[1], {
      opacity: 0,
      scale: 0.5,
      x: -300,
      duration: 0.5,
      ease: "power4.out",
    });
    tl.from(container.current.children[4].children[1], {
      opacity: 0,
      scale: 0.5,
      x: 300,
      duration: 0.5,
      ease: "power4.out",
    });
  });

  const phases = [
    {
            title: "Feb 15th - 29th",
      description:
        "Registrations and submissions for first round",
    },
    {
            title: "March 2nd",
      description:
        "Announcement for shortlisted teams for 2nd round (prototype )",
    },
    {
            title: "March 2nd to 20th",
      description:
        "Prototype development",
    },{
            title: "March 22nd",
      description:
        "Announcement for the shortlisted teams for offline round",
    },{
            title: "April 4th - 5th",
      description:
        "24 hour offline hackathon (final round)",
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
            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">{phases[3].title}</h3>
                <p>{phases[3].description}</p>
              </div>
            </div>
            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">{phases[4].title}</h3>
                <p>{phases[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineInstruct;
