import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    requiredSkills: '',
    companyName: '',
    contactEmail: '',
  });

  const navigate = useNavigate(); // For redirecting to another page after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real-world scenario, you would submit this data to a server or API
    console.log('Form Data Submitted:', formData);

    // Store job data in localStorage for demo purposes
    localStorage.setItem('jobData', JSON.stringify(formData));

    // After successful form submission, redirect to the home page (or the main app page)
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Admin Register for Recruiters</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="jobTitle" className="block text-gray-700">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="jobDescription" className="block text-gray-700">Job Description</label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="4"
              required
            />
          </div>

          <div>
            <label htmlFor="requiredSkills" className="block text-gray-700">Required Skills</label>
            <input
              type="text"
              id="requiredSkills"
              name="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-gray-700">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-gray-700">Contact Email</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white p-2 rounded mt-4 hover:bg-purple-700"
          >
            Register Job Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
