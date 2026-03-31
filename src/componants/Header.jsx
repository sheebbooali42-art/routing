 import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaUserCircle } from "react-icons/fa";
import { MdHome, MdMovie } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          MovieApp 🎬
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">

          <a href="#" className="flex items-center gap-1 hover:text-yellow-400">
            <MdHome /> Home
          </a>

          <a href="#" className="flex items-center gap-1 hover:text-yellow-400">
            <MdMovie /> Movies
          </a>

          {/* Search */}
          <div className="flex items-center bg-gray-800 px-2 py-1 rounded-lg">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          {/* Profile */}
          <FaUserCircle className="text-2xl cursor-pointer hover:text-yellow-400" />
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">

          <a href="#" className="flex items-center gap-2 py-2">
            <MdHome /> Home
          </a>

          <a href="#" className="flex items-center gap-2 py-2">
            <MdMovie /> Movies
          </a>

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-700 px-2 py-1 rounded-lg mt-2">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 w-full"
            />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 py-3">
            <FaUserCircle /> Profile
          </div>
        </div>
      )}
    </header>
  );
}