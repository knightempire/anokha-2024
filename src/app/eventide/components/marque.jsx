import Image from 'next/image';
import Marquee from "react-easy-marquee";

const VerticalMarquee = () => {
  const images = ["https://i.imgur.com/KRYEfhy.jpeg", "https://i.imgur.com/rwsT2QC.jpeg","https://i.imgur.com/z8h1axf.jpeg","https://i.imgur.com/Unr2Afr.jpg","https://i.imgur.com/R24hRLE.jpg"];
  const images2 = ["https://i.imgur.com/EgFe4uu.jpg", "https://i.imgur.com/2QiCSEN.jpg","https://i.imgur.com/guRqXgq.jpg","https://i.imgur.com/g9mwsJ7.jpg","https://i.imgur.com/F0swEuN.jpg"];
  const images3 = ["https://i.imgur.com/pKAwO3F.jpg", "https://i.imgur.com/f5A7wzQ.jpg","https://i.imgur.com/p77o9dC.jpg","https://i.imgur.com/1IFTVi2.jpg","https://i.imgur.com/9kw4ab9.jpg"];
  
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
              <Image 
              key={index} 
              src={image} 
              alt="picsum" 
              className="w-full opacity-50 h-auto" 
              layout="responsive" 
              width={700} 
              height={475} 
            />
                ))}
          </div>
        </Marquee>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
        <Marquee 
          height='100vh' 
          width='100%' 
          reverse={true} 
          duration={30000} 
          background="black" 
          axis='y'
        >
          <div className="flex flex-col space-y-4">
            {images2.map((image, index) => (
              <Image 
              key={index} 
              src={image} 
              alt="picsum" 
              className="w-full opacity-50 h-auto" 
              layout="responsive" 
              width={700} 
              height={475} 
            />
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
            {images3.map((image, index) => (
              <Image 
              key={index} 
              src={image} 
              alt="picsum" 
              className="w-full opacity-50 h-auto" 
              layout="responsive" 
              width={700} 
              height={475} 
            />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default VerticalMarquee;
