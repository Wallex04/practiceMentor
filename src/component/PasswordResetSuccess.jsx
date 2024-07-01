import React from 'react'
import keybg from '../assets/keybg.png'
import keylock from '../assets/keylock1.png'
import CustomButton from './CustomButton'


const PasswordResetSuccess = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
    <div className='w-[369px]'>

        <div className=' mx-auto flex flex-col justify-center items-center'>
        <div className='relative mb-4'>
            <img src={keybg} alt="" />
            <div className='absolute bottom-3 left-3'>
                <img src={keylock} alt="" />
            </div>
        </div>
        </div>
      <h1 className='text-[20px] mx-auto w-[154px] font-Inter font-semibold text-[#23292E] text-center mb-4'>Password reset Successful</h1>
      <h1 className='text-base font-Inter mx-auto w-[311px] text-center font-medium text-[#697E8E] mb-6'>You have successfully changed your Mentor password</h1>
      <hr className='mb-6 border-t-2 border-dashed border-[#D6DCE1]' />
      <p className='text-center font-Inter mx-auto w-[311px] text-[#697E8E] px-[9px]'>You can now log in into the app with your new password and continue to learn from great mind</p>
      </div>

        <CustomButton
        Button='Log in'
        className='mt-10'
        />
      </div>
  )
}

export default PasswordResetSuccess;
