import React, {useState}from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const VideoPlayer = () => {
  const { anotherVideoId } = useParams();

  
    const [likeCount, setLikeCount] = useState(100);
    const [dislikeCount, setDislikeCount] = useState(50);
    const [isLiked, setIsLiked] = useState(false); // Track like button toggle state
    const [isDisliked, setIsDisliked] = useState(false); // Track dislike button toggle state
  
    const handleLike = () => {
      if (isLiked) {
        setLikeCount((prevCount) => prevCount - 1); // Decrease like count
      } else {
        setLikeCount((prevCount) => prevCount + 1); // Increase like count
        if (isDisliked) {
          setDislikeCount((prevCount) => prevCount - 1); // Undo dislike if already disliked
          setIsDisliked(false);
        }
      }
      setIsLiked(!isLiked); // Toggle like state
    };
  
    const handleDislike = () => {
      if (isDisliked) {
        setDislikeCount((prevCount) => prevCount - 1); // Decrease dislike count
      } else {
        setDislikeCount((prevCount) => prevCount + 1); // Increase dislike count
        if (isLiked) {
          setLikeCount((prevCount) => prevCount - 1); // Undo like if already liked
          setIsLiked(false);
        }
      }
      setIsDisliked(!isDisliked); // Toggle dislike state
    };

  const videos = [
    { id: '1', title: 'Sample Video 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '2', title: 'Sample Video 2', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '3', title: 'Sample Video 3', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '4', title: 'Sample Video 4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '5', title: 'Sample Video 5', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  const video = videos.find((v) => v.id === anotherVideoId);

  if (!video) {
    return <h1>Video not found</h1>;
  }

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <video controls className="w-full" style={{ height: '400px' }}>
  <source src={video.url} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <div>
      <h1 className="text-2xl text-left font-bold mb-4">Episode Name</h1>
      <div className="flex items-center space-x-6">
  <div className="flex items-center cursor-pointer" onClick={handleLike}>
    <i className="fa fa-thumbs-up mr-2 text-xl"></i>
    <span>{likeCount}</span>
  </div>
  <div className="flex items-center cursor-pointer" onClick={handleDislike}>
    <i className="fa fa-thumbs-down mr-2 text-xl"></i>
    <span>{dislikeCount}</span>
  </div>
</div>

      <p className='text-left'>Episode Description</p>
      </div>
      <Footer/>
    </div>
  );
};

export default VideoPlayer;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useVideoContext } from "../../Context/VideoContext";

// const VideoPlayer = () => {
//   const { videoId } = useParams();
//   const { videos } = useVideoContext();

//   const video = videos.find((v) => v.id === videoId);

//   if (!video) {
//     return <h1 className="text-center text-red-500">Video not found</h1>;
//   }

//   return (
//     <div className="p-6 bg-black text-white min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
//       <video controls className="w-full" style={{ height: "400px" }}>
//         <source src={video.url} type="video/mp4" />
//       </video>
//       <div>
//         <h2 className="text-2xl font-bold mt-4">Description</h2>
//         <p className="mt-2">{video.description}</p>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { useVideoContext } from '../../Context/VideoContext';
// import { VideoProvider } from '../../Context/VideoContext';
// import Footer from '../Footer/Footer';

// const VideoPlayer = () => {
//   const { anotherVideoId } = useParams(); 
//   const { videos } = useVideoContext

//   // Find the video by ID
//   const video = videos?.find((v) => v.id === anotherVideoId);

//   // Display a message if the video is not found
//   if (!video) {
//     return (
//       <div className="p-6 bg-black text-white min-h-screen">
//         <h1 className="text-2xl font-bold mb-4">Video Not Found</h1>
//         <p>The video you are looking for does not exist.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-black text-white min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
//       <video controls className="w-full" style={{ height: '400px' }}>
//         <source src={video.url} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div>
//         <h1 className="text-2xl text-left font-bold mb-4">Episode Name</h1>
//         <p className="text-left">Episode Description</p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default VideoPlayer;