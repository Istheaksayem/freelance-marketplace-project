/* eslint-disable no-unused-vars */

import React from 'react';

import bannerImg from '../../assets/image.png'
import { Check } from 'lucide-react';
import { motion } from "framer-motion";


const Banner = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 text-white mt-2"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-lg">
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 leading-snug"
        >
          Job Board <span className="font-normal">and</span> <br />
          <span className="font-bold">Freelance Marketplace</span> <br />
          <span className="font-light">WordPress Theme</span>
        </motion.h1>

        Rating:
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block bg-yellow-100 text-yellow-700 font-medium px-4 py-1 rounded-full mb-4"
        >
          ⭐ 4.85 out of 5 stars based on 278 ratings
        </motion.div>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-200 mb-6"
        >
          Build a professional job board similar to{" "}
          <strong>Indeed</strong>, <strong>Monster</strong>, or{" "}
          <strong>LinkedIn</strong> – or a freelance marketplace like{" "}
          <strong>Upwork</strong> or <strong>Fiverr</strong>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center mb-6"
        >
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow transition">
            Buy Now
          </button>
          <button className="border border-green-600 text-green-700 bg-white font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition">
            Browse Demos
          </button>
        </motion.div>

        {/* Features */}
        <div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap gap-6 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Check className="text-green-400" size={18} /> One-Time Payment
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-400" size={18} /> Lifetime License
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

