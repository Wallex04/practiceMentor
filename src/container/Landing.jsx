
import { useState, React } from 'react';
import landingImg from '../assets/landingImg.png'
import Doron from '../assets/Doron.svg';
import { Link, useNavigate} from 'react-router-dom';
import google from '../assets/google_logo.svg.png'
import kpmg from '../assets/kpmg_logo.svg.png'
import amazon from '../assets/amazon_logo.svg (1).png'
import microsoft from '../assets/microsoft_logo.svg.png'
import meta from '../assets/meta_logo.svg.png'
import easyAccess from '../assets/easyAccess.png'
import flexibleMentoring from '../assets/flexibleMentoring.png'
import variousMentor from '../assets/variousMentors.png'
import recommended1 from "../assets/RecomMentor1.png";
import recommended2 from '../assets/RecomMentor2.png';
import recommended3 from '../assets/RecomMentor3.png';
import industryLeading1 from '../assets/industryLeadingHoward4.png';
import industryLeading2 from '../assets/industryLeadingGreene5.png'
import industryLeading3 from '../assets/industryLeadingAdams6.png'
import LearningImg from '../assets/LearningActiv1.png';
import LearningImg2 from '../assets/LearningAct2.png';
import LearningImg3 from '../assets/LearningAct3.png';
import getGuidiance from '../assets/getGuidiance.png'
import CustomButton from '../component/CustomButton';
import rightArrow from "../assets/arrow-right.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import RecommendedMentors from '../component/RecommendedMentors';
import LearningActivities from '../component/LearningActivities';
import SearchMentor from '../component/SearchMentor';


