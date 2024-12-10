import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './HomePage/Home';
import VideoPage from './VideoPlayer/VideoPage';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import { VideoProvider } from '../Context/VideoContext';
import UploadVideo from './Pages/Admin/UploadVideo';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Watchlist from './Pages/WatchList';
import AdminLog from './Pages/Admin/AdminLogin';
import Search from './Pages/Search';

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
    <Route path='/Admin' element={<AdminLog/>}/>
    <Route path='/upload' element={<UploadVideo/>}/>
    <Route path='/search' element={<Search/>}/>
 </Routes>
 </VideoProvider>
    </div>
  )
}

export default MainRouter