import React from 'react'
import CustomButton from './CustomButton'

const VerificationSuccess = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
      <div className='w-[369px]'>
        <h1 className='text-[36px] font-Inter font-semibold text-[#23292E] mb-2 text-left'>Account verification Success</h1>
        <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>
          Account verified successful you can now start your mentorship journey
        </h1>
      </div>
        <CustomButton
        Button='Verify'
        className='bg-[#D1F1FF]'
        />
      </div>
  )
}

export default VerificationSuccess
