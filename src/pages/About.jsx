 import React from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function AboutHero() {
  return (
    
    <section className="bg-gray-900 text-white py-20">

      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Platform 🎥
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          We are passionate about movies and entertainment. Our platform helps you 
          discover trending films, explore ratings, and stay updated with the latest releases.
        </p>

        <button className="mt-6 flex items-center gap-2 mx-auto bg-yellow-400 text-black px-5 py-2 rounded-lg hover:bg-yellow-500">
          <FaInfoCircle /> Learn More
        </button>
      </div>

    </section>
  );
}