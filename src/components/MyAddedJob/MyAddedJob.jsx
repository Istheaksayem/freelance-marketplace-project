/* eslint-disable no-unused-vars */
import React, { use, useEffect, useState } from 'react';

import { motion } from "framer-motion";
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router';


const MyAddedJobs = () => {
    const [sortOrder, setSortOrder] = useState("desc");
    const { user } = use(AuthContext)
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://freelance-marketplace-server-zeta.vercel.app/myAddedJobs?email=${user.email}`)
                .then(res => res.json())
                .then(data => setJobs(data));
        }
    }, [user?.email]);

    useEffect(() => {
        fetch(`https://freelance-marketplace-server-zeta.vercel.app/allJobs?sort=${sortOrder}`)
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, [sortOrder]);

    return (
        <div className="max-w-6xl mx-auto p-5">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold text-center text-green-600 mb-6"
            >
                <h1 className='text-3xl font-bold text-green-600'>
                    My Added Jobs ({jobs.length})
                </h1>
                <div className="mt-3 md:mt-0">
                    <label className="font-semibold text-gray-700 mr-2">Sort by:</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                    </select>
                </div>

            </motion.div>



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
                            <p className="text-gray-500 text-sm mt-1">Summary: {job.summary}</p>
                            <p className="text-gray-400 text-sm mt-2">{new Date(job.postedDate).toLocaleString()}</p>
                            <Link to={`/update/${job._id}`}>

                                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg mt-3 hover:bg-blue-600">
                                    Update
                                </button>
                            </Link>
                        </div>
                    ))}


                </div>

            )}

        </div >
    );
};

export default MyAddedJobs;
