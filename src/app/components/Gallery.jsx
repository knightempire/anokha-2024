import { useRef } from "react";
import Image from "next/image";

const Gallery = () => {
  const container = useRef(null);
  return (
    <div className="h-screen flex items-center justify-center top-10">
      <div
        className="flex relative -top-20 h-[85vh] w-[95vw] bg-[#121212] b rounded-xl transform origin-top my-10 top-5"
        ref={container}
      >
        <div
          className="grid relative grid-cols-3 h-full w-full"
          style={{ gridTemplateColumns: "25% 50% 25%" }}
        >
          <div
            className="grid relative grid-rows-3 h-full w-full"
            style={{ gridTemplateRows: "40% 35% 25%" }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className="grid relative grid-rows-3 h-full w-full"
            style={{ gridTemplateRows: "25% 50% 25%" }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className="grid relative grid-rows-3 h-full w-full"
            style={{ gridTemplateRows: "25% 35% 40%" }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
