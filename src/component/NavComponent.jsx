import React, { useState } from 'react';
import Doron from '../assets/Doron.svg';
import { Link } from 'react-router-dom';
import imageNav from '../assets/jamesCameroon.png'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const NavComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
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
    </div>
  )
}

export default NavComponent
