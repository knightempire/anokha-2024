import styles from './styles.module.scss';
import Picture1 from '../../../../../public/images/stephen2.jpg';
import Picture2 from '../../../../../public/images/Sarnesh_148.jpg';
import Picture3 from '../../../../../public/images/Eniyan_25.jpg';
import Picture4 from '../../../../../public/images/SriHaran_2.jpg';
import Picture5 from '../../../../../public/images/Sarnesh_780.jpg';
import Picture6 from '../../../../../public/images/Eniyan_47.jpg';
import Picture7 from '../../../../../public/images/Sarnesh_1137.jpg';
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
