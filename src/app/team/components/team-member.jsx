import Image from "next/image";

const TeamMember = ({ name, position, imgSrc, socials }) => {
  return (
    <div className="flex flex-col w-[200px] h-[300px] items-center rounded-xl bg-white">
      <div className="h-[200px] w-[200px] rounded-xl relative">
        <Image
          src={imgSrc}
          alt="Team member"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default TeamMember;
