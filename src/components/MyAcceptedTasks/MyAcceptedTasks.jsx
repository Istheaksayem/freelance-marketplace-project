import React, { useEffect, useState } from 'react';

const MyAcceptedTasks = () => {
    const [acceptedJobs, setAcceptedJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/accepted-jobs')
            .then(res => res.json())
            .then(data => setAcceptedJobs(data))
            .catch(err => console.error(err));
    }, []);

    if (acceptedJobs.length === 0) {
        return <p className="text-center mt-10 text-gray-500">No accepted tasks yet.</p>;
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 p-4">
            <h2 className="text-3xl font-bold text-center mb-6">My Accepted Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {acceptedJobs.map((job) => (
                    <div key={job._id} className="card bg-base-100 shadow-md">
                        <figure>
                            <img
                                src={job.coverImage}
                                alt={job.title}
                                className="w-full h-48 object-cover rounded-2xl"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-gray-600">{job.summary}</p>
                            <p className="text-sm text-gray-500 mt-2">Category: {job.category}</p>
                            <p className="text-sm text-gray-500">Posted By: {job.postedBy}</p>
                            <p className="text-sm text-gray-400">Accepted on: {job.postedDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAcceptedTasks;