import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FilmGallery = () => {
  const filmRow1 = [
    "https://i.imgur.com/bCSiGLj.jpg",
    "https://i.imgur.com/bHtecHP.jpg",
    "https://i.imgur.com/KUavNhA.jpg",
    "https://i.imgur.com/kcYnqaV.jpg",
    "https://i.imgur.com/KxZtGPq.jpg",
    "https://i.imgur.com/ToIDLTm.jpg",
    "https://i.imgur.com/93FXohU.jpg",
  ];

  const filmRow2 = [
    "https://i.imgur.com/ToIDLTm.jpg",
    "https://i.imgur.com/KUavNhA.jpg",
    "https://i.imgur.com/bCSiGLj.jpg",
    "https://i.imgur.com/93FXohU.jpg",
    "https://i.imgur.com/bHtecHP.jpg",
    "https://i.imgur.com/KxZtGPq.jpg",
    "https://i.imgur.com/kcYnqaV.jpg",
  ];

  const row1 = useRef(null);
  const row2 = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "+=100%",
        scrub: true,
      },
    });

    tl.to(row1.current, {
      x: -450,
      duration: 2,
    });
    tl.to(
      row2.current,
      {
        x: 450,
        duration: 2,
      },
      "-=2"
    );
  });

  return (
    <div className="z-10">
      <h1 className="text-white text-6xl text-center my-5">Gallery</h1>
      <div className="overflow-hidden" ref={container}>
        <div
          className="grid grid-cols-7 gap-2 h-[40vh] w-[130vw] text-white my-3"
          ref={row1}
        >
          {filmRow1.map((src) => (
            <div
              className="flex relative justify-center items-center mx-2 h-full w-full"
              key={src}
            >
              <Image
                src={src}
                alt={`Film ${filmRow1.indexOf(src) + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        <div
          className="grid grid-cols-7 gap-2 h-[40vh] w-[130vw] bg-[#121212] text-white my-3"
          ref={row2}
          style={{ marginLeft: "-30vw", overflowX: "hidden" }}
        >
          {filmRow2.map((src) => (
            <div
              className="flex relative justify-center items-center mx-2 h-full w-full"
              key={src}
            >
              <Image
                src={src}
                alt={`Film ${filmRow2.indexOf(src) + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmGallery;
