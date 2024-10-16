"use client";
import styles from './styles.module.scss';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    // Define scales outside of the mapping
    const scales = [
        useTransform(scrollYProgress, [0, 1], [1, 4]),
        useTransform(scrollYProgress, [0, 1], [1, 5]),
        useTransform(scrollYProgress, [0, 1], [1, 6]),
        useTransform(scrollYProgress, [0, 1], [1, 5]),
        useTransform(scrollYProgress, [0, 1], [1, 6]),
        useTransform(scrollYProgress, [0, 1], [1, 8]),
        useTransform(scrollYProgress, [0, 1], [1, 9]),
    ];

    const Picture1 = "https://i.imgur.com/nKKOhTQ.png";
    const Picture2 = "https://i.imgur.com/DEhANBJ.jpeg";
    const Picture3 = "https://i.imgur.com/57Wd6ww.jpeg";
    const Picture4 = "https://i.imgur.com/nqFGkMx.jpeg";
    const Picture5 = "https://i.imgur.com/u49T4RZ.jpeg";
    const Picture6 = "https://i.imgur.com/vj1J7pH.jpeg";
    const Picture7 = "https://i.imgur.com/3R1wS41.jpeg";

    const pictures = [
        Picture1,
        Picture2,
        Picture3,
        Picture4,
        Picture5,
        Picture6,
        Picture7,
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map((src, index) => (
                    <motion.div key={index} style={{ scale: scales[index] }} className={styles.el}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={src}
                                fill
                                alt="image"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
