import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        link: "https://www.youtube.com/embed/otXim2lNFJ0?si=QItcFhC9KDrLFSf6"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
        <h3 className="text-2xl pb-3 text-center">Toolkits & Libraries</h3>


      

      <h3 className="text-2xl  pb-6 text-center">Videos</h3>
      <Carousel responsive={responsive}>
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
