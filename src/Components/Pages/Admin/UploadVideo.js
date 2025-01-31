// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useVideoContext } from '../../../Context/VideoContext';

// const UploadVideo = () => {
//   const { addVideo } = useVideoContext();
//   const [video, setVideo] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [videoUrl, setVideoUrl] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideo(file);
//       setVideoUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleUpload = (e) => {
//     e.preventDefault();
//     if (!video || !title || !description) {
//       setMessage("Please fill in all fields and select a video.");
//       return;
//     }

//     addVideo({ title, description, url: videoUrl });
//     setMessage("Video uploaded successfully!");
//     setTitle("");
//     setDescription("");
//     setVideo(null);
//     setVideoUrl("");
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
//       <form onSubmit={handleUpload} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Video Title"
//           className="p-2 border"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Video Description"
//           className="p-2 border"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="file"
//           accept="video/*"
//           onChange={handleFileChange}
//           className="p-2 border"
//         />
//         <button
//           type="button"
//           className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => navigate('/anotherVideoId')}
//         >
//           Upload Video
//         </button>
//       </form>
//       {videoUrl && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">Video Preview</h2>
//           <video controls className="w-full max-w-3xl mt-2">
//             <source src={videoUrl} type="video/mp4" />
//           </video>
//         </div>
//       )}
//       {message && <p className="mt-4 text-green-500">{message}</p>}
//     </div>
//   );
// };

// export default UploadVideo;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideoContext } from "../../../Context/VideoContext";
import axios from "axios";
import { Axios } from "../../MainRouter";

const UploadVideo = () => {
  const { addVideo } = useVideoContext();
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const navigate = useNavigate();

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!video || !image || !title || !description) {
      setMessage("Please fill in all fields and select both video and image.");
      return;
    }

    const formData = new FormData();
    formData.append("videoFile", video);
    formData.append("imageFile", image);
    formData.append("title", title);
    formData.append("description", description);
console.log(formData);

    try {
      const response = await Axios.post("/admin/uploadVideo", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        },
      });

      // Use the response data (assumes backend sends video and image URLs)
      const { videoPath, imagePath } = response.data;

      addVideo({ title, description, videoUrl: videoPath, imageUrl: imagePath });
      setMessage("Video and image uploaded successfully!");
      setTitle("");
      setDescription("");
      setVideo(null);
      setImage(null);
      setVideoUrl("");
      setImageUrl("");
      setUploadProgress(0);
    } catch (error) {
      console.error("Upload Error:", error.response?.data || error.message);
      setMessage("An error occurred during upload. Please try again.");
    }
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
          placeholder="video"
          onChange={handleVideoChange}
          className="p-2 border"
        />
        <input
          type="file"
          accept="image/*"
          placeholder="image"
          onChange={handleImageChange}
          className="p-2 border"
        />

        {uploadProgress > 0 && (
          <div>
            <progress value={uploadProgress} max="100" className="w-full h-2"></progress>
            <p className="text-sm text-gray-500">{uploadProgress}%</p>
          </div>
        )}

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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

      {imageUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Image Preview</h2>
          <img src={imageUrl} alt="Thumbnail Preview" className="w-64 h-40 object-cover" />
        </div>
      )}

      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default UploadVideo;
