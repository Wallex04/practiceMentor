import React from 'react'
import CustomInput from '../customInput/CustomInput'
import { IoIosArrowDown } from "react-icons/io";
import Flag from '../assets/Flag.png'
import Arrow from '../assets/arrow.png'
import CustomButton from './CustomButton';

const CompleteProfile = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
    <div className='w-[369px]'>
      <h1 className='text-[36px] font-Inter font-semibold text-[#23292E] mb-2 text-left'>Complete profile</h1>
      <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>Select your account type to create your account</h1>
      </div>

      <div className='w-[366px]'>
        <div className='relative'>
        <CustomInput className='text-center pl-20'
         style={{ paddingLeft: '20px' }}
            label='Mobile number'
            placeholder='0812345678'
        />
        {/* <div className='flex justify-between gap-8'> */}
        < IoIosArrowDown className='absolute left-10 bottom-3 w-6 h-6 text-gray-500'/>
        <img className='absolute left-3 bottom-3 w-6 h-6 text-gray-500' src={Flag} alt="" />
        {/* </div> */}
        </div>
        <div className='relative'>
            <CustomInput
            label='Select Country'
            placeholder='Nigeria'
            />
                <IoIosArrowDown className='absolute right-3 bottom-3 w-6 h-6 text-gray-500' />
        </div>
        </div>
            <CustomButton
            Button='Next'
            />
      </div>
  )
}

export default CompleteProfile
