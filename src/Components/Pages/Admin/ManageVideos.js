import React, { useState, useEffect } from "react";
import { Axios } from "../../MainRouter";

const ManageVideos = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingVideo, setEditingVideo] = useState(null);
  const [imageFile, setimageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null); // State for hovered video

  useEffect(() => {
    fetchVideos();
  }, []);

  // Fetch videos from backend
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/admin/getVideos");
      setVideos(response.data.videos);
    } catch (err) {
      setError("Failed to load videos.");
    }
  };

  // Handle delete video
  const handleDelete = async (videoId) => {
    try {
      await Axios.delete(`/admin/deleteVideo/${videoId}`);
      setVideos((prevVideos) => prevVideos.filter((video) => video._id !== videoId));
    } catch (err) {
      setError("Failed to delete video.");
    }
  };

  // Handle edit video
  const handleEdit = (video) => {
    setEditingVideo(video);
    setimageFile(null);
    setVideoFile(null);
  };

  // Save edited video
  const saveEdit = async (editedVideo) => {
    console.log('fv:',editedVideo);
    
    const formData = new FormData();
    formData.append("title", editedVideo.title);
    formData.append("description", editedVideo.description);

    if (imageFile) formData.append("imageFile", imageFile);
    if (videoFile) formData.append("videoFile", videoFile);

    try {
      await Axios.put(`/admin/updateVideo/${editedVideo._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchVideos();
      setEditingVideo(null);
    } catch (err) {
      setError("Failed to edit video.");
    }
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video._id}
            className="border rounded-lg p-4 shadow-md relative"
            onMouseEnter={() => setHoveredVideo(video._id)} // Set hovered video
            onMouseLeave={() => setHoveredVideo(null)} // Clear hovered video
          >
            {hoveredVideo === video._id ? (
              <video
                autoPlay
                loop
                // muted
                className="w-full h-48 object-cover"
                src={video.videoUrl}
              />
            ) : (
              <img
                src={video.Image}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
            )}
            <h2 className="text-lg font-semibold mt-2">{video.title}</h2>
            <p>{video.description}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleDelete(video._id)}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleEdit(video)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video editing modal */}
      {editingVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Edit Video</h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={editingVideo.title}
              onChange={(e) =>
                setEditingVideo({ ...editingVideo, title: e.target.value })
              }
              placeholder="Title"
            />
            <textarea
              className="w-full p-2 border rounded mb-2"
              value={editingVideo.description}
              onChange={(e) =>
                setEditingVideo({ ...editingVideo, description: e.target.value })
              }
              placeholder="Description"
            />
            <div className="mb-2">
              <label className="block text-sm font-bold mb-1">Thumbnail</label>
              <input
                type="file"
                accept="imageFile/*"
                onChange={(e) => setimageFile(e.target.files[0])}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-bold mb-1">Video</label>
              <input
                type="file"
                accept="VideoFile/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setEditingVideo(null)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => saveEdit(editingVideo)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageVideos;
