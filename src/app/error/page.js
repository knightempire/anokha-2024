"use client";

import Navbar from "../components/EventHeader";
import WebGLApp from "../bg/WebGLApp";

export default function Error() {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });
  return (
    <main className="flex min-h-screen flex-col bg-[#192032]">
      <WebGLApp colors={webGLColors} />
      <div className="block">
        <Navbar />
        <div className="relative min-h-screen">
            <h1>Oops!</h1>
            <h2>You seem to have taken a wrong turn!</h2>
        </div>
      </div>
    </main>
  );
}
