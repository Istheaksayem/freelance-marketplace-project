/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const MyAcceptedTasks = () => {
    const [acceptedJobs, setAcceptedJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/accepted-jobs')
            .then(res => res.json())
            .then(data => setAcceptedJobs(data))
            .catch(err => console.error(err));
    }, []);

    const handleRemove = async (id) => {
        setAcceptedJobs(prevJobs => prevJobs.filter(job => job._id !== id));

        // Remove from Database
        try {
            await fetch(`http://localhost:3000/accepted-jobs/${id}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    }


    if (acceptedJobs.length === 0) {
        return <p className="text-center mt-10 text-gray-500">No accepted tasks yet.</p>;
    }

    return (
        <div className="max-w-5xl mx-auto mt-6 p-4">
            <motion.h1
                initial={{ y: -200, opacity: 0, }}
                animate={{ y: 0, opacity: 1, }}
                transition={{ duration: 2 }}
                className="text-4xl font-bold text-green-600 text-center mb-5"
            >
                My Accepted Tasks
            </motion.h1>
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
                        <div className='flex justify-between mt-4'>
                            <button
                                onClick={() => handleRemove(job._id)}
                                className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md flex items-center gap-1'
                            >DONE

                            </button>
                            <button
                                onClick={() => handleRemove(job._id)}
                                className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-1'
                            >CANCEL

                            </button>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAcceptedTasks;