import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  });
  return (
    <div className="w-full bg-[#0A113A] pt-10  overflow-hidden">
      <h1 className="text-[3rem] font-bold text-center text-white mt-6">Timeline</h1>
      <div className="flex justify-items-center">
        <div class="timeline">
          <div class="outer mx-500px" ref={container}>
            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[10px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title">Title 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[10px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title">Title 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[10px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title">Title 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>

            <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[10px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur">
                <h3 class="title">Title 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>

            <div class="card">
 
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[10px] absolute blur-3xl levitate"></div>
              <div class="info relative bg-opacity-60 bg-white bg-blur mb-10">
 
                <h3 class="title">Title 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
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
