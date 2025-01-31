import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './HomePage/Home';
import VideoPage from './VideoPlayer/VideoPage';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import { VideoProvider } from '../Context/VideoContext';
import UploadVideo from './Pages/Admin/UploadVideo';
import AdminHome from './Pages/Admin/adminHome';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Watchlist from './Pages/WatchList';
import AdminLog from './Pages/Admin/AdminLogin';
import Search from './Pages/Search';
import axios from 'axios'
import toast from 'react-hot-toast'
import ManageVideos from './Pages/Admin/ManageVideos';
import Checkoutpayment from './Pages/paymentStripe';
import PlanCards from './Pages/Plan';
import SuccessPage from './Pages/Success';

export const Axios = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true, // Enable sending cookies/credentials with requests
});


function MainRouter() {

  return (
    <div>
        <VideoProvider>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/video/:videoId" element={<VideoPage/>} />
    <Route path='/videos/:anotherVideoId' element={<VideoPlayer/>}/>
    <Route path='/LogIn' element={<LogIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/> 
    <Route path='/Watchlist' element={<Watchlist/>}/>
    <Route path='/paymentStripe' element={<Checkoutpayment/>}/>
    <Route path='/success' element={<SuccessPage/>}/>
    <Route path='/Plan' element={<PlanCards/>}/>
    <Route path='/Admin' element={<AdminLog/>}/>
    <Route path='/adminHome' element={<AdminHome/>}/>
    <Route path='/upload' element={<UploadVideo/>}/>
    <Route path='/Manage' element={<ManageVideos/>}/>
    <Route path='/search' element={<Search/>}/>
 </Routes>
 </VideoProvider>
    </div>
  )
}

export default MainRouter