import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const JobDetails = () => {
  const { id } = useParams(); 
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/allJobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  if (!job) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md mt-10 mb-10">
      <img
        src={job.coverImage}
        alt={job.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-700 mb-1">Category: {job.category}</p>
      <p className="text-gray-700 mb-1">Posted By: {job.postedBy}</p>
      <p className="text-gray-600 mt-3">{job.summary}</p>
    </div>
  );
};

export default JobDetails;