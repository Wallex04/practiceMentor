import React from 'react'
import NavComponent from './NavComponent'
import Diza1 from '../assets/chatsDuza1.png'
import Ross from '../assets/Ross (1).png'
import ken2 from '../assets/Ross (2).png'
import Diza from '../assets/Diza Luka.png'
import { AiOutlineSend } from "react-icons/ai";
import { RiAttachment2 } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import chatText from '../assets/ChatImage (1).png';
import chatText2 from '../assets/ChatImage (2).png';
import Circle from '../assets/chatAbs.png'



const Chats = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-20'>
          <div className='pb-5'>
        <NavComponent />
      </div>
      <hr />


      <div className=''>
        <div className='flex gap-6'>
            <div className='w-[470px]'>
            <h1 className='mb-8 mt-5 text-[18px] text-[#353D45] font-semibold'>Chats</h1>
            <div className='flex gap-2 bg-[#E7ECEF] rounded-md p-4'>
                <img className='w-[40px] h-[40px]' src={Diza1} alt="" />
                <div>
                <h1 className='flex justify-between items-center text-[16px] text-[#23292E] font-bold mb-2'>Diza Luka <span className='font-medium text-[12px] text-[#697E8E]'>20 min ago</span></h1>
                <h1 className='flex justify-between items-center text-[12px] font-medium text-[#697E8E]'>Great, I will try to fix the meetingr incididunt ut labore et dolore aliqua. Ut enim ad minim veniam, quis <span className='bg-[#FF334C] p-1 rounded-full text-white text-[13px] font-semibold'>4</span></h1>
                </div>
            </div>
            <div className='flex gap-2 rounded-md p-4'>
                <img className='w-[40px] h-[40px]' src={Ross} alt="" />
                <div>
                <h1 className='flex justify-between items-center text-[16px] text-[#23292E] font-bold mb-2'>Ross Guller<span className='font-medium text-[12px] text-[#697E8E]'>20 min ago</span></h1>
                <h1 className='flex justify-between items-center text-[12px] font-medium text-[#697E8E]'>Great, I will try to fix the meetingr incididunt ut labore et dolore aliqua. Ut enim ad minim veniam, quis <span className='bg-[#FF334C] p-1 rounded-full text-white text-[13px] font-semibold'>4</span></h1>
                </div>
            </div>
            <div className='flex gap-2 rounded-md p-4'>
                <img className='w-[40px] h-[40px]' src={ken2} alt="" />
                <div>
                <h1 className='flex justify-between items-center text-[16px] text-[#23292E] font-bold mb-3'>Ken Adams <span className='font-medium text-[12px] text-[#697E8E]'>20 min ago</span></h1>
                <h1 className='flex justify-between items-center text-[12px] font-medium text-[#697E8E]'>Great, I will try to fix the meetingr incididunt ut labore et dolore aliqua. Ut enim ad minim veniam, quis <span className='bg-[#FF334C] p-1 rounded-full text-white text-[13px] font-semibold'>4</span></h1>
                </div>
            </div>
            <div>

            </div>
            </div>


            <div>
            <div className='flex gap-2 justify-center rounded-md p-4 w-[712px]'>
            <div className='relative'>
                <img className='w-[64px] h-[64px]' src={Diza} alt="" />
                    <img className='absolute w-4 h-4 top-0 right-1' src={Circle} alt="" />
                    </div>
                <div className='flex justify-between flex-grow'>
                <div className='mt-2'>
                <h1 className='flex justify-between text-[16px] text-[#23292E] font-bold'>Diza Luka</h1>
                <h1 className='flex justify-between text-[12px] font-medium text-[#697E8E]'>Online</h1>
                </div>
                <IoVideocamOutline className='' color='#889BA8' size={40}/>
                </div>
               
            </div>

            <div className='bg-[#F8F9FA] p-4 rounded-md'>
            <div className='flex justify-end items-center mt-5 relative'>
               <h1 className='absolute text-white right-8'>Please find my availabilty this<br/> week below</h1> 
               <img src={chatText} alt="" />
               </div>
              
               <div className='flex justify-start items-center mt-3'>
                <div className='relative'>
               <img src={chatText2} alt="" />
               <h1 className='absolute left-14 bottom-3'>Hello Warren</h1> 
               </div>
             
               </div>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chats