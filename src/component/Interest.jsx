import React from 'react'
import CustomButton from './CustomButton'

const Interest = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
    <div className='w-[369px]'>
      <h1 className='text-[36px] font-Inter font-semibold text-[#23292E] mb-2 text-left'>Tell us your Interest</h1>
      <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>This helps match you with mentors in the same field of your interests</h1>
      </div>
      <div className='w-[370px]'>
        <div className='flex gap-2 items-center mb-3'>
           <button className='w-[173px] py-3 rounded-3xl border border-gray-[#ECEFF2] text-sm'>Product Management</button>
           <button className='w-[173px] py-3 rounded-3xl bg-[#F18746] text-white text-sm'>Marketing and Comms</button>
        </div>
        <div className='flex gap-2 items-center mb-3'>
           <button className='w-[173px] py-3 rounded-3xl border border-gray-[#ECEFF2] text-sm'>Software Engineering</button>
           <button className='w-[173px] py-3 rounded-3xl  border border-gray-[#ECEFF2] text-sm'>Product design</button>
        </div>
        <div className='flex gap-2 items-center mb-3'>
           <button className='w-[173px] py-3 rounded-3xl bg-[#1B9A8B]  text-white text-sm'>Business Management</button>
           <button className='w-[173px] py-3 rounded-3xl  border border-gray-[#ECEFF2] text-sm'>Motion Design</button>
        </div>
        <div className='flex gap-2 items-center mb-8'>
           <button className='w-[173px] py-3 rounded-3xl border border-gray-[#ECEFF2] text-sm'>Visual Design</button>
           <button className='w-[173px] py-3 rounded-3xl  border border-gray-[#ECEFF2] text-sm'>Full stack Development</button>
        </div>
        </div>
            <CustomButton
             Button='Next'
            />
      </div>
  )
}

export default Interest
