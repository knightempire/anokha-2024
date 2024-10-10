import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaAngleDoubleDown } from "react-icons/fa";
import VerticalMarquee from "./marque";
//import EventideSVG from "public/eventide_1.svg";

gsap.registerPlugin(ScrollTrigger);

function Parallax() {
  const container = useRef(null);
  const black = useRef(null);
  const stage = useRef(null);
  const man = useRef(null);
  const firstlight = useRef(null);
  const full = useRef(null);
  const eventide = useRef(null);
  const [background, setBackground] = useState(20);

  useEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          //end: `+=${container.current.offsetHeight}`,
          end:"3000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });

      // Animating eventide to appear with opacity and scaling
      tl.fromTo(
        eventide.current,
        { opacity: 1, scale: 3 }, // Starting state
        { opacity: 1, scale: 2, duration: 5, ease: "power2.inOut" } ,0// Target state
      );

      // Fade out black background and stage elements
      tl
        .to(black.current, { opacity: 0, duration: 4, ease: "power2.inOut" }, 0.5)
        .to(stage.current, { opacity: 0, y: "-=10", duration: 4, ease: "power2.inOut" }, 3)
        .to(man.current, { opacity: 0, y: "-=10", duration: 4, ease: "power2.inOut" }, 5)
        .to(full.current, { opacity: 1, duration: 4, ease: "power2.inOut" }, 9);

    }, container);

    return () => ctx.revert();
  }, []);
    return (
        <div className="overflow-hidden">
            <div ref={container} className="relative h-screen w-screen flex flex-col justify-center items-center">
                <div ref={eventide}  className="  z-50 flex justify-center items-center lg:w-[55vh] lg:h-[12vh] md:w-[43vh] md:h-[10vh] sm:w-[23vh] sm:h-[5vh] ">
          
                    <Image src="/images/eventide_1.png" layout="fill" objectFit="cover"/>
                  
                     
                </div>
                <div ref={black} className="absolute z-40 w-full h-full opacity-1">
                    
                        <VerticalMarquee className="z-40" />
                    
                       
                    
                    <div className="inset-0 flex justify-center items-center">
                        <div className="z-30 bg-white tex animate-bounce absolute md:top-[92%] sm:top-[90%] w-60 rounded-full px-3 py-2 flex items-center justify-center">
                            Scroll <FaAngleDoubleDown className="ml-2" />
                        </div>
                    </div>
                </div>
                <div ref={stage} className="absolute z-30 w-full h-full opacity-1">
                    <Image alt="stage" src="/images/stage.jpg" layout="fill" objectFit="cover" />
                </div>
                <div ref={man} className="absolute z-20 w-full h-full opacity-1">
                    <Image alt="man" src="/images/manwstage.jpg" layout="fill" objectFit="cover" />
                </div>
                <div ref={full} className="absolute z-0 w-full h-full opacity-1">
                    <Image alt="full" src="/images/full.jpg" layout="fill" objectFit="cover" />
                </div>

              
            </div>
        </div>
    );
}

export default Parallax;
