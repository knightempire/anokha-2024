"use client";

import dynamic from 'next/dynamic'

import Navbar from "./components/EventHeader";
import Hero from "./components/Hero";
import Lenis from "@studio-freight/lenis";
import WebGLApp from "./bg/WebGLApp";


const InfoLeft = dynamic(() => import("./components/InfoDivLeft"));
const InfoRight = dynamic(() => import("./components/InfoDivRight"));
const SponsorsMarquee = dynamic(() => import("./components/SponsorsMarquee"));
const AnokhaMarquee = dynamic(() => import("./components/AnokhaMarquee"));
const Footer = dynamic(() => import("./components/Footer"));
const FilmGallery = dynamic(() => import("./components/FilmGallery"));

import { useEffect, useRef, useState } from "react";
import projects from "./info_data";

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
      {/* This is temprovary sponsor component may change in future */}
      <SponsorsMarquee />
      <div ref={container} className="sticky mt-10 z-10">
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
      <div>
        <div className="mt-32 z-30 text-white text-6xl text-center">
          GALLERY
        </div>
        <FilmGallery />
      </div>
      <AnokhaMarquee />
      <Footer current_page="home" />
    </main>
  );
}
