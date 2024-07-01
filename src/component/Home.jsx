// import React from "react";
// import Doron from "../assets/Doron.svg";
// import { Link } from "react-router-dom";
// import { IoMdNotifications } from "react-icons/io";
// import imageNav from "../assets/jamesCameroon.png";
// import { IoIosArrowDown } from "react-icons/io";
// import homeBg from "../assets/Homebg.png";
// import recommended1 from "../assets/RecomMentor1.png";
// import belgiumFlag from "../assets/Group 17.png";
// import star from "../assets/star.png";

// const Home = () => {
//   return (
//     <div>
//       <nav className="flex justify-between items-center mx-20 pt-8">
//         <div>
//           <img src={Doron} alt="" />
//         </div>
//         <div className="flex justify-center items-center gap-10">
//           <Link to="/mentors">Mentors</Link>
//           <Link to="/bookings">Bookings</Link>
//           <Link to="/messages">Messages</Link>
//           <Link to="/settings">Settings</Link>
//           <Link className="mx-4" to="/notifications">
//             <IoMdNotifications className="w-10 h-10" />
//           </Link>

//           <div className="flex items-center justify-center gap-3">
//             <img src={imageNav} alt="" />
//             <div>
//               <p>James Cameroon</p>
//               <p>jamescam@gmail.com</p>
//             </div>
//             <IoIosArrowDown />
//           </div>
//         </div>
//       </nav>

//       <div className="mx-40 mt-12">
//         <img className="mx-auto w-full" src={homeBg} alt="" />
//       </div>

//       <div className="mx-40 mt-10">
//         <h1 className="mb-4 text-[#353D45] font-semibold text-lg font-Inter">
//           Recommended Mentors
//         </h1>
//         <div className="grid grid-cols-1 outline lg:grid-cols-3 items-center gap-6 mb-24 ">
//           <div className="border border-[#ECEFF2] rounded-md p-3">
//             <div className="flex gap-5">
//               <div>
//                 <img src={recommended1} alt="" />
//               </div>
//               <div>
//                 <h1 className="flex gap-2 font-semibold items-center text-xl mb-2 text-[#23292E]">
//                   Esther Howard
//                   <img className="w-4 h-2" src={belgiumFlag} alt="" />
//                 </h1>
//                 <p className="text-base font-medium text-[#45535F] mb-1">
//                   Senior product designer at Uber
//                 </p>
//                 <p className="text-[#697E8E] font-medium text-sm mb-1">
//                   24 mentees mentored
//                 </p>
//                 <div className="flex items-center gap-1">
//                   <img src={star} alt="" />
//                   <p className="text-sm font-medium text-[#697E8E] mb-1">
//                     5.0 (10 Reviews)
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 gap-2 mt-4">
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//             </div>
//           </div>

//           <div className="border border-[#ECEFF2] rounded-md p-3">
//             <div className="flex gap-5">
//               <div>
//                 <img src={recommended1} alt="" />
//               </div>
//               <div>
//                 <h1 className="flex gap-2 font-semibold items-center text-xl mb-2 text-[#23292E]">
//                   Esther Howard
//                   <img className="w-4 h-2" src={belgiumFlag} alt="" />
//                 </h1>
//                 <p className="text-base font-medium text-[#45535F] mb-1">
//                   Senior product designer at Uber
//                 </p>
//                 <p className="text-[#697E8E] font-medium text-sm mb-1">
//                   24 mentees mentored
//                 </p>
//                 <div className="flex items-center gap-1">
//                   <img src={star} alt="" />
//                   <p className="text-sm font-medium text-[#697E8E] mb-1">
//                     5.0 (10 Reviews)
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 gap-2 mt-4">
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//             </div>
//           </div>
//           <div className="border border-[#ECEFF2] rounded-md p-3">
//             <div className="flex gap-5">
//               <div>
//                 <img src={recommended1} alt="" />
//               </div>
//               <div>
//                 <h1 className="flex gap-2 font-semibold items-center text-xl mb-2 text-[#23292E]">
//                   Esther Howard
//                   <img className="w-4 h-2" src={belgiumFlag} alt="" />
//                 </h1>
//                 <p className="text-base font-medium text-[#45535F] mb-1">
//                   Senior product designer at Uber
//                 </p>
//                 <p className="text-[#697E8E] font-medium text-sm mb-1">
//                   24 mentees mentored
//                 </p>
//                 <div className="flex items-center gap-1">
//                   <img src={star} alt="" />
//                   <p className="text-sm font-medium text-[#697E8E] mb-1">
//                     5.0 (10 Reviews)
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 gap-2 mt-4">
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//               <p className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-sm py-1">
//                 Visual Design
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import Doron from "../assets/Doron.svg";
// import { Link } from "react-router-dom";
// import { IoMdNotifications } from "react-icons/io";
// import imageNav from "../assets/jamesCameroon.png";
// import { IoIosArrowDown } from "react-icons/io";
// import homeBg from "../assets/Homebg.png";
// import recommended1 from "../assets/RecomMentor1.png";
// import belgiumFlag from "../assets/Group 17.png";
// import star from "../assets/star.png";

