import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FilmGallery = () => {
  const filmRow1 = [
    "https://i.imgur.com/LqLc1zR.jpg",
    "https://i.imgur.com/NbYhQmE.jpg",
    "https://i.imgur.com/wNMrU5H.jpg",
    "https://i.imgur.com/7oW7AI9.jpg",
    "https://i.imgur.com/BdM5523.jpg",
    "https://i.imgur.com/NbYhQmE.jpg",
    "https://i.imgur.com/wNMrU5H.jpg",
  ];

  // Shuffle function
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Clone the original array to avoid modifying it directly
  const filmRow2 = [...filmRow1];

  // Shuffle the cloned arrays
  shuffle(filmRow2);

  return (
    <div className="z-10">
      <h1 className="text-white text-6xl text-center my-5">Gallery</h1>
      <div className="overflow-hidden">
        <div className="grid grid-cols-7 gap-2 h-[40vh] w-[130vw] bg-[#121212] text-white my-3">
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
        <div className="grid grid-cols-7 gap-2 h-[40vh] w-[130vw] bg-[#121212] text-white my-3">
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
