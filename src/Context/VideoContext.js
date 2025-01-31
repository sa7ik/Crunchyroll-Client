import React, { createContext, useContext, useState, useEffect } from "react";
import { Axios } from "../Components/MainRouter";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSearchParams } from "react-router-dom";

const VideoContext = createContext();

// Custom hook to use the VideoContext
export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null); 
  const [clientSecret, setClientSecret] = useState(null);
  const [selectedPremium, setSelectedPremium] = useState(null);
  // const [userData, setUserData] = useState(null);
  const [amount,setAmount]=useState(0)
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const sessionId = queryParams.get('session_id');
  console.log("uu",user);
  
 
  const userId = Cookies.get("user")
 
  
  const [videos, setVideos] = useState([]); // Backend videos
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [watchlist, setWatchlist] = useState([]); // Watchlist

 
  

  useEffect(() => {
    const loginuser=localStorage.getItem('user')
    setUser(loginuser);
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await Axios.get("/user/getUsers");
      setUsers(response.data); // Update state with fetched users
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err.message);
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addVideo = (video) => {
    setVideos((prevVideos) => [
      ...prevVideos,
      { ...video, id: (prevVideos.length + 1).toString() },
    ]);
  };

  const handle=()=>{
    console.log("jdfsh")
    handleSelectedPremium(amount)
    navigate('/paymentStripe')
  }

  const handleSelectedPremium = (price) => {
    console.log("sh",price);
    
    const createPaymentIntent = async () => {
      try {
        setLoading(true); // Start loading
        const response = await Axios.post("/user/create-payment-intent", {
          amount: price,
          userEmail: user,
        });

        console.log("Payment Intent Response:", response);

        setClientSecret(response.data.clientSecret); // Update context
        // setUser(response.data.primeUser); // Update user data in context
        navigate("/paymentStripe")
      } catch (error) {
        console.error("Payment Intent Error:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    createPaymentIntent()
   
    
  };

  // Fetch videos from the backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await Axios.get("/user/allVideo"); // Adjust the endpoint as per your backend
        setVideos(response.data.videos); // Assuming videos are in response.data.videos
      } catch (err) {
        setError("Failed to fetch videos.");
      } 
    };

    fetchVideos();
  }, []);

  
    const fetchWatchlist = async (userId) => {
      setLoading(true);
      
      try {
        const response = await Axios.get(`/user/getWatchList/${userId}`);  // Adjust the endpoint as needed
       
        
        setWatchlist(response.data.Videos); // Assuming the response structure is { watchlist: [...] }
       
      } catch (err) {
        console.error("Error fetching watchlist:", err.message);
        setError("Failed to fetch watchlist.");
      } 
    };

   useEffect(()=>{
     
    fetchWatchlist(userId)
    
   },[userId])

  const addToWatchlist = async (item) => {
    try {
      const response = await Axios.post("/user/addToWatchList", {userId,videoId:item._id}); // Adjust endpoint as needed
      
      setWatchlist(response.data.watchlist); // Assuming updated watchlist is returned
      fetchWatchlist(userId)
    } catch (err) {
      console.error("Failed to add to watchlist:", err.message);
    }
  };

  // Remove from watchlist
  
  const removeFromWatchlist = async (id) => {
    try {
      const response = await Axios.delete(`/user/deleteVideo/${userId}/${id}`); // Adjust endpoint as needed

      fetchWatchlist(userId)
       // Assuming updated watchlist is returned
    } catch (err) {
      console.error("Failed to remove from watchlist:", err.message);
    }

  };
 
  return (
    <VideoContext.Provider
      value={{
        user,
        addVideo,
        setUser,
        setError,
        setLoading,
        videos,
        loading,
        error,
        watchlist,
        addToWatchlist,
      fetchWatchlist,
        removeFromWatchlist,
        sessionId,
        amount,
        handle,
        setAmount,
        clientSecret,
        handleSelectedPremium
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};