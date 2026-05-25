
// function Header() {
//   return (
//     <div className='mt-10 flex flex-col gap-5 items-center justify-center text-white'>
//         <h1 className='text-5xl font-bold'>Your ideal job awaits, start the search now</h1>
//         <p className='text-xl'>Get latest job openings that best suits you</p>
//     </div>
//   )
// }

// export default Header


// function Header() {
//   return (
//     <div className="mt-16 flex flex-col gap-6 items-center justify-center text-white bg-gradient-to-r from-[#916cff] to-[#3e0373] py-16 px-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
//       <h1 className="text-5xl font-bold text-center leading-tight animate__animated animate__fadeIn animate__delay-1s">
//         Your Ideal Job Awaits, Start the Search Now
//       </h1>
//       <p className="text-xl text-center opacity-80 animate__animated animate__fadeIn animate__delay-2s">
//         Get the latest job openings that best suit you and your skills.
//       </p>
//       <button className="mt-6 py-3 px-8 bg-[#F39C12] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#F1C40F] focus:outline-none focus:ring-2 focus:ring-[#F39C12] transform transition duration-300 hover:scale-105 hover:shadow-lg">
//         Start Searching
//       </button>
//     </div>
//   );
// }

// export default Header;


function Header() {
  return (
    <div className="header mt-16 flex flex-col gap-6 items-center justify-center text-white py-16 px-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <h1 className="text-5xl font-bold text-center leading-tight animate__animated animate__fadeIn animate__delay-1s">
        Your Ideal Job Awaits, Start the Search Now
      </h1>
      <p className="text-xl text-center opacity-80 animate__animated animate__fadeIn animate__delay-2s">
        Get the latest job openings that best suit you and your skills.
      </p>
      <button className="mt-6 py-3 px-8 bg-[#040404] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#18a928] focus:outline-none focus:ring-2 focus:ring-[#F39C12] transform transition duration-300 hover:scale-105 hover:shadow-lg">
        Start Searching
      </button>
    </div>
  );
}

export default Header;

