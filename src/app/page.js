"use client";
import Navbar from "./components/EventHeader";
import Hero from "./components/Hero";
import InfoLeft from "./components/InfoDivLeft";
import InfoRight from "./components/InfoDivRight";
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
      {projects.map((project, index) =>
        index % 2 === 0 ? (
          <InfoLeft
            title={project.title}
            description={project.description}
            src={project.src}
            link={project.link}
            key={project.title}
          />
        ) : (
          <InfoRight
            title={project.title}
            description={project.description}
            src={project.src}
            link={project.link}
            key={project.title}
          />
        )
      )}
      <AnokhaMarquee />
      <Footer current_page="home" />{" "}
      {/* current_page is a prop that is used to highlight the current page in the footer. Possible values are home, team, contact, privacy policy} */}
    </main>
  );
}
