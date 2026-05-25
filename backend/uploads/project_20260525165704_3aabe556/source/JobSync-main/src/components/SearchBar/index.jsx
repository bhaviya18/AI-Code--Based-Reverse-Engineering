

// function SearchBar() {
//   return (
//     <div className="flex gap-4 my-10 justify-center px-10">
//         <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//             <option value="" disabled hidden selected>Job Role</option>
//             <option value="iOS Developer">iOS Developer</option>
//             <option value="Frontend Developer">Frontend Developer</option>
//             <option value="Backend Developer">Backend Developer</option>
//             <option value="Android Developer">Android Developer</option>
//             <option value="Developer Advocate">Developer Advocate</option>
//         </select>

//         <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//         <option value="" disabled selected hidden>Job Type</option>
//         <option value="Full Time">Full Time</option>
//         <option value="Part Time">Part Time</option>
//         <option value="Contract">Contract</option>
// </select>

// <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//         <option value="" disabled selected hidden>Location</option>
//         <option value="Remote">Remote</option>
//         <option value="In-Office">In-Office</option>
//         <option value="Hybrid">Hybrid</option>
// </select>

// <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold'>
//         <option value="" disabled selected hidden>Experience</option>
//         <option value="Fresher">Fresher</option>
//         <option value="Junior Level">Junior Level</option>
//         <option value="Mid Level">Mid Level</option>
//         <option value="Senior Level">Senior Level</option>
// </select>

// <button className='w-48 bg-blue-500  font-bold text-white py-3 rounded-md'>Search</button>
// </div>
//   )
// };

// export default SearchBar;


import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaUserTie, FaGlobe } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <div className="relative w-64">
        <FaBriefcase className="absolute left-3 top-4 text-gray-500" />
        <select className="w-full py-3 pl-10 pr-4 bg-zinc-200 font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-zinc-300 transition ease-out duration-200">
          <option value="" disabled hidden selected>Job Role</option>
          <option value="iOS Developer">iOS Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Developer Advocate">Developer Advocate</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Machine Learning Engineer">Machine Learning Engineer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="UI/Ux Designer">UI/UX Designer</option>
          <option value="Cloud Engineer">Cloud Engineer</option>
          <option value="Blockchain Developer">Blockchain Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Security Engineer">Security Engineer</option>
          

        </select>
      </div>

      <div className="relative w-64">
        <FaUserTie className="absolute left-3 top-4 text-gray-500" />
        <select className="w-full py-3 pl-10 pr-4 bg-zinc-200 font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-zinc-300 transition ease-out duration-200">
          <option value="" disabled hidden selected>Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="relative w-64">
        <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-500" />
        <select className="w-full py-3 pl-10 pr-4 bg-zinc-200 font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-zinc-300 transition ease-out duration-200">
          <option value="" disabled hidden selected>Location</option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="relative w-64">
        <FaGlobe className="absolute left-3 top-4 text-gray-500" />
        <select className="w-full py-3 pl-10 pr-4 bg-zinc-200 font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-zinc-300 transition ease-out duration-200">
          <option value="" disabled hidden selected>Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
      </div>

      <button className="w-48 bg-blue-500 font-bold text-white py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-out duration-200 flex items-center justify-center gap-2">
        <FaSearch className="text-white" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
