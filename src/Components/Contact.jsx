import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4    '>
        {/* */}
        <div className='my-30 '>
        <form action="https://getform.io/f/c937945d-39e4-4c42-8cfb-ec2b048ae120" method="POST" className=' flex flex-col max-w-[600px] '>
            <div className=' pb-8  '>
                <p className='text-4xl font-bold inline border-b-4 border-red-600  text-gray-300'>
                    Contact
                </p>
                <p className=' text-gray-300 py-4'>// Submit the form below or shoot me an email - Ariyosulaimon66@gmail.com</p>
            </div>

            <input className='my-4 p-2 bg-[#ccd6f6] ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2  bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
            <textarea className=' bg-[#ccd6f6] ' placeholder='massage' name="message"  cols="30" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>
                Let's collaborate
            </button>
        </form>
        </div>
    </div>
  )
}

export default Contact
