'use client';
import Navbar from './components/EventHeader'
import Hero from './components/Hero'
import Info from './components/InfoDivs'
import SponsorsMarquee from './components/SponsorsMarquee'
import AnokhaMarquee from './components/AnokhaMarquee'
import Footer from './components/Footer'
import WebGLApp from './bg/WebGLApp'
import Lenis from '@studio-freight/lenis';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import projects from './info_data'

export default function Home() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  
  const [webGLColors, setWebGLColors] = useState({ color1: [43 / 255, 30 / 255, 56 / 255], color2: [11 / 255, 38 / 255, 59 / 255], color3: [15 / 255, 21 / 255, 39 / 255] });
  const [cardColor, setCardColor] = useState(webGLColors);

  const getRandomColorValue = () => {
    return [Math.random(), Math.random(), Math.random()];
  };

  const handleClick = () => {
    const randomColors = {
      color1: getRandomColorValue(),
      color2: getRandomColorValue(),
      color3: getRandomColorValue()
    };

    setWebGLColors(randomColors);
  };
  const handleCardColorChange = (color) => {
    setCardColor(color);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <button
        className="fixed right-4 bottom-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 z-10"
        onClick={handleClick}
      >
        Change Colors
      </button>
      <WebGLApp colors={cardColor} />
      <Navbar login={true}/>
      
      <Hero className='z-10' />
      <SponsorsMarquee /> 
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Info key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} onColorChange={handleCardColorChange} />
        })
      }
      <AnokhaMarquee />
      <Footer current_page="home" /> {/* current_page is a prop that is used to highlight the current page in the footer. Possible values are home, team, contact, privacy policy} */}


    </main>
  )
}