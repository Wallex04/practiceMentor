import React from 'react'


const CustomInput = ({ label, placeholder, type, name, value, onChange, className }) => {
    return (
      <div className='m-auto flex flex-col my-4 w-[366px]'>
        <label className='text-[#889BA8] my-2'>{label}</label>
        <input
          className={`border border-gray-300 rounded-md py-3 text-[#889BA8] pl-6 outline-none ${className}`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  export default CustomInput;
