"use client"
import {useState} from 'react'
import {Button} from "@material-tailwind/react"
import { FaArrowRight } from "react-icons/fa";

const FirstRegister = () =>{
  <div className="flex flex-col justify-center md:space-y-10 flex-1 space-y-5  ">
                    <div>
                      <label
                        htmlFor="teamname"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Your Team Name
                      </label>
                      <input
                        type="text"
                        // onChange={(e) => {
                        //   setName(e.target.value);
                        // }}
                        name="teamname"
                        id="teamname"
                        className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                        placeholder="Team Name"
                        required
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-black">
                        Number of Team Members
                      </label>
                      <input
                        // onChange={(e) => {
                        //   setPhone(e.target.value);
                        // }}
                        type="number"
                        name="teamnumber"
                        id="teamnumber"
                        className="bg-transparent text-center border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5"
                        placeholder="3" min="3" max="4" 
                        required
                      />
                    </div>

                    
                    <div>
                      <div>
                        <label
                          htmlFor="college"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Registered through
                        </label>

                        <div className='flex'>
                        <select id="platform" className="bg-transparent mr-2 border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5 border-y-1">
                        <option value="none" selected>None</option>
                        <option value="devfolio">DevFolio</option>
                        <option value="unstop">Unstop</option>
                        <option value="devpost">Devpost</option>
                        </select>
                        <input
                        //   onChange={(e) => {
                        //     setCollegeName(e.target.value);
                        //   }}
                          type="text"
                          name="platformid"
                          id="platformid"
                        //   value={collegeName}
                          className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                          placeholder="Platform ID"
                        //   disabled={isAmrita}
                        />

                        </div>
                        
                        

                      </div>
                    </div>
                    
                  </div>
}

const SecondRegister = () =>{
  <div className="flex flex-col justify-center md:space-y-10 flex-1 space-y-5  ">
                    <div>
                      <label
                        htmlFor="teamname"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Your Team Name
                      </label>
                      <input
                        type="text"
                        // onChange={(e) => {
                        //   setName(e.target.value);
                        // }}
                        name="teamname"
                        id="teamname"
                        className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                        placeholder="Team Name"
                        required
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-black">
                        Number of Team Members
                      </label>
                      <input
                        // onChange={(e) => {
                        //   setPhone(e.target.value);
                        // }}
                        type="number"
                        name="teamnumber"
                        id="teamnumber"
                        className="bg-transparent text-center border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5"
                        placeholder="3" min="3" max="4" 
                        required
                      />
                    </div>

                    
                    <div>
                      <div>
                        <label
                          htmlFor="college"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Registered through
                        </label>

                        <div className='flex'>
                        <select id="platform" className="bg-transparent mr-2 border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5 border-y-1">
                        <option value="none" selected>None</option>
                        <option value="devfolio">DevFolio</option>
                        <option value="unstop">Unstop</option>
                        <option value="devpost">Devpost</option>
                        </select>
                        <input
                        //   onChange={(e) => {
                        //     setCollegeName(e.target.value);
                        //   }}
                          type="text"
                          name="platformid"
                          id="platformid"
                        //   value={collegeName}
                          className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                          placeholder="Platform ID"
                        //   disabled={isAmrita}
                        />

                        </div>
                        
                        

                      </div>
                    </div>
                    
                  </div>
}

const ThirdRegister = () =>{
  <div className="flex flex-col justify-center md:space-y-10 flex-1 space-y-5  ">
    {MemberList.map((link, index) => (
                         
                         <Memberview member={link.name} idc = {link.idc} no={index+1}/>
                     )
                  ) }

  </div>
}