const Landing = () => {
  const navigate = useNavigate()

  const handleLogin = ()=> {
    navigate('/login')
  };

const mentoringAccess = [
  { img: easyAccess, text: "Easy access to top professionals", paragraph: "Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt"},
   { img: flexibleMentoring, text: "Flexible mentoring plans", paragraph: "Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt"},
   { img: variousMentor, text: "Various mentors in multiple fields", paragraph: "Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt"}
]

const mentors = [
  { name: "Esther Howard", img: recommended1 },
  { name: "Rachael Greene", img: recommended2 },
  { name: "Ken Adams", img: recommended3},
]; 

const mentors2 = [
  { name: "Esther Howard", img:industryLeading1 },
  { name: "Rachael Greene", img: industryLeading2 },
  { name: "Ken Adams", img: industryLeading3},
]; 

const learnings= [
  {img: LearningImg, time: "6 min read", design: "UX design", text: "Understanding layout in design", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
  {img: LearningImg2, time: "6 min read", design: "Product management", text: "Product strategy in building", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
  {img: LearningImg3, time: "6 min read", design: "Visual design",  text: "The importance of colour theory", paragraph: "Learn practical steps in UX Design. Start with defining the key features and deliverables needed in your layout.", Link: "Read More", imgArrow: rightArrow,},
]

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 lg:px-20 xl:px-40 mt-12">
      <nav className="flex justify-between items-center pt-8 pb-3 relative">
        <div>
          <img src={Doron} alt="Doron logo" />
        </div>
        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-10">
          <Link className='text-[#546775] font-Inter font-medium' to="/mentors">Mentors</Link>
          <Link className='text-[#546775] font-Inter font-medium' to="/bookings">Bookings</Link>
          <Link className='text-[#546775] font-Inter font-medium' to="/messages">About</Link>
          <button className='bg-[#004AAD] rounded-md px-4 py-2 text-[#FFFFFF] font-Inter font-medium'
          onClick={handleLogin}
          >Login</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center z-10 md:hidden">
          <Link className='text-[#546775] font-Inter font-medium py-2' to="/mentors">Mentors</Link>
          <Link className='text-[#546775] font-Inter font-medium py-2' to="/bookings">Bookings</Link>
          <Link className='text-[#546775] font-Inter font-medium py-2' to="/messages">About</Link>
          <button className='bg-[#004AAD] rounded-md px-4 py-2 text-[#FFFFFF] font-Inter font-medium my-2' onClick={handleLogin}>Login</button>
          </div>
         
        )}
      </nav>
      <hr />
      <div className='mt-14'>
        <h1 className='font-bold text-[24px] lg:text-[40px] font-Inter text-[#353D45] text-center'>Find your perfect mentor,</h1>
        <h1 className='font-bold text-[24px] lg:text-[40px] font-Inter text-[#1B9A8B] text-center'>10X your Career growth</h1>
        <p className='text-center pt-3 text-[14px] lg:text-[16px] font-medium text-[#889BA8]'>Advance your career with guidance from expert from recognised industries.</p>
      </div>
      <SearchMentor/>
      <div className='mb-10 lg:mb-20'>
        <img className="mx-auto w-full" src={landingImg} alt="" />
      </div>

        <p className='text-[16px] text-[#697E8E] text-center font-semibold mb-6'>We partner with professionals in top companies </p>
      
      <div className='grid grid-cols-3 lg:grid-cols-5 justify-between items-center lg:mx-60 mt-6 mb-10'>
        <img className='w-[80px] lg:w-[130px] lg:px-6' src={google} alt="" />
        <img className='w-[100px] lg:w-[160px] lg:px-6' src={microsoft} alt="" />
        <img className='w-[100px] lg:w-[150px] lg:px-6' src={amazon} alt="" />
        <img className='w-[100px]  pt-4 lg:pt-0 lg:w-[140px] lg:px-6' src= {kpmg} alt="" />
        <img className='w-[100px] pt-4 lg:pt-0 lg:w-[152px] lg:px-6' src={meta} alt="" />
      </div>
      <div className='mt-16'>
        <h1 className='text-center text-xl mb-2 lg:text-2xl font-semibold text-[#353D45]'>We offer a means to realise your potential</h1>
        <p className='text-[16px] font-medium text-[#889BA8] text-center'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod tempor incididunt</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-10'>
        {mentoringAccess.map((mentorAccess, index) =>(         
            <div key={index} className='text-left shadow-md pl-8 py-10 pr-10 rounded-md'>
              <img className='mb-4 w-[44px] h-[44px]' src={mentorAccess.img} alt="" />
              <h1 className='text-[#3C4750] text-[20px] font-medium'>{mentorAccess.text}</h1>
              <p className='text-[#697E8E] font-normal text-[18px] my-2'>{mentorAccess.paragraph}</p>
            </div>
        ))}
         </div>

         <div>
          <h1 className='text-center text-[24px] font-semibold text-[#353D45] mt-24'>Industry leading specialists in top companies<br/> around the world</h1>
          <p className='text-[16px] text-center font-semibold text-[#697E8E] mb-8'>Explore mentors in various fields and companies</p>

          <RecommendedMentors mentors={mentors} showTitle={false} showText={false} />
          <RecommendedMentors mentors={mentors2} showTitle={false} showText={false}/>
          <div className='flex justify-between mt-20 items-center'>
            <h1 className='font-semibold text-[20px] text-[#353D45]'>Explore learning articles from our mentors</h1>
          <Link className='text-[#004AAD] font-semibold text-[16px] flex gap-3 justify-center items-center' to="/all-articles">See All <img src={rightArrow} alt="" /></Link>
          </div>
          <LearningActivities learnings={learnings} title=""/>
         </div>
         
         <div className='flex flex-col lg:flex-row items-center justify-between mt-8'>
          <div className=''>
            <h1 className='text-[38px] lg:text-[50px] font-semibold text-[#353D45] mb-4 leading-[60px]'>Get guidance on your<br/> career journey</h1>
            <p className='text-[22px] font-normal text-[#889BA8]'>Lorem ipsum dolor sit amet, consectetur aiscing eiusmod <br/> tempor incididunt</p>
            <div>
              <CustomButton className="w-[170px] bg-[#004AAD] mt-8 mb-4 py-3"
              Button='Get started'
              />
            </div>
          </div>
          <div>
            <img className='w-[650px]' src={getGuidiance} alt="" />
          </div>
         </div>
    </div>
  )
}

export default Landing
