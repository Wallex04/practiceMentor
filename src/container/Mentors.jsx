import React, { useState } from 'react'
import Doron from '../assets/Doron.svg'
import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import imageNav from "../assets/jamesCameroon.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import SearchMentor from '../component/SearchMentor';
import filter from '../assets/faders 1.png'
import RecommendedMentors from '../component/RecommendedMentors';
import recommended1 from "../assets/RecomMentor1.png";
import recommended2 from '../assets/RecomMentor2.png';
import recommended3 from '../assets/RecomMentor3.png';
import recommended4 from '../assets/Diza Luka.png';
import belgiumFlag from "../assets/Group 17.png";
import star from "../assets/star.png";


const Mentors = () => {

  const mentors = [
    { name: "Esther Howard", img: recommended1 },
    { name: "Diza Luka", img: recommended4},
    { name: "Rachael Greene", img: recommended2 },
    { name: "Ken Adams", img: recommended3},
  ]; 

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lirure dolor in reprehenderit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <div className="px-4 lg:px-20 xl:px-40 mt-12">
        <nav className="flex justify-between items-center pt-8 relative">
        <div>
          <img src={Doron} alt="Doron logo" />
        </div>
        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-10">
          <Link to="/mentors">Mentors</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/settings">Settings</Link>
          <Link className="mx-2 lg:mx-4" to="/notifications">
            <IoMdNotifications className="w-6 h-6 lg:w-10 lg:h-10" />
          </Link>

          <div className="flex items-center justify-center gap-2 lg:gap-3">
            <img src={imageNav} alt="Profile" className="w-8 h-8 lg:w-auto lg:h-auto" />
            <div className="hidden lg:block">
              <p>James Cameroon</p>
              <p>jamescam@gmail.com</p>
            </div>
            <IoIosArrowDown className="w-4 h-4 lg:w-auto lg:h-auto" />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center z-10 md:hidden">
            <Link to="/mentors" className="py-2">Mentors</Link>
            <Link to="/bookings" className="py-2">Bookings</Link>
            <Link to="/messages" className="py-2">Messages</Link>
            <Link to="/settings" className="py-2">Settings</Link>
            <Link to="/notifications" className="py-2">
              <IoMdNotifications className="w-6 h-6 lg:w-10 lg:h-10" />
            </Link>
            <div className="flex items-center justify-center gap-2 lg:gap-3 py-2">
              <img src={imageNav} alt="Profile" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <div className="block">
                <p>James Cameroon</p>
                <p>jamescam@gmail.com</p>
              </div>
              <IoIosArrowDown className="w-4 h-4 lg:w-auto lg:h-auto" />
            </div>
          </div>
        )}
      </nav>

      <h1 className='mt-10 mb-8 text-center font-semibold text-[24px] text-[#356169]'>Explore mentors in various fields and companies </h1>
      <SearchMentor/>
      
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>

      
        <div className='w-full lg:w-[340px] border border-gray-300 rounded-md px-4 lg:px-14 py-4'>
        <div className='flex items-center gap-1'>
        <img src={filter} alt="" />
        <p className='font-semibold'>Filter</p>
        </div>

        <div>
        <h1 className='font-semibold mt-8 mb-2'>Category</h1>
        <hr className='w-full' />
        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            Ux designer
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            Product Design
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            Product Management
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            Graphics Design
        </label>
        </div>
        </div>

        <div>
        <h1 className='font-semibold mt-12 mb-2'>Companies</h1>
        <hr className='w-full' />
        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            Apple
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
          Google
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            Meta
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
           Microsoft
        </label>
        </div>
        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
           Amazon
        </label>
        </div>
        </div>

        <div>
        <h1 className='font-semibold mt-12 mb-2 text-[#3C4750]'>Job titles</h1>
        <hr className='w-full' />
        <div className='mt-6'>
        <label className='flex items-center text-[16px] text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            Senior software Engineer
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
          Product Designer
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
            CEO
        </label>
        </div>

        <div className='mt-6'>
        <label className='flex items-center text-lg text-[#697E8E] font-medium'>
            <input className='mr-3 w-6 h-6' type="checkbox" />
          Founder
        </label>
        </div>
        </div>
        </div>
    
        <div className='border border-gray-300 rounded-md flex-1'>
          <h1 className="p-4 border-b border-gray-300 font-semibold text-[18px] text-[#3C4750]">Mentors list</h1>
          <RecommendedMentors mentors={mentors}
          paragraphText={paragraphText}
          gridColsClass="grid-cols-1"
            showTitle={false}
            skillsGridColsClass= 'grid-cols-2 md:grid-cols-4'
          />
        </div>
        </div>
    </div>
  )
}

export default Mentors

