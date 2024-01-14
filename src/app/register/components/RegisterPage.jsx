"use client";
import React from 'react';
import Background from './Background';    // Import Background component
import SignUpForm from './SignUpForm';

function RegisterPage() {
    return (
        <div className="relative min-h-screen">
            <Background />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                <a href="/" className="flex items-center justify-center md:mb-6 text-2xl font-semibold text-white">
                    Anokha 2024
                </a>
                <SignUpForm />
            </div>
        </div>
    )
}

export default RegisterPage;