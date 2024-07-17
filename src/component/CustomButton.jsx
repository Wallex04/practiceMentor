import React from 'react'

const CustomButton = ({Button, className, onClick}) => {
  return (
    <div className={`bg-[#004AAD] text-white text-center font-Inter rounded-md ${className}`} onClick={onClick}>
      <button>{Button}</button>
    </div>
  )
}

export default CustomButton

