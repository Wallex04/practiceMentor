import React, { useState } from 'react';
import NavComponent from './NavComponent';
import Diza1 from '../assets/chatsDuza1.png';
import Ross from '../assets/Ross (1).png';
import ken2 from '../assets/Ross (2).png';
import Diza from '../assets/Diza Luka.png';
import { AiOutlineSend } from "react-icons/ai";
import { RiAttachment2 } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import chatText from '../assets/ChatImage (1).png';
import chatText2 from '../assets/ChatImage (2).png';
import Circle from '../assets/chatAbs.png';
import VideoChatComp from './VideoChatComp'; // Import the VideoChatComp component

const Chats = () => {
  const [isVideoChatOpen, setIsVideoChatOpen] = useState(false);

  const handleVideoIconClick = () => {
    setIsVideoChatOpen(true);
  };

  const handleCloseVideoChat = () => {
    setIsVideoChatOpen(false);
  };

  return (
    <div className='mx-4 md:mx-8 lg:mx-20'>
      <div className='pb-5'>
        <NavComponent />
      </div>
      <hr />

      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='lg:w-[470px] w-full'>
          <h1 className='mb-8 mt-5 text-[18px] text-[#353D45] font-semibold'>Chats</h1>
          <div className='flex gap-2 bg-[#E7ECEF] rounded-md p-4'>
            <img className='w-[40px] h-[40px]' src={Diza1} alt="" />
            <div className='w-full'>
              <h1 className='flex justify-between items-center text-[16px] text-[#23292E] font-bold mb-2'>
                Diza Luka 
                <span className='font-medium text-[12px] text-[#697E8E]'>20 min ago</span>
              </h1>
              <h1 className='flex justify-between items-center text-[12px] font-medium text-[#697E8E]'>
                Great, I will try to fix the meetingr incididunt ut labore et dolore aliqua. Ut enim ad minim veniam, quis 
                <span className='bg-[#FF334C] rounded-full text-white text-[13px] font-semibold flex items-center justify-center h-5 w-5'>4</span>
              </h1>
            </div>
          </div>

          {/* Other chats */}
          <div className='flex gap-2 rounded-md p-4 mb-2'>
            <img className='w-[40px] h-[40px]' src={Ross} alt="" />
            <div className='w-full'>
              <h1 className='flex justify-between items-center text-[16px] text-[#23292E] font-bold mb-2'>
                Ross Guller
                <span className='font-medium text-[12px] text-[#697E8E]'>20 min ago</span>
              </h1>
              <h1 className='flex justify-between items-center text-[12px] font-medium text-[#697E8E]'>
                Great, I will try to fix the meetingr incididunt ut labore et dolore aliqua. Ut enim ad minim veniam, quis 
                <span className='bg-[#FF334C] h-5 w-5 text-center rounded-full text-white text-[13px] font-semibold flex items-center justify-center'>4</span>
              </h1>
            </div>
          </div>
          <hr />
          <div className='flex gap-2 rounded-md p-4 mb-2'>
            <img className='w-[40px] h-[40px]' src={ken2} alt="" />
            <div className='w-full'>
              <h1 className='flex justify-between items-center text-[16px] text-[#23292E] font-bold mb-3'>
                Ken Adams 
                <span className='font-medium text-[12px] text-[#697E8E]'>20 min ago</span>
              </h1>
              <h1 className='flex justify-between items-center text-[12px] font-medium text-[#697E8E]'>
                Great, I will try to fix the meetingr incididunt ut labore et dolore aliqua. Ut enim ad minim veniam, quis 
                <span className='bg-[#FF334C] rounded-full text-white text-[13px] font-semibold flex items-center justify-center h-5 w-5'>4</span>
              </h1>
            </div>
          </div>
          <hr />
        </div>

        <div className='flex-grow'>
          <div className='flex gap-2 justify-center rounded-md p-4 w-full'>
            <div className='relative'>
              <img className='w-[64px] h-[64px]' src={Diza} alt="" />
              <img className='absolute w-4 h-4 top-0 right-1' src={Circle} alt="" />
            </div>
            <div className='flex justify-between flex-grow'>
              <div className='mt-2'>
                <h1 className='flex justify-between text-[16px] text-[#23292E] font-bold'>Diza Luka</h1>
                <h1 className='flex justify-between text-[12px] font-medium text-[#697E8E]'>Online</h1>
              </div>
              <IoVideocamOutline onClick={handleVideoIconClick} color='#889BA8' size={40}/>
            </div>
          </div>

          <div className='bg-[#F8F9FA] p-4 rounded-md'>
            <div className='flex justify-end items-center mt-5 relative'>
              <h1 className='absolute text-white right-6 text-[11px] md:text-[14px] md:right-12'>Please find my availabilty this<br/> week below</h1> 
              <img className='w-[170px] md:w-[260px]' src={chatText} alt="" />
            </div>
            
            <div className='flex justify-start items-center mt-10'>
              <div className='relative'>
                <img className='w-[120px] md:w-[200px]' src={chatText2} alt="" />
                <h1 className='absolute text-[12px] md:text-[14px] left-8 bottom-1 md:left-11 md:bottom-3'>Hello Warren</h1> 
              </div>
            </div>
            <p className='text-[#B2BEC7] text-[12px] pb-24'>20:26pm</p>
            <div className='mt-28 flex justify-between items-center bg-white px-4 py-2 rounded-md'>
              <p className='text-[#697E8E]'>Type something</p>
              <div className='flex items-center gap-6'>
                <RiAttachment2 color='#889BA8' size={20}/>
                <AiOutlineSend color='#889BA8' size={20}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoChatOpen && <VideoChatComp onClose={handleCloseVideoChat} />}
    </div>
  );
}

export default Chats;