// const Home = () => {
//   return (
//     <div>
//       <nav className="flex justify-between items-center px-4 lg:px-20 pt-8">
//         <div>
//           <img src={Doron} alt="Doron logo" />
//         </div>
//         <div className="flex justify-center items-center gap-4 lg:gap-10">
//           <Link to="/mentors">Mentors</Link>
//           <Link to="/bookings">Bookings</Link>
//           <Link to="/messages">Messages</Link>
//           <Link to="/settings">Settings</Link>
//           <Link className="mx-2 lg:mx-4" to="/notifications">
//             <IoMdNotifications className="w-6 h-6 lg:w-10 lg:h-10" />
//           </Link>

//           <div className="flex items-center justify-center gap-2 lg:gap-3">
//             <img src={imageNav} alt="Profile" className="w-8 h-8 lg:w-auto lg:h-auto" />
//             <div className="hidden lg:block">
//               <p>James Cameroon</p>
//               <p>jamescam@gmail.com</p>
//             </div>
//             <IoIosArrowDown className="w-4 h-4 lg:w-auto lg:h-auto" />
//           </div>
//         </div>
//       </nav>

//       <div className="px-4 lg:px-40 mt-12">
//         <img className="mx-auto w-full" src={homeBg} alt="Home background" />
//       </div>

//       <div className="px-4 lg:px-40 mt-10">
//         <h1 className="mb-4 text-[#353D45] font-semibold text-lg font-Inter">
//           Recommended Mentors
//         </h1>
//         <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 mb-24">
//           {[1, 2, 3].map((_, index) => (
//             <div key={index} className="border border-[#ECEFF2] rounded-md p-3">
//               <div className="flex flex-col lg:flex-row gap-5">
//                 <div className="flex-shrink-0">
//                   <img src={recommended1} alt="Mentor" className="mx-auto lg:mx-0" />
//                 </div>
//                 <div>
//                   <h1 className="flex gap-2 font-semibold items-center text-xl mb-2 text-[#23292E]">
//                     Esther Howard
//                     <img className="w-4 h-2" src={belgiumFlag} alt="Belgium Flag" />
//                   </h1>
//                   <p className="text-base font-medium text-[#45535F] mb-1">
//                     Senior product designer at Uber
//                   </p>
//                   <p className="text-[#697E8E] font-medium text-sm mb-1">
//                     24 mentees mentored
//                   </p>
//                   <div className="flex items-center gap-1">
//                     <img src={star} alt="Star" />
//                     <p className="text-sm font-medium text-[#697E8E] mb-1">
//                       5.0 (10 Reviews)
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
//                 {["Visual Design", "UI/UX Design", "Product Management"].map((skill, idx) => (
//                   <p key={idx} className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-xs py-1">
//                     {skill}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import Doron from "../assets/Doron.svg";
import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import imageNav from "../assets/jamesCameroon.png";
import { IoIosArrowDown } from "react-icons/io";
import homeBg from "../assets/Homebg.png";
import recommended1 from "../assets/RecomMentor1.png";
import recommended2 from '../assets/RecomMentor2.png';
import recommended3 from '../assets/RecomMentor3.png';
import LearningImg from '../assets/LearningActiv1.png';
import LearningImg2 from '../assets/LearningAct2.png';
import LearningImg3 from '../assets/LearningAct3.png';
import belgiumFlag from "../assets/Group 17.png";
import rightArrow from "../assets/arrow-right.png"
import star from "../assets/star.png";

