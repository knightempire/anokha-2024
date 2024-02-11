import React from 'react'

const TeamDetails = () => {
  return (
    <div className='w-full bg-[#0A113A] text-white  p-12 rounded-xl text-lg'>
      <div className=' space-y-2'>
        <p className='font-bold'>Team Name: <span className='font-normal'>TeamName</span></p>
        <p className='font-bold'>Number of Team Members: <span className='font-normal'>3</span></p>
        <p className='font-bold'>Registered Through: <span className='font-normal'>DevPost</span></p>
        <p className='font-bold'>Platform ID: <span className='font-normal'>dfskjfnsfk</span></p>
        <p className='font-bold'>Team Member Details: </p>


        
      </div>
      <div className='flex bg-white p-7 text-black rounded my-1 bg-opacity-80 space-between'>
        <div className='m-4 w-full'>
          <p className='font-bold'>Team Member 1:</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-2'>Email ID here</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-3'>IDC ID here</p>
          
          <p className='font-bold'>Team Member 2:</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-2'>Email ID here</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-3'>IDC ID here</p>
        </div>

        <div className='m-4 border-left-2 border-black w-full'>
          <p className='font-bold'>Team Member 3:</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-2'>Email ID here</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-3'>IDC ID here</p>

          <p className='font-bold'>Team Member 4:</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-2'>Email ID here</p>
          <p className='bg-transparent border-2 border-black px-5 w-full py-3 rounded-xl mb-3'>IDC ID here</p>
        </div>

        
      </div>
    </div>
  )
}

export default TeamDetails
