
import React from 'react';
import Diza from '../assets/Diza Luka.png'
import NavComponent from './NavComponent'
import flag from '../assets/Flag.png'
import { CiLocationOn, CiSquareCheck } from "react-icons/ci";
import { IoDocumentLockOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { IoIosSquareOutline } from "react-icons/io";
import CustomButton from './CustomButton';
import Wade from '../assets/WadeWaren.png'
import star from "../assets/star.png";

const SingleMentor = () => {
  return (
    <div className='mx-4 lg:mx-20 '>
        <div className='pb-5'>
        <NavComponent/>
        </div>
        <hr />
        <div className='flex flex-col lg:flex-row lg:gap-6'>
          <div className='lg:w-2/3 px-4'>
            <div className='flex flex-col lg:flex-row gap-8 mt-5 lg:items-center lg:justify-between'>
              <div className='flex gap-4 items-center'>
                <img src={Diza} alt="Diza Luka" />
                <div>
                  <h1 className='flex items-center font-semibold text-[#23292E] text-[20px] mb-2'>Diza Luka <img src={flag} alt="Flag" /> </h1>
                  <p className='font-normal text-[#697E8E] text-[14px]'>Product and Programs Head at Apple</p>
                  <div className='flex items-center font-normal text-[#697E8E] text-[14px] gap-2'><CiLocationOn className='mt-1'/>Lagos, Nigeria</div>
                </div>
              </div>
              <div className='flex items-center gap-5 border border-[#D6DCE1] text-[#697E8E] bg-[#F8F9FA] rounded-md py-1 px-2'>
                <IoDocumentLockOutline className='text-center'/> Save
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
            <h1 className='font-semibold text-[16px] mb-1 mt-8 text-[#23292E]'>Mentorship plans</h1>
            <p className='text-[#697E8E] font-Inter font-medium text-[14px]'>Select a mentee membership plan to proceed with this mentor. You can pick either of the two options</p>
            <div className='flex items-center justify-evenly mt-8'>
              <h1 className='border-b-4 pb-2 border-[#1B9A8B] text-[18px] custom-border font-semibold'>Membership plans</h1>
              <h1 className='text-[18px] font-semibold text-[#889BA8]'>Sessions</h1>
            </div>
            <div className='flex flex-col lg:flex-row mt-8 gap-12'>
              <div className='w-full lg:w-1/2 text-center border border-gray-100 rounded-md px-5 py-10'>
                <h1 className='text-[24px] text-[#1B9A8B] font-semibold'>Lite Plan</h1>
                <p className='text-center text-[#697E8E] font-normal px-5'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt</p>
                <p className='text-[#45535F] text-[26px] font-normal my-6'>$140/month</p>
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex items-center justify-center gap-2 my-3'>
                    <MdOutlineLocalPhone size={20} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>1 call per month</p>
                  </div>
                  <div className='flex items-center justify-center gap-2 my-3'>
                    <IoChatbubbleEllipsesOutline size={20} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>Unlimited Chats</p>
                  </div>
                  <div className='flex items-center justify-center gap-2 my-3'>
                    <CiClock2 size={20} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>3 days response time</p>
                  </div>
                  <div className='flex items-center justify-center w-full gap-4 py-2 mx-auto border border-[#ECEFF2] my-4 rounded-md'>
                    <IoIosSquareOutline size={25} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>Select plan</p>
                  </div>
                </div>  
              </div>
              <div className='w-full lg:w-1/2 text-center border border-gray-100 rounded-md px-5 py-10'>
                <h1 className='text-[24px] text-[#1B9A8B] font-semibold'>Standard Plan</h1>
                <p className='text-center text-[#697E8E] font-normal px-5'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt</p>
                <p className='text-[#45535F] text-[26px] font-normal my-6'>$350/month</p>
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex items-center justify-center gap-2 my-3'>
                    <MdOutlineLocalPhone size={20} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>1 call per month</p>
                  </div>
                  <div className='flex items-center justify-center gap-2 my-3'>
                    <IoChatbubbleEllipsesOutline size={20} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>Unlimited Chats</p>
                  </div>
                  <div className='flex items-center justify-center gap-2 my-3'>
                    <CiClock2 size={20} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>1 day response time</p>
                  </div>
                  <div className='flex items-center justify-center w-full py-2 gap-4 mx-auto border border-[#ECEFF2] my-4 rounded-md'>
                    <CiSquareCheck size={25} color='#21AB98'/>
                    <p className='text-[#697E8E] font-normal'>Select plan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <h1>Describe the goal of your mentorship</h1>
              <div className='w-full lg:w-[650px] outline-none h-[120px]'>
                <textarea className='w-full h-full outline-none border border-[#E7ECEF] rounded-md' name="" id=""></textarea>
              </div>
            </div>
            <div className='mt-6'>
              <CustomButton Button="Book Mentor" className="w-[120px] py-1" /> 
            </div>
          </div>
          <div className='h-full w-4 text-black border border-gray-200 hidden lg:block'></div>
          <div className='lg:w-1/3'>
            <div className='flex items-baseline mt-10 gap-1'>
              <h1 className='text-[#353D45] font-semibold text-[16px]'>Reviews from Mentees</h1>
              <p className='text-[#697E8E] text-[13px] font-normal'>(24 mentees mentored)</p>
            </div>
            <div className='p-4 border border-gray-100 rounded-md mt-4'>
              <h1 className='text-[16px] font-medium'>"Great and calm Mentor"</h1>
              <p className='mb-3 text-[#697E8E] text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore 
              aliqua. Ut enim ad minim veniam, quis </p>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img className='mt-2' src={Wade} alt="Wade Waren" />
                  <div>
                    <h1 className='text-[16px] text-[#353D45] font-medium'>Wade Waren</h1>
                    <div className='flex items-baseline gap-1'>
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                  </div>
                </div>
                <p className='text-[12px] text-[#889BA8] font-normal'>June 13 2024</p>
              </div>
            </div>
            <div className='p-4 border border-gray-100 rounded-md mt-4'>
              <h1 className='text-[16px] font-medium'>"Great and calm Mentor"</h1>
              <p className='mb-3 text-[#697E8E] text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore 
              aliqua. Ut enim ad minim veniam, quis </p>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img className='mt-2' src={Wade} alt="Wade Waren" />
                  <div>
                    <h1 className='text-[16px] text-[#353D45] font-medium'>Wade Waren</h1>
                    <div className='flex items-baseline gap-1'>
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                  </div>
                </div>
                <p className='text-[12px] text-[#889BA8] font-normal'>June 13 2024</p>
              </div>
            </div>
            <div className='p-4 border border-gray-100 rounded-md mt-4'>
              <h1 className='text-[16px] font-medium'>"Great and calm Mentor"</h1>
              <p className='mb-3 text-[#697E8E] text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore 
              aliqua. Ut enim ad minim veniam, quis </p>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img className='mt-2' src={Wade} alt="Wade Waren" />
                  <div>
                    <h1 className='text-[16px] text-[#353D45] font-medium'>Wade Waren</h1>
                    <div className='flex items-baseline gap-1'>
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                  </div>
                </div>
                <p className='text-[12px] text-[#889BA8] font-normal'>June 13 2024</p>
              </div>
            </div>
          </div>      
        </div>
    </div>
  )
}

export default SingleMentor;