const Home = () => {
    const mentors = [
      { name: "Esther Howard", img: recommended1 },
      { name: "Rachael Greene", img: recommended2 },
      { name: "Ken Adams", img: recommended3},
    ]; 

    const learnings= [
      {img: LearningImg, time: "6 min read", design: "UX design", text: "Understanding layout in design", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
      {img: LearningImg2, time: "6 min read", design: "Product management", text: "Product strategy in building", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
      {img: LearningImg3, time: "6 min read", design: "Visual design",  text: "The importance of colour theory", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
    ]

  return (
    <div className="px-4 lg:px-20 xl:px-40 mt-12">
      <nav className="flex justify-between items-center pt-8">
        <div>
          <img src={Doron} alt="Doron logo" />
        </div>
        <div className="flex justify-center items-center gap-4 lg:gap-10">
          <Link to="/mentors">Mentors</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/settings">Settings</Link>
          <Link className="mx-2 lg:mx-4" to="/notifications">
            <IoMdNotifications className="w-6 h-6 lg:w-10 lg:h-10" />
          </Link>

          <div className="flex items-center justify-center gap-2 lg:gap-3">
            <img src={imageNav} alt="Profile" className="w-8 h-8 lg:w-auto lg:h-auto" />
            <div className="hidden lg:block">
              <p>James Cameroon</p>
              <p>jamescam@gmail.com</p>
            </div>
            <IoIosArrowDown className="w-4 h-4 lg:w-auto lg:h-auto" />
          </div>
        </div>
      </nav>

      <div className="mt-12">
        <img className="mx-auto w-full" src={homeBg} alt="Home background" />
      </div>

      <div className="mt-10">
        <h1 className="mb-4 text-[#353D45] font-semibold text-lg font-Inter">
          Recommended Mentors
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {mentors.map((mentor, index) => (
            <div key={index} className="border border-[#ECEFF2] rounded-md p-3">
              <div className="flex flex-col md:flex-row  md:px-10 md:gap-14 lg:px-0 lg:gap-3  gap-3">
                <div className="flex-shrink-0">
                  <img src={mentor.img} alt="Mentor" className="mx-auto lg:mx-0" />
                </div>
                <div>
                  <h1 className="flex font-semibold items-center text-xl mb-2 text-[#23292E]">
                    {mentor.name}
                    <img className="w-4 h-2" src={belgiumFlag} alt="Belgium Flag" />
                  </h1>
                  <p className="text-base font-medium text-[#45535F] mb-1">
                    Senior product designer at Uber
                  </p>
                  <p className="text-[#697E8E] font-medium text-sm mb-1">
                    24 mentees mentored
                  </p>
                  <div className="flex items-center gap-1">
                    <img src={star} alt="Star" />
                    <p className="text-sm font-medium text-[#697E8E] mb-1">
                      5.0 (10 Reviews)
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 mt-4">
                {["Visual Design", "UI/UX Design", "Product Management"].map((skill, idx) => (
                  <p key={idx} className="bg-[#ECEFF2] rounded-2xl text-center text-[#697E8E] text-xs py-1">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-[16px] text-[#697E8E] font-semibold mb-3">Explore mentors in various fields and companies</h1>
      <button className="bg-[#004AAD] text-white text-sm font-medium px-4  py-2 rounded-md mx-auto">See all mentors</button>
      </div>
      <h1 className="font-semibold text-lg text-[#353D45]">Learning Articles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-4">
        {learnings.map((learning, index) => (
          <div key={index} className="flex flex-col mb-3">
            <div className="flex-shrink-0 w-[500px]">
            <img src={learning.img} alt="" />
            </div>
            <div className=" flex gap-2 my-3">
            <p className="text-[#9CA3AF] text-sm font-medium">{learning.time}</p>
            <p>{learning.design}</p>
            </div>
            
            <h1>{learning.text}</h1>
            <p>{learning.paragraph}</p>
            <div className="flex items-center gap-3 cursor-pointer">
            <Link className="text-blue-600 ">{learning.Link}</Link>
            <Link><img className="text-blue-600" src={learning.imgArrow} alt="arrow" /></Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;
