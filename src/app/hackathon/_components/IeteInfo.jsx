"";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import ieteLogo from "../images/IETE.png";

const IeteInfo = () => {
  return (
    <div className="w-full mb-5">
      <div className="md:flex-row justify-center items-center gap-4 mx-[5%] md:mx-auto sm:flex-col">

        {/* <div className="md:w-[20%] sm:px-10 md:px-5 my-5 mx-auto">
          <Image src={ieteLogo} alt="IETE" />
        </div> */}

        {/* <div className="lg:w-[30%] mx-auto sm:w-full text-center sm:mb-4">
          <h1>This event is managed by</h1>
          <h1 className="font-bold text-3xl">IETE SF Amrita</h1>
        </div> */}

        <div className="lg:w-[50%] mx-auto">
          <div className="flex gap-5 justify-center">
            <div className="text-center">
              <h1 className="font-bold">Balasuriya</h1>
              <h1>9597042888</h1>
            </div>
            <div className="text-center">
              <h1 className="font-bold">Siddharth G</h1>
              <h1>94411 21941</h1>
            </div>
          </div>
          {/* <div className="flex justify-center align-center gap-4 my-3">
            <Link href={"https://www.instagram.com/iete_amrita/"}>
              <FaInstagram size={40} className="hover:scale-110" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/company/institution-of-electronics-and-telecommunication-engineers-amrita-school-of-engineering-coimbatore/"
              }
            >
              <FaLinkedinIn size={40} className="hover:scale-110" />
            </Link>
            <Link href={"https://discord.gg/c3hya3pn"}>
              <FaDiscord size={40} className="hover:scale-110" />
            </Link>
          </div> */}
          <h1 className="text-center">
           Mail us at{" "}
            <Link href={"mailto:anokhapr@cb.amrita.edu"} className="font-bold ">
              {" "}
              anokhapr@cb.amrita.edu
            </Link>
          </h1>
        </div>
      </div>
    </div>
    // <div className='h-1/2 w-full'>
    //     <div className="py-[2%] md:py-[1%]">
    //         <div className="ml-[5%] mr-[2%]  flex md:ml-[1%]">
    //           <div className="w-[15%]  border-0">
    //             <Image src={ieteLogo} alt="IETE"/>
    //           </div>
    //           <div className="w-[2%]">
    //           </div>
    //           <div className="w-[85%] flex">
    //             <div className="lg:w-[20%] md:w-[25%] sm:w-[15%]">
    //               <h1 className="lg:mt-[60%] lg:text-[95%] font-extrabold sm:text-[5%] md:mt-[45%] sm:mt-[47%] md:text-[60%]">This Event is Managed By</h1>
    //             </div>
    //             <div className="w-[45%] anton-regular">
    //               <h1 className="lg:mt-[20%] md:mt-[21%] lg:text-[315%] sm:text-[80%] sm:mt-[17%] md:text-[160%]">IETE SF AMRITA</h1>
    //             </div>
    //             <div className="w-[45%] block md:mt-[1%] lg:mt-[3%]">
    //               <div className="h-[70%]  ">
    //                 <div className="flex  float-right mx-[4%] mt-[5%] md:space-x-4 sm:space-x-4 lg:space-x-10 sm:max-h-10 lg:mt-[7%] md:mt-[7%]">
    //                   <Link href={"https://www.instagram.com/iete_amrita/"}>
    //                   <FaInstagram className="lg:text-[350%] md:text-[250%] sm:text-[150%] hover:scale-110"/>
    //                   </Link>
    //                   <Link href={"https://www.linkedin.com/company/institution-of-electronics-and-telecommunication-engineers-amrita-school-of-engineering-coimbatore/"}>
    //                   <FaLinkedinIn className="lg:text-[350%] md:text-[250%] sm:text-[150%] hover:scale-110"/>
    //                   </Link>
    //                   <Link href={"https://discord.gg/c3hya3pn"}>
    //                   <FaDiscord className="lg:text-[350%] md:text-[250%] sm:text-[150%] hover:scale-110"/>
    //                   </Link>
    //                 </div>
    //               </div>
    //               <div className="h-[30%]  flex lg:mt-[1%]">
    //                 <h1 className="ml-[6%] lg:text-[80%] float-right font-bold text-slate-700 md:text-[20%] md:mt-[1%] md:ml-[25%] sm:text-[0.5%]">For any queries Contact us At:</h1>
    //                 <Link href={"mailto:ietesf@cb.amrita.edu"} className="mt-[0.5%] font-bold ml-[2%] md:text-[50%] lg:text-[90%] sm:text-[20%]">ietesf@cb.amrita.edu</Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default IeteInfo;
