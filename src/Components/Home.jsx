import React from 'react'
import {HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      
      <div className='max-w-[1000px] mx-auto flex-col px-8 flex justify-center h-full'>
          <p className='text-red-600 '>Hi, My Name  Is</p>
          <h1 className='text-4xl  sm:text-7xl font-bold text-[#ccd6f6]'>Ariyo Sulaimon </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>i'm a Front En Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]' > 
            I'm a Front End Developer Specializing in Building (and occasionally design)
            exceptional digital experiencd  Currently, i'm focused on building responsive Front End Web
             applications .
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center
             hover:bg-red-600 hover:border-red-600'>view work
             <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className='ml-3 '/>
             </span>
             </button>
          </div>
      </div>

    </div>
  )
}

export default Home