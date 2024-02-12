import React from 'react'
import Image from 'next/image'
const TeamDetails = (props) => {

    const hash = "isajithrajan@gmail.com"
  return (
    <div className='w-full bg-[#0A113A] text-white  p-12 rounded-xl text-lg'>
      <div className=' space-y-2'>
        <p className='font-bold'>Team Name: <span className='font-normal'>TeamName</span></p>
        <p className='font-bold'>Number of Team Members: <span className='font-normal'>3</span></p>
        <p className='font-bold'>Registered Through: <span className='font-normal'>DevPost</span></p>
        <p className='font-bold'>Platform ID: <span className='font-normal'>dfskjfnsfk</span></p>
        <p className='font-bold'>Team Member Details: </p>


        
      </div>

      <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr className='bg-[#007FFF]'>
                 
                <th>Name</th>
                <th>Email</th>
                <th>IDC ID</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                 
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle bg-gray-500 rounded-full w-12 h-12">
                    <img height={200} src={`https://www.gravatar.com/avatar/${hash}.jpg?s=200&d=robohash`} alt="Profile" width={200} className="rounded-lg"/> 
                    
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">
                        Sajith Rajan
                        props.me1["studentEmail"]
                    </div>
                    <div className="text-sm opacity-50"></div>
                    </div>
                </div>
                </td>
                <td>
                isajithrajan
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 2 */}
            <tr>
                 
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask bg-gray-500 mask-squircle w-12 h-12">
                    <img height={200} src={`https://www.gravatar.com/avatar/${hash}.jpg?s=200&d=robohash`} alt="Profile" width={200} className="rounded-lg "/> 
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                    </div>
                </div>
                </td>
                <td>
                Carroll Group
                <br/>
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </td>
                <td>Red</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 3 */}
            <tr>
                
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                    </div>
                </div>
                </td>
                <td>
                Rowe-Schoen
                <br/>
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                </td>
                <td>Crimson</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 4 */}
            <tr>
                 
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                    </div>
                </div>
                </td>
                <td>
                Wyman-Ledner
                <br/>
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>Indigo</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            </tbody>
            {/* foot */}
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </tfoot>
            
        </table>
      </div>
    </div>
  )
}

export default TeamDetails
