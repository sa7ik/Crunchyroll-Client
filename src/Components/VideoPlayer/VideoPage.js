import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Axios } from "../MainRouter";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";

const VideoPage = () => {
  const { videoId } = useParams();
  
  const navigate = useNavigate();

  const [videos, setVideos] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const primeToken = Cookies.get("premiumToken");
  console.log("prime",primeToken);
  

  const display = () => {
    setShowModal(!primeToken);
  };

  useEffect(() => {
    display();
  }, [primeToken]);

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/Plan");
  };

  // Fetch videos from the backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await Axios.get(`/user/videoById/${videoId}`);// Adjust the endpoint based on your backend
        setVideos(response.data); // Assuming your backend returns videos in `response.data.videos`
      } catch (err) {
        setError("Failed to load videos.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleCardClick = (anotherVideoId) => {
    navigate(`/videos/${anotherVideoId}`);
  };

  if (loading) {
    return <h1 className="text-white text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-white text-center">{error}</h1>;
  }

  if (!videos) {
    return <h1 className="text-white text-center">Video not found</h1>;
  }

  return (
    
      <div className="relative w-full bg-gray-950 h-full overflow-hidden pb-16">
        {/* Centered Modal */}
        {showModal && (
          <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Dialog className="flex items-center justify-center h-screen">
              <Modal.Body className="text-center bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-lg">Your payment is pending.</h4>
                <p className="mt-3 text-gray-300">
                  In the meantime, browse TV shows and movies.
                </p>
                <Button
                  variant="light"
                  onClick={handleModalClose}
                  className="mt-4 px-4 py-2 font-semibold text-white"
                >
                  OK
                </Button>
              </Modal.Body>
            </Modal.Dialog>
          </Modal>
        )}
  
        {/* Video Banner */}
        <div className="w-full mb-8">
          <img
            src={videos?.Image || "https://via.placeholder.com/800x400"} // Fallback image
            alt={videos?.title || "Video Thumbnail"}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
  
        {/* Video Details */}
        <div className="mt-6 px-4 text-white">
          <h1 className="text-4xl font-extrabold mb-4">{videos?.title}</h1>
          <p className="text-lg">
            <span className="font-semibold">Description:</span> {videos?.description}
          </p>
        </div>
  
        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
          <div
            className="bg-gray-800 p-2 rounded-lg cursor-pointer transform transition hover:scale-105 shadow-md"
            onClick={() => handleCardClick(videos?._id)}
          >
            <img
              src={videos?.Image || "https://via.placeholder.com/300x200"}
              alt={videos?.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-white text-lg font-bold text-center mt-3">
              {videos?.title}
            </h2>
          </div>
        </div>
  
        <Footer />
      </div>
    );
  };
  

export default VideoPage;
