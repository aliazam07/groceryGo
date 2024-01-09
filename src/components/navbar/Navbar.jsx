import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Icon */}
        <div className="text-white cursor-pointer lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="text-white text-lg font-bold">
          YourLogo<span className="text-blue-500">.com</span>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border rounded focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Search
          </button>
        </div>

        {/* Join/Login Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-white">Join</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;