// import Navbar from './components/Navbar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header'
// import SearchBar from './components/SearchBar'
// import JobCard from './components/JobCard'
// import jobData from "./JobDummyData"
// import SignUp from './components/Pages/Signup';
// // import { collection, query, getDocs, orderBy } from 'firebase/firestore'
// // import db from './firebase.config'
// import './App.css'
// // import { useState, useEffect } from 'react'


// function App() {
//   // const [jobs, setJobs] = useState([]);

//   // const fetchJobs = async () => {
//   //   const tempJobs  = [];
//   //   const jobsRef = query(collection(db, "jobs"));
//   //   const q= query((jobsRef, orderBy("postedOn", "desc")));
//   //   const req = await getDocs(q);
//   //   req.forEach((job) => {
//   //     // console.log(doc.id, " => ", doc.data());
//   //     tempJobs.push({
//   //       ...job.data(),
//   //       id: job.id,
//   //       postedOn:job.data().postedOn.toDate()
//   //   })
//   //   });
//   // setJobs(tempJobs);
//   // }

//   // useEffect(() => {
//   //   fetchJobs();
//   // }, [])


//   return (
//   <div>
//        <Navbar/>
//        <Header/>
//        <SearchBar/>
//        {jobData.map((job) =>(
//         <JobCard key={job.id} {...job}/>
//        ))}
//        {/* {jobs.map((job) =>(
//         <JobCard key={job.id} {...job}/>
//        ))} */}
//   </div>
//   )
// }

// export default App


import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import jobData from './JobDummyData';
import SignUp from './components/Pages/Signup';
import SignIn from './components/Pages/Signin';
import AboutUs from './components/Pages/Aboutus'; // Import AboutUs component
import ContactUs from './components/Pages/ContactUs';
import Admin from './components/Pages/Admin';
import AdminRegister from './components/Pages/AdminRegister'; // Import AdminRegister component

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar stays visible on all routes */}
        <Navbar />
        
        {/* Define Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <SearchBar />
                {jobData.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </>
            }
          />

          {/* Sign In and Sign Up Pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* About Us and Contact Us Pages */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          {/* Admin Pages */}
          <Route path="/admin" element={<Admin />} />  {/* Admin Dashboard */}
          <Route path="/admin/register" element={<AdminRegister />} />  {/* Admin Register page */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
