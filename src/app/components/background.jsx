import WebGLApp from "../bg/WebGLApp";
import { useState } from "react";

export default function background() {
    const [webGLColors, setWebGLColors] = useState({ color1: [43 / 255, 30 / 255, 56 / 255], color2: [11 / 255, 38 / 255, 59 / 255], color3: [15 / 255, 21 / 255, 39 / 255] });

    return (
    <WebGLApp colors={webGLColors} />
  )
}

