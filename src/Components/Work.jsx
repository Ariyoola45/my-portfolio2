import React from 'react'
import Photo from '../assets/projects/air.jpg'
import Photo2 from '../assets/projects/yoga.jpg'
import Photo3 from '../assets/projects/Defi.jpg'
import Photo4 from '../assets/projects/secured.jpg'
import Photo5 from '../assets/projects/workImg.jpeg'


const Work = () => {
  return (
    <div name='work' className='w-full bg-[#0a192f] md:h-screen text-gray-100'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-red-600 text-gray-100 '>Work</p>
                <p className='py-6'>// Check out some of my recent work </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage:`url(${Photo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content'>
                    
                    <div className='opacity-0 group-hover:opacity-100   '>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            React js Application
                        </span>
                        
                            <div className='pt-8 text-center'>
                               
                                <a href="https://github.com/Ariyoola45/Airtravel-project">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Photo2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content'>
                    
                    <div className='opacity-0 group-hover:opacity-100   '>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            React js Application
                        </span>
                        
                            <div className='pt-8 text-center'>
                               
                                <a href="https://github.com/Ariyoola45/yoga-website">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Photo3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content'>
                    
                    <div className='opacity-0 group-hover:opacity-100   '>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            React js Application
                        </span>
                        
                            <div className='pt-8 text-center'>
                               
                                <a href="https://github.com/Ariyoola45/DeFi">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Photo4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content'>
                    
                    <div className='opacity-0 group-hover:opacity-100   '>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            React js Application
                        </span>
                        
                            <div className='pt-8 text-center'>
                                
                                <a href="https://github.com/Ariyoola45/defi-security">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
