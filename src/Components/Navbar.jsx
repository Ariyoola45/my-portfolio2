import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import {FaBars,FaTimes, FaGithub,FaLinkedin} from "react-icons/fa"
import {BsFillPersonLinesFill, BsFacebook} from "react-icons/bs"
import { Link } from 'react-scroll'




const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handle =()=>{
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-100'>
        <div>
            <img src={logo} alt="" style={{width:'120px'}} />
        </div>
     
            <ul className='hidden md:flex '>
                  <li className=''>
                <Link activeClass="active" to="home"  smooth={true} duration={500} >
                   Home
                </Link>
                </li>
                <li className=''>
                  <Link  to="about" smooth={true} duration={500} >
                   About
                </Link></li>
                <li className=''>
                  <Link to="skill" smooth={true} duration={500} >
                   Skills
                </Link></li>
                <li className=''>
                  <Link  to="work" smooth={true} duration={500} >
                  Work
                </Link></li>
                <li className=''>
                  <Link  to="contact" smooth={true} duration={500} >
                  Contact
                </Link></li>
            </ul>
            
        {/* hamburger */}
        <div onClick={handle} className='md:hidden  z-10' >
              {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        
        {/* mobile view  */}
        <ul className={!nav ?  'hidden':' absolute top-0 left-0 w-full h-screen bg-[#0a192f] duration-500 flex flex-col justify-center items-center' }>
                <li  className='py-6 text-4xl'>
                <Link onClick={handle} activeClass="active" to="home"  smooth={true} duration={500} >
                   Home
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                  <Link onClick={handle} to="about" smooth={true} duration={500} >
                   About
                </Link></li>
                <li className='py-6 text-4xl'>
                  <Link onClick={handle} to="skill" smooth={true} duration={500} >
                   Skills
                </Link></li>
                <li className='py-6 text-4xl'>
                  <Link onClick={handle}  to="work" smooth={true} duration={500} >
                  Work
                </Link></li>
                <li className='py-6 text-4xl'>
                  <Link onClick={handle} to="contact" smooth={true} duration={500} >
                  Contact
                </Link></li>
            </ul>
            {/* social  */}
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-101px] 
                  hover:ml-[-10px] duration-300 bg-blue-600 '>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="https://www.linkedin.com/in/sulaimon-ariyo-9454b7259/">
                      Linkedin<FaLinkedin size={30}/>
                      
                    </a>
                    </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
                  hover:ml-[-10px] duration-300 bg-blue-800 '>
                    <a className='flex justify-between items-center w-full text-gray-300  ' href="https://www.facebook.com/profile.php?id=100088105598663">
                    Facebook<BsFacebook size={30}/>
                      
                    </a>
                    </li>
                 
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
                  hover:ml-[-10px] duration-300 bg-[#3333333] '>
                    <a className='flex justify-between items-center w-full text-gray-300  ' href="https://github.com/Ariyoola45">
                    Github<FaGithub size={30}/>
                      
                    </a>
                    </li>
                    
                </ul>
                
            </div>
    </div>

  )
}

export default Navbar