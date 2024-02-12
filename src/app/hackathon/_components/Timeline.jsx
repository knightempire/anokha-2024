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
    tl.from(container.current.children[5].children[1], {
      opacity: 0,
      scale: 0.5,
      x: -300,
      duration: 0.5,
      ease: "power4.out",
    });
  });
  return (
    <div className="w-full bg-[#0A113A] pt-10  overflow-hidden">
      <h1 className="text-[3rem] font-bold text-center text-white mt-6">
        Timeline
      </h1>
      <div className="flex justify-items-center">
        <div class="timeline">
          <div class="outer mx-500px" ref={container}>
            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[65%] md:left-0 top-[-50px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">February 15th 2024</h3>
                <p>Hackathon registration begins for the first round</p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">February 29th 2024</h3>
                <p>
                  Deadline to submit PowerPoint presentations for the first
                  round.{" "}
                </p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">March 2nd 2024</h3>
                <p>
                  Announcement of the top 100 teams moving to the next round.
                  Selected teams start building prototypes on @devmesh.{" "}
                </p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px]  absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">March 20th 2024</h3>
                <p>Deadline to submit prototypes for the second round. </p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title text-xl">March 22nd 2024</h3>
                <p>
                  Announcement of the top 100 teams advancing to the final
                  round.{" "}
                </p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[-30px]  absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur mb-10">
                <h3 class="title text-xl">April 4th 2024</h3>

                <p>
                  The top 25 teams from the second round will participate in a
                  24-hour offline hackathon at Amrita University, Coimbatore, to
                  determine the winners.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