const RegisterSteps = [FirstRegister,SecondRegister,ThirdRegister]
const Register = () => {
    const [Member1Email, setMember1Email] = useState('')
    const [Member1IDC, setMember1IDC] = useState('')
    const [Member2Email, setMember2Email] = useState('')
    const [Member2IDC, setMember2IDC] = useState('')
    const [Member3Email, setMember3Email] = useState('')
    const [Member3IDC, setMember3IDC] = useState('')
    const [Member4Email, setMember4Email] = useState('')
    const [Member4IDC, setMember4IDC] = useState('')

    const MemberList = [
        {
            name: Member1Email,
            idc: Member1IDC
        }
        ,
        {
            name: Member2Email,
            idc: Member2IDC
        }
        ,
        {
            name: Member3Email,
            idc: Member3IDC
        },
        {
            name: Member4Email,
            idc: Member4IDC
        }
    ]

    const Memberview =({member,idc,no})=> {
        return(
            
                <div className="flex flex-col flex-1 space-y-5 ">
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 w-"/>
                    <p className='text-lg font-medium text-black text-center'>Member {no} Information</p>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-black">
                        Member {no} : Email
                      </label>
                      <input
                        // onChange={(e) => {
                        //   setEmail(e.target.value);
                        // }}
                        type="email"
                        name="email"
                        id="email"
                        className=" bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                        placeholder="eon@anokha.amrita.edu"
                        required
                      />
                    </div>

                    
                      <div>
                        <label
                          htmlFor="idc"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Member {no} : Intel Dev Cloud ID
                        </label>
                        <input
                        //   onChange={(e) => {
                        //     setCollegeName(e.target.value);
                        //   }}
                          type="text"
                          name="devcloudid"
                          id="devcloudid"
                        //   value={collegeName}
                          className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                          placeholder="IDC ID"
                        //   disabled={isAmrita}
                        />
                        
                      </div>
            </div>
        )
    }

  return (
    <div>
      <main className="w-full h-full bg-[rgb(10,17,58)]">
      {/* <WebGLApp colors={webGLColors} /> */}

      <div className="block my-auto space-y-24 md:space-y-10">
        {/* <Navbar />/ */}
        <div className="relative min-h-screen">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[120px] absolute blur-3xl levitate"></div>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">
            <div className="w-full md:w-[560px] md:h-[600px]  rounded-md bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2   xl:p-0 bg-white">
              {/* <Image
                src={anokhalogo}
                priority
                alt="Amrita logo"
                width={128}
                height={128}
                className="ml-auto mr-auto mt-4 h-16"
              /> */}
              <div className="w-full flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl mx-auto top-10 font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Register
                </h1>
                <form
                  className="space-y-4 md:space-y-6 flex flex-col md:flex-row md:gap-10 justify-center"
                //   onSubmit={handleSignUp}
                >

                   {/* First card */}

                  <div className="flex flex-col justify-center md:space-y-10 flex-1 space-y-5  ">
                    <div>
                      <label
                        htmlFor="teamname"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Your Team Name
                      </label>
                      <input
                        type="text"
                        // onChange={(e) => {
                        //   setName(e.target.value);
                        // }}
                        name="teamname"
                        id="teamname"
                        className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                        placeholder="Team Name"
                        required
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-black">
                        Number of Team Members
                      </label>
                      <input
                        // onChange={(e) => {
                        //   setPhone(e.target.value);
                        // }}
                        type="number"
                        name="teamnumber"
                        id="teamnumber"
                        className="bg-transparent text-center border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5"
                        placeholder="3" min="3" max="4" 
                        required
                      />
                    </div>

                    
                    <div>
                      <div>
                        <label
                          htmlFor="college"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Registered through
                        </label>

                        <div className='flex'>
                        <select id="platform" className="bg-transparent mr-2 border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-25 p-2.5 border-y-1">
                        <option value="none" selected>None</option>
                        <option value="devfolio">DevFolio</option>
                        <option value="unstop">Unstop</option>
                        <option value="devpost">Devpost</option>
                        </select>
                        <input
                        //   onChange={(e) => {
                        //     setCollegeName(e.target.value);
                        //   }}
                          type="text"
                          name="platformid"
                          id="platformid"
                        //   value={collegeName}
                          className="bg-transparent border border-gray-800 text-black sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5"
                          placeholder="Platform ID"
                        //   disabled={isAmrita}
                        />

                        </div>
                        
                        

                      </div>
                    </div>
                    
                  </div>



                  <div className="flex md:hidden flex-col flex-1 space-y-5 pt-5">
                     
                     {MemberList.map((link, index) => (
                         
                            <Memberview member={link.name} idc = {link.idc} no={index+1}/>
                        )
                     ) }


                       

    
                    <div className="text-center">
                      <button
                        type="submit"
                        className="w-[200px] text-black bg-[#f69c18] mb-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                        // disabled={loading}
                      >
                        Sign Up
                      </button>
                      <p className="text-sm font-light text-[#ed1d21]">
                        Already have an account?{" "}
                        <a
                          href="/login"
                          className="font-medium text-primary-500 hover:underline"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              
            </div>
            <div className='mt-5 z-10'>
                      <Button variant='text' className='text-3xl bg-green-500 flex flex-row w-[120px] items-center' >
                        <div className='-ml-2'>Next</div> 
                        <FaArrowRight size={20} className='-mr-6 ml-2 '/>
                      </Button>
              </div>
          </div>
        </div>
      </div>
    </main>
 
    </div>
  )
}

export default Register