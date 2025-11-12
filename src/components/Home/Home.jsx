import React from 'react';
import Banner from '../Banner/Banner';
import LatestJobs from '../latestJobs/LatestJobs';

const latestJobsPromise =fetch('https://freelance-marketplace-server-zeta.vercel.app/latest-jobs')
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