"use client";
import { useRef, useEffect, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";
import tinycolor from "tinycolor2";

// const getRandomHSLColor = () => {
//   const h = Math.random() * 360; // Random hue
//   const s = Math.random() * 100; // Random saturation between 0 and 100
//   const l = Math.random() * 100; // Random lightness between 0 and 25
//   return [h, s, l];
// };

// const handleCardChange = () => {
//   const [h, s, l] = getRandomHSLColor();

//   // Convert HSL to RGB
//   const hslColor = tinycolor({ h, s, l });
//   const rgbColor = hslColor.toRgb();

//   // Extract RGB components
//   const color1 = [rgbColor.r / 255, rgbColor.g / 255, rgbColor.b / 255];

//   // Generate monochromatic colors
//   const monochromaticColors = hslColor.monochromatic();
//   const color2 = [
//     monochromaticColors[2]._r / 255,
//     monochromaticColors[2]._g / 255,
//     monochromaticColors[2]._b / 255,
//   ];
//   const color3 = [
//     monochromaticColors[1]._r / 255,
//     monochromaticColors[1]._g / 255,
//     monochromaticColors[1]._b / 255,
//   ];

//   // Create randomColors object
//   const randomColors = {
//     color1,
//     color2,
//     color3,
//   };

//   return randomColors;
// };

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
  return (
    <div className="h-screen flex items-center justify-center sticky overflow-hidden top-10">
      <div className="flex flex-col relative -top-20 -right-20 h-[75vh] w-[65vw] bg-[#121212]  b rounded-xl transform origin-top my-10 top-5">
        <div className="flex absolute top-[35%] -left-[12%] text-white text-6xl z-10 rounded-xl">
          {title}
        </div>
        <div className="flex absolute w-[225px] h-[225px] -top-[15%] -left-[15%] rounded-xl shadow-custom-down">
          <Image
            src={src[0]}
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl brightness-75"
          />
        </div>
        <div className="flex absolute w-[125px] h-[125px] top-[5%] left-[12%] rounded-xl shadow-custom-down">
          <Image
            src={src[4]}
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl brightness-75"
          />
        </div>
        <div className="flex absolute w-[250px] h-[250px] top-[55%] -left-[10%] rounded-xl shadow-custom-up">
          <Image
            src={src[2]}
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl brightness-75"
          />
        </div>
        <div className="flex absolute w-[225px] h-[225px] top-[50%] left-[20%] rounded-xl shadow-custom-up">
          <Image
            src={src[3]}
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl brightness-75"
          />
        </div>
        <div className="flex absolute w-[200px] h-[200px] -top-[5%] left-[30%] rounded-xl shadow-custom-down">
          <Image
            src={src[1]}
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl brightness-75"
          />
        </div>
        <div className="grid relative grid-cols-[55%,40%] w-full h-full text-white text-lg">
          <div className="flex flex-col justify-center items-center"></div>
          <div className="flex flex-col justify-center items-center text-justify bg-gray-600 bg-opacity-10 rounded-xl p-4 my-10">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
