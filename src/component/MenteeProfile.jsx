import React from 'react'
import NavComponent from './NavComponent'
import flag from '../assets/Flag.png'
import { CiLocationOn} from "react-icons/ci";
import { GrFormEdit } from "react-icons/gr";
import James from '../assets/MenteeJames.png'
import ken from '../assets/industryLeadingKen3.png'
import belgiumFlag from '../assets/flagBelgium.png'
import CustomButton from './CustomButton';



const MenteeProfile = () => {
  return (
    <div className='mx-4 lg:mx-20 '>
        <div className='pb-5'>
        <NavComponent/>
        </div>
        <hr />


        <div className='lg:w-2/3 md:px-4'>
            <div className='flex flex-col lg:flex-row gap-8 mt-5 lg:items-center lg:justify-between'>
              <div className='flex gap-4 items-center'>
                <img src={James} alt="James" />
                <div>
                  <h1 className='flex items-center font-semibold text-[#23292E] text-[20px] mb-2'>James Cameroon<img src={flag} alt="Flag" /> </h1>
                  <p className='font-normal text-[#697E8E] text-[14px]'>Product and Programs Head at Apple</p>
                  <div className='flex items-center font-normal text-[#697E8E] text-[14px] gap-2'><CiLocationOn className='mt-1'/>Lagos, Nigeria</div>
                </div>
              </div>
              <div className='w-[150px] flex items-center gap-5 border border-[#D6DCE1] text-[#697E8E] bg-[#F8F9FA] rounded-md py-1 px-2'>
                <GrFormEdit className='text-center'/> Edit profile
              </div>
            </div>
            <div className='w-full mb-6'>
              <h1 className='text-[16px] font-semibold mt-8 mb-2'>About</h1>
              <p className='text-[14px] text-[#697E8E] font-medium leading-6 flex flex-wrap'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <h1 className='font-semibold text-[16px] mb-2 text-[#23292E]'>Areas of interest</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2'>
              {Array(8).fill("Visual Design").map((skill, idx) => (
                <p key={idx} className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-xs py-1">
                  {skill}
                </p>
              ))}
            </div>
         
        
          </div>
     
         
            
            <div className='mb-6 mt-5 mx-4'>
            <h1 className='text-[16px] font-bold text-[#23292E] mb-6'>Mentorship Plan</h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <img src={ken} alt="Ken" className='w-full md:w-auto' />
          <div className='flex-grow'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='flex items-center font-medium text-[#23292E] gap-1 text-[14px] md:text-[16px] mb-2'>Ken Adams<img className='w-[13px] h-[11px]' src={belgiumFlag} alt="Flag" /> </h1>
              <button className='bg-[#F1FCF9] text-[#1B9A8B] outline-none border-none rounded-2xl px-2 flex-shrink-0'>Active</button>
            </div>
            <p className='font-normal text-[#DA8D26] text-[13px]'>Standard Membership Plan</p>
            <p className='text-[12px] font-normal text-[#697E8E]'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore<br />aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
        <div className='mt-5'>
          <CustomButton className='w-full md:w-[120px] py-1 mx-auto md:mx-24' Button='Go to chats' />
        </div>
      </div>
        
          
          
                
        </div>
  )
}

export default MenteeProfile