import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SponsorElement = ({ src }) => {
  return (
    <Image
      src={src}
      alt="Sponsor Logo"
      objectFit="contain"
      height={100}
      width={100}
      className="mx-8"
    />
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
        className="flex h-30 text-white bg-white py-4"
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
