import React from 'react'
import CustomButton from './CustomButton'
import CustomInput from '../customInput/CustomInput'
import{ IoEyeOutline}  from "react-icons/io5";

const ResetPassword = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
    <div className='w-[369px]'>
      <h1 className='text-3xl font-semibold text-[#23292E] mb-4 text-left'>Reset password</h1>
      <h1 className=' mb-4 text-base font-Inter text-left font-medium text-[#546775]'>Enter your new desired password to continue</h1>
      </div>
      
        <div className="w-[366px]">
            
        <div className='relative'>
             <CustomInput
            label= 'Password'
        />
        <div className='absolute right-4 top-2/3 transform -translate-y-1/3'>
        <IoEyeOutline/>
        </div>
        </div>
        <div className='relative'>
             <CustomInput
            label= 'Confirm new Password'
        />
        <div className='absolute right-4 top-2/3 transform -translate-y-1/3'>
        <IoEyeOutline/>
        </div>
        </div>
        </div>
        <div className='mt-4'>
        <CustomButton
            Button= 'Save password'
        />
        </div>
        </div>
      
  )
}

export default ResetPassword
