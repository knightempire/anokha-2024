import React from 'react'
import { Line3 } from 'three'

const Contest = () => {
  return (
    <div className=' bg-[rgb(10,17,58)]'>
        <div className='md:w-[60%] sm:w-[93%] mx-auto bg-white py-10 rounded-xl md:px-12 sm:px-6'>
          <h2 className='font-bold'>Participation Guidelines</h2>
          
          <ul className='list-disc md:ml-10 sm:ml-5 mt-2'>
              <li>You must use Intel&reg; AI Analytics Toolkit and Libraries to participate.</li>
              <li>Participants must strictly adhere in using the Intel&reg; AI Analytics Toolkits while framing their projects.</li>
          </ul>
          
          <br/>
          
          <p>We strongly recommend that participants utilize the Intel&reg; Developer Cloud (IDC) for developing and deploying their projects. This platform not only offers the advantage of high-performance GPU and enterprise-grade CPU but also provides access to the latest Intel hardware and software capabilities. By leveraging these resources, you can ensure optimal performance and efficiency for your projects. So, make the most of these cutting-edge technologies to bring your innovative ideas to life.</p>
          
          <br/>
          
          <h2 className='font-bold'>Technical article writing contest </h2> 

          <p> Write a few lines about the project and post the GIT link on <a href="https://www.linkedin.com/" className='font-semibold'>Linkedin</a>. Tag <a href="https://www.linkedin.com/in/shriramkvasudevan/" className='font-semibold'>@shriramkvasudevan</a> <a href="https://www.linkedin.com/showcase/intel-software/" className='font-semibold'>@intel-software</a> <a href="https://www.linkedin.com/in/jaymahalingam/" className='font-semibold'>@jaymahalingam</a> and <a href="https://www.linkedin.com/school/anokha-amrita/" className='font-semibold'>@anokha-amrita</a></p>
          
        </div>
    </div>
  )
}

export default Contest
