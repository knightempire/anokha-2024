import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SponsorElement = () => {
  return (
    <div className="flex relative justify-center items-center h-14 bg-[#121212] px-5 rounded-full mx-10">
      <div className="flex relative justify-center items-center h-7 w-7 rounded-full mr-2">
        <Image
          src="https://imgur.com/VeFkJIy.png"
          alt="sponsor"
          fill="contain"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div className="flex relative justify-center items-center">Intel</div>
    </div>
  );
};

const SponsorsMarquee = () => {
  return (
    <div>
      <Marquee
        pauseOnHover="true"
        gradient="false"
        gradientColor="[0, 0, 0]"
        speed={50}
        className="flex relative justify-between items-center h-20 text-white "
      >
        <SponsorElement />
        <SponsorElement />
        <SponsorElement />
        <SponsorElement />
        <SponsorElement />
        <SponsorElement />
        <SponsorElement />
        <SponsorElement />
        <SponsorElement />
      </Marquee>
    </div>
  );
};

export default SponsorsMarquee;
