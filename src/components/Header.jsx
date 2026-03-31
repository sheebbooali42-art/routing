import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaUserCircle } from "react-icons/fa";
import { MdHome, MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[green] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          Movies 🎬
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">

          <Link to="/" className="flex items-center gap-1 hover:text-red-400">
            <MdHome /> Home
          </Link>

          <Link to="/about" className="flex items-center gap-1 hover:text-red-400">
            <MdMovie /> About
          </Link>


          <Link to="/contact" className="flex items-center gap-1 hover:text-red-400">
            <MdMovie /> Contact
          </Link>

          
          <Link to="/services" className="flex items-center gap-1 hover:text-red-400">
            <MdMovie /> Services
          </Link>
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

          <Link to ="#" className="flex items-center gap-2 py-2">
            <MdHome /> Home
          </Link>

          <Link to ="#" className="flex items-center gap-2 py-2">
            <MdMovie /> Movies
          </Link>

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