import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Freelance<span className="text-green-500">MarketPlace</span></h2>
          <p className="text-gray-400 text-sm mb-4">
            A professional platform to connect freelancers and clients around
            the world. Build your career or hire top talents with ease.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* For Clients */}
        <div>
          <h3 className="text-white font-semibold mb-3">For Clients</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500 transition">Post a Job</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Browse Freelancers</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Freelancer Dashboard</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Support</a></li>
          </ul>
        </div>

        {/* For Freelancers */}
        <div>
          <h3 className="text-white font-semibold mb-3">For Freelancers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500 transition">Find Work</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Create Profile</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Project Categories</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Get Certified</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get the latest freelance tips & job updates.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-green-500 font-medium">FreelanceMarketPlace</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
