import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Axios } from "../MainRouter";

const VideoPlayer = () => {
  const { anotherVideoId } = useParams();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [likeCount, setLikeCount] = useState(100);
  const [dislikeCount, setDislikeCount] = useState(50);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // Function to handle fetching the video details
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await Axios.get(`/user/videoById/${anotherVideoId}`); // Replace with your actual API endpoint
        setVideo(response.data); // Assuming backend returns video data in `response.data`
        setLikeCount(response.data.likes || 0); // If likes are provided by backend
        setDislikeCount(response.data.dislikes || 0); // If dislikes are provided by backend
      } catch (err) {
        console.error("Error fetching video:", err.message);
        setError("Failed to load video. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [anotherVideoId]);

  // Handle Like and Dislike Actions
  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      setLikeCount((prevCount) => prevCount + 1);
      if (isDisliked) {
        setDislikeCount((prevCount) => prevCount - 1);
        setIsDisliked(false);
      }
    }
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikeCount((prevCount) => prevCount - 1);
    } else {
      setDislikeCount((prevCount) => prevCount + 1);
      if (isLiked) {
        setLikeCount((prevCount) => prevCount - 1);
        setIsLiked(false);
      }
    }
    setIsDisliked(!isDisliked);
  };

  // Loading State
  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  // Error State
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Video Not Found
  if (!video) {
    return <h1 className="text-white text-center">Video not found</h1>;
  }

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <video controls className="w-full" style={{ height: "400px" }}>
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div>
        <h1 className="text-2xl text-left font-bold mb-4">{video.title}</h1>
        <div className="flex items-center space-x-6">
          {/* <div className="flex items-center cursor-pointer" onClick={handleLike}>
            <i
              className={`fa fa-thumbs-up mr-2 text-xl ${
                isLiked ? "text-blue-500" : ""
              }`}
            ></i>
            <span>{likeCount}</span>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleDislike}
          >
            <i
              className={`fa fa-thumbs-down mr-2 text-xl ${
                isDisliked ? "text-blue-500" : ""
              }`}
            ></i>
            <span>{dislikeCount}</span>
          </div> */}
        </div>

        <p className="text-left">{video.description || "No description available"}</p>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPlayer;
