import React from "react";
import { FaPlay } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-yellow-400 py-16 text-center">
      
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Explore Movies? 🎬
        </h2>

        {/* Description */}
        <p className="text-gray-800 mb-6">
          Join now and discover thousands of movies, trending shows, and top-rated content instantly.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            <FaPlay /> Get Started
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Learn More
          </button>

        </div>
      </div>
    </section>
  );
}