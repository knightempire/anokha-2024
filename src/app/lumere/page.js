"use client";
import Image from "next/image";
import WebGLApp from "../bg/WebGLApp";
import Navigationbar from "../components/EventHeader";
import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";

const Lumere = () => {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  const speakers = [
    {
      name: "Speaker 1",
      role: "Role 1",
      company: "Lumiere",
    },
    {
      name: "Speaker 2",
      role: "Role 2",
      company: "Lumiere",
    },
    {
      name: "Speaker 3",
      role: "Role 3",
      company: "Lumiere",
    },
    {
      name: "Speaker 4",
      role: "Role 4",
      company: "Lumiere",
    },
    {
      name: "Speaker 5",
      role: "Role 5",
      company: "Lumiere",
    },
  ];

  return (
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="flex z-20 w-full flex-col">
        <Navigationbar />
        <div className="flex w-full h-full">
          <div className="container mx-auto pb-16">
            <div className="text-center mb-16 bg-cover bg-center h-screen flex flex-col justify-center items-center relative">
              <div
                className="absolute inset-0 bg-cover bg-center z-[-1]"
                style={{
                  backgroundImage: "url('/images/lumierebg.jpeg')",
                  filter: "brightness(50%)",
                }}
              />
              <div>
                <Image
                  src="/images/lumiere v2.png"
                  width={400}
                  height={100}
                  alt="lumiere-logo"
                />
              </div>
              <h1 className="text-8xl font-bold mb-4 text-white z-10 font-">
                Tech Talk<span className="text-base font-thin"> 2024</span>
              </h1>
              <p className="text-xl text-gray-200 z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button class="mt-8 px-4 py-2 text-lg text-black bg-white font-semibold border rounded-full bg-red-10 z-10 hover:scale-105 transition">
                REGISTER
              </button>
            </div>

            <div className="mt-24">
              <h2 className="text-4xl font-bold text-center mb-8 text-white">
                The Speakers
              </h2>
              <p className="text-center text-gray-300 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a diam et dolor
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {speakers.map((speaker, index) => (
                  <div key={index} className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 bg-gray-700 rounded-lg"></div>
                    <h3 className="font-semibold text-xl text-white">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-300 mt-2">{speaker.role}</p>
                    <p className="text-blue-400 mt-1">@{speaker.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Lumere;
