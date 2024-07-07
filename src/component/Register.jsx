import React from 'react'
import CustomInput from '../customInput/CustomInput'
import CustomButton from './CustomButton'
import { Link, useNavigate } from 'react-router-dom'
import{ IoEyeOutline}  from "react-icons/io5";

const Register = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Add any additional logic for account creation here
    navigate('/Home');
  };

  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
      <div className='w-[369px]'>
        <h1 className='text-[36px] font-Inter font-semibold text-[#23292E] mb-2 text-left'>Create Account</h1>
        <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>Select your account type to create your account</h1>
        </div>
        <div className='w-[366px]'>
        <div className='flex justify-between items-center bg-[#ECEFF2] p-2 rounded-md text-[#353D45]'>
            <p className=' rounded-md w-[173px] text-center bg-white p-2 font-medium text-[#353D45]'>As a Mentee</p>
            <p className='w-[173px] text-center font-medium text-[#353D45]'>As a Mentor</p>
        </div>
        <CustomInput
            label= 'First name'
            placeholder= "Enter first name"
        />
           <CustomInput
            label= 'Last name'
            placeholder= "Enter Last name"
        />
           <CustomInput
            label= 'Email'
            placeholder= "Enter email"
        />
          <div className='relative'>
             <CustomInput
            label= 'Password'
            placeholder= "Enter password"
        />
        <div className='absolute right-4 top-2/3 transform -translate-y-1/3'>
        <IoEyeOutline/>
        </div>
        </div>
        </div>
        <div className='mb-4'>
          <div className='text-[16px] font-Inter'>
          
        <CustomButton 
            Button= 'Create account'
            onClick={handleCreateAccount}
        />
        </div>
        </div>
        <p>Already have an account?<Link className='text-blue-600 underline pl-2' to='/login'>Log in</Link> </p>
      </div>
   
  )
}

export default Register
