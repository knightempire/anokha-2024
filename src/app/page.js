"use client";
import Navbar from "./components/EventHeader";
import Hero from "./components/Hero";
import Info from "./components/InfoDivs";
import SponsorsMarquee from "./components/SponsorsMarquee";
import AnokhaMarquee from "./components/AnokhaMarquee";
import Footer from "./components/Footer";
import WebGLApp from "./bg/WebGLApp";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import projects from "./info_data";
import tinycolor from "tinycolor2";
import Gallery from "./components/Gallery";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });
  const [cardColor, setCardColor] = useState(webGLColors);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <WebGLApp colors={cardColor} />
      <Navbar login={true} />
      <Hero className="z-10" />
      <SponsorsMarquee />
      <Info
        title="About Anokha"
        src={[
          "https://i.imgur.com/LqLc1zR.jpg",
          "https://i.imgur.com/NbYhQmE.jpg",
          "https://i.imgur.com/wNMrU5H.jpg",
          "https://i.imgur.com/7oW7AI9.jpg",
          "https://i.imgur.com/BdM5523.jpg",
        ]}
        description="Anokha, the national techfest of Amrita Vishwa Vidyapeetham Coimbatore, is a 3-day congregation of some of the brightest minds in India. Founded in 2010, Anokha has grown by leaps and bounds and has progressed to become one of the leading techfests in India. Anokha has successfully completed ten editions and boasts an average annual participation of over 10,000 outstanding students from top-ranking engineering institutions in India like IITs, BITS, NITs and IIITs as well as partner universities in USA and Europe namely University of New Mexico, EVRY France and Uppsala University-Sweden."
      />
      <AnokhaMarquee />
      <Footer current_page="home" />{" "}
      {/* current_page is a prop that is used to highlight the current page in the footer. Possible values are home, team, contact, privacy policy} */}
    </main>
  );
}
