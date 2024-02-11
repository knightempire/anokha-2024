import React from "react";

const time = [
  {
    title: "Launch and Registration",
    date: "to be spec",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Ideathon Deadline",
    date: "to be spec",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Prototype Deadline",
    date: "to be spec",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Finale",
    date: "to be spec",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]

const Timeline = () => {
  return (
    <div className="w-full bg-[#0A113A] pt-10  overflow-hidden">
      <h1 className="text-[3rem] font-bold text-center text-white mt-6">Timeline</h1>
      <div className="flex justify-items-center">
        <div class="timeline">
          <div class="outer mx-500px">
            {time.map((val,id)=>(
              <div class="card">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[100%] sm:w-[500px] p-8 rounded-[50%] h-[70%] md:left-0 top-[10px] absolute blur-3xl levitate"></div>
                <div class="info relative bg-opacity-60 bg-white bg-blur">
                  <h3 class="title text-xl">{val.title}</h3>
                  <p>{val.date}</p>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
