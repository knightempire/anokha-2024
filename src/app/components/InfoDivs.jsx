"use client";
import { useRef, useEffect } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";
import tinycolor from "tinycolor2";

const getRandomHSLColor = () => {
  const h = Math.random() * 360; // Random hue
  const s = Math.random() * 100; // Random saturation between 0 and 100
  const l = Math.random() * 100; // Random lightness between 0 and 25
  return [h, s, l];
};

const handleCardChange = () => {
  const [h, s, l] = getRandomHSLColor();

  // Convert HSL to RGB
  const hslColor = tinycolor({ h, s, l });
  const rgbColor = hslColor.toRgb();

  // Extract RGB components
  const color1 = [rgbColor.r / 255, rgbColor.g / 255, rgbColor.b / 255];

  // Generate monochromatic colors
  const monochromaticColors = hslColor.monochromatic();
  const color2 = [
    monochromaticColors[2]._r / 255,
    monochromaticColors[2]._g / 255,
    monochromaticColors[2]._b / 255,
  ];
  const color3 = [
    monochromaticColors[1]._r / 255,
    monochromaticColors[1]._g / 255,
    monochromaticColors[1]._b / 255,
  ];

  // Create randomColors object
  const randomColors = {
    color1,
    color2,
    color3,
  };

  return randomColors;
};

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  onColorChange,
}) => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (cardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          // Log for debugging purposes:
          console.log("Observer fired for entry:");
          console.log(entries[0]);

          if (entries[0].isIntersecting === true) {
            console.log("Intersection detected. Changing color...");
            onColorChange(handleCardChange);
          } else {
            console.log("Card out of view. Not changing color...");
          }
        },
        {
          threshold: 0.8,
        }
      );
      observer.observe(cardRef.current);

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky overflow-hidden top-10"
    >
      <motion.div
        ref={cardRef}
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
                  boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.5)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
