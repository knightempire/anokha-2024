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
      name: "Ruby Jennings",
      role: "Product Manager",
      company: "Anokha",
    },
    {
      name: "Leon Hanson",
      role: "Sales Manager",
      company: "Anokha",
    },
    {
      name: "Meghan Stone",
      role: "Marketing Specialist",
      company: "Anokha",
    },
    {
      name: "Willie Perkins",
      role: "UX Engineer",
      company: "Anokha",
    },
    {
      name: "Ruby Jennings",
      role: "Product Manager",
      company: "Anokha",
    },
  ];

  return (
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="flex z-20 w-full flex-col">
        <Navigationbar />
        <div className="flex w-full h-full">
          <div className="container mx-auto py-12">
            <div
              className="text-center mb-16 bg-cover bg-center h-screen flex flex-col justify-center items-center"
              style={{
                backgroundImage: "url('/images/lumierebg.jpeg')",
              }}
            >
              <h1 className="text-4xl font-bold mb-4 text-white">
                Clear Statement about Your Event
              </h1>
              <p className="text-xl text-gray-200">
                Secondary header providing additional information
              </p>
              <button className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors">
                GET THE TICKET
              </button>
            </div>

            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                The Speakers
              </h2>
              <p className="text-center text-gray-300 mb-12">
                Write a few lines about the event speakers to highlight their
                expertise in the field
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
