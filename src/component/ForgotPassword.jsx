import React from 'react'
import CustomInput from '../customInput/CustomInput'
import CustomButton from './CustomButton'

const ForgotPassword = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
    <div className='w-[369px]'>
      <h1 className='text-3xl font-semibold text-[#23292E] mb-4 text-left'>Forgot password</h1>
      <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>Let's get to know you better by completing <br/>your profile details</h1>
      </div>
      <div className='w-[366px]'>
         <CustomInput
          label= 'Email address'
          placeholder= "Enter email"
      />
      </div>
      <div className='mt-8'>
      <CustomButton
          Button= 'Send code'
      />
      </div>
    </div>
  )
}

export default ForgotPassword
