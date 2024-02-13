import React from 'react';

const About = () => {
  return (
    <div className='h-full w-full bg-[#0A113A] relative overflow-hidden'>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[30%] sm:w-[70%] p-8 rounded-[20%] left-[1%] blur-3xl levitate"></div>
      <div className="font-poppins mx-auto py-20 md:px-[20%] sm:px-4 text-black relative z-10">
        <div className='bg-white/80 rounded-[50px] pb-[60px] pt-[40px] md:px-10 sm:px-5  backdrop-blur-lg shadow-3xl rounded-tr-none rounded-bl-none text-black'>
          <p className='text-[3rem] font-bold'>About</p>
          <div>
            <p className='text-xl font-bold'>IETE Amrita Presents the Intel AI 3-Round Hackathon!</p><br/>

            
            
            The Intel AI is a 3 round Hackathon which presents an online hybrid platform where
            developers are challenged to showcase their prowess in crafting innovative
            solutions for societal advancement through heterogeneous computing, leveraging
            Intel one API as the core programming paradigm. Participants stand to benefit from
            immersive training sessions conducted by Intel experts, delving into a wide array of
            Intel AI Analytics Toolkits, libraries, SYCL/DPC++ Libraries, and optimized
            frameworks such as Optimum Intel Pandas, PyTorch, Quantum SDK, SciPy, SGX,
            SigOpt, SynapseAl, Tensorflow, TGX, Transformers, vTune, BigDL, cnvrg.io, Daal4py,
            Docker, DPCTL, GCP, Geti, Hugging Face, Intel Extension for PyTorch, Intel
            Extension for Scikit-learn, Intel Extension for Transformers, Intel Neural
            Compressor, Kubeflow, Kubernetes, Langchain, Modin, Numba (IDP), NumPy,
            oneDNN,oneMKL, OpenVINO, Optimum Habana, Optimum Intel, XGBoost.
            Additionally, participants will have access to domain-specific reference kits and
            open AI software tools to augment their development journey.
            <br/><br/>
            Anokha, the national techfest of Amrita Vishwa Vidyapeetham Coimbatore, is a 3-day congregation of some of the brightest minds in India. Founded in 2010, Anokha has grown by leaps and bounds and has progressed to become one of the leading techfests in India. 
            The Institution of Electronics and Telecommunication Engineers (IETE) Amrita Student Forum helps imparting knowledge to young and enthusiastic engineers that will help them to grow and develop in the area of electronics and telecommunication and software. IETE plan and organize technical programmes and activities, such as, special lectures, workshops, seminars, exhibitions etc. for the benefit of student members on a regular basis. Provide a common platform for the student members to exchange ideas and information.
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
