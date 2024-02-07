import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <Image src="/images/dummy.jpg" alt="dummy" width={500} height={500} />
    </div>
  );
};

export default Gallery;
