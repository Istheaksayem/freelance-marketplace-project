import React from 'react';
import AllJobsData from '../AllJobsData/AllJobsData';

const allJobsPromise =fetch('https://freelance-marketplace-server-zeta.vercel.app/allJobs')
.then(res =>res.json())
const AllJobs = () => {
    return (
        <div>
            <AllJobsData allJobsPromise={allJobsPromise}>

            </AllJobsData>
        </div>
    );
};

export default AllJobs;