"use client";
import Image from "next/image";
import WebGLApp from "../bg/WebGLApp";
import Navigationbar from "../components/EventHeader";
import Footer from "../components/Footer";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const Lumere = () => {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255],
    color3: [15 / 255, 21 / 255],
  });

  const speakers = [
    {
      name: "Dr. Sudhanshu Mani",
      role: "Led the Vande Bharat Express project, enhancing Indian Railways with cutting-edge engineering.",
    },
    {
      name: "Major Deepak Iyer",
      role: "Former Special Forces officer focused on leadership development and resilience in business.",
    },
    {
      name: "Dushyant Dubey",
      role: "Social activist using digital platforms for grassroots change in mental health and abuse prevention.",
    },
    {
      name: "Kalki Subramaniam",
      role: "Transgender rights advocate employing art and media for social change in India.",
    },
    {
      name: "Veena Kumaravel",
      role: "Founder of Naturals, empowering women entrepreneurs through a successful salon franchise model.",
    },
  ];

  const handleScrollMore = () => {
    window.scrollTo({
      top: window.scrollY + 700,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="flex z-20 w-full flex-col">
        <Navigationbar />
        <div className="w-full pb-16">
          <div className="text-center mb-16 bg-cover bg-center h-screen flex flex-col justify-center items-center relative mx-0 sm:mx-auto">
            <div
              className="absolute inset-0 bg-cover bg-center z-[-1] w-full"
              style={{
                backgroundImage: "url('/images/lumierebg.jpeg')",
                filter: "brightness(50%)",
              }}
            />
            <div className="sm:w-[200px] md:w-[400px]">
              <Image
                src="/images/lumiere v2.png"
                alt="lumiere-logo"
                width={400}
                height={100}
                layout="responsive"
              />
            </div>
            <h1 className="text-8xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 text-white z-10">
              Tech Talk
            </h1>
            <p className="text-5xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-white z-10">
              18th Oct{" "}
              <span className="text-3xl sm:text-lg md:text-xl lg:text-3xl">
                2024
              </span>
            </p>
            <p className="text-xl text-gray-200 z-10 max-w-3xl">
              Lumière is a dynamic segment of Anokha 2024, where influential
              voices share insights on society, technology, and leadership.
            </p>
            <button className="mt-8 px-4 py-2 text-lg text-black bg-white font-semibold border rounded-full bg-red-10 z-10 hover:scale-105 transition">
              Register
            </button>
            <div className=" inset-0 flex justify-center items-center">
              <div
                onClick={handleScrollMore}
                className="bg-gray-400 tex animate-bounce absolute md:top-[92%] sm:top-[90%]  w-32 rounded-full px-3 py-2 flex items-center justify-center cursor-pointer"
              >
                Scroll More <FaAngleDoubleDown className="ml-2" />
              </div>
            </div>
          </div>

          <div className="mt-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
              The Speakers
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Lumière features inspiring talks and an interactive Q&A, and a
              panel on &ldquo;Language & Literature in the Age of Programming &
              AI&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="py-4 px-12 rounded-lg w-full sm:w-auto"
                >
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full  flex items-center justify-center text-gray-400 text-4xl font-bold">
                    {speaker.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-xl text-white text-center mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-300 text-center text-sm max-w-xs mx-auto">
                    {speaker.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Lumere;
