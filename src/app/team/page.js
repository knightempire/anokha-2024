import TeamMember from "./components/team-member";
import WebGLApp from "@/app/bg/WebGLApp";

const Team = () => {
  const webGLColors = {
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <WebGLApp colors={webGLColors} />
      <div className="z-10">
        <TeamMember
          name="Tharun Kumarr A"
          position="web-dev"
          imgSrc="/images/dummy.jpg"
          socials=""
        />
      </div>
    </main>
  );
};

export default Team;
