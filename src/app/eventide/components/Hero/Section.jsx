"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt } from 'react-icons/fa';

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
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.4 } },
  };

  const image = {
    hidden: { opacity: 0, scale: 1.1, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", duration: 0.4 },
    },
  };

  const etext2 =
    "Get ready for a night of pure musical magic at the Proshow, the showstopper of Anokha Techfest 2024! This year, we’re bringing the electrifying energy of the legendary keytar maestro Stephen Devassy, alongside the soul-stirring voice of Satyaprakash and their powerhouse group, The Solid Band. Known for blending Indian classical, jazz, and rock, their musical brilliance is truly one of a kind! With foot-tapping beats and melodies that touch your heart, this concert will leave you craving more.";

  return (
    <div className="mt-40">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
        className="md:grid grid-cols-2 gap-x-7 space-y-10"
      >
        <motion.div variants={image} className="md:mt-[-100px] opacity-80">
          <Image
            src="https://i.imgur.com/bD5DFgM.jpeg"
            alt="Performance image 3"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-600 flex items-center justify-center font-extrabold">
          FUSION OF DYNAMICS...
        </div>
        <motion.div variants={item}>
          <h1 className="text-5xl mt-7 mb-4 max-sm:text-3xl text-white">
            Raaga Night
          </h1>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            Every year, the stage comes alive with Raagasudha’s enthralling
            music performances! From heartfelt classical renditions to exciting
            beats of contemporary tunes, each performance is a testament to the
            club’s versatility. The performers showcase their dedication and
            collaborative effort, creating an electrifying atmosphere that
            leaves the audience spellbound. Every note is a masterpiece,
            showcasing an impeccable blend of melody, pitch, rhythm, and
            harmony. Come witness this musical spectacle at Anokha 2024.
          </p>
          <div
            className="text-4xl font-bold bg-gradient-to-r from-pink-800 to-blue-500
 text-transparent bg-clip-text animate-gradient mt-4"
          >
            17th October @ 6:30 PM
          </div>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-800 to-blue-500 px-4 py-2 rounded-lg mt-4">
            <FaMapMarkerAlt />
            <span>Main Ground</span>
          </div>
        </motion.div>
        <motion.div variants={image} className="md:mt-[40px]">
          <Image
            src="https://i.imgur.com/p00di0N.jpeg"
            alt="Performance image 4"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div variants={image} className="md:mt-[-100px] opacity-80">
          <div className="h-[500px] overflow-hidden">
            <Image
              src="https://i.imgur.com/7tVoC5h.jpg"
              alt="Performance image 3"
              layout="responsive"
              width={500}
              height={200}
            />
          </div>
        </motion.div>
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-600 flex items-center justify-center font-extrabold">
          RHYTHM. FUSION. FIRE....
        </div>
        <motion.div variants={item}>
          <h1 className="text-5xl mt-7 mb-4 max-sm:text-3xl text-white">
            Pro Show
          </h1>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">{etext2}</p>
          <div
            className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-500
 text-transparent bg-clip-text animate-gradient mt-4"
          >
            18th October @ 6:30 PM
          </div>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-800 to-blue-500 px-4 py-2 rounded-lg mt-4">
            <FaMapMarkerAlt />
            <span>Main Ground</span>
          </div>
        </motion.div>
        <motion.div variants={image} className="md:mt-[40px] scale-75">
          <div className="h-[500px] overflow-hidden">
            <Image
              src="https://i.imgur.com/d2ReTJe.jpg"
              alt="Performance image 4"
              layout="responsive"
              width={500}
              height={200}
            />
          </div>
        </motion.div>

        <motion.div variants={image}>
          <Image
            src="/images/Sarnesh_160.jpg"
            alt="Performance image 1"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-600 flex items-center font-extrabold">
          GRACEFUL EXPRESSIONS...
        </div>
        <motion.div variants={item}>
          <h1 className="text-5xl mt-7 mb-4 max-sm:text-3xl text-white">
            Natya Night
          </h1>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            Natyasudha’s dance performance is an explosion of energy captivating
            the audience from the very first beat. Each member pours their
            passion into every movement and infuses their performance with
            infectious enthusiasm. Their catchy steps not only display the
            technical expertise of the dancers but also invite the audience to
            become active participants in the experience. From the graceful
            elegance of traditional forms to the high-energy beats of hip-hop,
            every routine leaves an indelible mark on the audience.
          </p>
          <div
            className="text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500
 text-transparent bg-clip-text animate-gradient mt-4"
          >
            19th October @ 6:30 PM
          </div>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-yellow-500 px-4 py-2 rounded-lg mt-4">
            <FaMapMarkerAlt />
            <span>Main Ground</span>
          </div>
        </motion.div>
        <motion.div variants={image} className="md:mt-[40px]">
          <Image
            src="/images/Sarnesh_62.jpg"
            alt="Performance image 2"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section;
