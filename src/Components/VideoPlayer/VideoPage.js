import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const VideoPage = () => {
  const { videoId } = useParams();

  const navigate = useNavigate();

  const handleCardClick = (anotherVideoId) => {
    navigate(`/videos/${anotherVideoId}`);
  };

  const data = [
    {
      id: '1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Vp5sq4V8TydlrCJBCVuWZNybn9_pdXHwHA&s',
      title: 'Solo Leveling',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Solo Leveling.',
      rating: '4.2/5',
    },
    {
      id: '2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZia5lRQM842gv-Ue9HuYpobxSTBMVc0Qjg&s',
      title: 'Frieren',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Frieren.',
      rating: '4.2/5',
    },
    {
      id: '3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytYusXda_oNnk_vVfosgCwoSzyn_gbawFXQ&s',
      title: 'Jojo',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Jojo.',
      rating: '4.2/5',
    },
    {
      id: '4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzaJAiF50tQ4AyBPdI2DbG7v_6sm6CiHWXw&s',
      title: 'Chainsaw Man',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for Chainsaw Man.',
      rating: '4.2/5',
    },
    {
      id: '5',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOz5_QiRloFBbeIU85vM0BBOU3uGHSeZvlw&s',
      title: 'jujutsu Kaisen',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'This is a description for jujutsu Kaisen.',
      rating: '4.2/5',
    },
  ];

  const video = data.find((item) => item.id === videoId);

  if (!video) {
    return <h1 className="text-white text-center">Video not found</h1>;
  }

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <div className="w-full mb-8">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="mt-4 text-white">
            <h1 className="text-4xl font-bold mb-2">{video.title}</h1>
            <p className="text-lg mb-1">
              <span className="font-semibold">Rating:</span> {video.rating}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Description:</span> {video.description}
            </p>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-1 rounded cursor-pointer"
            onClick={() => handleCardClick(item.id)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-white text-xl font-bold text-center mb-2">{item.title}</h2>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default VideoPage;
