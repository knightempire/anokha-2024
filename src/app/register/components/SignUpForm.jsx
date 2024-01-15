import React from 'react';

const SignUpForm = () => (
    <div className="w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 md:mt-0 sm:max-w-md xl:p-0 bg-gray-500">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">Register to your account</h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                    <input type="text" name="name" id="name" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="Name" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                    <input type="email" name="email" id="email" className=" bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="eon@anokha.amrita.edu" required />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                    <input type="tel" name="phone" id="phone" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="+91 99999 99999" required />
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" name="amrita-student" id="amrita-student" className="mr-2" />
                    <label htmlFor="amrita-student" className="text-sm font-medium text-white">Amrita Student?</label>
                </div>
                <div>
                    <label htmlFor="college" className="block mb-2 text-sm font-medium text-white">College Name</label>
                    <input type="text" name="college" id="college" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="Amrita School of Engineering, Coimbatore" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className=" border bg-transparent border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" required />
                </div>
                <div>
                    <label htmlFor="conf-password" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                    <input type="password" name="conf-password" id="conf-password" placeholder="••••••••" className=" border bg-transparent border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" required />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                <p className="text-sm font-light text-gray-400">
                    Already have an account? <a href="/login" className="font-medium text-primary-500 hover:underline">Sign in</a>
                </p>
            </form>
        </div>
    </div>
);

export default SignUpForm;