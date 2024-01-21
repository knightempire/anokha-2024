'use client';
import { useRef, useEffect } from "react";
import { useTransform, motion, useScroll } from 'framer-motion';
import Image from "next/image";


const getRandomColorValue = () => {
  return [Math.random(), Math.random(), Math.random()];
};

const Card = ({ i, title, description, src, url, color, progress, range, targetScale, onColorChange }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (cardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          // Log for debugging purposes:
          console.log('Observer fired for entry:');
          console.log(entries[0]);

          if (entries[0].isIntersecting === true) {
            console.log('Intersection detected. Changing color...');
            onColorChange({
              color1: getRandomColorValue(),
              color2: getRandomColorValue(),
              color3: getRandomColorValue(),
            });
          } else {
            console.log('Card out of view. Not changing color...');
          }
        },
        {
          threshold: 0.8,
        }
      );
      observer.observe(cardRef.current);

      return () => observer.unobserve(cardRef.current);
    }
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky overflow-hidden top-10">
      <motion.div ref={cardRef}
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="flex flex-col relative -top-20 h-[75vh] w-[80vw] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] rounded-xl p-12 transform origin-top"
      >

        <div className="flex h-full gap-12">
          <div className="relative w-2/5 top-10 text-white">
            <h2 className="text-left m-0 font-medium text-5xl">{title}</h2>
            <p className="relative top-10">{description}</p>
          </div>

          <div className="relative w-3/5 h-full overflow-hidden rounded-xl shadow-md">
            <motion.div
              className="w-full h-full overflow-hidden relative"
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover w-full h-full rounded-xl shadow-inner"
                style={{
                  boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.5)'
                }}
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card