// import React from 'react'
// import Crunchyroll from './Crunchyroll.png'
// import crown from './crown.png'
// import user from './user.png'
// import save from './save.png'
// import search from './search.png'
// import './Style.css'

// function Navbar() {
//   return (
//     <div>
//       <div className='main-nav'>
//         <div className="navbar">
//     <img 
//       src={Crunchyroll}
//       alt="Navbar logo" 
      
//       width="25" 
//       height="25"
//     />
//     <h1>Crunchyroll</h1>
//     </div>
//     <div className="navbar2">
//     <p>Browse<select></select></p>
//     <p>Games</p>
//     <p>News<select/></p>
//     </div>
//     <div className="navbar3">
//     <img 
//       src={crown}
//       alt="Navbar logo" 
      
//       width="25" 
//       height="25"
//     />
//     <p style={{ color: "#fab818" }}>
//   TRY FREE
//   <br />
//   <span style={{ color: "white" }}>PREMIUM</span>
// </p>
// <div className='navbar4'>
// <img 
//       src={search}
//       alt="Navbar logo" 
      
//       width="25" 
//       height="25"
//     />
//      <img 
//       src={save}
//       alt="Navbar logo" 
      
//       width="25" 
//       height="25"
//     />
//      <img 
//       src={user}
//       alt="Navbar logo" 
      
//       width="25" 
//       height="25"
//     />
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }
  

// export default Navbar

// import React from 'react';
// import Crunchyroll from './Crunchyroll.png';
// import crown from './crown.png';
// import user from './user.png';
// import save from './save.png';
// import search from './search.png';

// function Navbar() {
//   return (
//     <div className="flex items-center h-16 bg-gray-900 px-4">
//       {/* Logo and Title */}
//       <div className="flex items-center gap-2 w-1/4">
//         <img src={Crunchyroll} alt="Navbar logo" className="w-6 h-6" />
//         <h1 className="text-orange-500 text-lg font-bold hover:text-white">
//           Crunchyroll
//         </h1>
//       </div>

//       {/* Navigation Links */}
//       <div className="hidden sm:flex gap-6 items-center text-white w-1/2 text-sm">
//         <p className="flex items-center gap-1">
//           Browse
//           <select className="bg-gray-900 text-white border-none">
//             <option>Anime</option>
//             <option>Manga</option>
//           </select>
//         </p>
//         <p>Games</p>
//         <p className="flex items-center gap-1">
//           News
//           <select className="bg-gray-900 text-white border-none">
//             <option>Latest</option>
//             <option>Popular</option>
//           </select>
//         </p>
//       </div>

//       {/* Right-side Actions */}
//       <div className="flex items-center justify-end gap-6 w-1/4">
//         <div className="flex items-center gap-2">
//           <img src={crown} alt="Premium" className="w-6 h-6" />
//           <div className="text-xs">
//             <p className="text-yellow-500">TRY FREE</p>
//             <p>PREMIUM</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <img src={search} alt="Search" className="w-6 h-6" />
//           <img src={save} alt="Save" className="w-6 h-6" />
//           <img src={user} alt="User" className="w-6 h-6" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import Crunchyroll from './Crunchyroll.png';
import crown from './crown.png';
import user from './user.png';
import save from './save.png';
import search from './search.png';
import SideNav from './SideNav';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavVisible((prevState) => !prevState);
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
              <p>PREMIUM</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
           <Link to={'/search'}> <img src={search} alt="Search" className="w-6 h-6" /></Link>
            <Link to={'/Watchlist'}><img src={save} alt="Save" className="w-6 h-6" /></Link>
            {/* User Icon */}
            <img
              src={user}
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
