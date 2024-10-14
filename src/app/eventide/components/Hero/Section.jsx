'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

const Section = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 1.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: 'keyframe', duration: 0.4 } },
    };

    const image = {
        hidden: { opacity: 0, scale: 1.1, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: 'keyframe', duration: 0.4 } },
    };

    return (
        <div className="mt-40">
            <motion.div initial='hidden' whileInView='show' variants={container} viewport={{ once: true }} className="md:grid grid-cols-2 gap-x-7 space-y-10">
                <motion.div variants={image}>
                    <Image src="/images/Sarnesh_160.jpg" alt="" layout="responsive" width={500} height={500} />
                </motion.div>
                <div className="max-md:hidden text-4xl md:text-7xl text-neutral-600 flex items-center font-extrabold">GRACEFUL EXPRESSION</div>
                <motion.div variants={item}>
                    <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl text-white ">Natya Night </h1>
                    {/* <p className="text-2xl text-neutral-500 max-sm:text-xl">short</p> */}
                    <p className="text-neutral-500 mt-3 max-sm:text-sm">Every year, the stage comes alive with Raagasudha’s enthralling music performances! From heartfelt classical renditions to exciting beats of contemporary tunes, each performance is a testament to the club’s versatility. The performers showcase their dedication and collaborative effort, creating an electrifying atmosphere that leaves the audience spellbound. Every note is a masterpiece, showcasing an impeccable blend of melody, pitch, rhythm, and harmony. Come witness this musical spectacle at Anokha 2024.</p>
                  
                </motion.div>
                <motion.div variants={image} className="md:mt-[40px]">
                    <Image src="/images/Sarnesh_62.jpg" alt="" layout="responsive" width={500} height={500} />
                </motion.div>
                <motion.div variants={image} className="md:mt-[-100px] opacity-80">
                    <Image src="/images/Sarnesh_867.jpg" alt="" layout="responsive" width={500} height={500} />
                </motion.div>
                <div className="max-md:hidden text-4xl md:text-7xl text-neutral-600 flex items-center justify-center font-extrabold">EXPRESSIVE IMPROVISATION</div>
                <motion.div variants={item}>
                    <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl text-white">Raaga Night</h1>
                    {/* <p className="text-2xl text-neutral-500 max-sm:text-xl">short</p> */}
                    <p className="text-neutral-500 mt-3 max-sm:text-sm">Natyasudha’s dance performance is an explosion of energy captivating the audience from the very first beat. Each member pours their passion into every movement and infuses their performance with infectious enthusiasm. Their catchy steps not only display the technical expertise of the dancers but also invite the audience to become active participants in the experience. From the graceful elegance of traditional forms to the high-energy beats of hip-hop, every routine leaves an indelible mark on the audience.</p>

                </motion.div>
                <motion.div variants={image} className="md:mt-[40px]">
                    <Image src="/images/Sarnesh_1689.jpg" alt="" layout="responsive" width={500} height={500} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Section;
