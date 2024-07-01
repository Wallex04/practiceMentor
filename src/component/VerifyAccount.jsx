// import React from 'react'
// import CustomButton from './CustomButton'

// const VerifyAccount = () => {
//   return (
//     <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
//       <div className='w-[369px]'>
//         <h1 className='text-[36px] font-Inter font-semibold text-[#23292E] mb-2 text-left'>Verify your account</h1>
//         <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>Enter the OTP code sent to the email address provided (jan**G@gmail.com)</h1>
//         </div>
//         <div className='w-[366px] flex gap-1'>
//             <input className='border-none rounded-md focus:border-[#004AAD] bg-[#F8F9FA] w-14 h-14' type="number" />
//             <input className='border-none rounded-md focus:border-[#004AAD] bg-[#F8F9FA] w-14 h-14' type="number" />
//             <input className='border-none rounded-md focus:border-[#004AAD] bg-[#F8F9FA] w-14 h-14' type="number" />
//             <input className='border-none rounded-md focus:border-[#004AAD] bg-[#F8F9FA] w-14 h-14' type="number" />
//             <input className='border-none rounded-md focus:border-[#004AAD] bg-[#F8F9FA] w-14 h-14' type="number" />
//             <input className='border-none rounded-md focus:border-[#004AAD] bg-[#F8F9FA] w-14 h-14' type="number" />
//             </div>
//             <div className='flex w-[366px] justify-between items-center mt-6'>
//         <p className='text-[#697E8E] text-[14px]'>Didn't get the code? <span className='text-[#1B9A8B] pl-1'>Resend</span></p>
//         <span className='text-[12px] text-[#B2BEC7]'>00:30</span>
//       </div>
//       <div className='mt-6'>
//       <CustomButton
//       Button='Verify'
//       className='bg-[#D1F1FF]'
//       />
//       </div>
//         </div>
//   )
// }

// export default VerifyAccount


// import React, { useState } from 'react';
// import CustomButton from './CustomButton';

// const VerifyAccount = () => {
//   const [otp, setOtp] = useState(Array(6).fill(''));

//   const handleChange = (e, index) => {
//     const { value } = e.target;
//     if (/^\d*$/.test(value)) { // Only allow numeric input
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   const isOtpComplete = otp.every(num => num !== '');

//   return (
//     <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
//       <div className='w-[369px]'>
//         <h1 className='text-[36px] font-Inter font-semibold text-[#23292E] mb-2 text-left'>Verify your account</h1>
//         <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>
//           Enter the OTP code sent to the email address provided (jan**G@gmail.com)
//         </h1>
//       </div>
//       <div className='w-[366px] flex gap-1'>
//         {otp.map((num, index) => (
//           <input
//             key={index}
//             className='border-none rounded-md focus:border-[#004AAD] bg-[#F8F9FA] w-14 h-14 text-center'
//             type="number"
//             maxLength="1"
//             value={num}
//             onChange={(e) => handleChange(e, index)}
//           />
//         ))}
//       </div>
//       <div className='flex w-[366px] justify-between items-center mt-6'>
//         <p className='text-[#697E8E] text-[14px]'>Didn't get the code? <span className='text-[#1B9A8B] pl-1'>Resend</span></p>
//         <span className='text-[12px] text-[#B2BEC7]'>00:30</span>
//       </div>
//       <div className='mt-6'>
//         <CustomButton
//           Button='Verify'
//           className={isOtpComplete ? '' : 'bg-[#D1F1FF]'}
//         />
//       </div>
//     </div>
//   );
// }

// export default VerifyAccount;


import React, { useState } from 'react';
import CustomButton from './CustomButton';

const VerifyAccount = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) { // Only allow numeric input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const isOtpComplete = otp.every(num => num !== '');

  return (
    <div className='flex flex-col justify-center items-center w-[500px] h-screen bg-white mx-auto p-8 font-Inter'>
      <div className='w-[369px]'>
        <h1 className='text-[36px] font-Inter font-semibold text-[#23292E] mb-2 text-left'>Verify your account</h1>
        <h1 className=' mb-8 text-base font-Inter text-left font-medium text-[#546775]'>
          Enter the OTP code sent to the email address provided (jan**G@gmail.com)
        </h1>
      </div>
      <div className='w-[366px] flex gap-1'>
        {otp.map((num, index) => (
          <input
            key={index}
            className='border border-transparent focus:border-[#004AAD]  rounded-md bg-[#F8F9FA] w-14 h-14 text-center focus:outline-none'
            type="text"
            maxLength="1"
            value={num}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      <div className='flex w-[366px] justify-between items-center mt-6'>
        <p className='text-[#697E8E] text-[14px]'>Didn't get the code? <span className='text-[#1B9A8B] pl-1'>Resend</span></p>
        <span className='text-[12px] text-[#B2BEC7]'>00:30</span>
      </div>
      <div className='mt-6'>
        <CustomButton
          Button='Verify'
          className={isOtpComplete ? '' : 'bg-[#D1F1FF]'}
        />
      </div>
    </div>
  );
}

export default VerifyAccount;
