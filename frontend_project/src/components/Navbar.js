import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">My Project</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition duration-300">About</Link>
          <Link to="/test" className="text-white hover:text-gray-300 transition duration-300">Test</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
