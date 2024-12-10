import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideoContext } from '../../../Context/VideoContext';

const UploadVideo = () => {
  const { addVideo } = useVideoContext();
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!video || !title || !description) {
      setMessage("Please fill in all fields and select a video.");
      return;
    }

    addVideo({ title, description, url: videoUrl });
    setMessage("Video uploaded successfully!");
    setTitle("");
    setDescription("");
    setVideo(null);
    setVideoUrl("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Video Title"
          className="p-2 border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Video Description"
          className="p-2 border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="p-2 border"
        />
        <button
          type="button"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate('/anotherVideoId')}
        >
          Upload Video
        </button>
      </form>
      {videoUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Video Preview</h2>
          <video controls className="w-full max-w-3xl mt-2">
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default UploadVideo;
