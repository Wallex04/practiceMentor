import React from "react";
import { useState } from "react";
import Doron from "../assets/Doron.svg";
import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import imageNav from "../assets/jamesCameroon.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import homeBg from "../assets/Homebg.png";
import recommended1 from "../assets/RecomMentor1.png";
import recommended2 from '../assets/RecomMentor2.png';
import recommended3 from '../assets/RecomMentor3.png';
import LearningImg from '../assets/LearningActiv1.png';
import LearningImg2 from '../assets/LearningAct2.png';
import LearningImg3 from '../assets/LearningAct3.png';
import rightArrow from "../assets/arrow-right.png";
import RecommendedMentors from "../component/RecommendedMentors";
import LearningActivities from "../component/LearningActivities";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mentors = [
    { name: "Esther Howard", img: recommended1 },
    { name: "Rachael Greene", img: recommended2 },
    { name: "Ken Adams", img: recommended3},
  ]; 

  const learnings= [
    {img: LearningImg, time: "6 min read", design: "UX design", text: "Understanding layout in design", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
    {img: LearningImg2, time: "6 min read", design: "Product management", text: "Product strategy in building", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
    {img: LearningImg3, time: "6 min read", design: "Visual design",  text: "The importance of colour theory", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
  ]

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

      <div className="mt-12">
        <img className="mx-auto w-full" src={homeBg} alt="Home background" />
      </div>

    <RecommendedMentors mentors={mentors}/>
      <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[16px] text-[#697E8E] font-semibold mb-3">Explore mentors in various fields and companies</h1>
      <button className="bg-[#004AAD] text-white text-sm font-medium px-4  py-2 rounded-md mx-auto">See all mentors</button>
      </div>
        <LearningActivities learnings={learnings}/>
    </div>
  );
};

export default Home;
