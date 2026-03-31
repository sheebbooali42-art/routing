import React from "react";
import { FaFilm, FaStar, FaSearch, FaMobileAlt } from "react-icons/fa";

export default function Features() {
  return (
    <section className="bg-gray-100 py-16">
      
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Features 🚀
        </h2>
        <p className="text-gray-600 mb-10">
          Everything you need to explore and enjoy movies بسهولة
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaFilm className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Huge Collection</h3>
            <p className="text-gray-600 text-sm">
              Access thousands of movies across all genres.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaStar className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Top Ratings</h3>
            <p className="text-gray-600 text-sm">
              Discover top-rated movies with user reviews.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaSearch className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Fast Search</h3>
            <p className="text-gray-600 text-sm">
              Find movies instantly with smart search.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaMobileAlt className="text-3xl text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Responsive</h3>
            <p className="text-gray-600 text-sm">
              Works perfectly on mobile, tablet, and desktop.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
} 