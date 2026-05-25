
// function Navbar() {
//   return (
//     <div className='h-20 flex items-center w-full text-white'>
//         <div className='text-3xl pl-200 font-bold'>JobSync.</div>
//     </div>
//   )
// };

// export default Navbar;

// import { FaHome, FaSearch, FaBriefcase, FaUserTie, FaGlobe } from "react-icons/fa";

// function Navbar() {
//   return (
//     <nav className="bg-gradient-to-r from-[#916cff] to-[#3e0373] py-4 px-10 shadow-lg fixed w-full top-0 left-0 z-50">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
     
//         <div className="text-white text-3xl font-bold hover:text-[#0e0e0e] transform transition duration-300 hover:scale-105">
//           <span>JobSync.</span>
//         </div>
        
      
//         <div className="flex gap-8">
//           <a href="/" className="text-white text-lg font-semibold hover:text-[#151515] transform transition duration-300 hover:scale-105">
//             <FaHome className="inline-block mr-2" />
//             Home
//           </a>
//           <a href="#search" className="text-white text-lg font-semibold hover:text-[#1a1a1a] transform transition duration-300 hover:scale-105">
//             <FaSearch className="inline-block mr-2" />
//             Search Jobs
//           </a>
//           <a href="#jobs" className="text-white text-lg font-semibold hover:text-[#100f0f] transform transition duration-300 hover:scale-105">
//             <FaBriefcase className="inline-block mr-2" />
//             Jobs
//           </a>
//           <a href="#about" className="text-white text-lg font-semibold hover:text-[#151514] transform transition duration-300 hover:scale-105">
//             <FaUserTie className="inline-block mr-2" />
//             About
//           </a>
//           <a href="#contact" className="text-white text-lg font-semibold hover:text-[#19191a] transform transition duration-300 hover:scale-105">
//             <FaGlobe className="inline-block mr-2" />
//             Contact
//           </a>
//         </div>

       
//         <div>
//           <button className="py-2 px-6 bg-[#4833e9] text-white font-bold rounded-lg shadow-lg hover:bg-[#2626ff] focus:outline-none focus:ring-2 focus:ring-[#1b1b1b] transform transition duration-300 hover:scale-105 hover:shadow-xl">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { FaHome, FaSearch, FaBriefcase, FaUserTie, FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#916cff] to-[#3e0373] py-4 px-10 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Logo and Brand Title */}
        <div className="flex items-center text-white text-3xl font-bold transform transition duration-300 hover:scale-105">
          <div className="relative overflow-hidden rounded-full w-14 h-14 mr-3 transition-transform duration-300 hover:scale-110">
            <img
              src="https://www.shutterstock.com/image-vector/job-portals-vector-line-icon-260nw-597855803.jpg"
              alt="JobSync Logo"
              className="w-full h-full object-cover object-[75%_-60%] scale-[1.65] transition-transform duration-500 hover:scale-[1.75]"
            />
          </div>
          <span className="hover:text-[#0e0e0e]">JobSync.</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link to="/" className="text-white text-lg font-semibold hover:text-[#151515] transform transition duration-300 hover:scale-105">
            <FaHome className="inline-block mr-2" />
            Home
          </Link>
          <Link to="/#search" className="text-white text-lg font-semibold hover:text-[#1a1a1a] transform transition duration-300 hover:scale-105">
            <FaSearch className="inline-block mr-2" />
            Search Jobs
          </Link>
          <Link to="/#jobs" className="text-white text-lg font-semibold hover:text-[#100f0f] transform transition duration-300 hover:scale-105">
            <FaBriefcase className="inline-block mr-2" />
            Jobs
          </Link>
          <Link to="/Aboutus" className="text-white text-lg font-semibold hover:text-[#151514] transform transition duration-300 hover:scale-105">
            <FaUserTie className="inline-block mr-2" />
            About
          </Link>
          <Link to="/ContactUs" className="text-white text-lg font-semibold hover:text-[#19191a] transform transition duration-300 hover:scale-105">
            <FaGlobe className="inline-block mr-2" />
            Contact
          </Link>
          <Link  to="/Admin"  className="text-white text-lg font-semibold hover:text-[#19191a] transform transition duration-300 hover:scale-105">
          <FaUserTie className="inline-block mr-2" />
           Admin
          </Link>

        </div>

        {/* Sign-Up Button */}
        <div>
          <Link to="/signup">
            <button className="py-2 px-6 bg-[#4833e9] text-white font-bold rounded-lg shadow-lg hover:bg-[#2626ff] focus:outline-none focus:ring-2 focus:ring-[#1b1b1b] transform transition duration-300 hover:scale-105 hover:shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
} 

export default Navbar;
