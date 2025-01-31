import React, { useContext, useState } from "react";
import Crunchyroll from "../Navbar/Crunchyroll.png";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../MainRouter";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { useVideoContext } from "../../Context/VideoContext";

function LogIn() {
  const{setUser,user}=useVideoContext()
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Logging in...");

    try {
      const response = await Axios.post("/user/Login", formValue);
      // toast.success("Login successful!", { id: loadingToast });
      console.log("Login Response:", response.data);
      let user = response.data.userData
      await setUser(user)
      localStorage.setItem('user', JSON.stringify(user));

      await Cookies.set("user",user._id)


      // Redirect user after successful login
      navigate("/"); // Change '/dashboard' to the route you want
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage, { id: loadingToast });
      console.error("Login Error:", error);
    } 
  };

  return (
    <div>
      <div className="top-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center px-4 z-50">
        <img src={Crunchyroll} alt="Navbar logo" className="w-6 h-6" />
        <h1 className="text-orange-500 text-lg font-bold hover:text-white">
          Crunchyroll
        </h1>
      </div>
      <div className="w-full h-screen bg-black text-white flex flex-col justify-start items-center pt-8">
        <h1 className="text-white text-xl font-extrabold mt-4 hover:text-gray-300">
          Log In
        </h1>
        <div className="bg-gray-800 text-white w-96 p-6 rounded-lg shadow-lg mt-8">
          <p className="text-center mb-6">
            Classic anime jams, epic movies, and endless shows. They’re all
            here!
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="Email or Phone Number"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-[#ef4323] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="text-white font-bold py-2 px-4 rounded text-black mt-8 border border-white hover:bg-gray-700"
              style={{ backgroundColor: "#ef4323" }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "LOG IN"}
            </button>
          </form>
        </div>
        <p style={{ paddingTop: "15px" }}>
          No account?{" "}
          <Link to={"/SignUp"}>
            <span style={{ color: "#ef4323" }}>CREATE ONE</span>
          </Link>
        </p>
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

export default LogIn;
