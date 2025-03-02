import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import ForgotPassword from "./component/ForgotPassword";
import CompleteProfile from "./component/CompleteProfile";
import Interest from "./component/Interest";
import VerifyAccount from "./component/VerifyAccount";
import VerificationSuccess from "./component/VerificationSuccess";
import ResetPassword from "./component/ResetPassword";
import PasswordResetSuccess from "./component/PasswordResetSuccess";
import Home from "./container/Home";
import Landing from './container/Landing';
import Footer from './component/Footer'
import Mentors from "./container/Mentors";
import SingleMentor from "./component/SingleMentor";
import Booking from "./component/Booking";
import Chats from "./component/Chats";
import MenteeProfile from "./component/MenteeProfile";
import ChatVideo from "./component/ChatVideo";
import VideoChatComp from "./component/VideoChatComp";

function App() {
  

  return (
    <>
    <Router>
  
      <Routes>
      <Route path='/' element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
    <Route path="/Forgot-password" element={<ForgotPassword/>}/>
    <Route path="CompleteProfile" element={<CompleteProfile/>}/>
    <Route path="Interest" element={<Interest/>}/>
    <Route path="Verify" element={<VerifyAccount/>}/>
    <Route path="VerificationSuccess" element={<VerificationSuccess/>}/>
    <Route path="ResetPassword" element={<ResetPassword/>}/>
    <Route path="passwordResetSuccess" element={<PasswordResetSuccess/>}/>
    <Route path="/Landing" element={<Home/>}/>
    <Route path="/Home" element={<Landing/>}/>
    <Route path="/Mentors" element={<Mentors/>}/>
    <Route path="/singleMentor" element={<SingleMentor/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/chat" element={<Chats/>}/>
    <Route path="/MenteeProfile" element={<MenteeProfile/>}/>
    <Route path="/chatVideo" element={<ChatVideo/>}/>
    <Route path="/videoComponent" element={<VideoChatComp/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
