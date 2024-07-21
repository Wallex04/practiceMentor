
import React from 'react';
import NavComponent from './NavComponent';
import Monica from '../assets/industryLeadingRachael2.png';
import Ken from '../assets/industryLeadingKen3.png';
import Monica2 from '../assets/industryLeadingEsther.png';
import flagBelgium from '../assets/flagBelgium.png';
import CustomButton from './CustomButton';

const Booking = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-20'>
      <div className='pb-5'>
        <NavComponent />
      </div>
      <hr />
      <div className='mx-4 md:mx-8 lg:mx-20 mb-6'>
        <h1 className='mt-6 text-[20px] md:text-[24px] font-bold text-[#45535F] mb-6'>Mentor Bookings</h1>
        <h1 className='text-[14px] md:text-[16px] font-medium text-[#353D45] mb-7'>Membership plan</h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <img src={Monica} alt="Monica" className='w-full md:w-auto' />
          <div className='flex-grow'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='flex items-center font-medium text-[#23292E] gap-1 text-[14px] md:text-[16px] mb-2'>Monica Gueller <img className='w-[13px] h-[11px]' src={flagBelgium} alt="Flag" /> </h1>
              <button className='bg-[#FEF6EE] text-[#DE4E18] outline-none border-none rounded-2xl px-2 flex-shrink-0'>Expired</button>
            </div>
            <p className='font-normal text-[#DA8D26] text-[13px]'>Lite membership plan</p>
            <p className='text-[12px] font-normal text-[#697E8E]'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore<br />aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
        <div className='mt-5'>
          <CustomButton className='w-full md:w-[120px] py-1 mx-auto md:mx-24' Button='Subscribe' />
        </div>
      </div>
      <hr />

      <div className='mx-4 md:mx-8 lg:mx-20 mb-6 mt-5'>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <img src={Ken} alt="A man" className='w-full md:w-auto' />
          <div className='flex-grow'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='flex items-center font-medium text-[#23292E] gap-1 text-[14px] md:text-[16px] mb-2'>Ken Adams<img className='w-[13px] h-[11px]' src={flagBelgium} alt="Flag" /> </h1>
              <button className='bg-[#F1FCF9] text-[#1B9A8B] outline-none border-none rounded-2xl px-2 flex-shrink-0'>Active</button>
            </div>
            <p className='font-normal text-[#DA8D26] text-[13px]'>Standard membership plan</p>
            <p className='text-[12px] font-normal text-[#697E8E]'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore<br />aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
        <div className='mt-5'>
          <CustomButton className='w-full md:w-[120px] py-1 mx-auto md:mx-24' Button='Go to chat' />
        </div>
      </div>
      <hr />

      <div className='mx-4 md:mx-8 lg:mx-20 mb-6 mt-5'>
        <h1 className='text-[14px] md:text-[16px] font-medium text-[#353D45] mb-5 mt-4'>Sessions</h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <img src={Monica2} alt="Diza Luka" className='w-full md:w-auto' />
          <div className='flex-grow'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='flex items-center font-medium text-[#23292E] gap-1 text-[14px] md:text-[16px] mb-2'>Monica Gueller <img className='w-[13px] h-[11px]' src={flagBelgium} alt="Flag" /> </h1>
              <button className='bg-[#FEF6EE] text-[#DE4E18] outline-none border-none rounded-2xl px-2 flex-shrink-0'>Pending</button>
            </div>
            <p className='font-normal text-[#DA8D26] text-[13px]'>Session. Booked for Monday, 23:00 GMT</p>
            <p className='text-[12px] font-normal text-[#697E8E]'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore<br />aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
        <div className='mt-5'>
          <CustomButton className='w-full md:w-[120px] py-1 mx-auto md:mx-24' Button='Go to chat' />
        </div>
      </div>
      <hr />

      <div className='mx-4 md:mx-8 lg:mx-20 mb-6 mt-5'>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <img src={Monica} alt="Diza Luka" className='w-full md:w-auto' />
          <div className='flex-grow'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='flex items-center font-medium text-[#23292E] gap-1 text-[14px] md:text-[16px] mb-2'>Monica Gueller <img className='w-[13px] h-[11px]' src={flagBelgium} alt="Flag" /> </h1>
              <button className='bg-[#FDF9ED] text-[#C16C1E] outline-none border-none rounded-2xl px-2 flex-shrink-0'>Uncompleted</button>
            </div>
            <p className='font-normal text-[#DA8D26] text-[13px]'>Lite membership plan</p>
            <p className='text-[12px] font-normal text-[#697E8E]'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore<br />aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
        <div className='mt-5'>
          <CustomButton className='w-full md:w-[120px] py-1 mx-auto md:mx-24' Button='Subscribe' />
        </div>
      </div>
      <hr />

      <div className='mx-4 md:mx-8 lg:mx-20 mb-6 mt-5'>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <img src={Ken} alt="Ken" className='w-full md:w-auto' />
          <div className='flex-grow'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='flex items-center font-medium text-[#23292E] gap-1 text-[14px] md:text-[16px] mb-2'>Ken Adams <img className='w-[13px] h-[11px]' src={flagBelgium} alt="Flag" /> </h1>
              <button className='bg-[#F1FCF9] text-[#1B9A8B] outline-none border-none rounded-2xl px-2 flex-shrink-0'>Completed</button>
            </div>
            <p className='font-normal text-[#DA8D26] text-[13px]'>Session completed</p>
            <p className='text-[12px] font-normal text-[#697E8E]'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt ut labore et dolore<br />aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
        <div className='mt-5'>
          <CustomButton className='w-full md:w-[120px] py-1 mx-auto md:mx-24' Button='Book session' />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Booking;
