"use client";
import Image from "next/image";
import WebGLApp from "../bg/WebGLApp";
import Navigationbar from "../components/EventHeader";
import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";

const Techfair = () => {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="flex z-20 w-full flex-col">
        <Navigationbar />
        <div className="flex flex-col items-center justify-center h-screen w-full space-y-4">
          <Image
            src="/images/Picture1.jpg"
            alt="techfair mascot"
            height={200}
            width={200}
            objectFit="contain"
            className="rounded-xl"
          />
          <div className="bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-600 text-transparent bg-clip-text md:text-6xl sm:text-4xl lg:text-7xl text-center">
            ANOKHA TECHFAIR <br /> EXHIBITIONS 2024
          </div>
          <div
            className="flex select-none hover:cursor-pointer text-center text-white py-4 px-16 border-2 rounded-xl my-12"
            onClick={() => scrollDown()}
          >
            Learn More &#11206;
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-lg flex z-19 flex-col justify-center items-center p-8 m-8 rounded-xl">
          <div className="text-white text-3xl m-4">ABOUT</div>
          <div className="text-white rounded-2xl text-md text-center sm:w-full md:w-[90%] mb-4">
            Anokha Techfair exhibitions acts as a unifying platform, which
            brings together students from different colleges across the country
            to present their work to industry professionals and a wide audience.
            It serves as a brilliant opportunity to network and gain insights
            from experts and professionals nationwide.
            <br />
            <br /> Techfair exhibitions, considered a flagship event for talent
            and innovation at Amrita University, Coimbatore, provides a forum
            for creative ideas to take centre stage, allowing diverse skills to
            shine and year after year, the it has served as the epicentre of
            innovation, blurring the boundaries between imagination and reality.
            The Anokha Techfair exhibitions exemplifies the collaboration
            between academia and industry. Students exhibit technological
            proficiency, gaining valuable insights for their future careers. It
            highlights the vital link between academic achievement and
            real-world application in the industry and embodies a unique blend
            of teamwork and versatility.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center sm:p-4 sm:m-4 md:p-8 md:m-8 rounded-xl">
        <div className="text-white text-3xl m-4">BENEFITS OF PARTICIPATING</div>
          <div className="flex justify-center sm:flex-col md:flex-row w-full text-center">
            <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-lg flex z-19 flex-col justify-center items-center sm:p-8 sm:m-4 md:p-8 md:m-8 rounded-xl sm:w-[90%] md:w-[60%]">
              <div className="">
                <Image
                  src="/images/65e759b42b3102121ce49041_img2-removebg-preview-p-500.png"
                  alt="techfair"
                  height={100}
                  width={100}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-2xl m-4">EXPAND YOUR NETWORK</div>
              <div className="text-white rounded-xl text-center">
                Participate in the Anokha TechFair which is hosted by the highly
                acclaimed Amrita University to showcase your projects, products,
                or innovations to a broader audience. Get a chance to meet
                fellow innovators, industry experts, and investors to amplify
                your connections.
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-lg flex z-19 flex-col justify-center items-center sm:p-8 sm:m-4 md:p-8 md:m-8 rounded-xl sm:w-[90%] md:w-[60%]">
              <div className="">
                <Image
                  src="/images/65e759b3e78f4f659b35903d_evaluation-p-500.png"
                  alt="techfair"
                  height={100}
                  width={100}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-2xl m-4">
                CERTIFICATE OF RECOGNITION
              </div>
              <div className="text-white rounded-xl text-center">
                Participants will be awarded with a prestigious Certificate of
                Recognition. This certificate serves as a testament to the
                remarkable dedication and creativity demonstrated.
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-lg flex z-19 flex-col justify-center items-center sm:p-8 sm:m-4 md:p-8 md:m-8 rounded-xl sm:w-[90%] md:w-[60%]">
              <div className="">
                <Image
                  src="/images/65e759b382c934b72d33bd80_newsletter-removebg-preview-p-500.png"
                  alt="techfair"
                  height={100}
                  width={100}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-2xl m-4">
                SPOTLIGHT IN ANOKHA TECHFAIR NEWSLWTTER
              </div>
              <div className="text-white rounded-xl text-center">
                Get a chance to be featured in the First-ever Anokha TechFair
                Newsletter which can significantly increase the visibility of
                your project.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[200px] bg-[rgba(0,0,0,0.3)] backdrop-blur-lg text-center items-center py-5">
          <h2 className="mt-4 sm:text-2xl lg:text-3xl text-white">
            SUBMIT YOUR PROJECTS
          </h2>
          <div className="mx-auto my-4 p-4 text-white text-md sm:w-[90%] lg:w-[70%]">
            Calling out all budding scientists and innovators! The Anokha
            Techfair exhibitions provides the perfect platform for you to
            present your revolutionary ideas and innovations that could redefine
            the technological landscape. Join us to connect, collaborate, and
            foster lasting relationships with individuals who share your
            enthusiasm for pushing the boundaries of technology.
          </div>
          <Link href="https://forms.office.com/r/bp79NqPxkt">
            <button className="text-xl text-black bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-600 rounded-lg p-4 transition duration-50 hover:scale-105 active:scale-100">
              SUBMIT YOUR PROJECTS
            </button>
          </Link>
          <div className="text-white text-2xl my-3 p-2 flex sm:flex-col md:flex-row justify-center">
            <div>Submission Deadline : </div>
            <div>&nbsp; 10th March, 2024</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Techfair;
