import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Footer/Footer";
import play from '../Navbar/play.png';
import save from '../Navbar/save.png';
import { useVideoContext } from "../../Context/VideoContext";

function Home() {

  const { addToWatchlist,data } = useVideoContext();
  console.log(data);
    
    const navigate = useNavigate();
    const images = [
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/CurationAssets/The%20Do-Over%20Damsel%20Conquers%20the%20Dragon%20Emperor/SEASON%201/ULTRA-WIDE/DoOverDamsel-S1-KV1-UW-LTR.png",
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b5621ff1277ed6ad1006b0c6f14900bb.jpg",
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/5525651c53b49243de6835134651192c.jpg",
      "https://hindustantimes.com/ht-img/img/2024/09/02/1600x900/dragon_ball_1725270695675_1725270695977.jpg"
    ];

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true 
      };
      
      const handleCardClick = (videoId) => {
        navigate(`/video/${videoId}`);
      };

    const buttonLabels = ["Buy Clothes", "Buy Footwear", "Buy Toys"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className=''>
        <Navbar/>
         <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        transition: "background-image 0.5s ease-in-out",
      }}
    ></div>
      
    <div className="h-100 bg-black pt-10">
  <div className="w-3/4 m-auto">
    <h1 className="text-white text-left font-bold">Free to Watch In India</h1>
    <p className="text-left" style={{ color: '#ff640a' }}>Fantastic Free Anime</p>

    <Slider {...settings}>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="relative bg-black cursor-pointer group"
          onClick={() => item.url && navigate(`/video/${item.id}`)}
        >
          {/* Card Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-60 h-60 object-contain"
          />

          {/* Hover Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            {/* Details */}
            <h2 className="text-lg font-bold text-white">{item.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{item.description}</p>
            <p className="text-sm text-orange-500 mt-2">Rating: {item.rating}</p>

            {/* Actions */}
            <div className="mt-4 flex space-x-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  // Add to Watchlist logic here
                  console.log(`Add ${item.title} to Watchlist`);
                  addToWatchlist(item);
                }}
              >
                <img src={save} alt="Premium" className="w-6 h-6" />
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  console.log(`Play ${item.title}`);
                }}
              >
               <img src={play} alt="Premium" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

      <div>
        <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=2700/CurationAssets/Shangri-La%20Frontier/SEASON%202/MARKETING%20BANNER/ShangriLaFrontier-S2C1-KV0-Banner-2100x700-EN.png"/>
      </div>
     <div className="h-100 bg-black pt-10">
  <div className="w-3/4 m-auto">
    <h1 className="text-white text-left font-bold">October 2024 Seasonal Sampler</h1>
    <p className="text-left" style={{ color: '#ff640a' }}>Check out the first few episodes of these new shows for free!</p>

    <Slider {...settings}>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="relative bg-black cursor-pointer group"
          onClick={() => item.url && navigate(`/video/${item.id}`)}
        >
          {/* Card Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-60 h-60 object-contain"
          />

          {/* Hover Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            {/* Details */}
            <h2 className="text-lg font-bold text-white">{item.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{item.description}</p>
            <p className="text-sm text-orange-500 mt-2">Rating: {item.rating}</p>

            {/* Actions */}
            <div className="mt-4 flex space-x-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  // Add to Watchlist logic here
                  console.log(`Add ${item.title} to Watchlist`);
                  addToWatchlist(item);
                }}
              >
                <img src={save} alt="Premium" className="w-6 h-6" />
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  console.log(`Play ${item.title}`);
                }}
              >
               <img src={play} alt="Premium" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
