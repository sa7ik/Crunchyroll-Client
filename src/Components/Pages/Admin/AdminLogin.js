// import React, {useState} from 'react'
// import Crunchyroll from '../../Navbar/Crunchyroll.png';
// import { Link, useNavigate } from 'react-router-dom';


// function AdminLog() {
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//     const navigate=useNavigate();
//     const [formValue,setFormValue]=useState({
//         name:"",
//         email:"",
//         password:"",
//       })

      

//   return (
//     <div>
//          <div className="top-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center px-4 z-50">
//           <img src={Crunchyroll} alt="Navbar logo" className="w-6 h-6" />
//           <h1 className="text-orange-500 text-lg font-bold hover:text-white">
//             Crunchyroll
//           </h1>
//         </div>
//         <div className="w-full h-screen bg-black text-white flex flex-col justify-start items-center pt-8">
//   <h1 className="text-white text-xl font-extrabold mt-4 hover:text-gray-300">
//   Admin
//   </h1>
//       <div className="bg-gray-800 text-white w-96 p-6 rounded-lg shadow-lg mt-8">
        
//         <p className="text-center mb-6">Add new classic anime</p>
//         <form className="flex flex-col gap-4">
//         <input
//   type="text"
//   placeholder="Email"
//   className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
// />
// <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//         </form>
//       </div>
//       <button
//   type="submit"
//   className="text-white font-bold py-2 px-4 rounded text-black mt-8 border border-white hover:bg-gray-700"
//   style={{ backgroundColor: '#ef4323' }}
// >
//   LOG IN 
// </button>
//   <p className="text-sm text-gray-400 m-0 p-0" style={{ paddingTop: '100px' }}>
//     Terms of Use | Privacy Policy | Cookie Consent Tool
//   </p>
// </div>
// <div className="bg-black text-center py-4 m-0 p-0">
//   <p className="text-lg text-gray-400 m-0 p-0">SONY PICTURES | © Crunchyroll, LLC</p>
// </div>
//     </div>
//   )
// }

// export default AdminLog

import React, { useState } from "react";
import { Axios } from "../../MainRouter";
import Crunchyroll from '../../Navbar/Crunchyroll.png';
import { useNavigate } from "react-router-dom";

function AdminLog() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    ADMIN_EMAIL: "",
    ADMIN_PASSWORD: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend for admin login
      const response = await Axios.post("/admin/adminLogin", // Adjust the URL based on your backend endpoint
        {
          email: formValue.email,
          password: formValue.password,
        },
        {
          withCredentials: true, // Include cookies in requests
        }
      );

      if (response.status === 200) {
        alert("Login successful!");
        setIsSubmit(true);

        // Redirect to admin dashboard or another page
        navigate("/adminHome"); // Adjust the route based on your app
      }
    } catch (error) {
      if (error.response) {
        // Handle backend validation errors
        setFormErrors({ serverError: error.response.data.message });
      } else {
        setFormErrors({ serverError: "Something went wrong. Please try again." });
      }
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="top-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center px-4 z-50">
        <img src={Crunchyroll} alt="Navbar logo" className="w-6 h-6" />
        <h1 className="text-orange-500 text-lg font-bold hover:text-white">
          Crunchyroll
        </h1>
      </div>

      {/* Admin Login */}
      <div className="w-full h-screen bg-black text-white flex flex-col justify-start items-center pt-8">
        <h1 className="text-white text-xl font-extrabold mt-4 hover:text-gray-300">
          Admin
        </h1>
        <div className="bg-gray-800 text-white w-96 p-6 rounded-lg shadow-lg mt-8">
          <p className="text-center mb-6">Admin Login</p>

          {/* Display server error */}
          {formErrors.serverError && (
            <p className="text-red-500 text-sm text-center">{formErrors.serverError}</p>
          )}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="text-white font-bold py-2 px-4 rounded text-black mt-8 border border-white hover:bg-gray-700"
              style={{ backgroundColor: "#ef4323" }}
            >
              LOG IN
            </button>
          </form>
        </div>
        <p
          className="text-sm text-gray-400 m-0 p-0"
          style={{ paddingTop: "100px" }}
        >
          Terms of Use | Privacy Policy | Cookie Consent Tool
        </p>
      </div>
      <div className="bg-black text-center py-4 m-0 p-0">
        <p className="text-lg text-gray-400 m-0 p-0">
          SONY PICTURES | © Crunchyroll, LLC
        </p>
      </div>
    </div>
  );
}

export default AdminLog;
