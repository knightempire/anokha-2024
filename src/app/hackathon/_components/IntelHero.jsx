
"use client";
import Link from "next/link"
import { useEffect, useState } from "react";




function IntelHero(){
    const [currentState, setCurrentState] = useState("guest");
    
    useEffect(() => {

    },[])

    const getButtonText = () => {
        switch(currentState) {
            case "guest":
                return "Register";
            case "registered":
                return "View Details";
            default:
                return "Register";
        }
    };

    const handleStateChange = () => {
        setCurrentState(prevState => {
            return prevState === "guest" ? "registered" : "guest";
        });
    };

    return(
        <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                <img src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">INTEL HACKATHON  <span className="md:block mt-4">ANOKHA 2024</span></h1>
                    <p className="py-2 text-xl text-slate-100 mt-4 pr-12">Join the most amazing<br /> Hackathon</p>
                    <div className="flex flex-row items-center mt-16 space-x-4">
                        <Link href="/hackathon-register">
                            <button className="btn text-lg px-4 py-2 bg-white text-gray-800 hover:bg-gray-200 rounded-lg">
                                {getButtonText()}
                            </button>
                        </Link>
                        <button onClick={handleStateChange} className="btn text-lg px-4 py-2 bg-white text-gray-800 hover:bg-gray-200 rounded-lg">
                            Toggle State
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default IntelHero;
