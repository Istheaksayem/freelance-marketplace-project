import React, { use } from 'react';
import AllJobsCard from '../AllJobsCard/AllJobsCard';
import { motion } from "framer-motion";


const AllJobsData = ({allJobsPromise}) => {
    const allJobs =use(allJobsPromise)
    console.log(allJobs)
    return (
        <div>
              <motion.h1
                initial={{ x:200, opacity: 0, }}    
                animate={{ x:0, opacity: 1,  }}      
                transition={{ duration: 2 }}        
                className="text-4xl font-bold text-blue-600 text-center"
            >
               All jobs here
            </motion.h1>
             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   allJobs.map(allJob =><AllJobsCard
                   key={allJob._id}
                   allJob={allJob}
                   ></AllJobsCard>)
                }
            </div>
        </div>
    );
};

export default AllJobsData;