// import React from 'react'
// import "./Footer.css"
// import crown from '../Navbar/crown.png';


// const Footer = () => {
//     return (
//     <div>
//           <div className='mainf'>
//         <div className='fot-1'>
//         <h1 className="text-white text-centre font-bold">Navigation</h1>
//         <p>Browse Popular</p>
//         <p>Browse Simulcasts</p>
//         <p>Release Calendar</p>
//         <p>News</p>
//         <p>Games</p>
//         </div>
//         <div className=' fot-2'>
//         <h1 className="text-white text-centre font-bold">Connect With Us</h1>
//         <p>Youtube</p>
//         <p>Facebook</p>
//         <p>X</p>
//         <p>Instagram</p>
//         <p>TikTok</p>
//         </div>
//         <div className='fot-3'>
//         <h1 className="text-white text-centre font-bold">Crunchyroll</h1>
//         <img 
//       src={crown}
//       alt="Navbar logo" 
      
//       width="25" 
//       height="25"
//     />
//     <span>Gadhfif</span>
//         <p>Clothing & Fashion</p>
//         <p>About</p>
//         <p>Help Center</p>
//         <p>Terms of Use</p>
//         <p>Privacy Policy</p>
//         <p>AdChoices</p>
//         <p>Do Not Sell or Share My Personal Information</p>
//         <p>Cookie Consent Tool</p>
//         <p>Press Inquiries</p>
//         <p>Get the Apps</p>
//         <p>Redeem Gift Card</p>
//         <p>Jobs</p>
//         </div>
//         <div className='for-4'>
//         <h1 className="text-white text-centre font-bold">Account</h1>
//         <p>Create Account</p>
//         <p>Login</p>
//         </div>
//         </div>
//         <div className='under'>
//             <p className='text-left bg-black text-white'>SONY PICTURES | © Crunchyroll, LLC</p>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import crown from '../Navbar/crown.png';

const Footer = () => {
  return (
    <div className="bg-black text-white mt-8">
      {/* Footer main section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-8">
        {/* Navigation */}
        <div>
          <h1 className="font-bold text-lg mb-4">Navigation</h1>
          <p className="mb-2">Browse Popular</p>
          <p className="mb-2">Browse Simulcasts</p>
          <p className="mb-2">Release Calendar</p>
          <p className="mb-2">News</p>
          <p className="mb-2">Games</p>
        </div>
        {/* Connect With Us */}
        <div>
          <h1 className="font-bold text-lg mb-4">Connect With Us</h1>
          <p className="mb-2">YouTube</p>
          <p className="mb-2">Facebook</p>
          <p className="mb-2">X</p>
          <p className="mb-2">Instagram</p>
          <p className="mb-2">TikTok</p>
        </div>
        {/* Crunchyroll Info */}
        <div>
          <h1 className="font-bold text-lg mb-4">Crunchyroll</h1>
          <div className="flex items-center mb-2">
            <img src={crown} alt="Crown logo" width="25" height="25" />
             <span className="ml-2">Start a Free Trial</span>
          </div>
          <p className="mb-2">Clothing & Fashion</p>
          <p className="mb-2">About</p>
          <p className="mb-2">Help Center</p>
          <p className="mb-2">Terms of Use</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">AdChoices</p>
          <p className="mb-2">Do Not Sell or Share My Personal Information</p>
          <p className="mb-2">Cookie Consent Tool</p>
          <p className="mb-2">Press Inquiries</p>
          <p className="mb-2">Get the Apps</p>
          <p className="mb-2">Redeem Gift Card</p>
          <p className="mb-2">Jobs</p>
        </div>
        {/* Account */}
        <div>
          <h1 className="font-bold text-lg mb-4">Account</h1>
          <p className="mb-2">Create Account</p>
          <p className="mb-2">Login</p>
        </div>
      </div>
      {/* Footer bottom section */}
      <div className="bg-black text-center py-4">
        <p className="text-sm text-gray-400">SONY PICTURES | © Crunchyroll, LLC</p>
      </div>
    </div>
  );
};

export default Footer;
