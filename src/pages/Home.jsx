 import React from "react";
import { FaPlay, FaSearch } from "react-icons/fa";


export default function Home() {
  
  return (
    <>
        <section className="relative h-[85vh] mt-5 flex items-center text-white bg-gray-900">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
        alt="movies"
        className="absolute w-full h-full object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Your Next Favorite Movie 🎬
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          Explore trending movies, top-rated shows, and hidden gems all in one place.
        </p>

        {/* Search */}
        <div className="flex items-center bg-white text-black rounded-lg overflow-hidden w-full max-w-md mb-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="px-3 py-2 w-full outline-none"
          />
          <button className="bg-yellow-400 px-4 py-2">
            <FaSearch />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-lg hover:bg-yellow-500">
            <FaPlay /> Watch Now
          </button>
        </div>


      </div>
    </section>
    </>

  );
}