import React from 'react'
import { FaTrophy } from "react-icons/fa6";

const prizes = [
    {
      title: "2nd Place Winner",
      price: "Cash Prize ₹ 42,000/-",
    },
    {
      title: "1st Place Winner",
      price: "Cash Prize ₹ 62,000/-",
    },
    {
      title: "3rd Place Winner",
      price: "Cash Prize ₹ 21,000/-",
    },
    
  ];

const WinnerPrice = () => {
  return (
    <div className='w-full h-full pt-10 bg-[#0A113A]'>
      <h1 className="text-[3rem] font-bold text-center text-white">Prizes</h1>
      <div className="md:w-[80%] w-[90%] h-full md:flex gap-1 mx-auto pb-10 items-center ">
        {prizes.map((val, id) => (
          <div key={id} className={`md:w-[30%] sm:w-[70%]  mx-auto bg-white rounded-xl sm:my-5 sm:pb-5 ${id==1? "md:py-10 h-full md:shadow-xl": "md:my-12 md:py-5 md:h-[50%] md:w-[30%]"}`}>
                <div className="flex justify-center w-full rounded-xl rounded-b-none backdrop-blur-3xl ">
                    <FaTrophy size={200} className={`md:mx-0 sm:mx-[35%] ${
                  id === 0 ? "text-[#b8b8b8] ": id===1 ? "text-[#FFD700]" : "text-[#cd7f32]" } md:p-5 `}/>
                </div>
                <h2 className="font-bold text-2xl md:pt-7 sm:p-0 pb-4 sm:px-5 w-full text-black text-center ">
                {val.title}
                </h2>
            <p className='font-bold text-xl p-4 sm:px-5 w-fit mx-auto text-center bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white'>{val.price}</p>
            </div>
            
        ))}
      </div>
    </div>
  )
}

export default WinnerPrice
