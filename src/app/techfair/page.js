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

  return (
    <main>
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="block z-20">
        <Navigationbar />
        <div className="pc-view lg:flex xl:flex md:hidden sm:hidden">
          <div className="flex flex-row">
            <div className="flex flex-col items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-8 pb-10 m-8 lg:w-[30vw] lg:h-auto lg:mt-36 text-justify">
              <div className="flex justify-center items-center text-4xl m-4">
                ABOUT
              </div>
              <br />
              <div className="flex justify-center items-center text-sm ">
              Anokha Techfair exhibitions acts as a unifying platform, which brings together students from different colleges across the country to present their work to industry professionals and a wide audience. It serves as a brilliant opportunity to network and gain insights from experts and professionals nationwide. 
                <br />
                <br />
                Techfair exhibitions, considered a flagship event for talent and innovation at Amrita University, Coimbatore, provides a forum for creative ideas to take centre stage, allowing diverse skills to shine and year after year, the it has served as the epicentre of innovation, blurring the boundaries between imagination and reality. The Anokha Techfair exhibitions exemplifies the collaboration between academia and industry. Students exhibit technological proficiency, gaining valuable insights for their future careers. It highlights the vital link between academic achievement and real-world application in the industry and embodies a unique blend of teamwork and versatility. 
              </div>
              <br />
            </div>
            <div className="flex flex-col lg:lg:mt-36">
              <div className="flex flex-row h-[16vh] w-[30vw] items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 m-4 lg:text-7xl font-extrabold">
                <div className="flex justify-center items-center mr-4">
                  <Image
                    src="/images/Picture1.jpg"
                    alt="techfair mascot"
                    height={60}
                    width={60}
                    objectFit="contain"
                    className="rounded-xl"
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-600 inline-block text-transparent bg-clip-text">
                  TECHFAIR
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <div className="h-[12vh] w-[9vw] flex items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 m-4 mt-0 mr-0 font-bold">
                  <div className="flex flex-col">
                    <div className="flex justify-center items-center text-5xl">
                      10<sup className="font-thin text-2xl">th</sup>
                    </div>
                    <div className="flex justify-center items-center text-xl font-normal">
                      March
                    </div>
                  </div>
                </div>
                <div className="h-[12vh] w-[20vw] flex items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-2 m-4 mt-0">
                  <div className="flex flex-row m-4">
                    <div className="flex justify-center items-center ">
                      Project Submission Deadline
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-4">
                <div className="h-[36vh] w-[19vw] text-sm flex flex-row items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 m-4 mt-0">
                  <div className="text-justify">
                    Calling out all budding scientists and innovationists! The
                    Anokha Tech Fair provides the perfect platform for you to
                    present your revolutionary ideas and innovations that could
                    redefine the technological landscape. Join us to connect,
                    collaborate, and foster lasting relationships with
                    individuals who share your enthusiasm for pushing the
                    boundaries of technology.
                  </div>
                </div>
                <div className="flex flex-col mr-4">
                  <div className="flex flex-col justify-center items-center text-black h-[40%] w-[10vw] bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-600 text-2xl cursor-pointer">
                    <Link href="https://forms.office.com/r/bp79NqPxkt">
                      <div className="flex justify-center items-center p-4 hover:scale-110 transition-transform duration-300 ease-in-out transform">
                        Register Now &#8594;
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-center items-center text-white h-[50%] w-[10vw] bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 my-4">
                    <Link
                      href="https://forms.office.com/r/bp79NqPxkt"
                      className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out transform"
                    >
                      <div className="flex justify-center items-center text-3xl">
                        Call For
                      </div>
                      <div className="flex justify-center items-center text-2xl">
                        Projects
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-8 pb-10 m-8 mr-4 lg:w-[30vw] lg:h-auto lg:mt-36 text-justify">
              <div className="flex justify-center items-center text-3xl m-4">
                Benefits of Participation
              </div>
              <div className="flex justify-center items-center text-sm ">
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Innovation Hub for Industry-Student Dynamics: Anokha
                    TechFair is a platform for showcasing innovation that
                    fosters industry-student interaction, providing experiential
                    learning, recruitment opportunities, and identifying
                    potential collaborators.
                  </li>
                  <br />
                  <li>
                    Expand Your Network: Participate in the Anokha TechFair
                    which is hosted by the highly acclaimed Amrita University to
                    showcase your projects, products, or innovations to a
                    broader audience. Get a chance to meet fellow innovators,
                    industry experts, and investors to amplify your connections.
                  </li>
                  <br />
                  <li>
                    Certificate of Recognition: Participants will be awarded
                    with a prestigious Certificate of Recognition. This
                    certificate serves as a testament to the remarkable
                    dedication and creativity demonstrated.
                  </li>
                  <br />
                  <li>
                    Spotlight in Anokha TechFair Newsletter: Get a chance to be
                    featured in the First-ever Anokha TechFair Newsletter which
                    can significantly increase the visibility of your project.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-view flex flex-col xl:hidden lg:hidden md:flex sm:flex mt-24 sm:overflow-x-hidden">
          <div className="flex flex-row h-[12vh] w-[90vw] items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 m-4 sm:text-5xl">
            <div className="flex justify-center items-center mr-8">
              <Image
                src="/images/Picture1.jpg"
                alt="techfair mascot"
                height={50}
                width={50}
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
            <div className="bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-600 inline-block text-transparent bg-clip-text">
              TECHFAIR
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-8 pb-10 m-4 sm:w-[90vw] lg:w-[30vw] lg:h-auto lg:mt-36 text-justify pt-4">
            <div className="flex justify-center items-center text-4xl m-4">
              ABOUT
            </div>
            <br />
            <div className="flex justify-center items-center text-sm ">
              Amrita Vishwa Vidyapeetham Tech Fair acts as a unifying platform,
              which brings together students from different colleges across the
              country to present their work to business professionals. It serves
              as a brilliant opportunity for them to network and gain insights
              from their peers nationwide.
              <br />
              <br />
              This large-scale fair, considered a flagship event for talent and
              innovation, provides a forum for creative ideas to take center
              stage, allowing diverse skills to shine. Tech Fair exemplifies the
              collaboration between academia and industry. Students exhibit
              technological proficiency, gaining valuable insights for their
              future careers. It highlights the vital link between academic
              achievement and real-world application in the industry and
              embodies a unique blend of teamwork and versatility. In every
              Anokha edition, the Tech Fair has served as the epicentre of
              innovation, blurring the boundaries between imagination and
              reality.
            </div>
          </div>
          <div className="flex flex-row mx-4">
            <div className="flex flex-col justify-center items-center text-white h-[40%] w-[40vw] bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 my-4">
              <Link
                href="https://forms.office.com/r/bp79NqPxkt"
                className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out transform"
              >
                <div className="flex justify-center items-center text-3xl">
                  Call For
                </div>
                <div className="flex justify-center items-center text-2xl">
                  Projects
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center text-black h-[40%] w-[40vw] bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-600 text-2xl cursor-pointer m-4 mx-8">
              <Link href="https://forms.office.com/r/bp79NqPxkt">
                <div className="flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out transform">
                  Register Now &#8594;
                </div>
              </Link>
            </div>
          </div>
          <div className="h-auto w-[90vw] text-sm flex flex-row items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-8 m-4 mt-0">
            <div className="text-justify">
              Calling out all budding scientists and innovationists! The Anokha
              Tech Fair provides the perfect platform for you to present your
              revolutionary ideas and innovations that could redefine the
              technological landscape. Join us to connect, collaborate, and
              foster lasting relationships with individuals who share your
              enthusiasm for pushing the boundaries of technology.
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div className="h-[12vh] w-[30vw] flex items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-4 m-4 mt-0 mr-0">
              <div className="flex flex-col">
                <div className="flex justify-center items-center text-4xl font-bold">
                  10<sup className="font-thin text-xl">th</sup>
                </div>
                <div className="flex justify-center items-center text-lg font-thin">
                  March
                </div>
              </div>
            </div>
            <div className="h-[12vh] w-[55vw] flex items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-2 m-4 mt-0">
              <div className="flex flex-row m-4">
                <div className="flex justify-center items-center ">
                  Project Submission Deadline
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl p-8 pb-10 m-4 h-auto sm:w-[90vw] lg:w-[30vw] lg:h-auto lg:mt-36 text-justify">
            <div className="flex justify-center items-center text-center text-3xl mb-8">
              Benefits of Participation
            </div>
            <div className="flex justify-center items-center text-sm ">
              <br />
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  Innovation Hub for Industry-Student Dynamics: Anokha TechFair
                  is a platform for showcasing innovation that fosters
                  industry-student interaction, providing experiential learning,
                  recruitment opportunities, and identifying potential
                  collaborators.
                </li>
                <br />
                <li>
                  Expand Your Network: Participate in the Anokha TechFair which
                  is hosted by the highly acclaimed Amrita University to
                  showcase your projects, products, or innovations to a broader
                  audience. Get a chance to meet fellow innovators, industry
                  experts, and investors to amplify your connections.
                </li>
                <br />
                <li>
                  Certificate of Recognition: Participants will be awarded with
                  a prestigious Certificate of Recognition. This certificate
                  serves as a testament to the remarkable dedication and
                  creativity demonstrated.
                </li>
                <br />
                <li>
                  Spotlight in Anokha TechFair Newsletter: Get a chance to be
                  featured in the First-ever Anokha TechFair Newsletter which
                  can significantly increase the visibility of your project.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </main>
  );
};

export default Techfair;
