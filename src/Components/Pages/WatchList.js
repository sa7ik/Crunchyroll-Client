import React, { useEffect } from "react";
import { useVideoContext } from "../../Context/VideoContext";
import Footer from "../Footer/Footer";
import Cookies from 'js-cookie';

const Watchlist = () => {
  const loginuser=localStorage.getItem('user')
  const userId=Cookies.get("user")
const { watchlist, removeFromWatchlist, loading, error ,fetchWatchlist} = useVideoContext();
console.log(watchlist);

useEffect(()=>{
  fetchWatchlist(userId)
  
},[])


  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    // return <div className="text-center text-red-500">{error}</div>;
  }
  const handledelete=async(id)=>{
    try {
     await removeFromWatchlist(id)
     
    } catch (error) {
      console.log(error);
      
    }

  }

  
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>
      {loginuser&&watchlist?.length === 0 ? (
        <p>No items in your watchlist yet!</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {loginuser&&watchlist.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-800 p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={item.Image}
                alt={item.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.description}</p>
              {/* <p className="text-sm text-orange-500">Rating: {item.rating}</p> */}

              {/* Delete Button */}
              <div>
                <button
                  onClick={() => handledelete(item._id)}
                  className="top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <i className="fa fa-trash-o text-2xl text-gray-500 hover:text-red-500 cursor-pointer"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>

  );


};

export default Watchlist;