<div className="h-100 bg-black pt-10">
  <div className="w-3/4 m-auto">
    <h1 className="text-white text-left font-bold">Exclusive in India!</h1>
    <p className="text-left" style={{ color: '#ff640a' }}>Check out these anime only available on Crunchyroll!</p>

    <Slider {...settings}>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="relative bg-black cursor-pointer group"
          onClick={() => item.url && navigate(`/video/${item.id}`)}
        >
          {/* Card Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-60 h-60 object-contain"
          />

          {/* Hover Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            {/* Details */}
            <h2 className="text-lg font-bold text-white">{item.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{item.description}</p>
            <p className="text-sm text-orange-500 mt-2">Rating: {item.rating}</p>

            {/* Actions */}
            <div className="mt-4 flex space-x-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  // Add to Watchlist logic here
                  console.log(`Add ${item.title} to Watchlist`);
                  addToWatchlist(item);
                }}
              >
                <img src={save} alt="Premium" className="w-6 h-6" />
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  console.log(`Play ${item.title}`);
                }}
              >
               <img src={play} alt="Premium" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
   <div className="h-100 bg-black pt-10">
  <div className="w-3/4 m-auto">
    <h1 className="text-white text-left font-bold">Top Picks for You</h1>

    <Slider {...settings}>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="relative bg-black cursor-pointer group"
          onClick={() => item.url && navigate(`/video/${item.id}`)}
        >
          {/* Card Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-60 h-60 object-contain"
          />

          {/* Hover Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            {/* Details */}
            <h2 className="text-lg font-bold text-white">{item.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{item.description}</p>
            <p className="text-sm text-orange-500 mt-2">Rating: {item.rating}</p>

            {/* Actions */}
            <div className="mt-4 flex space-x-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  // Add to Watchlist logic here
                  console.log(`Add ${item.title} to Watchlist`);
                  addToWatchlist(item);
                }}
              >
                <img src={save} alt="Premium" className="w-6 h-6" />
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigating when clicking the button
                  console.log(`Play ${item.title}`);
                }}
              >
               <img src={play} alt="Premium" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
    
    <h1 className=" bg-black text-white text-left font-bold">Today</h1>
    <hr/>
    <div style={{
  width: '100%',
  height: '450px',
  backgroundColor: '#333', 
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',    
  gap: '10px',                           
  padding: '20px'
}}
>

  {[...Array(8)].map((_, index) => (
    <div key={index} style={{
      backgroundColor: 'black', 
      borderRadius: '8px',         
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      color: 'white',
      fontWeight: 'bold',
      overflow: 'hidden',         
      position: 'relative',    
      boxSizing: 'border-box'     
    }}>
      <img 
        src="https://hindustantimes.com/ht-img/img/2024/09/02/1600x900/dragon_ball_1725270695675_1725270695977.jpg" 
        alt="Dragon Ball"
        style={{
          height: '100%',           
          width: '25%',            
          objectFit: 'cover',       
          borderRadius: '8px',      
          marginRight: '10px'       
        }}
      />
      <p style={{ flexGrow: 1 }}>In This Corner (and Other Corners) of the World</p> {/* Text next to image */}
    </div>
  ))}
</div>
<h1 className=" bg-black text-white text-left font-bold">Yesterday</h1>
<hr/>
<div style={{
  width: '100%',
  height: '450px',
  backgroundColor: '#333', 
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',    
  gap: '10px',                           
  padding: '20px'
}}
>

  {[...Array(4)].map((_, index) => (
    <div key={index} style={{
      backgroundColor: 'black', 
      borderRadius: '8px',         
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      color: 'white',
      fontWeight: 'bold',
      overflow: 'hidden',         
      position: 'relative',    
      boxSizing: 'border-box'     
    }}>
      <img 
        src="https://hindustantimes.com/ht-img/img/2024/09/02/1600x900/dragon_ball_1725270695675_1725270695977.jpg" 
        alt="Dragon Ball"
        style={{
          height: '100%',           
          width: '25%',            
          objectFit: 'cover',       
          borderRadius: '8px',      
          marginRight: '10px'       
        }}
      />
      <p style={{ flexGrow: 1 }}>In This Corner (and Other Corners) of the World</p>
    </div>
  ))}
</div>
<div className="w-full h-full">
  <button
    className="h-full bg-orange-500 text-white text-lg rounded cursor-pointer"
    style={{ width: '90%' }} // Inline style for 90% width
  >
    SHOW MORE
  </button>
</div>

  <Footer/>
    </div>
    
  )
}

export default Home