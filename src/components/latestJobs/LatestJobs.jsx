import React, { use } from 'react';

const LatestJobs = ({latestJobsPromise}) => {
    const jobs =use(latestJobsPromise)
    console.log(jobs)
    return (
        <div>
            
        </div>
    );
};

export default LatestJobs;