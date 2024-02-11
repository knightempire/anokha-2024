import { LinkOff } from "@mui/icons-material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "@material-tailwind/react";

const Resources = () => {
  const videos = [
    {
      title: "Intel developer cloud registration and launching",
      link: "https://www.youtube.com/embed/Mk_DjL3ZUVo?si=c2EK1nKNqD04j8tu",
    },
    {
      title: "Gen ai with intel developer cloud ",
      link: "https://www.youtube.com/embed/YWTXQWaPAZM?si=8nJTQT5S1eWaHmUC",
    },
    {
      title:
        "Intel based virtual machine (VM) and run jupyter notebook with the Intel oneAPI Base Toolkit",
      link: "https://www.youtube.com/embed/0YcMXO0FS5A?si=8MylGKaC75kssDM0",
    },
    {
      title: "openvino intel software",
      link: "https://www.youtube.com/embed/otXim2lNFJ0?si=QItcFhC9KDrLFSf6",
    },
    {
      title: "oneAPI Basics Training Series | Intel software",
      link: "https://www.youtube.com/embed/videoseries?si=5bqBqYoTuKxXi-dG&amp;list=PLg-UKERBljNxsCltpcXU_Haz9xQSCN_SB",
    },
  ];

  const toolkits = [
    {
      title: "Intel oneAPI base toolkit",
      link: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/base-toolkit.html#gs.4tqxfx",
    },
    {
      title: "Intel hpc toolkit cluster ",
      link: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/hpc-toolkit.html#gs.4tqy96",
    },
    {
      title: "Intel oneAPI Deep Neural Network",
      link: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/onednn.html#gs.4tqyu9",
    },
    {
      title: "intel developer catalog ",
      link: "https://www.intel.com/content/www/us/en/developer/tools/software-catalog/overview.html",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-5 w-full h-full p-10">
      <h1 className="text-[3rem] font-bold text-center">Resources</h1>
      <h3 className="text-2xl pb-8 text-center">Toolkits & Libraries</h3>
      <Carousel responsive={responsive} className="md:mx-auto md:w-[80%]">
        {toolkits.map((val, index) => (
          <div
            key={index}
            className="w-[90%]  bg-blue-800 text-white rounded h-full mb-4 p-5"
          >
            <div className="m-auto h-full w-full">
              <div className="flex-col flex">
              <p className="text-lg md:px-6 py-8 text-left rounded justify-start">
                {val.title}
              </p>
              <a href={val.link}
                className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:mx-6 my-2 justify-end">
                Learn More!
              </a>
              </div>
              
            </div>
          </div>
        ))}
      </Carousel>

      <h3 className="text-2xl py-8 text-center">Videos</h3>
      <Carousel responsive={responsive} >
        {videos.map((val, index) => (
          <div key={index} className="w-full mx-0 px-0 sm:mx-2">
            <iframe
              width="560"
              height="250"
              src={val.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-[90%] mx-auto"
            ></iframe>
            <p className="text-lg px-6 py-2 text-left">{val.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Resources;
