 import React from "react";
import { FaFilm, FaStar, FaSearch, FaUsers } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-gray-900 mt-10 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Our Services 🚀
        </h1>

        <p className="text-gray-300 mb-10">
          We provide the best movie discovery experience
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <FaFilm className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Movie Database</h3>
            <p className="text-gray-400 text-sm">
              Access thousands of movies easily.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <FaStar className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Ratings</h3>
            <p className="text-gray-400 text-sm">
              Check real user ratings instantly.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <FaSearch className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Smart Search</h3>
            <p className="text-gray-400 text-sm">
              Find movies quickly and easily.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <FaUsers className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-gray-400 text-sm">
              Connect with movie lovers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}