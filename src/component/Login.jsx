import React from 'react'
import CustomInput from '../customInput/CustomInput';
import { Link, useNavigate} from 'react-router-dom';
import CustomButton from './CustomButton';
import{ IoEyeOutline}  from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();

  const handleUser = () => {
    navigate('/Landing')
  };
  return (
      <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
      <div className='w-[369px]'>
        <h1 className='text-3xl font-semibold text-[#23292E] mb-4 text-left'>Log in</h1>
        <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>Enter your Login details to continue</h1>
        </div>
        <div className='w-[366px]'>
        <div className='flex justify-between items-center bg-[#ECEFF2] p-2 rounded-md text-[#353D45]'>
            <p className=' rounded-md w-[173px] text-center bg-white p-2 font-medium text-[#353D45]'>As a Mentee</p>
            <p className='w-[173px] text-center font-medium text-[#353D45]'>As a Mentor</p>
        </div>
           <CustomInput
            label= 'Email address'
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
        <div className='mt-4'>
        <CustomButton
            Button= 'Log in'
            onClick={handleUser}
        />
        </div>
        <Link to='/Forgot-password' className='text-center mt-6 mb-6 text-blue-600 underline'>Forgot password?</Link>
        <p>Don't have an account?<Link to='/' className='text-blue-600 underline ml-2'>Create account</Link> </p>
      </div>
  )
}

export default Login
