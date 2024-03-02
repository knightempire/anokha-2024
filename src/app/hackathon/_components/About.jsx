import React from "react";

const About = () => {
  return (
    <div className="h-full w-full bg-[#0A113A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] md:h-[50%] sm:w-[70%] p-8 rounded-[20%] left-[10%] blur-3xl levitate"></div>
      <div className="font-poppins mx-auto py-20 md:px-[20%] sm:px-4 text-black relative z-10">
        <div className="bg-white/80 rounded-[50px] pb-[60px] pt-[40px] md:px-10 sm:px-5  backdrop-blur-lg shadow-3xl rounded-tr-none rounded-bl-none text-black">
          <p className="text-[3rem] font-bold">About</p>
          <div>
            The Intel AI Hackathon offers developers a platform to showcase
            innovative solutions for societal advancement. Participants are
            encouraged to use heterogeneous computing with Intel&apos;s oneAPI
            as the core programming paradigm. This hackathon will lead the
            developers to learn and work on the industry standard Intel&apos;s
            optimized frameworks. Participants have the opportunity to become
            Intel Student Ambassadors based on their performance in the
            hackathon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
