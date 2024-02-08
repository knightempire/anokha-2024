
import WebGLApp from "../bg/WebGLApp"
export default function ComingSoon() {
    

    return (
        <div>
<WebGLApp colors={{
            color1: [0 / 255, 0 / 255, 0 / 255],        // Black
color2: [255 / 255, 110 / 255, 199 / 255], // Neon Pink
color3: [0 / 255, 0 / 255, 0 / 255],        // Black (same as color1 for consistency)

          }} />
        <h1 class="neon" data-text="U">COMI<span class="flicker-slow">NG  </span><span class="flicker-fast">SOO</span>N</h1>
      
       
        </div>
        
  )
}

