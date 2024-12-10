import React from 'react'
import Crunchyroll from '../Navbar/Crunchyroll.png';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  return (
    <div >
         <div className="top-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center px-4 z-50">
          <img src={Crunchyroll} alt="Navbar logo" className="w-6 h-6" />
          <h1 className="text-orange-500 text-lg font-bold hover:text-white">
            Crunchyroll
          </h1>
        </div>
        <div className="w-full h-vh bg-black text-white flex flex-col justify-start items-center pt-8">
  <h1 className="text-white text-xl font-extrabold mt-4 hover:text-gray-300">
    Create Account
  </h1>
      <div className="bg-gray-800 text-white w-96 p-6 rounded-lg shadow-lg mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to the home of anime fandom!
        </h1>
        <p className="text-center mb-6">Let’s start by creating an account.</p>
        <form className="flex flex-col gap-4">
        <input
  type="text"
  placeholder="Invalid email or phone number"
  className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
/>
<input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-orange-500 border-gray-500 rounded"
            />
            <p>I want all the latest Crunchyroll info, offers, and news.All
                communications are subject to our <span style={{color:"#ef4323"}}>Privacy Policy</span>.
                Opt out anytime
            </p>
          </label>
        
        </form>
      </div>
      <button
  type="submit"
  className="text-white font-bold py-2 px-4 rounded text-black mt-8 border border-white hover:bg-gray-700"
  style={{ backgroundColor: '#ef4323' }}
>
  CREATE ACCOUNT
</button>

          <p style={{paddingTop:'50px'}}>Already have an account? <Link to={'/LogIn'}><span style={{color:'#ef4323'}}>LOG IN</span></Link></p>
          <p className="text-sm text-gray-400"
           style={{paddingTop:'100px'}}
          >Terms of Use | Privacy Policy | Cookie Consent Tool</p>
    </div>
    <div className="bg-black text-center py-4 ">
        <p className="text-lg text-gray-400">SONY PICTURES | © Crunchyroll, LLC</p>
      </div>
    </div>
  )
}

export default SignUp