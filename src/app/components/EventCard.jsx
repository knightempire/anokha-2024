import React from 'react'
import { CurrencyRupee } from 'react-currency-icons';

export default function EventCard(props) {
  return (
    <div>
        <div class=" bg-white max-w-sm rounded overflow-hidden shadow-lg ">
            <img class="w-full" src={props.imgsrc} alt="Sunset in the mountains"></img>
            <div className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition duration-500 ease-in-out opacity-90">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Code Father</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            
            <div class="px-6 pt-4  ">
                <span class="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-amber-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-lime-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                
            </div>
            <div className="flex items-end justify-end  pb-2 pr-8">
                <span class="text-4xl font-bold  text-gray-900 ">$500</span>
            </div>
            </div>
        </div>
    </div>
  )
}
