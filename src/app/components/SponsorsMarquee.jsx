import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SponsorElement = ({ src, title }) => {
  return (
    <Image
      src={src}
      alt="Sponsor Logo"
      objectFit="contain"
      height={
        title == "IETE"
          ? 200
          : title == "H&R"
          ? 180
          : title == "ICICI"
          ? 200
          : 80
      }
      width={
        title == "IETE"
          ? 300
          : title == "H&R"
          ? 180
          : title == "ICICI"
          ? 200
          : title == "CISCO"
          ? 140
          : 80
      }
      className={title == "H&R" ? "mr-8 ml-16" : "mx-8"}
    />
  );
};

//https://i.imgur.com/e4TmMGj.jpeg

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
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" />
        {/* OneAPI logo */}
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" />

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" />

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" />

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" />

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" />
      </Marquee>
    </div>
  );
};

export default SponsorsMarquee;
