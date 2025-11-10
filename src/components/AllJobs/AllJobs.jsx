import React from 'react';
import AllJobsData from '../AllJobsData/AllJobsData';

const allJobsPromise =fetch('http://localhost:3000/allJobs')
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