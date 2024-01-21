"use client";
import { React, useState } from 'react';
import LoginForm from './LoginForm';
import WebGLApp from '@/app/bg/WebGLApp';


function LoginPage() {
    const [webGLColors, setWebGLColors] = useState({ color1: [43 / 255, 30 / 255, 56 / 255], color2: [11 / 255, 38 / 255, 59 / 255], color3: [15 / 255, 21 / 255, 39 / 255] });
    return (
        <div className="relative min-h-screen">
            <WebGLApp colors={webGLColors}  />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">
                <a href="/" className="flex items-center justify-center md:mb-6 text-2xl font-semibold text-white z-10">
                    Anokha 2024
                </a>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;