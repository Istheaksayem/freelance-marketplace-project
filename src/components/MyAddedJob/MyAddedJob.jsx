/* eslint-disable no-unused-vars */
import React, { use, useEffect, useState } from 'react';

import { motion } from "framer-motion";
import { AuthContext } from '../../Context/AuthContext';

const MyAddedJobs = () => {
  const { user } = use(AuthContext)
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myAddedJobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data));
    }
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center text-green-600 mb-6"
      >
        My Added Jobs ({jobs.length})
      </motion.h1>

    
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">You haven’t added any jobs yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div key={job._id} className="bg-white rounded-xl shadow-md p-5  hover:shadow-lg transition">
              <img src={job.coverImage} alt={job.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600 mt-1">Category: {job.category}</p>
              <p className="text-gray-500 text-sm mt-1">Posted By: {job.postedBy}</p>
              <p className="text-gray-400 text-sm mt-2">{new Date(job.postedDate).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedJobs;
