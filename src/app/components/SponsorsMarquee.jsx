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
          : title == "Dhanalakshmi Bank"
          ? 150
          : title == "vnc group"
          ? 100
          : 80
      }
      width={
        title == "IETE"
          ? 300
          : title == "H&R"
          ? 180
          : title == "ICICI"
          ? 200
          : title == "Dhanalakshmi Bank"
          ? 150
          : title == "vnc group"
          ? 100
          : 80
      }
      className={title == "H&R" ? "mr-4 ml-24" : title == "Dhanalakshmi Bank" ? "mx-20" : "mx-8"}
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
        {/* <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" /> */}
        <SponsorElement src="https://i.imgur.com/gCTbGOI.png" title="Dhanalakshmi Bank"/>
        <SponsorElement src="https://i.imgur.com/7lCblCB.png" title="vnc group"/>


        {/* OneAPI logo */}
        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        {/* <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" /> */}
        <SponsorElement src="https://i.imgur.com/gCTbGOI.png" title="Dhanalakshmi Bank"/>
        <SponsorElement src="https://i.imgur.com/7lCblCB.png" title="vnc group"/>

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        {/* <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" /> */}
        <SponsorElement src="https://i.imgur.com/gCTbGOI.png" title="Dhanalakshmi Bank"/>
        <SponsorElement src="https://i.imgur.com/7lCblCB.png" title="vnc group"/>

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        {/* <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" /> */}
        <SponsorElement src="https://i.imgur.com/gCTbGOI.png" title="Dhanalakshmi Bank"/>
        <SponsorElement src="https://i.imgur.com/7lCblCB.png" title="vnc group"/>

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        {/* <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" /> */}
        <SponsorElement src="https://i.imgur.com/gCTbGOI.png" title="Dhanalakshmi Bank"/>
        <SponsorElement src="https://i.imgur.com/7lCblCB.png" title="vnc group"/>

        <SponsorElement src="https://i.imgur.com/X1qoxbQ.png" title="H&R" />
        <SponsorElement src="https://i.imgur.com/5BlpVzJ.jpg" title="IETE" />
        {/* <SponsorElement src="https://i.imgur.com/AK9UfYT.png" title="1API" /> */}
        {/* <SponsorElement src="https://i.imgur.com/e4TmMGj.jpeg" title="IEEE" /> */}
        <SponsorElement src="https://i.imgur.com/0VLpF8v.png" title="ICICI" />
        {/* <SponsorElement src="https://i.imgur.com/tP5wEjl.png" title="CISCO" /> */}
        <SponsorElement src="https://i.imgur.com/gCTbGOI.png" title="Dhanalakshmi Bank"/>
        <SponsorElement src="https://i.imgur.com/7lCblCB.png" title="vnc group"/>

      </Marquee>
    </div>
  );
};

export default SponsorsMarquee;
