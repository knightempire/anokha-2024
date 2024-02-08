import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";

export default function Helper() {
  const [ToggleHelp, setToggleHelp] = useState(0);
  return (
    <div className=" relative w-full mt-3 flex flex-row">
      <FaCircleInfo onClick={() => setToggleHelp(!ToggleHelp)} />
      {ToggleHelp ? (
        <div className="absolute z-5 text-[12px] sm:bottom-[25px] bg-[#ffeeed] py-1 px-2 text-[#ff7171] rounded-md lg:left-[22px] bottom-[7px] xl:left-[22px] bottom-[7px]">
          Password should be atleast 8 letters and should not contain " or -
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
