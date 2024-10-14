'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { BackgroundBeams } from "../background-beams";

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    };

    return (
        <div className="pt-28">
            <BackgroundBeams />
            <motion.div initial='hidden' whileInView='show' viewport={{ once: true }} variants={container} className="flex flex-col items-center justify-between">
                <motion.h1 variants={item} className="text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl text-white">Feel the Rhythm of</motion.h1>
                <motion.p variants={item} className="text-center text-9xl pb-14 max-lg:text-7xl max-md:text-5xl text-white">Your Heart&apos;s Music</motion.p>
                <motion.p variants={item} className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm">
                    Eventide the 3-day cultural extravaganza of Anokha, has brought joy to thousands over the past decade through explosive performances from talented artists...
                </motion.p>
            </motion.div>
            <div className="mt-28 text-white">
                <div className="p-2 relative scale-50 sm:scale-75">
                    <motion.div
                        initial={{ y: 400, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "keyframes" }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/images/poster.webp"
                            alt="Event poster"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;