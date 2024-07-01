import React from 'react'

const CustomButton = ({Button, className}) => {
  return (
    <div className={`w-[366px] bg-[#004AAD] py-4 text-white text-center font-Inter rounded-md ${className}`}>
      <button>{Button}</button>
    </div>
  )
}

export default CustomButton

