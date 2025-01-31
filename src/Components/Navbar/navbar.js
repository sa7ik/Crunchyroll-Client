import React, { useState } from "react";
import Crunchyroll from "./Crunchyroll.png";
import crown from "./crown.png";
import contact from './contact.png';
import save from "./save.png";
import search from "./search.png";
import SideNav from "./SideNav";
import { useVideoContext } from "../../Context/VideoContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { user,setUser} = useVideoContext();
  console.log("user",user);
  const loginuser = JSON.parse(localStorage.getItem('user'));
  console.log("luser",loginuser);
  
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const navigate = useNavigate();

  // Toggle Side Navigation
  const toggleSideNav = () => {
    setIsSideNavVisible((prevState) => !prevState);
  };

  // Logout Functionality
  const handleLogout = () => {
    // Clear authentication token (cookies or localStorage)
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("token");
    // localStorage.removeItem("primeToken")
    document.cookie = "premiumToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Clear user state
    setUser(null); // Reset the user context or state
localStorage.removeItem('user')
    // Redirect to login page
    navigate("/Login");
  };
  

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white flex items-center px-4 z-50">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 w-1/4">
          <img src={Crunchyroll} alt="Navbar logo" className="w-6 h-6" />
          <h1 className="text-orange-500 text-lg font-bold hover:text-white">
            Crunchyroll
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex gap-6 items-center text-white w-1/2 text-sm">
          <p className="flex items-center gap-1">
            Browse
            <select className="bg-gray-900 text-white border-none">
              <option>Anime</option>
              <option>Manga</option>
            </select>
          </p>
          <p>Games</p>
          <p className="flex items-center gap-1">
            News
            <select className="bg-gray-900 text-white border-none">
              <option>Latest</option>
              <option>Popular</option>
            </select>
          </p>
        </div>

        {/* Right-side Actions */}
        <div className="flex items-center justify-end gap-6 w-1/4">
          <div className="flex items-center gap-2">
            <img src={crown} alt="Premium" className="w-6 h-6" />
            <div className="text-xs">
              <p className="text-yellow-500">TRY FREE</p>
              <Link to={'/plan'}><p>PREMIUM</p></Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/search"}>
              <img src={search} alt="Search" className="w-6 h-6" />
            </Link>
            <Link to={"/Watchlist"}>
              <img src={save} alt="Save" className="w-6 h-6" />
            </Link>

            {/* Logout Button */}
            {loginuser && (
          <button
            onClick={handleLogout}
            title="Logout"
            className="flex items-center gap-1 bg-gray-700 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
          >
            <i className="fa fa-sign-out-alt"></i>
            <span className="text-sm">Logout</span>
          </button>
        )}

            {/* User Icon */}
            <img
              src={contact}
              alt="User"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleSideNav}
            />
          </div>
        </div>
      </div>

      {/* Conditionally Render SideNav */}
      {isSideNavVisible && <SideNav />}
    </div>
  );
}

export default Navbar;
