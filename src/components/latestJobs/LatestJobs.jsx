import React, { use } from 'react';
import JobCard from '../JobCard/JobCard';
import { motion } from "framer-motion";

const LatestJobs = ({ latestJobsPromise }) => {
    const jobs = use(latestJobsPromise)
    console.log(jobs)
    return (
        <div>
            <motion.h1
                initial={{ x:200, opacity: 0, }}    
                animate={{ x:0, opacity: 1,  }}      
                transition={{ duration: 2 }}        
                className="text-4xl font-bold text-blue-600 text-center"
            >
                Recent job
            </motion.h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <JobCard
                        key={job._id}
                        job={job}
                    ></JobCard>)
                }
            </div>
        </div>
    );
};

export default LatestJobs;