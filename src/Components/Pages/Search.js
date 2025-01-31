import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideoContext } from '../../Context/VideoContext';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

function Search() {
  const navigate = useNavigate();
  const { videos } = useVideoContext();
  const [searchTerm, setSearchTerm] = useState(""); // Store the search input

  // Filter data based on searchTerm
  const filteredData = videos.filter((item) =>
    item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="mt-16 py-10 flex flex-col items-center">
        {/* Search Input */}
        <form className="w-3/4 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-2xl p-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        {/* Show results only after searchTerm is not empty */}
        {searchTerm && (
          <div className="w-full max-w-2xl mt-6">
            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
                    onClick={() => navigate(`/video/${item._id}`)} // Navigates to video page
                  >
                    {/* Image */}
                    <img
                      src={item.Image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />

                    {/* Title */}
                    <h2 className="text-white text-lg font-bold text-center mb-2">{item.title}</h2>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center">No results found</p>
            )}
          </div>
        )}

        {/* Message before search */}
        {!searchTerm && (
          <p className="text-gray-400 text-center mt-6">Start typing to search...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Search;
