import React from 'react'
import belgiumFlag from "../assets/Group 17.png";
import star from "../assets/star.png";

const RecommendedMentors = ({ mentors, paragraphText, title = "Recommended Mentors", showTitle = true, 
  gridColsClass = "grid-cols-1 lg:grid-cols-3",
  flexClass = "md:flex-row md:px-10 md:gap-14 lg:px-0 lg:gap-3",
  skillsGridColsClass= 'grid-cols-2 lg:grid-cols-3' }) => {
  return (
    <div className="mt-10">
      {showTitle && (
    <h1 className="mb-4 text-[#353D45] font-semibold text-lg font-Inter">
      Recommended Mentors
    </h1>
    )}
    <div className={ `grid ${gridColsClass} gap-6 mb-6` }>
      {mentors.map((mentor, index) => (
        <div key={index} className="border border-[#ECEFF2] rounded-md p-3 py-4">
          <div className={`flex flex-col ${flexClass} gap-3`} >
            <div className="flex-shrink-0">
              <img src={mentor.img} alt="Mentor" className="mx-auto lg:mx-0 mentor-img" />
            </div>
            <div>
              <h1 className="flex font-semibold items-center text-xl mb-2 gap-1 text-[#23292E]">
                {mentor.name}
                <img className="w-4 h-2" src={belgiumFlag} alt="Belgium Flag" />
              </h1>
              <p className="text-base font-medium text-[#45535F] mb-1">
                Senior product designer at Uber
              </p>
              <p className="text-[#697E8E] font-medium text-sm mb-1">
                24 mentees mentored
              </p>
              <p className='text-[#697E8E] font-Inter font-medium text-[13px]'>{paragraphText}</p>
              <div className="flex items-center gap-1">
                <img src={star} alt="Star" />
                <p className="text-sm font-medium text-[#697E8E] mb-1">
                  5.0 (10 Reviews)
                </p>
              </div>
            </div>
          </div>
          <div className={`grid ${skillsGridColsClass} gap-1 mt-4 md:px-20`}>
            {["Visual Design", "Visual Design", "Visual Design", "Visual Design"].map((skill, idx) => (
              <p key={idx} className="bg-[#ECEFF2] rounded-2xl text-center m-0 p-0 text-[#697E8E] text-xs py-1 md:max-w-24">
                {skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default RecommendedMentors
