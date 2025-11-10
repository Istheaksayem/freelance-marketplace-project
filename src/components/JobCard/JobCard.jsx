/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";


const JobCard = ({ job }) => {
    const { coverImage,title,category } = job
    return (
        <motion.div
      whileHover={{
        scale: 1.05,                 
        y: -8,                       
        boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",  
      }}
    //   whileTap={{ scale: 0.97 }}    
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
      className="card bg-base-100 shadow-sm rounded-xl cursor-pointer"
    >
      <figure className="px-10 pt-10">
        <motion.img
          src={coverImage}
          alt=""
          className="rounded-xl h-48 w-full object-cover"
          whileHover={{ scale: 1.1 }}     
          transition={{ duration: 0.4 }}
        />
      </figure>
      <div className="card-body">
        <motion.h2
          className="card-title font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="card-title font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {category}
        </motion.p>

        <div className="card-actions w-full mt-3">
          <button className="btn btn-primary w-full">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
    );
};

export default JobCard;