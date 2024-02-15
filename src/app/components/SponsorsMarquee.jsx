import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SponsorElement = ({ src, title }) => {
  return (
    <Image
      src={src}
      alt="Sponsor Logo"
      objectFit="contain"
      height={title == "IETE" ? 200 : title == "H&R" ? 180 : 80}
      width={title == "IETE" ? 300 : title == "H&R" ? 180 : 80}
      className={title == "H&R" ? "mr-8 ml-16" : "mx-8"}
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
        className="flex h-30 text-white bg-white py-4 overflow-hidden"
      >
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" />
        {/* OneAPI logo */}
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" />
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" />
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" />
        {/* OneAPI logo */}
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" />
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" />
      </Marquee>
    </div>
  );
};

export default SponsorsMarquee;
