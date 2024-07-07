import React from 'react'
import Doron from "../assets/Doron.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="px-4 lg:px-20 xl:px-40 bg-[#F2F5FB] mt-14 pt-3 pb-2 lg:pt-16 pb-8">
      <div className='flex flex-col lg:pb-0 lg:flex-row justify-between items-center'>
        <div className='pb-6'>
            <img src={Doron} alt="" />
        </div>
        <div className='flex justify-center items-center gap-6 pb-8 lg:pb-0 '>
            <Link>Mentors</Link>
            <Link>Bookings</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>
        <div className='flex justify-center items-center gap-6 pb-8 lg:pb-0 '>
            <FaFacebookSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaLinkedin size={30}/>
            <FaSquareTwitter size={30}/>
        </div>

      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:pt-20'>
        <div className='flex items-center gap-1 pb-8 lg:pb-0 '>
            <AiOutlineCopyrightCircle className='text-2xl'/>
            <p>2024 Doron </p>
        </div>
        <div className='flex items-center gap-4 pb-8 lg:pb-0 '>
            <p>Terms and condition</p>
            <p>Privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
