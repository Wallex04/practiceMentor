
import { useState, React } from 'react';
import landingImg from '../assets/landingImg.png'
import Doron from '../assets/Doron.svg';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import google from '../assets/google_logo.svg.png'
import kpmg from '../assets/kpmg_logo.svg.png'
import amazon from '../assets/amazon_logo.svg (1).png'
import microsoft from '../assets/microsoft_logo.svg.png'
import meta from '../assets/meta_logo.svg.png'
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="px-4 lg:px-20 xl:px-40 mt-12">
      <nav className="flex justify-between items-center pt-8 pb-3 relative">
        <div>
          <img src={Doron} alt="Doron logo" />
        </div>
        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-10">
          <Link className='text-[#546775] font-Inter font-medium' to="/mentors">Mentors</Link>
          <Link className='text-[#546775] font-Inter font-medium' to="/bookings">Bookings</Link>
          <Link className='text-[#546775] font-Inter font-medium' to="/messages">About</Link>
          <Link><button className='bg-[#004AAD] rounded-md px-4 py-2 text-[#FFFFFF] font-Inter font-medium'>Login</button></Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center z-10 md:hidden">
          <Link className='text-[#546775] font-Inter font-medium py-2' to="/mentors">Mentors</Link>
          <Link className='text-[#546775] font-Inter font-medium py-2' to="/bookings">Bookings</Link>
          <Link className='text-[#546775] font-Inter font-medium py-2' to="/messages">About</Link>
          <Link><button className='bg-[#004AAD] rounded-md px-4 py-2 text-[#FFFFFF] font-Inter font-medium my-2'>Login</button></Link>
          </div>
         
        )}
      </nav>
      <hr />
      <div className='mt-14'>
        <h1 className='font-bold text-[24px] lg:text-[40px] font-Inter text-[#353D45] text-center'>Find your perfect mentor,</h1>
        <h1 className='font-bold text-[24px] lg:text-[40px] font-Inter text-[#1B9A8B] text-center'>10X your Career growth</h1>
        <p className='text-center pt-3 text-[14px] lg:text-[16px] font-medium text-[#889BA8]'>Advance your career with guidance from expert from recognised industries.</p>
      </div>
      <div className='mx-auto text-center mt-8 relative rounded-md w-[300px] lg:w-[420px] mb-10'>
        <CiSearch className='absolute left-3 lg:left-6 top-4'/>
        <input className='bg-[#F8F9FA] w-full py-3 pl-8 lg:pl-12 outline-none' type="text" placeholder='Search mentor name, title, company '/>
      </div>

      <div className='mb-10 lg:mb-20'>
        <img className="mx-auto w-full" src={landingImg} alt="" />
      </div>

        <p className='text-[16px] text-[#697E8E] text-center font-semibold mb-6'>We partner with professionals in top companies </p>
      
      <div className='grid grid-cols-3 lg:grid-cols-5 justify-between items-center lg:mx-20 mt-6 mb-10'>
        <img className='w-[80px] lg:w-[130px]' src={google} alt="" />
        <img className='w-[100px] lg:w-[160px]' src={microsoft} alt="" />
        <img className='w-[100px] lg:w-[140px]' src={amazon} alt="" />
        <img className='w-[80px] lg:w-[1o4px]' src= {kpmg} alt="" />
        <img className='w-[80px] lg:w-[112px]' src={meta} alt="" />
      </div>
    </div>
  )
}

export default Landing
