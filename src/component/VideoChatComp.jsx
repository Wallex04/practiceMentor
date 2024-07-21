// import React from 'react'
// import { IoIosArrowBack } from "react-icons/io";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { GoDotFill } from "react-icons/go";
// import bigVideo from '../assets/bigVideoImg.jpg';
// import smallVideo from '../assets/smallVideoImg.png';
// import { IoCallOutline } from "react-icons/io5";
// const VideoChatComp = () => {
//   return (
//     <div>

// <div className='mx-auto mt-10'>
//           <div className='relative'>
//             <div className='w-full h-0 pb-[95%] relative'>
//               <img className='absolute top-0 left-0 w-full h-full object-cover' src={bigVideo} alt="" />
//             </div>
//             <div className='absolute top-0 right-0 w-1/4 h-1/4'>
//               <img className='w-full h-full object-cover' src={smallVideo} alt="" />
//             </div>
//             <IoIosArrowBack className='absolute top-3 left-4' size={25} color='white' />
//             <IoChatbubbleEllipsesOutline className='absolute top-3 right-4' size={25} color='white' />
//             <div className='flex items-center gap-1 absolute top-3 right-20'>
//               <GoDotFill color='#FF334C' />
//               <p className='text-white'>00:30</p>
//             </div>
//             <IoCallOutline className='absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#FF334C] p-2 rounded-full' color='white' size={50} />
//           </div>
//         </div>
//     </div>
//   )
// }

// export default VideoChatComp



import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import bigVideo from '../assets/bigVideoImg.jpg';
import smallVideo from '../assets/smallVideoImg.png';
import { IoCallOutline } from "react-icons/io5";

const VideoChatComp = ({onClose}) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-60'>
      <div className='relative bg-white rounded-lg overflow-hidden w-[90%] max-w-4xl h-[80%] max-h-[80%]'>
        <div className='relative w-full h-full'>
          <div className='w-full h-full'>
            <img className='w-full h-full object-cover' src={bigVideo} alt="Main Video" />
          </div>
          <div className='absolute top-4 right-4 w-1/3 h-1/3'>
            <img className='w-full h-full object-cover' src={smallVideo} alt="Small Video" />
          </div>
          <IoIosArrowBack onClick={onClose} className='absolute top-4 left-4 text-white' size={30} />
          <IoChatbubbleEllipsesOutline className='absolute top-4 right-16 text-white' size={30} />
          <div className='flex items-center gap-1 absolute top-4 right-36'>
            <GoDotFill color='#FF334C' />
            <p className='text-white'>00:30</p>
          </div>
          <IoCallOutline className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FF334C] p-2 rounded-full text-white' size={50} />
        </div>
      </div>
    </div>
  );
}

export default VideoChatComp;
