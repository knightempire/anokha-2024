import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiIntel } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { Button } from "@material-tailwind/react";


const RoundOnePt2 = ({prev,upload,github_val,github,devmesh,devmesh_val,youtube,youtube_val,pdf,pdf_val}) => {
  return (
    <div>
      
    <div>
      <div className="w-full h-[100vh] bg-[rgb(10,17,58)]">
        <div className="font-poppins text-black mx-auto">
        <div className="bg-gradient-to-r from-cyan-500 z-0 to-blue-500 md:w-[70%] sm:w-[80%] lg:w-[63%] xl:w-[50%] p-8 rounded-[50%] h-[80%] left-[25%] top-[50px] md:left-[17%] md:top-[40px] lg:left-[19%] xl:left-[26%] absolute blur-3xl levitate"></div>
        <div className="bg-white relative z-10 sm:w-[90%] md:w-[620px] h-fit  bg-opacity-80  px-5  md:px-8 py-8 rounded-xl sm:mx-auto top-[120px]">
            <div className="flex gap-1 items-center text-center text-2xl font-bold justify-center mb-5">
              <IoDocumentText color="#4287f5" className="mr-2" /> 
              UPLOAD PDF LINK!
            </div>

            <div className="border-slate-500 rounded border-2 border-dashed w-full h-full sm:px-4 mx md:px-10 mt-3 py-8">
                <div className='flex bg-white items-center rounded px-4 py-2 gap-3'>
                    <FaGithub size={30}/>
                    <input
                    type="text"
                    value={github_val}
                    onChange={(e)=>github(e.target.value)}
                    placeholder="Enter Github Link Here"
                    className="w-full focus:outline-0"
                    />
                </div>

                <div className='flex bg-white items-center rounded px-4 py-2 gap-3 mt-3'>
                    <SiIntel size={30}/>
                    <input
                    value={devmesh_val}
                    onChange={(e)=>devmesh(e.target.value)}
                    type="text"
                    placeholder="Enter DevMesh Link Here"
                    className="w-full focus:outline-0"
                    />
                </div>

                <div className='flex bg-white items-center rounded px-4 py-2 gap-3 mt-3'>
                    <FaYoutube size={30}/>
                    <input
                    value={youtube_val}
                    onChange={(e)=>youtube(e.target.value)}
                    type="text"
                    placeholder="Enter Youtube Video Link Here"
                    className="w-full focus:outline-0"
                    />
                </div>
            


              <input
                type="text"
                value={pdf_val}
                onChange={(e)=>pdf(e.target.value)}
                placeholder="Enter PDF Link Here"
                className="w-full py-3 px-4 mt-4 rounded" required
              />

              <input type="checkbox" id="" className="w-[20px] mt-3"/>
              <label htmlFor="" className="text-sm ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label>

              <div className="w-full justify-center gap-2 mt-5 flex">
                {/* <button className="text-[1rem] bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-2 md:mt-3 rounded-[15px] ">
                  Upload Link
                </button> */}
                <Button onClick={prev} className="text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                      <span relative="relative z-10">Previous</span>
                    </Button>
                <Button onClick={upload} className="text-md flex justify-center items-center before:ease relative h-12 w-40 overflow-hidden border rounded border-blue-800 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40">
                      <span relative="relative z-10">Upload Link</span>
                    </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RoundOnePt2
