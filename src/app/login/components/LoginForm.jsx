import React from 'react';

const LoginForm = () => (
    <div className="w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10  md:mt-0 sm:max-w-md xl:p-0 bg-gray-500 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input type="email" name="email" id="email" className=" bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="eon@anokha.amrita.edu" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className=" border bg-transparent border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" required />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">

                    </div>
                    <a href="#" className="text-sm font-medium text-primary-500 text-white hover:underline">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                <p className="text-sm font-light text-gray-400">
                    Don’t have an account yet? <a href="/register" className="font-medium text-primary-500 hover:underline">Sign up</a>
                </p>
            </form>
        </div>
    </div>
);

export default LoginForm;