"use client"
import React, { useEffect, useRef } from 'react'
import {gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function TimeLine() {

    const addme = (el)=>{
        if (el && !tilesRef.current.includes(el)) {
            tilesRef.current.push(el);
        }
    }
 
  const tilesRef = useRef(null); 
  tilesRef.current = [] 

  useEffect(()=>{
    tilesRef.current.forEach((el, index) => {
        gsap.fromTo(el, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
            // markers: true
        }})
    })
  })
  return (
    <div className='h-screen w-full flex justify-center items-center bg-blue-400'>
        <div className='max-w-7xl mx-auto '>
             {/* stack1 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full  '>

                <div className='w-full h-full bg-blue-950'>
                            <h1>title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                </div>

                </div>
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-1 bg-indigo-300'></div>
                    <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full'></div>

            </div>
            {/* stack2 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full'></div>
                
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                        <div className='h-full w-1 bg-indigo-300'></div>
                        <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full  '>

                    <div className='w-full h-full bg-blue-950'>
                                <h1>title</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                    </div>
                    
                </div>
            </div>
             {/* stack1 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full  '>

                <div className='w-full h-full bg-blue-950'>
                            <h1>title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                </div>

                </div>
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-1 bg-indigo-300'></div>
                    <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full'></div>

            </div>
            {/* stack2 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full'></div>
                
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                        <div className='h-full w-1 bg-indigo-300'></div>
                        <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full  '>

                    <div className='w-full h-full bg-blue-950'>
                                <h1>title</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                    </div>
                    
                </div>
            </div>
            {/* stack1 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full  '>

                <div className='w-full h-full bg-blue-950'>
                            <h1>title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                </div>

                </div>
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-1 bg-indigo-300'></div>
                    <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full'></div>

            </div>
            {/* stack2 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full'></div>
                
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                        <div className='h-full w-1 bg-indigo-300'></div>
                        <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full  '>

                    <div className='w-full h-full bg-blue-950'>
                                <h1>title</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                    </div>
                    
                </div>
            </div>
            {/* stack1 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full  '>

                <div className='w-full h-full bg-blue-950'>
                            <h1>title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                </div>

                </div>
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-1 bg-indigo-300'></div>
                    <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full'></div>

            </div>
            {/* stack2 */}
            <div className='grid grid-cols-9 ' ref={addme}>
                <div className='col-span-4 w-full h-full'></div>
                
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                        <div className='h-full w-1 bg-indigo-300'></div>
                        <div className='absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center'>1</div>
                </div>
                <div className='col-span-4 w-full h-full  '>

                    <div className='w-full h-full bg-blue-950'>
                                <h1>title</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam sint optio eligendi quisquam ex ut. Atque laborum corporis, distinctio possimus nemo architecto tempore, optio a maiores ex modi sed.</p>
                    </div>
                    
                </div>
            </div>
             {/* stack1 */}
             

             
        </div>

        


        

    </div>
  )
}
