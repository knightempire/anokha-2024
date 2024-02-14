import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SponsorElement = ({ src }) => {
  return (
    <div className="flex relative justify-center items-center h-32 w-48 bg-white mx-4 p-2 rounded-xl">
      <div className="flex relative justify-center items-center h-full w-full rounded-xl p-2">
        <Image
          src={src}
          alt="sponsor"
          fill="contain"
          className="h-full w-full"
        />
      </div>
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
        className="flex relative justify-between items-center h-30 text-white bg-white"
      >
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" />
        {/* OneAPI logo */}
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" />
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" />
      </Marquee>
    </div>
  );
};

export default SponsorsMarquee;
