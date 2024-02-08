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
import { useEffect, useRef, useState } from "react";
import projects from "./info_data";
import Gallery from "./components/Gallery";

import {NextUIProvider} from "@nextui-org/react";

 
export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
      <div ref={container} className="sticky z-10">
        {projects.map((project, index) => {
          const Component = index % 2 === 0 ? InfoLeft : InfoRight;
          return (
            <Component
              title={project.title}
              description={project.description}
              src={project.src}
              link={project.link}
              key={project.title}
            />
          );
        })}
      </div>
      <Gallery />
      <AnokhaMarquee />
      <Footer current_page="home" />
    </main>
     
  );
}
