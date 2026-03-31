import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        
        {/* Logo / About */}
        {/* <div>
          <h1 className="text-xl font-bold text-yellow-400 mb-2">
            MovieApp 🎬
          </h1>
          <p className="text-sm">
            Discover the latest movies, ratings, and trending shows all in one place.
          </p>
        </div> */}

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Movies</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
            <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
            <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
            <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-3 text-sm">
        © {new Date().getFullYear()} MovieApp. All rights reserved.
      </div>
    </footer>
  );
}