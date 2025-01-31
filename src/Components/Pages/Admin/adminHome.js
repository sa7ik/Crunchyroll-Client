import React from "react";
import { Link } from "react-router-dom";

const adminHome = () => {
  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
        <div className="text-2xl font-bold p-4 border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/manage"
                className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-lg"
              >
                <i className="fa fa-film"></i>
                <span>Manage Videos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/upload"
                className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-lg"
              >
                <i className="fa fa-upload"></i>
                <span>Upload Video</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Panel</h1>
        <p>Click the links in the sidebar to manage or upload videos.</p>
      </div>
    </div>
  );
};

export default adminHome;
