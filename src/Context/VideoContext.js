import React, { createContext, useContext, useState } from "react";

const VideoContext = createContext();

// Custom hook to use the VideoContext
export const useVideoContext = () => {
  return useContext(VideoContext);
};

const data=[
    {
      id: '1',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Vp5sq4V8TydlrCJBCVuWZNybn9_pdXHwHA&s',
      title:'Solo Leveling',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Solo Leveling.',
      rating: '4.2/5',
    },
    {
      id: '2',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZia5lRQM842gv-Ue9HuYpobxSTBMVc0Qjg&s',
      title:'Frieren',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Frieren.',
      rating: '4.2/5',
    },
    {
      id: '3',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytYusXda_oNnk_vVfosgCwoSzyn_gbawFXQ&s',
      title:'Jojo',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Jojo.',
      rating: '4.2/5',
    },
    {
      id: '4',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzaJAiF50tQ4AyBPdI2DbG7v_6sm6CiHWXw&s',
      title:'Chainsaw Man',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Chainsaw Man.',
      rating: '4.2/5',
    },
    {
      id: '5',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOz5_QiRloFBbeIU85vM0BBOU3uGHSeZvlw&s',
      title:'jujutsu Kaisen',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for jujutsu Kaisen.',
      rating: '4.2/5',
    }
  ]

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: "1",
      title: "Sample Video 1",
      description: "This is a sample video.",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ]);

  const addVideo = (video) => {
    setVideos((prevVideos) => [
      ...prevVideos,
      { ...video, id: (prevVideos.length + 1).toString() },
    ]);
  };

  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (item) => {
    if (!watchlist.some((i) => i.id === item.id)) {
      setWatchlist([...watchlist, item]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };

  return (
    <VideoContext.Provider value={{data, videos, addVideo,watchlist, addToWatchlist,removeFromWatchlist }}>
      {children}
    </VideoContext.Provider>
  );
};


// import React, { createContext, useState } from 'react';

// // Create Context
// export const VideoContext = createContext();

// // Provider Component
// export const VideoProvider = ({ children }) => {
//   const [videos, setVideos] = useState([]); // Initial state

//   return (
//     <VideoContext.Provider value={{ videos, setVideos }}>
//       {children}
//     </VideoContext.Provider>
//   );
// };
