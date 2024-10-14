'use client'

import Image from 'next/image';
import {motion} from "framer-motion"
import { BackgroundBeams } from "../background-beams";

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, y:30,  },
        show: { opacity: 1, y:0, transition:{type: 'smooth'} },
    };

    const image = {
        hidden: { opacity: 0, y:30,  },
        show: { opacity: 1, y:0, transition:{type: 'smooth'} },
    }

    return (
        <div className="pt-28">
                <BackgroundBeams />
            <motion.div initial='hidden' whileInView='show' viewport={{once:true}} variants={container}
             className="flex flex-col items-center justify-between">
                <motion.h1 variants={item} className="text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl text-white">Feel the Rhythm of</motion.h1>
                 <motion.p className="text-center text-9xl pb-14 max-lg:text-7xl max-md:text-5xl text-white" variants={item}>Your Heart&apos;s Music</motion.p>
                <motion.p variants={item} className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm">Eventide the 3-day cultural extravaganza of Anokha, has brought joy to thousands over the past decade through explosive performances from talented artists. The enchanting melodies of Raagasudha, our soulful music club, and the graceful performances of Natyasudha, our energetic dance club have left our audience in awe. The highlight of this grand celebration, the pro show has featured passionate and top-tier artists from the music industry.
                Eventide has become a platform for the celebration of India's rich cultural heritage and diversity encouraging performers from all over the country. Between soulful classical music, scintillating film numbers, and powerful percussion, we have explored every genre you can name. This cultural experience has left an everlasting impression on our audience.
                </motion.p>
            
            </motion.div>
            <div className="mt-28 text-white">
                <div className="p-2 relative">
                <motion.img
    initial={{ y: 400, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, type: "keyframes" }}
    className="w-full h-full object-cover object-top"
    src="/images/poster.webp"
    alt=""
  />
                    {/* <motion.div variants={container} whileInView='show' initial='hidden' viewport={{once:true}} transition={{delayChildren:0.1}}>
                    <motion.span variants={image} className="absolute top-4 left-4 lg:text-7xl text-4xl">txt</motion.span>
                    <motion.span variants={image} className="absolute bottom-8 left-4 lg:text-xl md:text-base text-sm max-sm:hidden">txt </motion.span>
                    <motion.span variants={image}className="absolute top-4 right-4 md:text-xl text-sm">txt</motion.span>
                    <motion.span variants={image} className="absolute right-4 bottom-4 md:text-3xl text-sm">Date</motion.span>
                    </motion.div> */}
             
                </div>
            </div>
        </div>
    )
}

export default Hero