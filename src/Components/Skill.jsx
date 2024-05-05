import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skill = () => {
  return (
    <div name='skill' className=' bg-[#0a192f] text-gray-300 w-full h-screen '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  '>
            <div>
                <p className=' text-4xl  border-b-4 border-red-600 '>Skills</p>
                <p className=' py-4 '>// These are the technologies  i have work with  </p>
            </div>

            <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md: shadow-[#0404c16 ] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md: shadow-[#0404c16 ] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="html icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md: shadow-[#0404c16 ] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="html icon" />
                    <p className=' capitalize'>javascript</p>
                </div>
                <div className='shadow-md: shadow-[#0404c16 ] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="html icon" />
                    <p>React js</p>
                </div>
                <div className='shadow-md: shadow-[#0404c16 ] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="html icon" />
                    <p>github</p>
                </div>
                <div className='shadow-md: shadow-[#0404c16 ] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="html icon" />
                    <p>tailwind</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skill
