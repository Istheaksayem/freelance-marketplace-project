import React from 'react';
import { Link } from 'react-router';


const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <img
        src="https://i.ibb.co.com/whypQYgR/retro-computer-desk-arrangement.jpg"
        alt="404 Illustration"
        className="w-full max-w-md mb-6 animate-bounce"
      />
      <h1 className="text-6xl font-bold text-red-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-500 text-center max-w-md mb-6">
       
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          Go Home
        </Link>
        <Link
          to="/allJobs"
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Browse Jobs
        </Link>
      </div>
    </div>
  );
};

export default Error404;
