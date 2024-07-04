import React from 'react'
import { Link } from 'react-router-dom';

const LearningActivities = ({learnings, title= 'Learning Articles'}) => {
 

  return (
    <div>
      <h1 className="font-semibold text-lg text-[#353D45]">Learning Articles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {learnings.map((learning, index) => (
          <div key={index} className="flex flex-col mb-3">
            <div className="flex-shrink-0">
              <img src={learning.img} alt="Learning" className="learning-img w-full" />
            </div>
            <div className="flex items-center gap-3 my-3">
              <p className="text-[#9CA3AF] text-sm font-medium">{learning.time}</p>
              <p className="bg-[#EBF8FF] rounded-lg px-3 text-[#6B7280] text-sm font-medium">{learning.design}</p>
            </div>
            <h1 className="text-lg font-medium text-[#546775]">{learning.text}</h1>
            <p className="font-normal text-sm text-[#697E8E] my-2 w-[360px]">{learning.paragraph}</p>
            <div className="flex items-center gap-1 cursor-pointer">
              <Link className="text-[#004AAD] font-semibold text-sm">{learning.Link}</Link>
              <Link><img className="text-[#004AAD]" src={learning.imgArrow} alt="arrow" /></Link>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default LearningActivities
