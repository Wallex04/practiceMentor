import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchMentor = () => {
  return (
    <div className='mx-auto text-center mt-8 relative rounded-md w-[300px] lg:w-[420px] mb-10'>
    <CiSearch className='absolute left-3 lg:left-6 top-4'/>
    <input className='bg-[#F8F9FA] w-full py-3 pl-8 lg:pl-12 outline-none' type="text" placeholder='Search mentor name, title, company '/>
  </div>
  )
}

export default SearchMentor
