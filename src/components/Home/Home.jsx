import React from 'react';
import Banner from '../Banner/Banner';
import LatestJobs from '../latestJobs/LatestJobs';

const latestJobsPromise =fetch('http://localhost:3000/latest-jobs')
.then(res =>res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestJobs latestJobsPromise={latestJobsPromise}></LatestJobs>
        </div>
    );
};

export default Home;