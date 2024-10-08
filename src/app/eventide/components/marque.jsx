import Image from 'next/image';
import Marquee from "react-easy-marquee";

const VerticalMarquee = () => {
  const images = ["https://i.imgur.com/KRYEfhy.jpeg", "https://i.imgur.com/rwsT2QC.jpeg","https://i.imgur.com/z8h1axf.jpeg","https://i.imgur.com/Unr2Afr.jpg","https://i.imgur.com/R24hRLE.jpg"];
  return (
    <div className="bg-black flex flex-col sm:flex-row sm:space-x-4 items-center justify-center p-4">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <Marquee 
          height='100vh' 
          width='100%' 
          duration={20000} 
          background="black" 
          axis='y'
        >
          <div className="flex flex-col space-y-4">
            
            {images.map((image, index) => (
              <img key={index} src={image} alt="picsum" className="w-full opacity-50 h-auto" />
            ))}
          </div>
        </Marquee>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
        <Marquee 
          height='100vh' 
          width='100%' 
          reverse={true} 
          duration={20000} 
          background="black" 
          axis='y'
        >
          <div className="flex flex-col space-y-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt="picsum" className=" opacity-50 w-full h-auto" />
            ))}
          </div>
        </Marquee>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
        <Marquee 
          height='100vh' 
          width='100%' 
          duration={20000} 
          background="black" 
          axis='y'
        >
          <div className="flex flex-col space-y-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt="picsum" className="w-full opacity-50 h-auto" />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default VerticalMarquee;
