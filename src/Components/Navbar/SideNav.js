import React from 'react'
import Navbar from './navbar'
import { Link, useNavigate } from 'react-router-dom';

function SideNav() {
    return (
      <div className="absolute top-16 right-0 w-[300px] h-screen bg-black text-white p-4 z-50">
        <div className="mb-4 hover:bg-gray-800">
          <Link to={"/SignUp"}>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p>Join for free or go Premium</p>
          </Link>
        </div>
        <div className="mb-4 hover:bg-gray-800">
          <Link to={"/LogIn"}>
          <h1 className="text-2xl font-bold">Log In</h1>
          <p>Already Joined Crunchyroll? Welcome back.</p>
          </Link>
        </div>
        <div className="mb-4 hover:bg-gray-800">
          <Link to={"/Admin"}>
          <h1 className="text-2xl font-bold">Admin</h1>
          </Link>
        </div>
        <div className='hover:bg-gray-800'>
          <h1 className="text-2xl font-bold">Gift Card</h1>
          <p>Have a gift Card? Redeem it here.</p>
        </div>
      </div>
    );
  }

export default SideNav